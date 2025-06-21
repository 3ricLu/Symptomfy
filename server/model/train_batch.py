#!/usr/bin/env python
"""
train_batch.py ────────────────────────────────────────────────────────────────
Run a stratified *k*-fold cross‑validation on the de‑duplicated Symptify data
and persist the final (fully‑trained) model.

Steps
─────
1. Load `symptoms_clean.parquet` (the de‑dup version created by build_dataset.py).
2. Encode the `prognosis` column as categoricals → ints.
3. Perform 5‑fold Stratified CV (shuffle=True, seed=42).
4. Report mean ± std for Accuracy *and* Macro‑averaged F1.
5. Re‑fit the best hyper‑params on **the full over‑sampled dataset**
   (original Training.csv) so every disease still contributes 120 copies.
6. Save the trained model (`best_model.pkl`) and the feature list
   (`features.json`) to the chosen output directory.

Currently two model choices are exposed:
    • Decision Tree (default)
    • Random Forest

Add more by extending the MODEL_ZOO dict.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import joblib
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import make_scorer, accuracy_score, f1_score
from sklearn.model_selection import GridSearchCV, StratifiedKFold, cross_validate
from sklearn.pipeline import Pipeline
from sklearn.tree import DecisionTreeClassifier

# ────────────────────────────────────────────────────────────────────────────
# Model registry
# ────────────────────────────────────────────────────────────────────────────

MODEL_ZOO = {
    "dtree": (
        DecisionTreeClassifier(class_weight="balanced", random_state=42),
        {
            "clf__criterion": ["entropy", "gini"],
            "clf__max_depth": [None, 10, 20, 30],
            "clf__min_samples_leaf": [1, 2, 4],
        },
    ),
    "rf": (
        RandomForestClassifier(
            class_weight="balanced_subsample", n_jobs=-1, random_state=42
        ),
        {
            "clf__n_estimators": [300, 500],
            "clf__max_depth": [None, 20, 10],
            "clf__min_samples_leaf": [1, 2, 4],
        },
    ),
}

# ────────────────────────────────────────────────────────────────────────────
# Helpers
# ────────────────────────────────────────────────────────────────────────────

def build_pipeline(model_key: str, features: list[str]):
    if model_key not in MODEL_ZOO:
        raise KeyError(f"Unknown model '{model_key}'. Choose from {list(MODEL_ZOO)}")

    base_estimator, param_grid = MODEL_ZOO[model_key]

    # Identity column selector – no scaling needed for 0/1 flags
    pre = ColumnTransformer([("identity", "passthrough", features)], remainder="drop")

    pipe = Pipeline([
        ("pre", pre),
        ("clf", base_estimator),
    ])

    return pipe, param_grid


# ────────────────────────────────────────────────────────────────────────────
# Main CLI
# ────────────────────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser(description="Stratified CV & training for Symptify triage model.")
    p.add_argument("--clean-data", type=Path, default="data/symptoms_clean.parquet", help="Parquet file with de‑duplicated rows (for CV).")
    p.add_argument("--full-train", type=Path, default="/Users/naveed/Symptify/server/model/Training.csv", help="Original oversampled Training.csv for final fit.")
    p.add_argument("--model", choices=list(MODEL_ZOO), default="dtree")
    p.add_argument("--kfolds", type=int, default=5, help="Number of CV folds.")
    p.add_argument("--out-dir", type=Path, default=Path("models"))

    args = p.parse_args()

    # Load de‑dup dataset
    df = pd.read_parquet(args.clean_data)
    X = df.drop(columns=["prognosis"])
    y = df["prognosis"].astype("category").cat.codes  # sklearn wants ints

    features = list(X.columns)

    # Build pipeline & grid
    pipe, param_grid = build_pipeline(args.model, features)

    cv = StratifiedKFold(n_splits=args.kfolds, shuffle=True, random_state=42)

    scorer = {
        "acc": make_scorer(accuracy_score),
        "f1": make_scorer(f1_score, average="macro"),
    }

    print("Running GridSearchCV …")
    gs = GridSearchCV(
        pipe,
        param_grid,
        cv=cv,
        scoring="accuracy",  # grid chooses by accuracy; we still record F1 later
        refit=True,
        n_jobs=-1,
        return_train_score=False,
    )
    gs.fit(X, y)

    best_pipe = gs.best_estimator_

    # Cross‑validate best params for both metrics
    print("Cross‑validating best estimator …")
    cv_results = cross_validate(
        best_pipe,
        X,
        y,
        cv=cv,
        scoring=scorer,
        n_jobs=-1,
        return_train_score=False,
    )

    for metric in ("test_acc", "test_f1"):
        scores = cv_results[metric]
        print(f"{metric[5:].upper():<5}: {scores.mean():.4f} ± {scores.std():.4f}")

    # Re‑fit on **full oversampled** dataset for deployment
    print("Fitting final model on full oversampled Training.csv …")
    full = pd.read_csv(args.full_train)
    full_X = full[features]
    full_y = full["prognosis"].astype("category").cat.codes
    best_pipe.fit(full_X, full_y)

    # Persist artefacts
    args.out_dir.mkdir(parents=True, exist_ok=True)
    model_path = args.out_dir / "best_model.pkl"
    feat_path = args.out_dir / "features.json"

    joblib.dump(best_pipe, model_path)
    feat_path.write_text(json.dumps(features))

    print("\n✔ Saved artefacts:")
    print(f"   • {model_path}  ({model_path.stat().st_size/1024:.1f} KB)")
    print(f"   • {feat_path}")


if __name__ == "__main__":
    main()
