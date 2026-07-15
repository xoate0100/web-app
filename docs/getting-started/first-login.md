---
title: First Login & Navigation
audience: mixed
status: current
role: tutorial
personas: [end-users, managers-superusers]
last_reviewed: 2026-07-15
---

# First login & navigation

**Who this is for:** [end users](../personas/end-users.md) and [managers / superusers](../personas/managers-superusers.md).

## Sign in

1. Open the Web App URL provided by your institution (or local `http://localhost:4200/` for developers).
2. Optionally select **language** (and **server**, if enabled by your admin).
3. Enter **Username** and **Password**.
4. Click **Login**.

On success you reach **Home** inside the application shell (toolbar + sidenav).

If login fails, verify credentials with your admin and confirm the app points at the correct Fineract tenant ([Connecting to Fineract](./connecting-fineract.md)).

## Shell orientation

| UI | Purpose |
|----|---------|
| **Sidenav** | Primary modules (clients, organization, system, …) |
| **Toolbar** | Search, notifications, theme, profile, logout |
| **Breadcrumb** | Location within a workflow |
| **Content** | Routed feature pages |

Menus you do not see are hidden by **permissions** — ask a manager to grant access rather than filing a product bug.

## After first login (managers)

Recommended: confirm offices → roles → products before handing the system to loan officers. See [Managers & Superusers](../personas/managers-superusers.md).

## After first login (operators)

Open **Clients** or use search to find a member record. Full workflows: [Mifos User Manual](https://mifosforge.jira.com/wiki/spaces/docs/pages/52035622/User+Manual).

## Keyboard shortcuts

The app registers keyboard shortcuts (help opens the community User Manual). Use **Help** from the toolbar where available.

## Related

- [End Users](../personas/end-users.md)
- [Managers & Superusers](../personas/managers-superusers.md)
- [Installer & Admin](../personas/installer-admin.md)
