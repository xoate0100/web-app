import type { Page } from '@playwright/test';

/** Mock credentials returned by Fineract `/authentication`. */
export const mockCredentials = {
  authenticated: true,
  base64EncodedAuthenticationKey: 'bWlmb3M6cGFzc3dvcmQ=',
  officeId: 1,
  officeName: 'Head Office',
  userId: 1,
  username: 'mifos',
  permissions: ['ALL_FUNCTIONS'],
  roles: [],
  shouldRenewPassword: false,
  isTwoFactorAuthenticationRequired: false,
};

/**
 * Intercepts Fineract API calls so e2e tests run without an external backend.
 */
export async function mockFineractApi(page: Page): Promise<void> {
  await page.route('**/authentication', async (route) => {
    if (route.request().method() !== 'POST') {
      await route.continue();
      return;
    }

    let body: { username?: string; password?: string } = {};
    try {
      body = route.request().postDataJSON();
    } catch {
      body = {};
    }

    if (body.username === 'mifos' && body.password === 'password') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockCredentials),
      });
      return;
    }

    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({
        developerMessage: 'Invalid authentication details',
        httpStatusCode: '401',
        defaultUserMessage: 'Invalid authentication details',
        errors: [{ developerMessage: 'Invalid authentication details', defaultUserMessage: 'Invalid User Details. Please try again!' }],
      }),
    });
  });

  await page.route('**/notifications**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([]),
    });
  });
}

/**
 * Clears persisted auth state between tests.
 */
export async function clearClientStorage(page: Page): Promise<void> {
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}
