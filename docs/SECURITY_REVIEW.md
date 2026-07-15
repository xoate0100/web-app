---
title: Security Review — Mifos X Web App
audience: mixed
status: current
role: reference
personas: [installer-admin, developers, managers-superusers]
last_reviewed: 2026-07-15
---

# Security review (financial data)

Threat-model focused review of this Angular SPA against handling of **sensitive financial and PII data** via Apache Fineract. Review date: **2026-07-15**. Branch remediations ship with this document.

> **Assumption:** Fineract **must** enforce authorization on every API. The SPA is not a sufficient AuthZ boundary.

## Executive summary

| Severity | Count | Theme |
|----------|-------|--------|
| Critical | 3 | Token storage, OAuth secret, API URL override |
| High | 2 | Template XSS paths, client-only AuthZ |
| Medium | 8 | Headers/CSP, error leakage, secrets UI, nav history, deps |
| Low | 5 | CSRF (N/A for header auth), mixed http links, autocomplete |

**Deploy blockers for production financial use:** address Critical items (API host freeze, no client OAuth secrets, minimize credential persistence) and verify Fineract permission enforcement independently.

## Critical findings

### SEC-01 — Auth tokens / Basic keys in web storage
**Evidence:** `AuthenticationService` stores `Credentials` (incl. `base64EncodedAuthenticationKey` / OAuth tokens) in `sessionStorage` or `localStorage` (“Remember me”).  
**Impact:** XSS or shared workstation → reusable credentials → full API access to loans, clients, disbursements.  
**Status:** Architectural risk remains; logout/nav-history clearing hardened in this pass. Prefer short-lived tokens + BFF/`HttpOnly` cookies long-term.

### SEC-02 — Hardcoded OAuth `client_secret: '123'`
**Evidence:** Was embedded in `authentication.service.ts` token requests.  
**Impact:** Confidential-client secret shipped to every browser.  
**Remediation (this PR):** Secret/client id moved to `environment.oauth`; **empty by default**; OAuth must not use a confidential secret in a public SPA — use PKCE / BFF. Hardcoded `123` removed.

### SEC-03 — `localStorage` overrides API base URL even when server switch UI is hidden
**Evidence:** `environment*.ts` read `mifosXServerURL` unconditionally.  
**Impact:** XSS/local tampering redirects auth to attacker-controlled hosts.  
**Remediation (this PR):** Production builds **ignore** `mifosXServerURL`; `SettingsService.setServer` no-ops in production. Dev retains optional switch when enabled.

## High findings

### SEC-04 — HTML templates / screen reports (`innerHTML` / `document.write`)
Stored Fineract templates and screen reports can introduce XSS → token theft (SEC-01).  
**Remediation (this PR):** View-template uses Angular `DomSanitizer.sanitize`. Screen-report paths already sanitize before bind; prefer sandboxed iframes + backend HTML policy.

### SEC-05 — Route AuthZ is authentication-only
`AuthenticationGuard` + `*mifosxHasPermission` (UI hide only). Users can craft URLs / API calls.  
**Remediation:** Ops must audit Fineract permissions; FE route permission guards are defense-in-depth (tracked, not fully implemented).

## Medium / Low (selected)

| ID | Issue | Remediation |
|----|-------|-------------|
| SEC-06 | Shared mutable auth headers | Prefer per-request auth state (follow-up) |
| SEC-07 | `mifosXLocation` nav history | Cleared on logout (this PR) |
| SEC-08 | S3/SMTP secrets shown cleartext | Masked in UI (this PR); backend should not return secrets |
| SEC-09 | CDN script, no CSP | Particles removed; CSP/HSTS docs for nginx |
| SEC-10 | `developerMessage` in UI | Generic prod messages (this PR) |
| SEC-11 | `console.log` of API data | ESLint / cleanup follow-up |
| SEC-12 | `bypassSecurityTrustResourceUrl` blobs | Keep Content-Type + sandbox discipline |
| SEC-13 | `--output-hashing=none` | Ops note / follow-up |
| SEC-14 | No CSRF tokens | Acceptable for header auth; required if cookie sessions |
| SEC-17 | npm audit highs (dev tooling etc.) | CI audit step; triage ongoing |

## What is already solid

- Shell routes require authentication.
- Widespread permission directives on mutating UI.
- Production `sourceMap: false`.
- Generic 401/500 user messages (extended in this PR).
- Auth via headers (low classic CSRF).
- Limited CKEditor toolbar.

## Frontend vs ops / Fineract

| Control | Owner |
|---------|--------|
| Permission checks on APIs | **Fineract** (required) |
| TLS, HSTS, CSP, reverse proxy | **Ops** |
| API host + tenant locking | **Ops** + FE prod freeze |
| Token storage model | Product / FE + backend |
| Template HTML sanitization | FE + Fineract content policy |

## Checklist before production

- [ ] Production `baseApiUrl` points at institutional Fineract (not public demos)
- [ ] `allowServerSwitch` / OAuth confidential secret remain disabled
- [ ] Fineract RBAC reviewed for loan disbursement, client, accounting APIs
- [ ] Nginx/CDN: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`
- [ ] `npm audit` reviewed; no unresolved Critical production deps
- [ ] Maker-checker enabled for sensitive financial actions

## Related docs

- [Security Baselines](../../1_global_standards/SECURITY_BASELINES.md)
- [Production hosting](../ops/production-hosting.md)
- [Installer & Admin](../personas/installer-admin.md)
- [Master Documentation Index](../../4_docs_index/DOCUMENTATION_INDEX.md)
