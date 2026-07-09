#!/usr/bin/env python3
"""Cursor stop hook — remind agent to complete task loop if work may be done."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]


def main() -> int:
    try:
        json.load(sys.stdin)
    except Exception:
        pass

    follow_up = (
        "If you completed an ACTIVE_PLAN task: run "
        "`python 3_bootstrap_scripts/advance_task_pointer.py --complete` and "
        "`python 3_bootstrap_scripts/cli.py commit-checkpoint`."
    )

    subprocess.run(
        [sys.executable, "3_bootstrap_scripts/check_large_changeset.py"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        timeout=60,
    )

    print(json.dumps({"followup_message": follow_up}))
    return 0


if __name__ == "__main__":
    sys.exit(main())
