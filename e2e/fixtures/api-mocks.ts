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

  await page.route('**/twofactor**', async (route) => {
    if (route.request().method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([]),
      });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ tokenLiveTimeInSec: 300 }),
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
    try {
      indexedDB.deleteDatabase('mifosXMfaVault');
    } catch {
      // Ignore — not all browsers expose IndexedDB during init.
    }
  });
}

/**
 * Seeds the demo MFA IndexedDB vault with an enabled TOTP secret.
 */
export async function seedDemoTotp(
  page: Page,
  options: { username: string; secret: string; tenantId?: string }
): Promise<void> {
  const tenantId = options.tenantId ?? 'default';
  await page.evaluate(
    async ({ username, secret, tenantId: tenant }) => {
      await new Promise<void>((resolve) => {
        const del = indexedDB.deleteDatabase('mifosXMfaVault');
        del.onsuccess = () => resolve();
        del.onerror = () => resolve();
        del.onblocked = () => resolve();
      });

      await new Promise<void>((resolve, reject) => {
        const open = indexedDB.open('mifosXMfaVault', 1);
        open.onupgradeneeded = () => {
          const db = open.result;
          if (!db.objectStoreNames.contains('accounts')) {
            db.createObjectStore('accounts', { keyPath: 'key' });
          }
        };
        open.onsuccess = () => {
          const db = open.result;
          const tx = db.transaction('accounts', 'readwrite');
          tx.objectStore('accounts').put({
            key: `${tenant}::${username.toLowerCase()}`,
            username,
            tenantId: tenant,
            totpSecret: secret,
            totpEnabled: true,
            passkeys: [],
            passkeyPublicKeys: {}
          });
          tx.oncomplete = () => resolve();
          tx.onerror = () => reject(tx.error ?? new Error('Failed to seed MFA vault'));
        };
        open.onerror = () => reject(open.error ?? new Error('Failed to open MFA vault'));
      });
    },
    { username: options.username, secret: options.secret, tenantId }
  );
}
