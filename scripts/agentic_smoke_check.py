#!/usr/bin/env python3
"""
Agentic infrastructure smoke check — verifies migration artifacts are present and functional.

Usage:
    python scripts/agentic_smoke_check.py
"""

from __future__ import annotations

import importlib
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def check_path(rel: str) -> bool:
    path = REPO_ROOT / rel
    ok = path.exists()
    print(f"  [{'OK' if ok else 'FAIL'}] {rel}")
    return ok


def run_script(rel: str, *args: str) -> bool:
    cmd = [sys.executable, str(REPO_ROOT / rel), *args]
    result = subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True)
    ok = result.returncode == 0
    label = "OK" if ok else "FAIL"
    print(f"  [{label}] {rel} {' '.join(args)}")
    if not ok and result.stdout:
        print(result.stdout[:500])
    return ok


def main() -> int:
    print("[smoke] Checking required paths...")
    required = [
        "5_reference_architectures/DECISION_REGISTRY.yaml",
        "5_reference_architectures/DRIFT_VECTORS.yaml",
        "5_reference_architectures/WORKSPACE_SPINE_REGISTRY.yaml",
        "7_schemas/decision_registry.schema.json",
        ".cursor/rules/agentic-session.mdc",
        ".cursor/hooks.json",
        "docs/COMMIT_STRATEGY.md",
        "agentic/registry.py",
        "AGENTIC_UPGRADE_PLAN.md",
    ]
    paths_ok = all(check_path(p) for p in required)

    print("[smoke] Checking Python imports...")
    sys.path.insert(0, str(REPO_ROOT))
    try:
        importlib.import_module("agentic.registry")
        print("  [OK] import agentic.registry")
        imports_ok = True
    except ImportError as exc:
        print(f"  [FAIL] import agentic.registry: {exc}")
        imports_ok = False

    print("[smoke] Running validators (--skip-scan)...")
    validators_ok = run_script(
        "3_bootstrap_scripts/agentic_coordinate_validate.py", "--skip-scan"
    )

    print("[smoke] Regenerating AI context...")
    context_ok = run_script("3_bootstrap_scripts/generate_ai_context.py")

    all_ok = paths_ok and imports_ok and validators_ok and context_ok
    if all_ok:
        print("[smoke] OK: all agentic smoke checks passed")
        return 0
    print("[smoke] FAIL: one or more checks failed")
    return 1


if __name__ == "__main__":
    sys.exit(main())
