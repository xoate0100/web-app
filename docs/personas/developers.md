---
title: Persona — Developers & Contributors
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
---

# Developers & contributors

**Who this is for:** engineers building, testing, and contributing to this Angular SPA.

## Cross-references

| Need | Link |
|------|------|
| Clone & run locally | [Local development](../getting-started/local-development.md) |
| Point at Fineract | [Connecting to Fineract](../getting-started/connecting-fineract.md) |
| Contributing process | [.github/CONTRIBUTING.md](../../.github/CONTRIBUTING.md) |
| Coding guides | [../coding-guides/](../coding-guides/) |
| App docs hub | [../INDEX.md](../INDEX.md) |
| Master index | [Documentation Index](../../4_docs_index/DOCUMENTATION_INDEX.md) |

## Stack (current)

- Angular **22** (standalone components, `bootstrapApplication`)
- Angular Material / CDK **22**
- Vitest unit tests · Playwright e2e
- ESLint 10 flat config · stylelint · htmlhint
- Font Awesome 7 (`<fa-icon>`) · CKEditor 5 · `@ngx-translate/core` v18

## Essential commands

```bash
npm ci
npm start                 # env + ng serve with proxy.conf.js
npm run test:ci           # Vitest, single run
npm run e2e:install       # once
npm run e2e:ci            # Playwright
npm run validate          # lint + unit tests + production build
npm run validate:all      # validate + e2e
```

## Docs to keep current when you change code

Per [DOCS_STANDARDS](../../1_global_standards/DOCS_STANDARDS.md): behavior, env, CI commands, or architecture changes require doc updates and a touch of the master index when paths change.

## Related personas

Ship a build for production → [Installer & Admin](./installer-admin.md)
