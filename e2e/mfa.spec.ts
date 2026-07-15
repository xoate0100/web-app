import { test, expect } from '@playwright/test';
import { TOTP, Secret } from 'otpauth';

import { clearClientStorage, mockFineractApi, seedDemoTotp } from './fixtures/api-mocks';
import { submitLogin } from './fixtures/login-helpers';

const DEMO_SECRET = 'JBSWY3DPEHPK3PXP';

function currentTotpCode(secretBase32: string): string {
  const totp = new TOTP({
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: Secret.fromBase32(secretBase32)
  });
  return totp.generate();
}

test.describe('MFA (TOTP)', () => {
  test.beforeEach(async ({ page }) => {
    await clearClientStorage(page);
    await mockFineractApi(page);
  });

  test('should challenge for TOTP after password when authenticator is enrolled', async ({ page }) => {
    await page.goto('/login');
    await seedDemoTotp(page, { username: 'mifos', secret: DEMO_SECRET });

    await submitLogin(page, 'mifos', 'password');

    await expect(page.locator('mifosx-two-factor-authentication')).toBeVisible();
    const codeInput = page.locator('mifosx-two-factor-authentication input[formcontrolname="code"]');
    await expect(codeInput).toBeVisible();

    await codeInput.fill(currentTotpCode(DEMO_SECRET));
    await page.getByRole('button', { name: 'Verify' }).click();

    await expect(page).toHaveURL(/\/home/);
    await expect(page.locator('mifosx-shell')).toBeVisible();
  });

  test('should reject an invalid TOTP code', async ({ page }) => {
    await page.goto('/login');
    await seedDemoTotp(page, { username: 'mifos', secret: DEMO_SECRET });

    await submitLogin(page, 'mifos', 'password');

    await expect(page.locator('mifosx-two-factor-authentication')).toBeVisible();
    const codeInput = page.locator('mifosx-two-factor-authentication input[formcontrolname="code"]');
    await expect(codeInput).toBeVisible();

    await codeInput.fill('000000');
    await page.getByRole('button', { name: 'Verify' }).click();

    await expect(page.locator('mifosx-two-factor-authentication .mfa-error')).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });
});
