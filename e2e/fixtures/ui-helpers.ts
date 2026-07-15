import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

import { mockFineractApi, clearClientStorage } from './api-mocks';
import { submitLogin } from './login-helpers';

export const DEFAULT_CREDENTIALS = { username: 'mifos', password: 'password' };

export const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  laptop: { width: 1280, height: 720 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
} as const;

/**
 * Logs in and lands on an authenticated shell route.
 * Uses mocked Fineract API unless PLAYWRIGHT_USE_LIVE_API=true.
 */
export async function loginToApp(page: Page): Promise<void> {
  await clearClientStorage(page);

  if (process.env.PLAYWRIGHT_USE_LIVE_API !== 'true') {
    await mockFineractApi(page);
  }

  await page.goto('/login');
  await submitLogin(page, DEFAULT_CREDENTIALS.username, DEFAULT_CREDENTIALS.password);
  await expect(page).toHaveURL(/\/home/, { timeout: 30_000 });
  await expect(page.locator('mifosx-shell')).toBeVisible({ timeout: 30_000 });
}

/** Asserts a locator's bounding box lies fully inside the viewport. */
export async function assertInViewport(page: Page, locator: Locator, label: string): Promise<void> {
  await expect(locator, `${label} should be visible`).toBeVisible();
  const box = await locator.boundingBox();
  const viewport = page.viewportSize();
  expect(box, `${label} should have a bounding box`).not.toBeNull();
  expect(viewport, `${label} viewport should be set`).not.toBeNull();

  if (!box || !viewport) {
    return;
  }

  const right = box.x + box.width;
  const bottom = box.y + box.height;
  const tolerance = 2;

  expect(box.x, `${label} should not clip left`).toBeGreaterThanOrEqual(-tolerance);
  expect(box.y, `${label} should not clip top`).toBeGreaterThanOrEqual(-tolerance);
  expect(right, `${label} should not clip right`).toBeLessThanOrEqual(viewport.width + tolerance);
  expect(bottom, `${label} should not clip bottom`).toBeLessThanOrEqual(viewport.height + tolerance);
}

/** Returns true when document width exceeds viewport (horizontal scroll / overflow). */
export async function hasHorizontalOverflow(page: Page): Promise<boolean> {
  return page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
}

/** Opens a Material menu by trigger label and waits for the overlay panel. */
export async function openMenuByLabel(page: Page, label: string | RegExp): Promise<Locator> {
  const trigger = page.locator('#mifosx-toolbar button.tab-link').filter({ hasText: label });
  await trigger.first().scrollIntoViewIfNeeded();
  await trigger.first().click();

  const panel = page.locator('.cdk-overlay-container .mat-mdc-menu-panel, .cdk-overlay-container mat-menu-panel');
  await expect(panel.last()).toBeVisible({ timeout: 10_000 });
  return panel.last();
}

/** Clicks the sidenav hamburger when available. */
export async function clickSidenavToggle(page: Page): Promise<void> {
  const toggle = page.locator('#mifosx-toolbar button[matTooltip="Toggle Hide/Open"]');
  await expect(toggle).toBeVisible();
  await toggle.click();
}

/** Clicks sidenav collapse chevron when visible (desktop). */
export async function clickSidenavCollapse(page: Page): Promise<void> {
  const collapse = page.locator('#mifosx-toolbar button[matTooltip="Toggle Collapse"]');
  await expect(collapse.first()).toBeVisible();
  await collapse.first().click();
}

/** Expands compact sidenav to full width when collapse control is visible. */
export async function ensureSidenavExpanded(page: Page): Promise<void> {
  const sidenav = page.locator('mat-sidenav.sidebar-panel');
  const className = await sidenav.getAttribute('class');
  if (className?.includes('sidebar-compact')) {
    await clickSidenavCollapse(page);
    await expect(sidenav).toHaveClass(/sidebar-full/);
  }
}

/** Waits for route change and shell to remain mounted. */
export async function expectRoutedShell(page: Page, urlPattern: RegExp): Promise<void> {
  await expect(page).toHaveURL(urlPattern, { timeout: 30_000 });
  await expect(page.locator('mifosx-shell')).toBeVisible();
}
