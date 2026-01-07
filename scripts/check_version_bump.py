#!/usr/bin/env python3
"""
Check Version Bump (Template Only)
This hook is only for the project_initializer template repository.
For child projects, this hook should be skipped.
"""
import sys
from pathlib import Path

def main():
    """Main version bump check"""
    # This is a child project, not the template
    # Skip version bump check
    return 0

if __name__ == "__main__":
    sys.exit(main())
