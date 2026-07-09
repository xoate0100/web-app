# Commit Strategy and Frequency

Commit frequency and message format for the MifosX web application. See also `META_FRAMEWORK_INTEGRATION.md` and `0_phase0_bootstrap/AI_SANDBOX_RULES.md`.

**Do not use `git commit --no-verify`.** If hooks block your commit, update feature flags, permissions, plan scope, or fix the underlying issue.

---

## Commit frequency

- **Incremental commits:** Commit after each logical unit (e.g. every 3–5 tasks or at phase boundaries).
- **Large changeset:** If >20 files changed since last commit, pre-commit warns; prefer smaller commits.
- **Checkpoints:** Use `python 3_bootstrap_scripts/cli.py commit-checkpoint "message"` so plan/task tags are appended from `ACTIVE_PLAN.yaml` and `ACTIVE_TASK_POINTER.yaml`.

---

## Commit message format

- **Required:** Include `plan:<plan_id> component:<component> task:<id>` (e.g. `plan: angular-modernization-upgrade component: frontend task: 3`).
- The checkpoint script appends these tags if you omit them.

---

## Agentic pre-commit review

Before committing agent work:

```bash
python 3_bootstrap_scripts/agentic_session.py pre-commit-review
python 3_bootstrap_scripts/cli.py commit-checkpoint "your message"
```

This runs resurrection and drift vector scans against the staged diff.

---

## When hooks block your commit

1. **Identify the failing hook** (e.g. guardrail-enforcement, tests-and-coverage, resurrection-scan).
2. **Prefer one of:**
   - **Plan scope:** Update `ACTIVE_PLAN.yaml` task `outputs` or `ACTIVE_TASK_POINTER.yaml` so staged files are in scope.
   - **Tests:** Add co-staged `*.spec.ts` files per TDD requirements.
   - **Governance:** Align `AI_SANDBOX_RULES.md` with `feature_flags.yml` (human-only change).
   - **Decision proposals:** Use `6_ai_runtime_context/proposals/` for registry changes.
3. **Document the change** in the commit message with plan/task tags.

---

## References

- `0_phase0_bootstrap/AI_SANDBOX_RULES.md` — Allowed/forbidden, TDD, SOLID
- `6_ai_runtime_context/ACTIVE_PLAN.yaml` — Current modernization plan
- `5_reference_architectures/DECISION_REGISTRY.yaml` — Settled architectural decisions
- `AGENTIC_UPGRADE_PLAN.md` — Agentic migration status
