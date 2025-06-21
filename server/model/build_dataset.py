#!/usr/bin/env python
"""
build_dataset.py  ──────────────────────────────────────────────────────────────
Clean & stage the Symptify symptom‑to‑disease datasets.

Outputs (written to --out-dir):
    • symptoms_clean.parquet   – de‑duplicated full dataset (for CV/grid‑search)
    • eval_holdout.parquet     – 20 % stratified hold‑out set for model metrics

Why de‑duplicate?  Exact row clones in the original Kaggle file massively inflate
validation accuracy (the model just memorizes them).  Removing them *only for
evaluation* gives a realistic score, while we can still train the final model
on the oversampled set later if we wish.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd
from sklearn.model_selection import train_test_split

# ────────────────────────────────────────────────────────────────────────────
# Core logic
# ────────────────────────────────────────────────────────────────────────────

def build_dataset(data_dir: Path, out_dir: Path, *, test_size: float = 0.20, random_state: int = 42) -> None:
    """Clean Training/Testing CSVs and emit parquet artefacts."""

    train_csv = data_dir / "Training.csv"
    test_csv  = data_dir / "Testing.csv"

    if not train_csv.exists() or not test_csv.exists():
        raise FileNotFoundError("Expected Training.csv and Testing.csv inside " f"{data_dir!s}")

    # 1️⃣  Load ────────────────────────────────────────────────────────────
    print("Loading raw CSVs …")
    train = pd.read_csv(train_csv)
    test  = pd.read_csv(test_csv)  # not strictly needed yet, but keeps schema honest

    symptom_cols = [c for c in train.columns if c != "prognosis"]

    # 3️⃣  De‑duplicate for unbiased evaluation ────────────────────────────
    train_dedup = train.drop_duplicates().reset_index(drop=True)
    print(f"Removed {len(train) - len(train_dedup):,} exact duplicate rows (" f"{(1 - len(train_dedup)/len(train)):.1%}).")

    # 4️⃣  Stratified hold‑out split ───────────────────────────────────────
    X_train, X_val = train_test_split(
        train_dedup,
        test_size=test_size,
        stratify=train_dedup["prognosis"],
        random_state=random_state,
    )
    print(f"Created hold‑out with {len(X_val):,} rows (stratified {test_size:.0%}).")

    # 5️⃣  Persist as Parquet (fast & space‑efficient) ─────────────────────
    out_dir.mkdir(parents=True, exist_ok=True)
    clean_path   = out_dir / "symptoms_clean.parquet"
    holdout_path = out_dir / "eval_holdout.parquet"

    train_dedup.to_parquet(clean_path, compression="zstd")
    X_val.to_parquet(holdout_path, compression="zstd")

    print("✔ Saved:")
    for p in (clean_path, holdout_path):
        size_kb = p.stat().st_size / 1024
        print(f"   • {p}  ({size_kb:,.1f} KB)")


# ────────────────────────────────────────────────────────────────────────────
# CLI entry‑point
# ────────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clean Symptify training data & generate Parquet artefacts.")
    parser.add_argument(
        "--data-dir",
        default="/Users/naveed/Symptify/server/model",
        type=Path,
        help="Folder containing Training.csv and Testing.csv",
    )
    parser.add_argument(
        "--out-dir",
        default="data",
        type=Path,
        help="Where to write the cleaned parquet files (created if absent).",
    )
    parser.add_argument("--test-size", type=float, default=0.20, help="Hold‑out share [0‑1] for evaluation.")
    parser.add_argument("--random-state", type=int, default=42, help="RNG seed for reproducibility.")

    args = parser.parse_args()
    build_dataset(args.data_dir, args.out_dir, test_size=args.test_size, random_state=args.random_state)
