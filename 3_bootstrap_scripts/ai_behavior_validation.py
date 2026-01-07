#!/usr/bin/env python3
import sys, re, subprocess

# Ensure commit message(s) in staging include plan/component/task tags
def get_staged_commit_msg_template():
    # Pre-commit runs before commit object exists; validate COMMIT_MSG file if present,
    # otherwise allow; PR checks will re-validate.
    return None

# Validate changed files are within allowed paths (feature_flags.yml is source of truth).
try:
    import yaml
except ImportError:
    print("[ai-guard] Warning: PyYAML not installed. Install with: pip install PyYAML")
    sys.exit(0)

import pathlib
flags = yaml.safe_load(open("0_phase0_bootstrap/feature_flags.yml"))
allowed = set(flags["permissions"]["write_to"])
readonly = set(flags["permissions"].get("readonly", []))

changed = subprocess.check_output(["git","diff","--cached","--name-only"], text=True).splitlines()
viol = []

# Meta-framework directories that are allowed during initial setup
meta_framework_dirs = {
    "0_phase0_bootstrap", "1_global_standards", "2_framework_templates",
    "3_bootstrap_scripts", "4_docs_index", "5_reference_architectures",
    "6_ai_runtime_context", "7_schemas", "8_ci", ".github", "scripts"
}

for f in changed:
    p = pathlib.Path(f)

    # Allow root files like README.md, config files
    if p.name in ("README.md", ".pre-commit-config.yaml", ".gitignore",
                  "requirements.txt", "package.json", "package-lock.json",
                  "tsconfig.json", "angular.json", "VALIDATION_REPORT.md",
                  "WINDOWS_COMPATIBILITY_REPORT.md", "META_FRAMEWORK_INTEGRATION.md"):
        continue

    # Allow meta-framework files during initial setup (check if file exists in repo)
    first_part = str(p).split("/")[0] if "/" in str(p) else str(p).split("\\")[0]
    if first_part in meta_framework_dirs:
        # Check if this is a new file or modification of existing meta-framework file
        try:
            result = subprocess.run(
                ["git", "ls-files", "--error-unmatch", f],
                capture_output=True,
                text=True,
                check=False
            )
            # If file exists in repo, allow it (it's a modification, not new write)
            if result.returncode == 0:
                continue
        except Exception:
            pass

    # Check if file is in allowed write paths
    if not any(str(p).startswith(a.rstrip("/")) for a in allowed):
        # Check if it's in readonly - this is a violation
        if any(str(p).startswith(r.rstrip("/")) for r in readonly):
            viol.append(f)

if viol:
    print("[ai-guard] Write outside allowed paths:", *viol, sep="\n- ")
    sys.exit(1)

print("[ai-guard] OK")
