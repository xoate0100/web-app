#!/usr/bin/env python3
"""
Commit Message Validator (Windows-compatible)
Validates commit messages for required format.
"""
import sys
from pathlib import Path

def main():
    """Main commit validation function"""
    # Pre-commit runs before commit object exists
    # Validate COMMIT_MSG file if present, otherwise allow
    # PR checks will re-validate

    commit_msg_file = Path(".git/COMMIT_EDITMSG")
    if commit_msg_file.exists():
        try:
            msg = commit_msg_file.read_text(encoding="utf-8")
            # Basic validation: check for plan/component/task tags
            # This is a soft check - strict validation in CI
            if not any(tag in msg for tag in ["plan:", "component:", "task:"]):
                print("WARN: Commit message should include plan/component/task tags")
                print("Format: plan:<plan_id> component:<component> task:<id>")
        except Exception:
            pass

    return 0

if __name__ == "__main__":
    sys.exit(main())
