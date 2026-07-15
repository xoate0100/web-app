---
title: Security Baselines
audience: mixed
status: current
role: standard
personas: [installer-admin, developers]
last_reviewed: 2026-07-15
---
# Security Baselines
- No secrets committed (scan enforced).
- Encrypt in transit (TLS) and at rest where applicable.
- Disallow eval/exec, command injections, insecure deserialization.
- RBAC enforced at route/method level; log auth events.
