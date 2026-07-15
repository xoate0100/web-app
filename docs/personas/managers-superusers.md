---
title: Persona — Managers & Superusers
audience: manager
status: current
role: guide
personas: [managers-superusers]
last_reviewed: 2026-07-15
---

# Managers & superusers

**Who this is for:** users with elevated Fineract permissions who configure the microfinance institution: offices, employees, roles & permissions, maker-checker, products, and global configuration.

## Cross-references

| Need | Link |
|------|------|
| First login | [First login & navigation](../getting-started/first-login.md) |
| End-user day-to-day | [End Users](./end-users.md) |
| Official product manuals | [Mifos User Manual](https://mifosforge.jira.com/wiki/spaces/docs/pages/52035622/User+Manual) |
| Functional specs | [Fineract Functional Specs](https://cwiki.apache.org/confluence/display/FINERACT/Apache+Fineract+1.0+Functional+Specifications) |
| Master index | [Documentation Index](../../4_docs_index/DOCUMENTATION_INDEX.md) |

## Typical Web App areas

Use the shell sidenav after login (permission-gated):

| Area | Purpose |
|------|---------|
| **Organization** | Offices, employees, holidays, currency, tellers |
| **System** | Roles & permissions, maker-checker tasks, codes, data tables, scheduler jobs, global configurations, audit trails |
| **Products** | Loan, savings, share, deposit products, charges, tax |
| **Templates** | Document / SMS templates |
| **Users** | Application users (when authorized) |

Exact menu items depend on your assigned Fineract permissions (`ALL_FUNCTIONS` sees everything).

## Recommended setup order

1. Confirm offices and hierarchy.
2. Define roles and permissions (least privilege).
3. Create employees / assign staff.
4. Configure loan & savings products and charges.
5. Enable maker-checker tasks where required by policy.
6. Create operational users and map them to offices/roles.

## Related personas

- Platform deployment → [Installer & Admin](./installer-admin.md)
- Loan officers / tellers → [End Users](./end-users.md)
