---
title: Persona — System Installer & Admin
audience: admin
status: current
role: guide
personas: [installer-admin]
last_reviewed: 2026-07-15
---

# System installer & admin

**Who this is for:** people who install Apache Fineract (Mifos X platform), deploy this Web App, configure tenants, TLS, reverse proxies, and production environments.

## Cross-references

| Need | Link |
|------|------|
| Step-by-step install outline | [Installation](../getting-started/installation.md) |
| Point the SPA at Fineract | [Connecting to Fineract](../getting-started/connecting-fineract.md) |
| SPA server rewrites | [Routing](../routing.md) |
| Corporate network | [Corporate proxy](../corporate-proxy.md) |
| External Fineract OS guides | [Windows](https://cwiki.apache.org/confluence/display/FINERACT/Fineract-platform+Installation+on+Windows) · [Ubuntu](https://cwiki.apache.org/confluence/display/FINERACT/Fineract+Installation+on+Ubuntu+Server) |
| Master index | [Documentation Index](../../4_docs_index/DOCUMENTATION_INDEX.md) |

## Responsibilities

1. Provision Fineract + database (MariaDB/MySQL) per Apache Fineract docs.
2. Build and host the Web App static assets (`npm run build:prod` → `dist/web-app`).
3. Configure `baseApiUrl`, tenant id, and optional OAuth in environment files (or runtime server selector when enabled).
4. Ensure the web server rewrites unknown paths to `index.html` ([routing](../routing.md)).
5. Enforce HTTPS and reverse-proxy headers toward Fineract.

## Quick verify

After deploy, open the app URL → login page → authenticate against your Fineract tenant. Default demo credentials on public demo servers are published by Mifos; **never** ship demo passwords in production.

## Related personas

- Managers configure org structure **inside** the app → [Managers & Superusers](./managers-superusers.md)
- Developers iterate locally → [Developers](./developers.md) · [Local development](../getting-started/local-development.md)
