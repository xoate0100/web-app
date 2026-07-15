"""Loaders for agentic YAML registries."""

from __future__ import annotations

import pathlib
from typing import Any

try:
    import yaml
except ImportError as exc:
    raise ImportError("PyYAML required. Install with: pip install PyYAML") from exc

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent


def _load_yaml(path: pathlib.Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    with open(path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    return data if isinstance(data, dict) else {}


def load_decision_registry(root: pathlib.Path | None = None) -> dict[str, Any]:
    root = root or REPO_ROOT
    return _load_yaml(root / "5_reference_architectures" / "DECISION_REGISTRY.yaml")


def load_drift_vectors(root: pathlib.Path | None = None) -> dict[str, Any]:
    root = root or REPO_ROOT
    return _load_yaml(root / "5_reference_architectures" / "DRIFT_VECTORS.yaml")


def load_workspace_spine(root: pathlib.Path | None = None) -> dict[str, Any]:
    root = root or REPO_ROOT
    return _load_yaml(root / "5_reference_architectures" / "WORKSPACE_SPINE_REGISTRY.yaml")


def active_resurrection_keywords(registry: dict[str, Any] | None = None) -> list[tuple[str, str, str]]:
    """Return (decision_id, keyword, status) for decisions that block resurrection."""
    registry = registry or load_decision_registry()
    out: list[tuple[str, str, str]] = []
    for row in registry.get("decisions") or []:
        if not isinstance(row, dict):
            continue
        status = row.get("status", "")
        if status not in ("accepted", "proposed"):
            continue
        decision_id = row.get("decision_id", "")
        for keyword in row.get("resurrection_trigger_keywords") or []:
            out.append((decision_id, keyword, status))
    return out
