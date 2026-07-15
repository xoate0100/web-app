# Decision Proposals

Place proposed `DECISION_REGISTRY.yaml` rows here before merging into the canonical registry.

## Workflow

1. Create `DEC-NNNN-SLUG.yaml` with a single decision row (see schema in `7_schemas/decision_registry.schema.json`).
2. Validate the merge:
   ```bash
   python 3_bootstrap_scripts/decision_registry_validate.py --propose 6_ai_runtime_context/proposals/DEC-NNNN-SLUG.yaml
   ```
3. After human review, apply the row to `5_reference_architectures/DECISION_REGISTRY.yaml`.

Agents must **not** edit the canonical registry directly.
