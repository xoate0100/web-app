import { test, expect } from '@playwright/test';

import { clearClientStorage, mockFineractApi } from './fixtures/api-mocks';
import { submitLogin } from './fixtures/login-helpers';

test.describe('Application shell', () => {
  test.beforeEach(async ({ page }) => {
    await clearClientStorage(page);
    await mockFineractApi(page);
  });

  test('should render the app root after login', async ({ page }) => {
    await page.goto('/login');
    await submitLogin(page, 'mifos', 'password');
    await expect(page).toHaveURL(/\/home/);
    await expect(page.locator('mifosx-web-app')).toBeVisible();
    await expect(page.locator('mifosx-shell')).toBeVisible();
  });
});
