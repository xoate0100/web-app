# Major Migration Plan

Validated phased plan for deferred migrations. Each phase has explicit **entry criteria**, **exit gates**, and **anti-stub rules** so no phase lands partial implementations.

## Principles

1. **No merge without green `npm run validate`** after every phase.
2. **No commented-out code paths** left as "temporary" — either working or excluded with a tracked issue.
3. **Every migrated integration gets at least one automated test** (unit or e2e) covering its critical path.
4. **NgModule architecture stays intact** until a dedicated standalone migration project; `bootstrapApplication` is deferred until that migration completes (see Phase 6).

## Phase overview

| Phase | Scope | Risk | Verification |
|-------|-------|------|--------------|
| 0 | Plan + baseline | — | Document gates |
| 1 | Playwright CI with API mocks | Low | 3+ e2e tests, CI job |
| 2 | CKEditor `ckeditor5` package | Medium | Build + editor unit test |
| 3 | `@ngx-translate` v18 | Medium | I18nService unit tests |
| 4 | Font Awesome v7 | Medium | Build + icon registry test |
| 5 | TypeScript incremental strict | Medium | `validate` + fixed blockers |
| 6 | `bootstrapApplication` bridge | Low | **Deferred** — requires standalone root first |

**Explicitly out of scope** (separate future project):
- Full NgModule → standalone component migration (~580 components)
- Full `strictNullChecks` / `strictTemplates` across entire codebase
- CKEditor premium features
- Replacing all legacy `fa fa-*` CSS icons (~46 files)

---

## Phase 1: Playwright in CI (mocked backend)

### Problem
Current e2e tests call a real Fineract API (`/authentication`), making CI flaky.

### Solution
- Add `e2e/fixtures/api-mocks.ts` intercepting `/authentication` and `/userdetails`
- Split tests: **smoke** (no backend) vs **auth flow** (mocked)
- CI: install Chromium, run `npm run e2e:ci`

### Exit gates
- [x] `npm run e2e:ci` passes locally without external API
- [x] CI workflow includes Playwright step
- [x] No test skipped without `test.skip` + documented reason

### Edge cases
- OAuth mode (`environment.oauth.enabled`) — mock both paths or force non-OAuth in e2e
- `localStorage` credentials from prior runs — clear in `beforeEach`
- Service worker in dev — disabled for e2e serve

---

## Phase 2: CKEditor predefined build → `ckeditor5`

### Problem
`@ckeditor/ckeditor5-build-classic` is deprecated (EOL March 2025).

### Solution
- Install `ckeditor5`, remove predefined build
- Create `src/app/shared/ckeditor/mifos-classic-editor.ts` (single source of toolbar config)
- Update create/edit template components
- Import `ckeditor5/ckeditor5.css` in global styles
- Remove CommonJS allowlist entry

### Exit gates
- [x] `npm run build:prod` succeeds
- [x] Unit test asserts editor class exports `builtinPlugins`
- [x] No `declare module '@ckeditor/ckeditor5-build-classic'` stub remains

### Edge cases
- `editorInstance.model.change` API — verify against ckeditor5 v47+ types
- Bundle size — monitor but do not block

---

## Phase 3: `@ngx-translate` v16 → v18

### Problem
`TranslateModule` removed in v18; `currentLang` is now a signal.

### Solution
- Upgrade to `@ngx-translate/core@^18`
- Replace `TranslateModule.forRoot()` with `provideTranslateService()` in `AppModule.providers`
- Remove `TranslateModule` from `CoreModule` imports (no template pipe usage)
- Update `I18nService` for `currentLang()` signal
- Re-enable `i18n.service.spec.ts` with `provideTranslateService` in TestBed

### Exit gates
- [x] `npm run test:ci` includes passing i18n specs
- [x] Route title translation still works (`extract()` markers unchanged)
- [x] Language selector switches `en-US` / `fr-FR`

### Edge cases
- Embedded JSON imports (`en-US.json`) — keep `setTranslation` / `setTranslation` merge semantics (v18 default: no auto-merge; use explicit merge)
- `setTranslation` in constructor — call with merge flag if needed

---

## Phase 4: Font Awesome v6 → v7

### Problem
FA7 icon renames; `@fortawesome/angular-fontawesome` peer updates.

### Solution
- Bump `@fortawesome/*` to v7
- Update `icons.module.ts` imports (verify renamed icons)
- Add unit test verifying key template aliases resolve via `FaIconLibrary`

### Exit gates
- [x] `npm run build:prod` succeeds
- [x] Icon registry test passes
- [x] No broken `fa-icon` in sidenav/toolbar (covered by e2e smoke)

### Edge cases
- Legacy `fa fa-*` CSS classes — **not migrated** in this phase; documented debt
- String icon names in templates (`sign-out-alt`) — FA6 aliases may still work via library mapping

---

## Phase 5: TypeScript incremental strict

### Problem
`strict: false` hides bugs; enabling all flags at once breaks ~550 files.

### Solution (this phase only)
Enable compiler flags with **bounded fix scope**:
- `noFallthroughCasesInSwitch: true`
- `noImplicitReturns: true` — fix only files that fail (not whole codebase preemptively)
- `forceConsistentCasingInFileNames: true`

**Do not enable** in this phase: `strictNullChecks`, `strictTemplates`, `noImplicitAny`.

### Exit gates
- [x] `npm run validate` green
- [x] Enabled flags documented in `tsconfig.json` with comment linking here

---

## Phase 6: Modern bootstrap (`bootstrapApplication`) — DEFERRED

### Problem
`platform-browser-dynamic` / `bootstrapModule` deprecated in Angular 22.

### Attempted solution (reverted)
`bootstrapApplication(WebAppComponent, { providers: [importProvidersFrom(AppModule)] })` was tried but **breaks runtime routing** for this NgModule-based app (~580 non-standalone components). The app shows only the splash logo; routed views (e.g. `/login`) never render.

### Prerequisite
Complete NgModule → standalone migration (or convert `WebAppComponent` to standalone with full `imports` graph) before retrying.

### Related fix (Phase 1)
`RouteReusableStrategy.shouldReuseRoute` was corrected so `data: { reuse: true }` on shell routes no longer prevents login → shell navigation (a regression exposed by Playwright auth-flow tests).

### Exit gates (when resumed)
- [ ] `npm run validate` green
- [ ] E2e `app.spec.ts` confirms login and shell render
- [ ] No `platformBrowserDynamic` imports remain

### Edge cases
- `importProvidersFrom` does not wire NgModule `declarations` for a non-standalone bootstrapped component
- Service worker registration must be preserved via providers

---

## Rollback strategy

Each phase is a separate commit. Revert the phase commit if exit gates fail.

## Post-implementation validation

```bash
npm ci
npm run validate
npm run e2e:ci
```
