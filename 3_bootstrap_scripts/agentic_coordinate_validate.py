#!/usr/bin/env python3
"""
Master agentic coordination validator — L2.5 subset (no multi-agent registry).

Usage:
    python 3_bootstrap_scripts/agentic_coordinate_validate.py
    python 3_bootstrap_scripts/agentic_coordinate_validate.py --skip-scan
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

VALIDATORS = [
    "decision_registry_validate.py",
    "drift_vectors_validate.py",
    "workspace_spine_validate.py",
    "governance_drift_validate.py",
]

SCANS = [
    "resurrection_scan.py",
    "drift_vector_check.py",
]


def run_script(name: str, extra: list[str] | None = None) -> int:
    script = REPO_ROOT / "3_bootstrap_scripts" / name
    if not script.exists():
        print(f"[agentic-validate] FAIL: missing {script}")
        return 1
    cmd = [sys.executable, str(script), *(extra or [])]
    result = subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout.rstrip())
    if result.stderr:
        print(result.stderr.rstrip(), file=sys.stderr)
    return result.returncode


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-scan", action="store_true", help="Skip diff scans (validators only)")
    args = parser.parse_args()

    exit_code = 0
    for validator in VALIDATORS:
        code = run_script(validator)
        if code != 0:
            exit_code = code

    if not args.skip_scan:
        for scan in SCANS:
            code = run_script(scan)
            if code != 0:
                exit_code = code

    if exit_code == 0:
        print("[agentic-validate] OK: all agentic validators passed")
    else:
        print("[agentic-validate] FAIL: one or more agentic checks failed")
    return exit_code


if __name__ == "__main__":
    sys.exit(main())
