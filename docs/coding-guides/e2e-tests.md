# End-to-end tests coding guide

End-to-end (E2E) tests exercise the application from start to finish, complementing unit tests by covering integration between components.

This project uses [Playwright](https://playwright.dev/) for browser automation and the built-in Playwright test runner (Jasmine-style `test` / `expect` API).

## Running tests

From the repository root:

```bash
# Start the dev server (or reuse an existing one)
npm start

# Run all e2e tests against localhost:4200
$env:PLAYWRIGHT_SKIP_WEBSERVER='true'
$env:PLAYWRIGHT_BASE_URL='http://localhost:4200'
npx playwright test e2e/ --workers=1 --timeout=120000
```

Playwright can also start the dev server automatically when `PLAYWRIGHT_SKIP_WEBSERVER` is not set (see `playwright.config.ts`).

### Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `PLAYWRIGHT_BASE_URL` | `http://localhost:4200` | Target URL for the app under test |
| `PLAYWRIGHT_SKIP_WEBSERVER` | unset (server started) | Set to `true` to reuse an already-running dev server |
| `PLAYWRIGHT_USE_LIVE_API` | unset (mocked API) | Set to `true` to hit a real Fineract backend instead of route mocks |

When `PLAYWRIGHT_USE_LIVE_API=true`, tests authenticate against the configured Fineract instance (e.g. dev.mifos.io with `mifos` / `password`). Mocked mode intercepts Fineract API routes via `e2e/fixtures/api-mocks.ts` so tests run offline.

## Test layout

| Path | Description |
|------|-------------|
| `e2e/ui-journey.spec.ts` | UI/UX stress tests: viewports, toolbar menus, sidenav, navigation |
| `e2e/login.spec.ts` | Login form and authentication flow |
| `e2e/app.spec.ts` | App shell smoke test |
| `e2e/fixtures/ui-helpers.ts` | Shared helpers: login, viewport checks, menu/sidenav interactions |
| `e2e/fixtures/api-mocks.ts` | Fineract API route mocks for offline e2e |
| `e2e/fixtures/login-helpers.ts` | Login form submission helpers |

## Good practices

- Avoid inter-dependencies between E2E tests; each test should set up its own state via `loginToApp` or explicit navigation.
- Run E2E tests on CI against multiple browsers when feasible (`npx playwright test --project=chromium` etc.).
- Cover each user-story acceptance factor with at least one E2E path where practical.
- Prefer role- and label-based selectors (`getByRole`, `matTooltip`) over brittle CSS paths.

## Page objects / fixtures

Rather than classic Protractor page objects, shared behavior lives in `e2e/fixtures/`:

```typescript
import { loginToApp, openMenuByLabel, assertInViewport } from './fixtures/ui-helpers';

test('institution menu opens', async ({ page }) => {
  await loginToApp(page);
  const panel = await openMenuByLabel(page, 'Institution');
  await assertInViewport(page, panel, 'institution menu');
});
```

If the UI changes, update the helper once rather than every test file.

## Credits

Parts of the original guide were inspired by this
[presentation](https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ).
The stack was migrated from Protractor to Playwright during the Angular 22 upgrade.
