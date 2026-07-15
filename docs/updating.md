---
title: Updating Dependencies
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
---

# Updating dependencies

**Who this is for:** [developers](./personas/developers.md).

## Routine bumps

```bash
npm outdated
npm install <package>@<version>
npm ci   # verify clean install from lockfile
npm run validate:all
```

Always commit `package-lock.json` with dependency changes.

## Angular major / CLI

Prefer the Angular update guide and schematics:

```bash
npx ng update @angular/core@22 @angular/cli@22
```

Record architectural migrations in docs (see [MAJOR_MIGRATION_PLAN.md](./MAJOR_MIGRATION_PLAN.md)). Do **not** follow archived Angular 9 plans under [archive/](./archive/).

## After upgrading

1. `npm run validate:all`
2. Update coding guides / README stack table if versions or commands change
3. Touch [Master Documentation Index](../4_docs_index/DOCUMENTATION_INDEX.md) if paths change
