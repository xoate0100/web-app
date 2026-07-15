---
title: Mifos X Web App
audience: mixed
status: current
role: guide
personas: [installer-admin, managers-superusers, end-users, developers]
last_reviewed: 2026-07-15
---

# Mifos X Web App

[![Build Status](https://github.com/openMF/web-app/actions/workflows/build.yml/badge.svg)](https://github.com/openMF/web-app/actions/workflows/build.yml)

Default web client for the Mifos / Apache Fineract platform — an Angular **22** single-page application (standalone bootstrap, Angular Material, Font Awesome 7).

**Documentation map:** [Master Documentation Index](4_docs_index/DOCUMENTATION_INDEX.md) · [App docs hub](docs/INDEX.md)

## Choose your path

| I am… | Start here |
|-------|------------|
| **System installer / admin** | [Installer & Admin](docs/personas/installer-admin.md) → [Installation](docs/getting-started/installation.md) |
| **Manager / superuser** | [Managers & Superusers](docs/personas/managers-superusers.md) → [First login](docs/getting-started/first-login.md) |
| **Regular system user** | [End Users](docs/personas/end-users.md) → [First login](docs/getting-started/first-login.md) |
| **Developer / contributor** | [Developers](docs/personas/developers.md) → [Local development](docs/getting-started/local-development.md) |

Live demo (master continuous deploy): https://openmf.github.io/web-app/

## Quick start (developers)

1. Install **Node.js 22** (or ≥ 20.19) and git.
2. Clone and install:

```bash
git clone https://github.com/openMF/web-app.git
cd web-app
npm ci
npm start
```

3. Open http://localhost:4200/

Default credentials against shared demo backends: username `mifos` / password `password` (do not alter shared demos).

Point at your own Fineract: [Connecting to Fineract](docs/getting-started/connecting-fineract.md).

### Common commands

| Command | Purpose |
|---------|---------|
| `npm start` | Dev server + `proxy.conf.js` |
| `npm run test:ci` | Unit tests (Vitest) |
| `npm run e2e:install` | Install Playwright Chromium |
| `npm run e2e:ci` | E2E tests (mocked API) |
| `npm run validate` | Lint + unit tests + production build |
| `npm run validate:all` | `validate` + e2e |
| `npm run build:prod` | Production build → `dist/web-app/` |
| `npm run docs` | Browse `docs/` locally |

### Scaffolding & help

```bash
npx ng generate component component-name
npx ng help
```

## Setting up a local Fineract server

- [Windows](https://cwiki.apache.org/confluence/display/FINERACT/Fineract-platform+Installation+on+Windows)
- [Ubuntu](https://cwiki.apache.org/confluence/display/FINERACT/Fineract+Installation+on+Ubuntu+Server)

Then update `baseApiUrl` / tenant / OAuth in `src/environments/environment*.ts`. See [Connecting to Fineract](docs/getting-started/connecting-fineract.md) and [Installation](docs/getting-started/installation.md).

## Contributing

Read [Contributing](.github/CONTRIBUTING.md), follow the [Code of Conduct](.github/CODE_OF_CONDUCT.md), and keep docs current ([Docs Standards](1_global_standards/DOCS_STANDARDS.md)).

## Further documentation

- Coding guides: [docs/coding-guides/](docs/coding-guides/)
- Migration record: [docs/MAJOR_MIGRATION_PLAN.md](docs/MAJOR_MIGRATION_PLAN.md)
- Archived historical docs: [docs/archive/](docs/archive/README.md)
