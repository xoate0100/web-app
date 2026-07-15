---
title: Dev Backend Proxy
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
---

# Backend / API proxy

**Who this is for:** [developers](./personas/developers.md) avoiding CORS issues when the Fineract API is on another origin.

`npm start` passes `--proxy-config proxy.conf.js` to the Angular CLI. Adjust that file so paths under the Fineract API provider are forwarded to your backend host (local or remote).

Pair with `environment.ts` `baseApiUrl` / tenant settings — see [Connecting to Fineract](./getting-started/connecting-fineract.md).

For production, prefer same-origin reverse proxying (nginx) rather than the webpack/dev-server proxy.
