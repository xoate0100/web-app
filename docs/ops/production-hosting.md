---
title: Production Hosting Notes
audience: admin
status: current
role: guide
personas: [installer-admin]
last_reviewed: 2026-07-15
---

# Production hosting notes

**Who this is for:** [installers & admins](../personas/installer-admin.md).

## Build

```bash
npm ci
npm run build:prod
```

Serve the contents of `dist/web-app/` (respect `base-href`, default `/web-app/`).

## Checklist

- [ ] Fineract reachable over HTTPS from browser clients
- [ ] `environment.prod.ts` `baseApiUrl` and tenant correct ([Connecting to Fineract](../getting-started/connecting-fineract.md))
- [ ] SPA fallback to `index.html` ([Routing](../routing.md))
- [ ] TLS certificates valid
- [ ] Demo credentials disabled / rotated
- [ ] Smoke login against production tenant

## Related

- [Installation](../getting-started/installation.md)
- [CI/CD](../../1_global_standards/CI_CD_GUIDE.md)
