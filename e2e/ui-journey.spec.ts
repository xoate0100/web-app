import { test, expect } from '@playwright/test';

import {
  assertInViewport,
  clickSidenavCollapse,
  clickSidenavToggle,
  ensureSidenavExpanded,
  expectRoutedShell,
  hasHorizontalOverflow,
  loginToApp,
  openMenuByLabel,
  VIEWPORTS,
} from './fixtures/ui-helpers';

test.describe('UI/UX journey stress tests', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(120_000);
    await loginToApp(page);
  });

  test('shell renders without horizontal page overflow on desktop', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');
    await expect(page.locator('mifosx-shell')).toBeVisible();
    expect(await hasHorizontalOverflow(page)).toBe(false);
  });

  test('toolbar stays in viewport across breakpoints', async ({ page }) => {
    await page.goto('/home', { waitUntil: 'domcontentloaded' });

    for (const [name, size] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(size);
      await expect(page.locator('#mifosx-toolbar')).toBeVisible();
      await assertInViewport(page, page.locator('#mifosx-toolbar'), `toolbar (${name})`);
    }
  });

  test('institution menu opens in viewport with reachable items', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);

    const institutionTrigger = page.locator('#mifosx-toolbar button.tab-link').filter({ hasText: 'Institution' });
    await assertInViewport(page, institutionTrigger.first(), 'institution toolbar tab');

    const panel = await openMenuByLabel(page, 'Institution');
    await assertInViewport(page, panel, 'institution menu');

    for (const item of ['Clients', 'Groups', 'Centers']) {
      const menuItem = panel.getByRole('menuitem', { name: item });
      await expect(menuItem).toBeVisible();
      await assertInViewport(page, menuItem, `institution menu item: ${item}`);
    }
  });

  test('reports admin and self-service menus open in viewport', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');

    const menus: Array<{ trigger: string; items: string[] }> = [
      { trigger: 'Reports', items: ['All', 'Clients', 'Loans', 'Savings'] },
      { trigger: 'Admin', items: ['Users', 'Organization', 'System', 'Products'] },
      { trigger: 'Self Service', items: ['User Management', 'App Configuration', 'Task Management'] },
    ];

    for (const menu of menus) {
      const panel = await openMenuByLabel(page, menu.trigger);
      await assertInViewport(page, panel, `${menu.trigger} menu`);
      for (const item of menu.items) {
        const menuItem = panel.getByRole('menuitem', { name: item });
        await expect(menuItem).toBeVisible();
        await assertInViewport(page, menuItem, `${menu.trigger} item: ${item}`);
      }
      await page.keyboard.press('Escape');
    }
  });

  test('user application menu opens in viewport', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');

    await page.locator('#mifosx-toolbar button.img-button').click();
    const panel = page.getByRole('menu').last();
    await expect(panel).toBeVisible();
    await assertInViewport(page, panel, 'application user menu');

    for (const item of ['Help', 'Profile', 'Settings', 'Sign Out']) {
      const menuItem = panel.getByRole('menuitem', { name: item });
      await expect(menuItem).toBeVisible();
      await assertInViewport(page, menuItem, `application menu item: ${item}`);
    }
  });

  test('sidenav drawer toggles on desktop', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');
    await ensureSidenavExpanded(page);

    const sidenav = page.locator('mat-sidenav.sidebar-panel');
    await expect(sidenav).toBeVisible();

    const initiallyOpen = await sidenav.evaluate((el) => el.classList.contains('mat-drawer-opened'));
    await clickSidenavToggle(page);
    await page.waitForTimeout(300);
    const afterToggle = await sidenav.evaluate((el) => el.classList.contains('mat-drawer-opened'));
    expect(afterToggle).not.toBe(initiallyOpen);
  });

  test('sidenav collapse control works on desktop', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');

    const sidenav = page.locator('mat-sidenav.sidebar-panel');
    await expect(sidenav).toHaveClass(/sidebar-compact|sidebar-full/);

    await clickSidenavCollapse(page);
    await page.waitForTimeout(200);
    const classAfter = await sidenav.getAttribute('class');
    expect(classAfter).toMatch(/sidebar-compact|sidebar-full/);

    if (classAfter?.includes('sidebar-compact')) {
      await expect(page.locator('mifosx-sidenav button[matTooltip="Settings"]')).toBeVisible();
      await expect(page.locator('mifosx-sidenav button[matTooltip="Sign Out"]')).toBeVisible();
    }
  });

  test('mobile sidenav can be opened and closed', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/home');

    const sidenav = page.locator('mat-sidenav.sidebar-panel');
    const toggle = page.locator('#mifosx-toolbar button[matTooltip="Toggle Hide/Open"]');

    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(sidenav).toHaveClass(/mat-drawer-opened/);
    await page.keyboard.press('Escape');
  });

  test('institution menu is reachable on tablet via overflow menu', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.tablet);
    await page.goto('/home');

    const panel = await openMenuByLabel(page, 'Institution');
    await assertInViewport(page, panel, 'institution menu (tablet)');

    const clients = panel.getByRole('menuitem', { name: 'Clients' });
    await expect(clients).toBeVisible();
    await clients.click();
    await expectRoutedShell(page, /\/clients/);
  });

  test('sidenav primary navigation routes resolve', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');
    await ensureSidenavExpanded(page);

    const routes: Array<{ selector: string; pattern: RegExp }> = [
      { selector: 'mat-list-item[matTooltip="Dashboard"]', pattern: /\/dashboard/ },
      { selector: 'mat-list-item[matTooltip="Navigation"]', pattern: /\/navigation/ },
      { selector: 'mat-list-item[matTooltip="Checker Inbox and Tasks"]', pattern: /\/checker-inbox-and-tasks/ },
      { selector: 'mat-list-item[matTooltip="Notifications"]', pattern: /\/notifications/ },
      { selector: 'mat-list-item[matTooltip="Chart Of Accounts"]', pattern: /\/accounting\/chart-of-accounts/ },
    ];

    for (const route of routes) {
      await page.goto('/home');
      await ensureSidenavExpanded(page);
      const link = page.locator('mifosx-sidenav').locator(route.selector);
      await expect(link).toBeVisible();
      await link.click();
      await expectRoutedShell(page, route.pattern);
    }

    await page.goto('/home');
    await ensureSidenavExpanded(page);
    await page.locator('mifosx-sidenav button[matTooltip="Settings"]').click();
    await expectRoutedShell(page, /\/settings/);
  });

  test('toolbar institution submenu navigates to clients groups centers', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);

    const destinations: Array<{ label: string; pattern: RegExp }> = [
      { label: 'Clients', pattern: /\/clients/ },
      { label: 'Groups', pattern: /\/groups/ },
      { label: 'Centers', pattern: /\/centers/ },
    ];

    for (const dest of destinations) {
      await page.goto('/home');
      const panel = await openMenuByLabel(page, 'Institution');
      await panel.getByRole('menuitem', { name: dest.label }).click();
      await expectRoutedShell(page, dest.pattern);
    }
  });

  test('logout completes user journey back to login', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/home');

    await page.locator('#mifosx-toolbar button.img-button').click();
    await page.locator('#logout').click();
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator('#login-form')).toBeVisible();
  });
});
