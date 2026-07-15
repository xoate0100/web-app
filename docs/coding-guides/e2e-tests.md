---
title: E2E Testing with Playwright
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
supersedes: docs/coding-guides/e2e-tests.md (Protractor)
---

# End-to-end tests coding guide

E2E tests use **Playwright** (`@playwright/test`). Specs live under `e2e/`. Config: `playwright.config.ts`.

## Commands

```bash
npm run e2e:install   # Chromium + OS deps (once)
npm run e2e           # headed/report as configured
npm run e2e:ci        # list reporter (CI)
```

The Playwright config starts `ng serve` automatically against `http://127.0.0.1:4200`.

## Practices

- Prefer **API mocks** for CI (see `e2e/fixtures/api-mocks.ts`) so tests do not depend on a live Fineract.
- Clear auth storage between tests (`clearClientStorage`).
- Use login helpers in `e2e/fixtures/login-helpers.ts` — Angular Material forms need `pressSequentially`, not only `fill()`.
- Keep tests independent; avoid shared mutable server state.
- Cover critical paths: login success/failure, authenticated shell.

## Page object pattern

Page objects are still encouraged: wrap selectors and flows in helpers/fixtures rather than duplicating locators across specs.

## Related

- CI runs `e2e:ci` after `validate` in `.github/workflows/build.yml`
- [Unit tests](./unit-tests.md) · [Local development](../getting-started/local-development.md)
- [Playwright docs](https://playwright.dev/docs/intro)
