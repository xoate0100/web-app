#!/usr/bin/env python3
"""
Advance ACTIVE_TASK_POINTER after verifying current task deliverables exist.

Usage:
    python 3_bootstrap_scripts/advance_task_pointer.py --complete
    python 3_bootstrap_scripts/advance_task_pointer.py --set 4
"""

from __future__ import annotations

import argparse
import pathlib
import sys
from datetime import datetime, timezone

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent

try:
    import yaml
except ImportError:
    print("[task-pointer] ERROR: PyYAML required")
    sys.exit(1)

PLAN_PATH = REPO_ROOT / "6_ai_runtime_context" / "ACTIVE_PLAN.yaml"
POINTER_PATH = REPO_ROOT / "6_ai_runtime_context" / "ACTIVE_TASK_POINTER.yaml"


def load_yaml(path: pathlib.Path) -> dict:
    with open(path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle) or {}
    return data if isinstance(data, dict) else {}


def save_yaml(path: pathlib.Path, data: dict) -> None:
    path.write_text(yaml.dump(data, default_flow_style=False, sort_keys=False), encoding="utf-8")


def find_task(plan: dict, task_id: int) -> dict | None:
    for task in plan.get("tasks") or []:
        if isinstance(task, dict) and task.get("id") == task_id:
            return task
    return None


def check_deliverables(task: dict) -> list[str]:
    missing: list[str] = []
    for output in task.get("outputs") or []:
        if not isinstance(output, str):
            continue
        path = REPO_ROOT / output
        if not path.exists():
            missing.append(output)
    return missing


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--complete", action="store_true", help="Mark current task complete and advance")
    parser.add_argument("--set", type=int, metavar="ID", help="Set current task to ID")
    args = parser.parse_args()

    if not POINTER_PATH.exists() or not PLAN_PATH.exists():
        print("[task-pointer] FAIL: ACTIVE_PLAN or ACTIVE_TASK_POINTER missing")
        return 1

    plan = load_yaml(PLAN_PATH)
    pointer = load_yaml(POINTER_PATH)
    current = pointer.get("current_task")

    if args.set is not None:
        pointer["current_task"] = args.set
        pointer["status"] = "in_progress"
        pointer["last_run"] = datetime.now(timezone.utc).isoformat()
        save_yaml(POINTER_PATH, pointer)
        print(f"[task-pointer] OK: set current_task to {args.set}")
        return 0

    if not args.complete:
        print("[task-pointer] FAIL: specify --complete or --set")
        return 1

    if current is None:
        print("[task-pointer] FAIL: no current_task in pointer")
        return 1

    task = find_task(plan, current)
    if not task:
        print(f"[task-pointer] FAIL: task {current} not found in ACTIVE_PLAN")
        return 1

    missing = check_deliverables(task)
    if missing:
        print(f"[task-pointer] FAIL: missing deliverables for task {current}:")
        for m in missing:
            print(f"  - {m}")
        return 1

    tasks = plan.get("tasks") or []
    next_task_id = None
    for i, t in enumerate(tasks):
        if isinstance(t, dict) and t.get("id") == current and i + 1 < len(tasks):
            nxt = tasks[i + 1]
            if isinstance(nxt, dict):
                next_task_id = nxt.get("id")
            break

    if next_task_id is not None:
        pointer["current_task"] = next_task_id
        pointer["status"] = "in_progress"
    else:
        pointer["status"] = "done"
        pointer["current_task"] = None

    pointer["last_run"] = datetime.now(timezone.utc).isoformat()
    save_yaml(POINTER_PATH, pointer)
    print(f"[task-pointer] OK: task {current} complete; pointer updated")
    return 0


if __name__ == "__main__":
    sys.exit(main())
