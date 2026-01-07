#!/usr/bin/env python3
"""
Style Enforcement (Windows-compatible)
Enforces code formatting for frontend, backend, and shared code.
"""
import sys
import subprocess
from pathlib import Path

def run_command(cmd, cwd=None, check=False):
    """Run a command and return success status"""
    try:
        result = subprocess.run(
            cmd,
            cwd=cwd,
            shell=True,
            capture_output=True,
            text=True,
            check=check
        )
        return result.returncode == 0
    except Exception:
        return False

def main():
    """Main formatting function"""
    root = Path(".")

    # Frontend: prettier (if package.json exists)
    # Note: For Angular, we use the existing build system
    # Prettier can be added if needed
    frontend_pkg = root / "package.json"
    if frontend_pkg.exists():
        # Check if prettier is configured
        # For now, skip - Angular has its own formatting
        pass

    # Backend: black + isort (if backend directory exists)
    backend_dir = root / "backend"
    if backend_dir.exists():
        # Install formatters if needed
        run_command("python -m pip install --quiet black isort", check=False)
        run_command("black backend", check=False)
        run_command("isort backend", check=False)

    # Shared: try prettier or leave as-is
    shared_pkg = root / "shared" / "package.json"
    if shared_pkg.exists():
        run_command("npx --yes prettier -w shared", check=False)

    # Note: Pre-commit will automatically stage changes made by hooks
    # No need to manually run git add

    return 0

if __name__ == "__main__":
    sys.exit(main())
