---
title: Unit Testing with Vitest
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
supersedes: docs/coding-guides/unit-tests.md (pre-Vitest)
---

# Unit tests coding guide

Unit tests run with **Vitest** through the Angular test builder (`ng test`).

## Commands

```bash
npm run test          # watch (env + ng test)
npm run test:ci       # single run for CI
```

Setup helpers: `src/polyfills-test.ts`, `src/test-globals.ts`, `src/vitest-globals.d.ts`, `src/tsconfig.spec.json`.

## Practices

- Prefer testing public component/service behavior over implementation detail.
- Keep specs next to sources as `*.spec.ts`.
- For injectable services, use Angular `TestBed` with `provideTranslateService` / HTTP testing modules as needed.
- Smoke specs (`expect(Component).toBeDefined()`) are acceptable for complex NgModule-era screens until deeper coverage is added — prefer real assertions for new code.

## Related

- [E2E with Playwright](./e2e-tests.md)
- [Angular guide](./angular.md)
- Official: [Angular testing](https://angular.dev/guide/testing)
