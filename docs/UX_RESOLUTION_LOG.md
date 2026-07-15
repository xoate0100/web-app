# UX stress-test resolution log

**Status:** Complete  
**Completed:** 2026-07-15  
**Session:** UI/UX journey stress testing (Playwright) against local dev server

## Summary

All items from the remaining UX notes produced during the Playwright UI stress-test session have been resolved. Sixteen Playwright e2e tests pass (12 UI journey + login + app shell).

## Resolutions

| # | Issue | Resolution | Status |
|---|-------|------------|--------|
| 1 | Toolbar `mat-menu` panels crash (`ssrId` undefined) | Wrapped all toolbar menu content in `<ng-template matMenuContent>` | Complete |
| 2 | Toolbar tabs clipped off-screen | Replaced `mat-tab-nav-bar` with flex `mat-button` nav links | Complete |
| 3 | Mobile hamburger hidden on small viewports | Hamburger toggle always rendered (removed viewport gate) | Complete |
| 4 | Breadcrumb component runtime errors | Initialize `breadcrumbs = []`; guard template when empty | Complete |
| 5 | Deprecated Font Awesome 5 icon names app-wide | Extended `scripts/migrate-fa-icons.mjs`; migrated 55+ HTML files; registered `faFileLines`, `faCircleCheck` in `icons.module.ts` | Complete |
| 6 | Compact sidenav hides Settings / Sign Out | Show icon-only user controls in `.sidebar-compact`; hide only photo and username | Complete |
| 7 | Playwright e2e documentation outdated (Protractor) | Rewrote `docs/coding-guides/e2e-tests.md` for Playwright + env vars | Complete |
| 8 | Live API e2e mode undocumented | Documented `PLAYWRIGHT_USE_LIVE_API`, `PLAYWRIGHT_SKIP_WEBSERVER`, `PLAYWRIGHT_BASE_URL` | Complete |

## Deferred items (now complete)

- **App-wide FA icon migration** — was deferred after toolbar/sidenav partial fix; completed via `node scripts/migrate-fa-icons.mjs`.
- **Compact sidenav user controls** — was noted as follow-up; SCSS updated and e2e assertion added.
- **E2e docs refresh** — was listed as optional follow-up; guide updated.

## Verification

```powershell
$env:PLAYWRIGHT_SKIP_WEBSERVER='true'
$env:PLAYWRIGHT_BASE_URL='http://localhost:4200'
npx playwright test e2e/ --workers=1 --timeout=120000
```

Expected: **16/16 passed**.

## Key files changed

- `src/app/core/shell/toolbar/` — menu templates, flex nav
- `src/app/core/shell/breadcrumb/` — null-safe breadcrumbs
- `src/app/core/shell/sidenav/` — compact-mode controls, FA6 icons
- `src/app/shared/icons.module.ts` — additional FA6 registrations
- `scripts/migrate-fa-icons.mjs` — HTML `fa-icon` attribute migration
- `e2e/ui-journey.spec.ts`, `e2e/fixtures/` — stress tests and helpers
- `docs/coding-guides/e2e-tests.md` — Playwright guide

## Out of scope

- `ACTIVE_PLAN.yaml` task 1 (pre-upgrade assessment deliverables) — unrelated to UX work; pointer not advanced.
- `create-self-service-user.component.scss` retains legacy `.fa-question-circle` CSS class name (styling only; no runtime icon).
