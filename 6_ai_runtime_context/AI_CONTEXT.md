# AI Execution Context - Auto-Generated
**Generated:** 2026-07-09 12:47:07
**Authority:** `0_phase0_bootstrap/AI_SANDBOX_RULES.md`
**Purpose:** Consolidated constraint context for AI chat sessions

---
## Current State Context
**Plan:** angular-modernization-upgrade
**Component:** frontend
**Status:** active
**Next Task:** 1 - Pre-upgrade assessment and preparation

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
**No active task**

**Full Plan:** See `6_ai_runtime_context/ACTIVE_PLAN.yaml`

---
## Enforcement Tools Available
- **advance_task_pointer.py**: Enforcement tool: advance_task_pointer.py
- **agentic_coordinate_validate.py**: Enforcement tool: agentic_coordinate_validate.py
- **agentic_session.py**: Enforcement tool: agentic_session.py
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
- **decision_registry_validate.py**: Enforcement tool: decision_registry_validate.py
- **docs_sync.py**: Enforcement tool: docs_sync.py
- **drift_analyzer.py**: Enforcement tool: drift_analyzer.py
- **drift_vector_check.py**: Enforcement tool: drift_vector_check.py
- **drift_vectors_validate.py**: Enforcement tool: drift_vectors_validate.py
- **enforce_format.py**: Enforcement tool: enforce_format.py
- **feedback_collector.py**: Enforcement tool: feedback_collector.py
- **feedback_logger.py**: Enforcement tool: feedback_logger.py
- **gate_enforcement.py**: Enforcement tool: gate_enforcement.py
- **governance_drift_validate.py**: Enforcement tool: governance_drift_validate.py
- **guardrail_enforcement.py**: Enforcement tool: guardrail_enforcement.py
- **init_project.py**: Enforcement tool: init_project.py
- **init_versioning.py**: Enforcement tool: init_versioning.py
- **init_wizard.py**: Enforcement tool: init_wizard.py
- **layout_adaptor.py**: Enforcement tool: layout_adaptor.py
- **performance_scan.py**: Main performance scan function"""
- **resurrection_scan.py**: Enforcement tool: resurrection_scan.py
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
- **workspace_spine_validate.py**: Enforcement tool: workspace_spine_validate.py

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
## Settled Decisions (summary)
Do not resurrect these without following `reopen_requires` in the registry.

- **DEC-0001-ANGULAR-STACK** (accepted): Remain on Angular for the MifosX web application. Incremental modernization (Angular 9→18+) rather than a framework rewr
- **DEC-0002-INCREMENTAL-UPGRADE** (accepted): Upgrade Angular incrementally (version-by-version) following ACTIVE_PLAN.yaml tasks. Avoid big-bang rewrites that risk b
- **DEC-0003-META-FRAMEWORK** (accepted): Keep project_initializer meta-framework integrated (numbered dirs 0_–8_, pre-commit guardrails, AI runtime context). Age
- **DEC-0004-FINERACT-EXTERNAL-BACKEND** (accepted): Backend is external Apache Fineract accessed via REST API (proxy.conf.js). No in-repo backend service layer. Frontend-on
- **DEC-0005-AGENTIC-MIGRATION** (accepted): Agentic architecture follows L2.5 single-agent sandbox with decision registry, drift vectors, and Cursor rules/hooks ada

**Reference:** `5_reference_architectures/DECISION_REGISTRY.yaml`

---
## Reference Documents
For complete details, see:

1. **`0_phase0_bootstrap/AI_SANDBOX_RULES.md`** - Sandbox execution rules
2. **`0_phase0_bootstrap/feature_flags.yml`** - Feature flags and permissions
3. **`6_ai_runtime_context/ACTIVE_PLAN.yaml`** - Current plan and tasks
4. **`6_ai_runtime_context/ACTIVE_TASK_POINTER.yaml`** - Current task pointer
5. **`5_reference_architectures/LAYER_RULES.yaml`** - Architecture boundaries
6. **`5_reference_architectures/DECISION_REGISTRY.yaml`** - Settled decisions
7. **`1_global_standards/`** - Code standards (TDD, SOLID, etc.)

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

**Last Generated:** 2026-07-09 12:47:07
**Generator:** `3_bootstrap_scripts/generate_ai_context.py`
