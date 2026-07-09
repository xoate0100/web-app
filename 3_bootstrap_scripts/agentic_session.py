#!/usr/bin/env python3
"""
L2.5 agentic session harness — simplified single-agent workflow.

Usage:
    python 3_bootstrap_scripts/agentic_session.py session-start
    python 3_bootstrap_scripts/agentic_session.py pre-commit-review
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def _run(script: str, *args: str) -> int:
    cmd = [sys.executable, str(REPO_ROOT / "3_bootstrap_scripts" / script), *args]
    return subprocess.call(cmd, cwd=REPO_ROOT)


def session_start() -> int:
    print("[agentic-session] Starting L2.5 session...")
    rc = _run("generate_ai_context.py")
    if rc != 0:
        return rc
    rc = _run("check_context_staleness.py")
    if rc not in (0,):
        print("[agentic-session] WARN: context staleness check returned", rc)
    rc = _run("governance_drift_validate.py")
    if rc != 0:
        return rc
    print("[agentic-session] OK: context refreshed, governance consistent")
    print("[agentic-session] Read: 6_ai_runtime_context/AI_CONTEXT.md")
    print("[agentic-session] Read: 6_ai_runtime_context/ACTIVE_PLAN.yaml")
    return 0


def pre_commit_review() -> int:
    print("[agentic-session] Running pre-commit review pipeline...")
    for script in ("resurrection_scan.py", "drift_vector_check.py"):
        rc = _run(script)
        if rc != 0:
            print(f"[agentic-session] FAIL: {script} returned {rc}")
            return rc
    print("[agentic-session] OK: resurrection and drift scans passed")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="L2.5 agentic session harness")
    sub = parser.add_subparsers(dest="cmd", required=True)

    sub.add_parser("session-start", help="Refresh AI context and validate governance")
    sub.add_parser("pre-commit-review", help="Run resurrection + drift scans on staged diff")

    args = parser.parse_args()
    if args.cmd == "session-start":
        return session_start()
    if args.cmd == "pre-commit-review":
        return pre_commit_review()
    return 1


if __name__ == "__main__":
    sys.exit(main())
