import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * Types into an Angular Material reactive form control so validation updates.
 */
async function typeIntoFormControl(page: Page, selector: string, value: string): Promise<void> {
  const input = page.locator(selector);
  await input.click();
  await input.clear();
  await input.pressSequentially(value, { delay: 30 });
  await input.blur();
}

/**
 * Fills Angular Material reactive form controls so validation state updates.
 */
export async function fillLoginForm(page: Page, username: string, password: string): Promise<void> {
  await expect(page.locator('#login-form')).toBeVisible();

  await typeIntoFormControl(page, '#login-form input[formcontrolname="username"]', username);
  await typeIntoFormControl(page, '#login-form input[formcontrolname="password"]', password);

  const loginButton = page.locator('#login-form button.login-button').first();
  await expect(loginButton).toBeEnabled();
}

/**
 * Completes the login flow with the given credentials.
 */
export async function submitLogin(page: Page, username: string, password: string): Promise<void> {
  await fillLoginForm(page, username, password);
  await page.locator('#login-form button.login-button').first().click();
}
