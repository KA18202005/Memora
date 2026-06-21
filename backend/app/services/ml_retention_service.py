import joblib
import pandas as pd

model = joblib.load(
    "ml/models/retention_model.pkl"
)


def predict_retention(
    revision_count,
    average_score,
    days_since_learning,
    days_since_last_revision,
    topic_complexity
):

    features = pd.DataFrame([
        {
            "revision_count":
                revision_count,

            "average_score":
                average_score,

            "days_since_learning":
                days_since_learning,

            "days_since_last_revision":
                days_since_last_revision,

            "topic_complexity":
                topic_complexity
        }
    ])

    prediction = model.predict(
        features
    )[0]

    return round(
        float(prediction),
        2
    )