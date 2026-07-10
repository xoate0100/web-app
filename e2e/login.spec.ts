import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL(/\/login/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[formcontrolname="username"]', 'invalid');
    await page.fill('input[formcontrolname="password"]', 'invalid');
    await page.click('button[type="submit"]');
    await expect(page.locator('mat-error')).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[formcontrolname="username"]', 'mifos');
    await page.fill('input[formcontrolname="password"]', 'password');
    await page.click('button[type="submit"]');
    await expect(page).not.toHaveURL(/\/login/);
  });
});
