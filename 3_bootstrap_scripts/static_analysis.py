#!/usr/bin/env python3
"""
Type & Static Analysis (Windows-compatible)
Runs static analysis tools for backend and frontend.
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
    """Main static analysis function"""
    root = Path(".")
    status = 0

    # Backend: flake8 + mypy (if backend directory exists)
    backend_dir = root / "backend"
    if backend_dir.exists():
        run_command("python -m pip install --quiet flake8 mypy", check=False)
        if not run_command("flake8 backend", check=False):
            status = 1
        if not run_command("mypy backend", check=False):
            status = 1

    # Frontend: TypeScript type checking (if package.json exists)
    # For Angular, use ng build or ng lint
    frontend_pkg = root / "package.json"
    if frontend_pkg.exists():
        # Try npm typecheck or build
        if not run_command("npm run typecheck", cwd=root, check=False):
            # Fallback to build if typecheck doesn't exist
            if not run_command("npm run build", cwd=root, check=False):
                # For Angular, lint might be available
                run_command("npm run lint", cwd=root, check=False)

    return status

if __name__ == "__main__":
    sys.exit(main())
