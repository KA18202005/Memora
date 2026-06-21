import pandas as pd
import random

rows = []

for _ in range(5000):

    revision_count = random.randint(0, 20)

    average_score = round(
        random.uniform(1, 10),
        2
    )

    days_since_learning = random.randint(
        1,
        365
    )

    days_since_last_revision = random.randint(
        0,
        180
    )

    topic_complexity = random.randint(
        1,
        10
    )

    retention_score = (
        50
        + revision_count * 5
        + average_score * 3
        - days_since_last_revision * 2
        - topic_complexity * 1.5
    )

    retention_score = max(
        0,
        min(
            100,
            retention_score
        )
    )

    rows.append({
        "revision_count":
            revision_count,

        "average_score":
            average_score,

        "days_since_learning":
            days_since_learning,

        "days_since_last_revision":
            days_since_last_revision,

        "topic_complexity":
            topic_complexity,

        "retention_score":
            retention_score
    })

df = pd.DataFrame(rows)

df.to_csv(
    "ml/data/synthetic_retention_dataset.csv",
    index=False
)

print(
    f"Generated {len(df)} rows"
)