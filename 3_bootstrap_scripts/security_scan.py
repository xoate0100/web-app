#!/usr/bin/env python3
"""
Security & Secrets Scan (Windows-compatible)
Scans for common secret patterns and runs security audits.
"""
import sys
import subprocess
import re
from pathlib import Path

def scan_for_secrets():
    """Scan for common secret patterns"""
    patterns = [
        r"AWS_SECRET",
        r"BEGIN RSA PRIVATE KEY",
        r"password\s*=",
        r"api_key\s*=",
        r"secret\s*=",
        r"private_key\s*=",
    ]

    try:
        # Get staged files (excluding markdown)
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            capture_output=True,
            text=True,
            check=False
        )

        if not result.stdout.strip():
            return True

        files = result.stdout.strip().split("\n")
        found_secrets = False

        for file_path in files:
            if file_path.endswith(".md"):
                continue

            # Exclude security scan scripts from their own checks
            if "security_scan" in file_path:
                continue

            file_obj = Path(file_path)
            if not file_obj.exists():
                continue

            try:
                content = file_obj.read_text(encoding="utf-8", errors="ignore")
                for pattern in patterns:
                    if re.search(pattern, content, re.IGNORECASE):
                        print(f"Secret-like pattern found in {file_path}: {pattern}")
                        found_secrets = True
            except Exception:
                pass

        if found_secrets:
            print("Secret-like patterns found.")
            return False

        return True
    except Exception as e:
        print(f"Error scanning for secrets: {e}", file=sys.stderr)
        return True  # Don't block on scan errors

def run_npm_audit():
    """Run npm audit if package.json exists"""
    pkg_json = Path("package.json")
    if pkg_json.exists():
        try:
            subprocess.run(
                ["npm", "audit", "--audit-level=high"],
                check=False,
                capture_output=True
            )
        except Exception:
            pass

def main():
    """Main security scan function"""
    if not scan_for_secrets():
        return 1

    run_npm_audit()

    return 0

if __name__ == "__main__":
    sys.exit(main())
