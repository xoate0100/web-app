---
title: Installation Overview
audience: admin
status: current
role: tutorial
personas: [installer-admin]
last_reviewed: 2026-07-15
---

# Installation overview

**Who this is for:** [system installers & admins](../personas/installer-admin.md).

This Web App is a static Angular SPA. It does **not** include the Fineract API server — install Fineract separately, then host these build artifacts behind a web server.

## 1. Install Apache Fineract

Follow the official platform guides:

- [Fineract on Windows](https://cwiki.apache.org/confluence/display/FINERACT/Fineract-platform+Installation+on+Windows)
- [Fineract on Ubuntu](https://cwiki.apache.org/confluence/display/FINERACT/Fineract+Installation+on+Ubuntu+Server)

Confirm the API responds (typically under `/fineract-provider/api/v1`).

## 2. Build the Web App

Requirements: **Node.js 22** (or ≥ 20.19), npm.

```bash
git clone https://github.com/openMF/web-app.git
cd web-app
npm ci
npm run build:prod
```

Artifacts are written to `dist/web-app/` (browser bundle under that tree).

## 3. Configure API endpoint

Before or after build, set:

- `src/environments/environment.prod.ts` — `baseApiUrl`, `fineractPlatformTenantId`, optional `oauth.enabled`
- See [Connecting to Fineract](./connecting-fineract.md)

## 4. Host with SPA rewrites

Configure nginx/Apache/IIS so deep links resolve to `index.html`. Details: [Routing](../routing.md).

Example production base href (default in `build:prod`): `/web-app/`.

## 5. Smoke-test

1. Open the deployed URL → login form.
2. Sign in with a Fineract user for your tenant.
3. Confirm home shell loads and API calls succeed (network tab).

## Next

- Managers configure org/products → [Managers & Superusers](../personas/managers-superusers.md)
- Local contributor setup → [Local development](./local-development.md)
