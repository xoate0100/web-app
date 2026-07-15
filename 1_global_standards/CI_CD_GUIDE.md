---
title: CI/CD Guide (Web App)
audience: admin
status: current
role: standard
personas: [developers, installer-admin]
last_reviewed: 2026-07-15
---

# CI/CD guide

**Who this is for:** [developers](../docs/personas/developers.md) and [installers](../docs/personas/installer-admin.md) caring about automation.

## GitHub Actions

Workflow: [`.github/workflows/build.yml`](../.github/workflows/build.yml)

On pull requests / pushes to `master`:

1. `npm ci`
2. `npm run validate` — lint (ESLint, stylelint, htmlhint) + Vitest + production build
3. `npm run e2e:install`
4. `npm run e2e:ci` — Playwright with API mocks
5. On push to `master`, deploy `dist/web-app` to `gh-pages`

## Local equivalent

```bash
npm run validate:all
```

## Agentic / meta checks

Additional CI definitions live under `8_ci/` (security baseline, mutation, agentic checks). See the [Master Documentation Index](../4_docs_index/DOCUMENTATION_INDEX.md).
