#!/usr/bin/env python3
"""
Commit checkpoint — validate hooks and commit with plan/task tags (Windows-compatible).

Usage:
    python scripts/commit_checkpoint.py [optional commit message]
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def _run(cmd: list[str], *, check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True, check=check)


def _load_plan_tags() -> tuple[str, str, str]:
    plan_id, component, task_id = "unknown", "shared", "1"
    try:
        import yaml
    except ImportError:
        return plan_id, component, task_id

    plan_path = REPO_ROOT / "6_ai_runtime_context" / "ACTIVE_PLAN.yaml"
    pointer_path = REPO_ROOT / "6_ai_runtime_context" / "ACTIVE_TASK_POINTER.yaml"

    if plan_path.exists():
        plan = yaml.safe_load(plan_path.read_text(encoding="utf-8")) or {}
        plan_id = str(plan.get("plan_id", plan_id))
        component = str(plan.get("component", component))

    if pointer_path.exists():
        pointer = yaml.safe_load(pointer_path.read_text(encoding="utf-8")) or {}
        task_id = str(pointer.get("current_task", task_id))

    return plan_id, component, task_id


def main() -> int:
    print("[commit-checkpoint] Starting commit checkpoint process...")

    if _run(["git", "rev-parse", "--git-dir"], check=False).returncode != 0:
        print("[commit-checkpoint] Error: Not in a git repository")
        return 1

    staged = _run(["git", "diff", "--cached", "--name-only"], check=False).stdout.strip()
    if not staged:
        print("[commit-checkpoint] Warning: No staged files. Nothing to commit.")
        return 0

    staged_count = len([line for line in staged.splitlines() if line.strip()])
    print(f"[commit-checkpoint] Found {staged_count} staged file(s)")

    plan_id, component, task_id = _load_plan_tags()

    print("[commit-checkpoint] Running pre-commit hooks...")
    pre_commit = _run([sys.executable, "-m", "pre_commit", "run", "--hook-stage", "commit"], check=False)
    if pre_commit.returncode != 0:
        if "No module named pre_commit" in (pre_commit.stderr or ""):
            print("[commit-checkpoint] Warning: pre-commit not installed. Skipping hook validation.")
        else:
            print(pre_commit.stdout or "")
            print(pre_commit.stderr or "", file=sys.stderr)
            print("[commit-checkpoint] Error: Pre-commit hooks failed. Fix issues before committing.")
            return 1
    else:
        if pre_commit.stdout:
            print(pre_commit.stdout.rstrip())

    user_msg = " ".join(sys.argv[1:]).strip()
    tags = f"plan:{plan_id} component:{component} task:{task_id}"
    if user_msg:
        commit_msg = user_msg if "plan:" in user_msg else f"{user_msg}\n\n{tags}"
    else:
        commit_msg = f"feat: checkpoint commit\n\n{tags}"

    print("[commit-checkpoint] Committing with message...")
    print(f"[commit-checkpoint] Message: {commit_msg}")
    commit = _run(["git", "commit", "-m", commit_msg], check=False)
    if commit.returncode != 0:
        print(commit.stderr or commit.stdout or "[commit-checkpoint] Error: Commit failed")
        return 1

    head = _run(["git", "rev-parse", "--short", "HEAD"], check=False).stdout.strip()
    print(f"[commit-checkpoint] Commit successful")
    print(f"[commit-checkpoint] Commit hash: {head}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
