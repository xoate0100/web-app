---
title: Security Baselines
audience: mixed
status: current
role: standard
personas: [installer-admin, developers]
last_reviewed: 2026-07-15
---

# Security Baselines

Minimum expectations for this SPA and its Fineract backend when handling financial data.

## Non-negotiables

1. **No secrets committed** — no OAuth confidential client secrets, cloud keys, or passwords in source. Scan in CI / pre-commit.
2. **TLS in transit** — HTTPS for the SPA and Fineract. Prefer HSTS at the reverse proxy.
3. **No eval / unsafe HTML** — avoid `eval`, unchecked `innerHTML`/`document.write`; sanitize stored HTML (templates, reports).
4. **RBAC at the API** — Fineract must enforce permissions on every financial operation. SPA `*mifosxHasPermission` is UX only.
5. **Production API host locked** — do not honour `localStorage` server URL overrides in production builds (see `resolveBaseApiUrl`).
6. **Auth events** — login success/failure and logout should be observable via Fineract audit; keep UI alerts free of stack traces in production.

## SPA-specific controls

| Control | Expectation |
|---------|-------------|
| Credential storage | Prefer session-scoped storage; treat XSS as credential theft; clear on logout |
| OAuth | Public client + PKCE or BFF — never ship client secrets |
| CSP / third-party scripts | Same-origin assets; CSP + HSTS on nginx/CDN |
| Config UI secrets | Mask secrets in tables; password inputs for keys |
| Dependency hygiene | `npm audit --omit=dev` in CI |

## Full review

See [`docs/SECURITY_REVIEW.md`](../docs/SECURITY_REVIEW.md) for finding IDs, severity, and remediations.
