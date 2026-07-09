#!/usr/bin/env python3
"""Cursor beforeShellExecution hook — run pre-commit-review before git commit."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]


def main() -> int:
    try:
        payload = json.load(sys.stdin)
    except Exception:
        payload = {}

    command = payload.get("command", "")
    if "commit" not in command.lower():
        print(json.dumps({"permission": "allow"}))
        return 0

    if "--no-verify" in command:
        print(json.dumps({
            "permission": "deny",
            "user_message": "Do not use --no-verify. Fix hooks or update governance per docs/COMMIT_STRATEGY.md.",
        }))
        return 0

    result = subprocess.run(
        [sys.executable, "3_bootstrap_scripts/agentic_session.py", "pre-commit-review"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        timeout=180,
    )

    if result.returncode != 0:
        msg = result.stdout or result.stderr or "pre-commit-review failed"
        print(json.dumps({
            "permission": "deny",
            "user_message": f"Agentic pre-commit-review failed:\n{msg[:2000]}",
        }))
        return 0

    print(json.dumps({"permission": "allow"}))
    return 0


if __name__ == "__main__":
    sys.exit(main())
