---
title: TDD and Test Strategy
audience: developer
status: current
role: standard
personas: [developers]
last_reviewed: 2026-07-15
---

# TDD & test strategy

**Who this is for:** [developers](../docs/personas/developers.md).

## Cycle

Red → Green → Refactor → Document (update docs when behavior changes).

## This SPA

| Layer | Tool | Command |
|-------|------|---------|
| Unit / component | Vitest via Angular test builder | `npm run test:ci` |
| E2E | Playwright | `npm run e2e:ci` |
| Full gate | Lint + unit + build + e2e | `npm run validate:all` |

## Guidance

- Prefer meaningful assertions for new code; expand beyond smoke `toBeDefined()` specs where practical.
- E2E tests in CI use **API mocks** — do not require a live Fineract for `e2e:ci`.
- Meta-framework coverage percentages in historical agentic docs are aspirational for the full product surface; treat `validate:all` as the merge bar for this repository.
- Coding details: [Unit tests](../docs/coding-guides/unit-tests.md) · [E2E](../docs/coding-guides/e2e-tests.md)
