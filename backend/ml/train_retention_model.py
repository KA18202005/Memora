import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score

# Load Dataset
df = pd.read_csv(
    "ml/data/synthetic_retention_dataset.csv"
)

# Features
X = df[
    [
        "revision_count",
        "average_score",
        "days_since_learning",
        "days_since_last_revision",
        "topic_complexity"
    ]
]

# Target
y = df["retention_score"]

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

# Evaluate
predictions = model.predict(
    X_test
)

print(
    "MAE:",
    mean_absolute_error(
        y_test,
        predictions
    )
)

print(
    "R2:",
    r2_score(
        y_test,
        predictions
    )
)

# Save Model
joblib.dump(
    model,
    "ml/models/retention_model.pkl"
)

print("Model Trained Successfully")