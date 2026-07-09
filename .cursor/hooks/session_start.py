#!/usr/bin/env python3
"""Cursor sessionStart hook — refresh AI context and validate governance."""

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

    result = subprocess.run(
        [sys.executable, "3_bootstrap_scripts/agentic_session.py", "session-start"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        timeout=120,
    )

    context = (
        "MifosX agentic session initialized (L2.5 single-agent).\n"
        "Read 6_ai_runtime_context/AI_CONTEXT.md and ACTIVE_PLAN.yaml.\n"
    )
    if result.stdout:
        context += result.stdout[:4000]

    print(json.dumps({"continue": True, "additional_context": context[:8000]}))
    return 0


if __name__ == "__main__":
    sys.exit(main())
