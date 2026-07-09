"""Tests for agentic migration guardrails and registry."""

from __future__ import annotations

import pathlib
import subprocess
import sys

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT))


def test_decision_registry_loads():
    from agentic.registry import load_decision_registry, active_resurrection_keywords

    registry = load_decision_registry(REPO_ROOT)
    assert registry.get("decisions")
    keywords = active_resurrection_keywords(registry)
    assert len(keywords) > 0


def test_coordinate_validate_passes():
    result = subprocess.run(
        [sys.executable, "3_bootstrap_scripts/agentic_coordinate_validate.py", "--skip-scan"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stdout + result.stderr


def test_context_files_allowed_by_guardrail():
    import importlib.util

    module_path = REPO_ROOT / "3_bootstrap_scripts" / "guardrail_enforcement.py"
    spec = importlib.util.spec_from_file_location("guardrail_enforcement", module_path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)

    guardrails = {
        "forbid_folder_creation_outside_scope": True,
        "enforce_task_scope": True,
    }
    context_only = ["6_ai_runtime_context/ACTIVE_TASK_POINTER.yaml"]
    assert mod.forbid_folder_creation_outside_scope(guardrails, context_only) is True
    assert mod.enforce_task_scope(guardrails, context_only) is True
