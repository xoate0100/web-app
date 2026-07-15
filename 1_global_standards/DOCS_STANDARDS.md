---
title: Documentation Standards
audience: developer
status: current
role: standard
personas: [developer, ai-agent]
last_reviewed: 2026-07-15
---

# Documentation Standards

Every documentation change must keep the **master index** accurate and usable by humans and agents.

## Master index (source of truth)

| Index | Path | Scope |
|-------|------|-------|
| **Master Documentation Index** | [`4_docs_index/DOCUMENTATION_INDEX.md`](../4_docs_index/DOCUMENTATION_INDEX.md) | All docs in the repo |
| App docs hub | [`docs/INDEX.md`](../docs/INDEX.md) | Product, ops, coding guides |
| Root README | [`README.md`](../README.md) | Entry point + persona links |

Update the master index when you add, rename, move, deprecate, or archive a document.

## Required YAML frontmatter

All Markdown docs (including this file) MUST start with frontmatter:

```yaml
---
title: Human-readable title
audience: installer | admin | manager | developer | user | ai-agent | mixed
status: current | outdated | deprecated | archived
role: guide | tutorial | reference | standard | plan | index | archive
personas: [installer-admin, managers-superusers, end-users, developers]
last_reviewed: YYYY-MM-DD
supersedes: optional/path/to/older-doc.md
superseded_by: optional/path/to/newer-doc.md
---
```

### Exceptions (no frontmatter)

| Path | Reason |
|------|--------|
| `.github/PULL_REQUEST_TEMPLATE.md` | GitHub inserts file body into PR descriptions |
| `.github/ISSUE_TEMPLATE/**` | Same — issue form bodies |
| `6_ai_runtime_context/AI_CONTEXT.md` | Auto-generated; regenerate via bootstrap scripts |

These exceptions MUST still be listed in the master index.

### Field rules

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | Display title |
| `audience` | yes | Primary reader |
| `status` | yes | `archived` docs live under `docs/archive/` |
| `role` | yes | Document purpose |
| `personas` | recommended | Cross-ref to persona guides |
| `last_reviewed` | recommended | Keep fresh when editing |
| `superseded_by` | for outdated/deprecated | Link to replacement |

## When to update docs

Update docs for any change that affects:

- Behavior visible to end users, managers, or admins
- Install, deploy, or environment configuration
- Local development / CI commands (`validate`, `e2e:ci`, etc.)
- Architecture, bootstrap, or dependency majors

## Deprecation & archive

1. Set `status: deprecated` or `outdated` and add `superseded_by`.
2. Move historical one-off reports/plans to `docs/archive/` with `status: archived`.
3. Do **not** delete historical migration/validation reports without leaving an archive entry linked from the master index.
4. Live guides must never recommend removed tooling (Karma, Protractor, TSLint, Angular 9).

## Persona cross-references

Persona guides live under `docs/personas/`. Every tutorial and ops guide should link the relevant personas at the top via a short **Who this is for** section.

## Tooling

- Browse app docs: `npm run docs` (hads over `./docs`)
- Keep coding guides aligned with Angular **22**, Vitest, Playwright, ESLint flat config
