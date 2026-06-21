import pandas as pd

from sklearn.ensemble import (
    RandomForestRegressor
)

from sklearn.model_selection import (
    train_test_split
)

import joblib


df = pd.read_csv(
    "ml/data/retention_dataset.csv"
)

X = df[
    [
        "revision_count",
        "average_score",
        "days_since_learning",
        "days_since_last_revision",
        "topic_complexity"
    ]
]

y = df[
    "retention_score"
]

X_train, X_test, y_train, y_test = (
    train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )
)

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

joblib.dump(
    model,
    "ml/models/retention_model.pkl"
)

print(
    "Model Trained Successfully"
)