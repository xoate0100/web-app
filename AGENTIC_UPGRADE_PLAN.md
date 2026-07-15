# Agentic Architecture Upgrade Plan

**Repository:** mifosx-web-app (Angular 9 Fineract SPA)  
**Migration date:** 2026-07-09  
**Reference projects:** [Kiwi_Platform](https://github.com/xoate0100/Kiwi_Platform), [project_initializer](https://github.com/xoate0100/project_initializer)  
**Status:** Complete (verification passed)

---

## Current State Summary

| Aspect | Detail |
|--------|--------|
| **Stack** | Angular 9.1, TypeScript 3.8, npm, Karma/Jasmine, Protractor, TSLint |
| **Meta-framework** | project_initializer v1.4.0 integrated (L2.5 sandbox) — numbered dirs `0_`–`8_`, Python pre-commit stack |
| **Agent mode** | Single-agent sandbox (`cursor_agent_mode: sandboxed`) |
| **Active plan** | `angular-modernization-upgrade` — task 3 (TSLint→ESLint) in progress |
| **CI** | `.github/workflows/build.yml` — lint + prod build + gh-pages deploy only |
| **Cursor integration** | `.cursor/rules/` + `.cursor/hooks.json` deployed (L2.5 adapted) |
| **Decision registry** | `5_reference_architectures/DECISION_REGISTRY.yaml` — 5 decisions |
| **Drift vectors** | `5_reference_architectures/DRIFT_VECTORS.yaml` — 8 vectors |
| **Multi-agent graph** | Deferred — L2.5 uses simplified `agentic_session.py` harness |

---

## Pattern Inventory → Gap Analysis

| Pattern | Present | Proposed Adaptation | Risk | Status |
|---------|---------|---------------------|------|--------|
| Numbered meta-framework dirs (`0_`–`8_`) | ✅ Present | Keep as-is | Low | verified |
| `feature_flags.yml` permissions + `ai_guardrails` | ✅ Present | No change | Low | verified |
| `AI_SANDBOX_RULES.md` + execution constraints | ✅ Present | No change | Low | verified |
| Pre-commit hook stack (17 local hooks) | ✅ Present | Added agentic registry validators + scans | Medium | verified |
| `ACTIVE_PLAN.yaml` + `ACTIVE_TASK_POINTER.yaml` | ✅ Present | Added `advance_task_pointer.py` | Low | verified |
| `AI_CONTEXT.md` auto-generation | ✅ Present | Extended with decision registry summary | Low | verified |
| JSON schemas (`7_schemas/`) | ✅ Extended | decision/drift/spine schemas added | Low | verified |
| **Decision registry** | ✅ Added | 5 Angular/meta-framework decisions | Low | verified |
| **Drift vectors** | ✅ Added | 8 stack-agnostic anti-patterns | Low | verified |
| **Workspace spine registry** | ✅ Added | Meta-registry cataloging 4 registries | Low | verified |
| **Resurrection scan** | ✅ Added | Staged diff keyword guard | Low | verified |
| **Drift vector check** | ✅ Added | Anti-pattern grep on diffs | Low | verified |
| **Governance drift validate** | ✅ Added | Sandbox vs feature_flags cross-check | Low | verified |
| **Agentic coordinate validate** | ✅ Added | L2.5 subset master validator | Low | verified |
| **`agentic/` Python package** | ✅ Added | registry loader + diff_utils | Low | verified |
| **`.cursor/rules/`** | ✅ Deployed | L2.5 session + commit rules | Low | verified |
| **`.cursor/hooks.json`** | ✅ Deployed | sessionStart, stop, beforeShellExecution | Medium | verified |
| **`docs/COMMIT_STRATEGY.md`** | ✅ Added | Referenced by sandbox rules | Low | verified |
| **Proposals workflow** | ✅ Added | `6_ai_runtime_context/proposals/` | Low | verified |
| **Multi-agent graph** (`AGENT_REGISTRY.yaml`) | ❌ Deferred | L3 upgrade path documented | N/A | deferred |
| **Knowledge RAG index** | ❌ Deferred | Low ROI for established Angular SPA | N/A | deferred |
| **CI agentic guardrails** | ⚠️ Template | `8_ci/agentic_checks.yml` — see REQUIRES HUMAN REVIEW | High | verified (template) |
| **ESLint migration** | ❌ Pending | ACTIVE_PLAN task 3 — separate track | Medium | deferred |
| **Prettier / Husky** | ❌ Deferred | Python pre-commit stack sufficient | Low | deferred |

---

## Analogies (Reference → This Repo)

| Reference Pattern | This Repo Equivalent |
|-------------------|---------------------|
| Kiwi 5-role agent graph | L2.5 single Cursor agent + `agentic_session.py` |
| `KIWI_AGENTIC_LIVE_ENABLED` live gate | Not needed — no external live tools |
| `data/age_tiers.yaml` config layer | `src/environments/` + `proxy.conf.js` |
| `frontend/backend/shared` components | `frontend` (src/app) + `shared`; backend is external Fineract |
| Kiwi `pr_checks.yml` 6-job CI | `8_ci/agentic_checks.yml` template |
| `docs/MASTER_INDEX.md` | `4_docs_index/DOCUMENTATION_INDEX.md` |
| Godot/Rust engine decisions | Angular incremental upgrade decisions |

---

## Ordered Execution Plan

| # | Item | Verification | Status |
|---|------|--------------|--------|
| 1 | Create `AGENTIC_UPGRADE_PLAN.md` | File exists, complete | done → verified |
| 2 | Add `7_schemas/` for decision, drift, workspace spine | jsonschema validates YAML | done → verified |
| 3 | Add `DECISION_REGISTRY.yaml` | `decision_registry_validate.py` passes (5 decisions) | done → verified |
| 4 | Add `DRIFT_VECTORS.yaml` | `drift_vectors_validate.py` passes (8 vectors) | done → verified |
| 5 | Add `WORKSPACE_SPINE_REGISTRY.yaml` | `workspace_spine_validate.py` passes | done → verified |
| 6 | Add minimal `agentic/` package | `import agentic.registry` succeeds | done → verified |
| 7 | Add bootstrap scripts | coordinate validate exits 0 | done → verified |
| 8 | Update `.pre-commit-config.yaml` | 6 new hooks added | done → verified |
| 9 | Deploy `.cursor/rules/` + hooks | Files present, session-start OK | done → verified |
| 10 | Add `docs/COMMIT_STRATEGY.md` | Path resolves | done → verified |
| 11 | Add `6_ai_runtime_context/proposals/README.md` | Directory exists | done → verified |
| 12 | Extend `generate_ai_context.py` + `cli.py` | generate-context + `cli.py agentic validate` OK | done → verified |
| 13 | Add `scripts/agentic_smoke_check.py` | Exits 0 | done → verified |
| 14 | Add `8_ci/agentic_checks.yml` template | YAML valid | done → verified |
| 15 | Full verification pass | smoke check + coordinate validate passed | done → verified |

**Note:** `npm run lint` not run — `ng` CLI unavailable in verification environment. Agentic infrastructure verified independently.

---

## REQUIRES HUMAN REVIEW

| Change | Reason | Location |
|--------|--------|----------|
| Modify `build.yml` deploy step | Alters CI/CD deployment behavior (gh-pages) | `.github/workflows/build.yml` |
| Enable blocking agentic CI | Changes PR merge requirements | Copy `8_ci/agentic_checks.yml` → `.github/workflows/` |
| Modify `feature_flags.yml` permissions | Governance / agent write boundaries | `0_phase0_bootstrap/feature_flags.yml` |
| Modify `AI_SANDBOX_RULES.md` | Governance document | `0_phase0_bootstrap/` |

**To enable agentic CI:** Copy `8_ci/agentic_checks.yml` to `.github/workflows/agentic-checks.yml` and add as required check in branch protection.

---

## Deferred Patterns

| Pattern | Why Deferred |
|---------|--------------|
| Full `AGENT_REGISTRY.yaml` + graph executor | L2.5 single-agent maturity |
| Knowledge RAG | Low ROI for established Angular codebase |
| ESLint migration | ACTIVE_PLAN task 3 |
| Prettier / Husky / lint-staged | Python pre-commit sufficient |
| Hub auto-fix workflows | Requires hub credentials |

---

## Idempotency

Re-running this migration detects existing artifacts and skips duplicates:
- Registries/schemas: validators pass without re-creation
- `.cursor/` rules/hooks: overwrite-safe (same content)
- Pre-commit hooks: appended only if missing (manual reconcile if diverged)
- `AGENTIC_UPGRADE_PLAN.md`: update status section only

---

## Migration Decisions

Recorded in `5_reference_architectures/DECISION_REGISTRY.yaml`:

| ID | Summary |
|----|---------|
| DEC-0001-ANGULAR-STACK | Stay on Angular; no React/Vue rewrite |
| DEC-0002-INCREMENTAL-UPGRADE | Version-by-version upgrade, no big-bang |
| DEC-0003-META-FRAMEWORK | Keep project_initializer governance |
| DEC-0004-FINERACT-EXTERNAL-BACKEND | No in-repo backend |
| DEC-0005-AGENTIC-MIGRATION | L2.5 agentic patterns from Kiwi, adapted |

---

*Last updated: 2026-07-09 — migration complete*
