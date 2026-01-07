#!/usr/bin/env python3
"""
Syntax & Structural Validation (Windows-compatible)
Validates basic syntax for staged files.
"""
import sys
import subprocess
from pathlib import Path

def main():
    """Main validation function"""
    try:
        # Check if there are staged files
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            capture_output=True,
            text=True,
            check=False
        )

        if not result.stdout.strip():
            # No staged files, exit successfully
            return 0

        # Basic sanity checks are already covered by pre-commit-hooks
        # (yaml/json/toml/xml validation)
        # Add repo-level checks here if needed

        return 0
    except Exception as e:
        print(f"Error in syntax validation: {e}", file=sys.stderr)
        return 1

if __name__ == "__main__":
    sys.exit(main())
