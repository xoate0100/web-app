import { test, expect } from '@playwright/test';

import { clearClientStorage, mockFineractApi } from './fixtures/api-mocks';
import { fillLoginForm, submitLogin } from './fixtures/login-helpers';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await clearClientStorage(page);
    await mockFineractApi(page);
  });

  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator('#login-form')).toBeVisible();
    await expect(page.locator('#login-form input[formcontrolname="username"]')).toBeVisible();
    await expect(page.locator('#login-form input[formcontrolname="password"]')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await submitLogin(page, 'invalid', 'invalid');
    await expect(page.getByText('Invalid User Details. Please try again!')).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await submitLogin(page, 'mifos', 'password');
    await expect(page).toHaveURL(/\/home/);
    await expect(page.locator('mifosx-shell')).toBeVisible();
  });
});
