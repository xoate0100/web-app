---
title: Local Development Setup
audience: developer
status: current
role: tutorial
personas: [developers]
last_reviewed: 2026-07-15
---

# Local development setup

**Who this is for:** [developers](../personas/developers.md).

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | **22** LTS recommended (≥ 20.19) |
| npm | Comes with Node |
| git | Any recent |
| Optional | Global `@angular/cli@22` — not required; use `npx` / npm scripts |

## Steps

```bash
git clone https://github.com/openMF/web-app.git   # or your fork
cd web-app
git checkout master
npm ci
npm start
```

Open [http://localhost:4200/](http://localhost:4200/). `npm start` runs `npm run env` then `ng serve --proxy-config proxy.conf.js`.

### Default demo credentials (remote demo backends)

When pointed at Mifos demo/dev servers:

- Username: `mifos`
- Password: `password`

Do not change these for shared demos. For a **local** Fineract, use your own users ([Connecting to Fineract](./connecting-fineract.md)).

## Validate before pushing

```bash
npm run validate        # lint + Vitest + production build
npm run e2e:install     # once per machine
npm run e2e:ci          # Playwright (mocked API)
# or
npm run validate:all
```

## Useful links

| Topic | Doc |
|-------|-----|
| Proxy / API | [Backend proxy](../backend-proxy.md) |
| Corporate VPN | [Corporate proxy](../corporate-proxy.md) |
| Coding guides | [../coding-guides/](../coding-guides/) |
| Contributing | [../../.github/CONTRIBUTING.md](../../.github/CONTRIBUTING.md) |
| Persona overview | [Developers](../personas/developers.md) |

## First UI check

After login → [First login & navigation](./first-login.md).
