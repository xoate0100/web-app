---
title: Major Migration Completion Record
audience: developer
status: current
role: plan
personas: [developers]
last_reviewed: 2026-07-15
---
# Major Migration Plan

Validated phased plan for deferred migrations. Each phase has explicit **entry criteria**, **exit gates**, and **anti-stub rules** so no phase lands partial implementations.

## Principles

1. **No merge without green `npm run validate` and `npm run e2e:ci`** after every phase.
2. **No commented-out code paths** left as "temporary" — either working or excluded with a tracked issue.
3. **Every migrated integration gets at least one automated test** (unit or e2e) covering its critical path.

## Phase overview — ALL COMPLETE

| Phase | Scope | Status |
|-------|-------|--------|
| 0 | Plan + baseline | Done |
| 1 | Playwright CI with API mocks | Done — 4 e2e tests, CI job |
| 2 | CKEditor `ckeditor5` v47 | Done |
| 3 | `@ngx-translate` v18 | Done |
| 4 | Font Awesome v7 | Done |
| 5 | TypeScript incremental strict | Done |
| 6 | `bootstrapApplication` + standalone | Done |
| 7 | Full strict mode (`strict`, `strictTemplates`) | Done — 0 build errors |
| 8 | Legacy `fa fa-*` → `<fa-icon>` | Done — 0 remaining |
| 9 | Route reuse strategy fix | Done |

## Architecture after migration

- **Bootstrap:** `bootstrapApplication(WebAppComponent)` in `src/main.ts` with `importProvidersFrom` for feature modules
- **Components:** All components converted to standalone via `@angular/core:standalone` schematic
- **Modules:** Retained for lazy-loading and `importProvidersFrom`; `app.module.ts` removed
- **Strict mode:** `strict: true`, `strictNullChecks`, `noImplicitAny`, `strictTemplates` enabled
- **Icons:** All legacy Font Awesome CSS classes migrated to `@fortawesome/angular-fontawesome`
- **Deprecated removed:** `@angular/platform-browser-dynamic`, `@ckeditor/ckeditor5-build-classic`

## Post-implementation validation

```bash
npm ci
npm run validate   # lint + 614 unit tests + production build (strict)
npm run e2e:ci     # 4 Playwright tests (mocked Fineract API)
```

CI workflow (`.github/workflows/build.yml`) runs both `validate` and `e2e:ci`.
