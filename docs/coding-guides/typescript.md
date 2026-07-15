---
title: TypeScript Coding Guide
audience: developer
status: current
role: guide
personas: [developers]
last_reviewed: 2026-07-15
---

# TypeScript coding guide

## Who this is for

[Developers](../personas/developers.md).

## Compiler / lint

- TypeScript **6** with `strict: true`, `strictNullChecks`, `noImplicitAny`, and Angular `strictTemplates` (see root `tsconfig.json` and `src/tsconfig.app.json`).
- Enforce style via **ESLint** (`ng lint`) — not TSLint/Codelyzer.

## Conventions

- Prefer explicit types on public APIs; avoid `any` unless bridging untyped Fineract payloads (narrow ASAP).
- Use `??` / optional chaining for `localStorage` and DOM lookups.
- File/class naming: match existing Angular style (`*.component.ts`, kebab-case selectors `mifosx-*`).

## Related

- [Angular guide](./angular.md)
- [Code style standard](../../1_global_standards/CODE_STYLE_GUIDE.md)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
