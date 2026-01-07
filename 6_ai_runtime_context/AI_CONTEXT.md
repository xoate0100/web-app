# AI Execution Context - Auto-Generated
**Generated:** 2026-01-07 01:28:06
**Authority:** `0_phase0_bootstrap/AI_SANDBOX_RULES.md`
**Purpose:** Consolidated constraint context for AI chat sessions

---
## Current State Context
**Plan:** angular-modernization-upgrade
**Component:** frontend
**Current Task:** 3 - Migrate from TSLint to ESLint
**Status:** active
**Next Task:** 4 - Upgrade Angular 9 -> 10

**Blocking Issues:** None

---
## Sandbox Rules
### Allowed
- Read `6_ai_runtime_context/ACTIVE_PLAN.yaml` and execute tasks sequentially.
- Write/refactor/delete only in: `src/`, `docs/`, `scripts/`, `e2e/`, `4_docs_index/`.
- Run and fix pre-commit failures autonomously.
- Commit autonomously **only** if all pre-commit hooks pass.

### Forbidden
- Editing any files in: `0_phase0_bootstrap/`, `1_global_standards/`, `7_schemas/`, `.github/`, `8_ci/`, `5_reference_architectures/`.
- Changing governance, CI/CD, or feature flags.
- Pushing to protected branches (PRs only).

**Reference:** `0_phase0_bootstrap/AI_SANDBOX_RULES.md`

---
## Feature Flags
### Enabled Permissions
- **agentic_write_ops**: Enabled
- **guardrail_enforce_solid_principles**: Enabled
- **guardrail_enforce_task_scope**: Enabled
- **guardrail_enforce_tdd_cycle**: Enabled
- **guardrail_forbid_folder_creation_outside_scope**: Enabled
- **guardrail_require_commit_plan_tags**: Enabled
- **guardrail_require_doc_sync**: Enabled
- **human_review_required_for_merge**: Enabled
- **write_paths**: Enabled

### Disabled Permissions
- **modify_meta_framework**: Disabled

**Reference:** `0_phase0_bootstrap/feature_flags.yml`

---
## Current Task Context
**Task 3:** Migrate from TSLint to ESLint
**Outputs:**
- .eslintrc.json
- package.json (ESLint deps)
- Remove tslint.json

**Full Plan:** See `6_ai_runtime_context/ACTIVE_PLAN.yaml`

---
## Enforcement Tools Available
- **ai_behavior_validation.py**: Enforcement tool: ai_behavior_validation.py
- **ai_reasoning_tuner.py**: Enforcement tool: ai_reasoning_tuner.py
- **ai_review.py**: Enforcement tool: ai_review.py
- **architecture_check.py**: Enforcement tool: architecture_check.py
- **check_context_staleness.py**: Enforcement tool: check_context_staleness.py
- **check_large_changeset.py**: Enforcement tool: check_large_changeset.py
- **check_template_updates.py**: Enforcement tool: check_template_updates.py
- **cli.py**: Enforcement tool: cli.py
- **commit_validator.py**: Main commit validation function"""
- **complexity_check.py**: Enforcement tool: complexity_check.py
- **docs_sync.py**: Enforcement tool: docs_sync.py
- **drift_analyzer.py**: Enforcement tool: drift_analyzer.py
- **enforce_format.py**: Enforcement tool: enforce_format.py
- **feedback_collector.py**: Enforcement tool: feedback_collector.py
- **feedback_logger.py**: Enforcement tool: feedback_logger.py
- **gate_enforcement.py**: Enforcement tool: gate_enforcement.py
- **guardrail_enforcement.py**: Enforcement tool: guardrail_enforcement.py
- **init_project.py**: Enforcement tool: init_project.py
- **init_versioning.py**: Enforcement tool: init_versioning.py
- **init_wizard.py**: Enforcement tool: init_wizard.py
- **layout_adaptor.py**: Enforcement tool: layout_adaptor.py
- **performance_scan.py**: Main performance scan function"""
- **schema_enforcement.py**: Enforcement tool: schema_enforcement.py
- **security_scan.py**: Enforcement tool: security_scan.py
- **standardized_feedback.py**: Enforcement tool: standardized_feedback.py
- **static_analysis.py**: Enforcement tool: static_analysis.py
- **sync_standards.py**: Enforcement tool: sync_standards.py
- **template_update.py**: Enforcement tool: template_update.py
- **tests_coverage.py**: Enforcement tool: tests_coverage.py
- **traceability_graph.py**: Enforcement tool: traceability_graph.py
- **upgrade_legacy_project.py**: Enforcement tool: upgrade_legacy_project.py
- **validate_syntax.py**: Enforcement tool: validate_syntax.py

**Location:** `3_bootstrap_scripts/`

---
## Architecture Rules
### Component Boundaries
- **frontend**:
  - May import: shared
  - Forbidden imports: backend
- **backend**:
  - May import: shared
  - Forbidden imports: frontend
- **shared**:
  - Forbidden imports: frontend, backend

### Layer Rules
- **api**: ['domain']
- **domain**: ['infra']
- **infra**: []

**Reference:** `5_reference_architectures/LAYER_RULES.yaml`

---
## Reference Documents
For complete details, see:

1. **`0_phase0_bootstrap/AI_SANDBOX_RULES.md`** - Sandbox execution rules
2. **`0_phase0_bootstrap/feature_flags.yml`** - Feature flags and permissions
3. **`6_ai_runtime_context/ACTIVE_PLAN.yaml`** - Current plan and tasks
4. **`6_ai_runtime_context/ACTIVE_TASK_POINTER.yaml`** - Current task pointer
5. **`5_reference_architectures/LAYER_RULES.yaml`** - Architecture boundaries
6. **`1_global_standards/`** - Code standards (TDD, SOLID, etc.)

---
## Usage Instructions
**For AI Agents:**
1. Load this document first in new chat sessions
2. Reference authoritative documents for complete details
3. Use enforcement tools listed above for validation
4. Regenerate if state/flags change during session

**For Human Operators:**
- Auto-regenerates on state/flag changes
- Pre-commit hook warns if stale
- Manual: `python 3_bootstrap_scripts/generate_ai_context.py`

---

**Last Generated:** 2026-01-07 01:28:06
**Generator:** `3_bootstrap_scripts/generate_ai_context.py`
