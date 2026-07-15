---
title: Angular 22 Coding Guide
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
supersedes: docs/coding-guides/angular.md (Angular 2–6 era)
---

# Angular coding guide

**Stack:** Angular **22**, standalone components, `bootstrapApplication` in `src/main.ts`, feature modules retained for routing/`importProvidersFrom`.

## Who this is for

[Developers](../personas/developers.md) · see also [Local development](../getting-started/local-development.md).

## Project patterns

1. **Standalone components** — prefer `imports: [...]` on `@Component`; root bootstrap no longer uses `AppModule`.
2. **Feature NgModules** — still used for lazy routes and grouping; do not reintroduce a root `AppModule`.
3. **Change detection** — many screens use `ChangeDetectionStrategy.Eager` for legacy compatibility; prefer `OnPush` for new work when safe.
4. **Material** — `@angular/material` v22; use Material form fields and buttons, not legacy Bootstrap.
5. **Icons** — always `<fa-icon icon="...">` via `IconsModule` / `FaIconComponent`. Never `fa fa-*` CSS classes.
6. **i18n** — `@ngx-translate/core` v18 with `provideTranslateService`; see [i18n](../i18n.md).
7. **HTTP** — Fineract calls go through `environment.serverUrl` + interceptors (auth, API prefix, errors).

## Recommended reading

- [Angular style guide](https://angular.dev/style-guide)
- [Standalone migration](https://angular.dev/reference/migrations/standalone)
- [TypeScript guide](./typescript.md) · [Unit tests](./unit-tests.md) · [E2E](./e2e-tests.md)

## Avoid

- Documenting or introducing Karma, Protractor, TSLint, or `platformBrowserDynamic().bootstrapModule(AppModule)` as the happy path
- Combining Material `mat-button` and `mat-icon-button` on the same host
