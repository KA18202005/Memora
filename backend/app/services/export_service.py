import pandas as pd

from app.services.retention_dataset_service import (
    build_retention_dataset
)


def export_dataset():

    dataset = build_retention_dataset()

    df = pd.DataFrame(
        dataset
    )

    path = "ml/data/retention_dataset.csv"

    df.to_csv(
        path,
        index=False
    )

    return path