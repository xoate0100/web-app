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

const emptyPage = { pageItems: [], totalFilteredRecords: 0 };

function jsonResponse(body: unknown) {
  return {
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(body),
  };
}

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
      await route.fulfill(jsonResponse(mockCredentials));
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
    await route.fulfill(jsonResponse([]));
  });

  await page.route('**/fineract-provider/api/**', async (route) => {
    if (route.request().method() !== 'GET') {
      await route.continue();
      return;
    }

    const url = route.request().url();
    if (url.includes('/clients') || url.includes('/groups') || url.includes('/centers') || url.includes('/users')) {
      await route.fulfill(jsonResponse(emptyPage));
      return;
    }

    if (url.includes('/runreports') || url.includes('/reports')) {
      await route.fulfill(jsonResponse([]));
      return;
    }

    await route.fulfill(jsonResponse([]));
  });
}

/**
 * Clears persisted auth state before a test scenario.
 */
export async function clearClientStorage(page: Page): Promise<void> {
  await page.context().clearCookies();
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}
