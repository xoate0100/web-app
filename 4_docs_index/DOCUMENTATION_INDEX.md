---
title: Master Documentation Index
audience: mixed
status: current
role: index
personas: [installer-admin, managers-superusers, end-users, developers, ai-agent]
last_reviewed: 2026-07-15
---

# Master Documentation Index

Single entry map for **all** documentation in this repository. Start at the [root README](../README.md) for a persona-based jump-off.

## By persona

| Persona | Who | Start here |
|---------|-----|------------|
| **System installer / admin** | Deploys Fineract + Web App, configures tenants, TLS, proxies | [Installer & Admin](../docs/personas/installer-admin.md) |
| **Managers / superusers** | Offices, staff, roles, maker-checker, org config | [Managers & Superusers](../docs/personas/managers-superusers.md) |
| **Regular system users** | Day-to-day MFI operations (clients, loans, savings) | [End Users](../docs/personas/end-users.md) |
| **Developers / contributors** | Build, test, and extend the Angular SPA | [Developers](../docs/personas/developers.md) |
| **AI agents** | Meta-framework, sandbox, traceability | [0_phase0_bootstrap](../0_phase0_bootstrap/META_FRAMEWORK_OVERVIEW.md) |

## Initialization tutorials

| Tutorial | Audience | Path |
|----------|----------|------|
| Local development setup | Developers | [getting-started/local-development.md](../docs/getting-started/local-development.md) |
| Connect to Fineract | Installers, Developers | [getting-started/connecting-fineract.md](../docs/getting-started/connecting-fineract.md) |
| Production install outline | Installers | [getting-started/installation.md](../docs/getting-started/installation.md) |
| First login & navigation | End users, Managers | [getting-started/first-login.md](../docs/getting-started/first-login.md) |

## App documentation (`docs/`)

Hub: **[docs/INDEX.md](../docs/INDEX.md)**

| Topic | Path | Status |
|-------|------|--------|
| i18n | [docs/i18n.md](../docs/i18n.md) | current |
| Routing / SPA rewrites | [docs/routing.md](../docs/routing.md) | current |
| Updating dependencies | [docs/updating.md](../docs/updating.md) | current |
| Corporate proxy | [docs/corporate-proxy.md](../docs/corporate-proxy.md) | current |
| Backend / API proxy | [docs/backend-proxy.md](../docs/backend-proxy.md) | current |
| Migration completion | [docs/MAJOR_MIGRATION_PLAN.md](../docs/MAJOR_MIGRATION_PLAN.md) | current |
| Commit strategy | [docs/COMMIT_STRATEGY.md](../docs/COMMIT_STRATEGY.md) | current |
| Coding guides | [docs/coding-guides/](../docs/coding-guides/) | current |
| Ops notes | [docs/ops/](../docs/ops/) · [production-hosting](../docs/ops/production-hosting.md) | current |
| Archived historical docs | [docs/archive/](../docs/archive/) | archived |

## Meta-framework & governance

| Area | Path |
|------|------|
| Phase 0 bootstrap | [0_phase0_bootstrap/](../0_phase0_bootstrap/) |
| Global standards | [1_global_standards/](../1_global_standards/) |
| Templates | [2_framework_templates/](../2_framework_templates/) |
| Bootstrap scripts | [3_bootstrap_scripts/](../3_bootstrap_scripts/) |
| This index + traceability | [4_docs_index/](./) · [TRACEABILITY_GUIDE.md](./TRACEABILITY_GUIDE.md) |
| Architecture registries | [5_reference_architectures/](../5_reference_architectures/) |
| AI runtime context | [6_ai_runtime_context/](../6_ai_runtime_context/) |
| Schemas | [7_schemas/](../7_schemas/) |
| Agentic CI checks | [8_ci/](../8_ci/) |

## Community & process

| Doc | Path |
|-----|------|
| Contributing | [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md) |
| Code of Conduct | [.github/CODE_OF_CONDUCT.md](../.github/CODE_OF_CONDUCT.md) |
| Commit messages | [.github/COMMIT_MESSAGE.md](../.github/COMMIT_MESSAGE.md) |
| Docs standards | [1_global_standards/DOCS_STANDARDS.md](../1_global_standards/DOCS_STANDARDS.md) |
| CI/CD guide | [1_global_standards/CI_CD_GUIDE.md](../1_global_standards/CI_CD_GUIDE.md) |
| AI context (generated) | [6_ai_runtime_context/AI_CONTEXT.md](../6_ai_runtime_context/AI_CONTEXT.md) |

## Stack snapshot (source of truth)

| Concern | Current |
|---------|---------|
| Framework | Angular **22**, standalone components, `bootstrapApplication` |
| Tests | Vitest (`npm run test:ci`), Playwright (`npm run e2e:ci`) |
| Validation | `npm run validate` · `npm run validate:all` |
| Runtime | Node.js **22** LTS recommended (≥ 20.19) |
| UI | Angular Material 22, Font Awesome 7 (`fa-icon`), CKEditor 5, ngx-translate 18 |

Historical Angular 9 / Karma / Protractor / TSLint docs live only under [`docs/archive/`](../docs/archive/).
