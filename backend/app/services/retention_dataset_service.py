from datetime import datetime

from app.database.mongodb import db
from app.services.retention_service import calculate_retention_score

def build_retention_dataset():

    dataset = []

    analytics = db.topic_analytics.find()

    for topic in analytics:

        days_since_learning = (
            datetime.utcnow()
            - topic["created_at"]
        ).days

        days_since_last_revision = (
            datetime.utcnow()
            - topic["last_revision"]
        ).days
        
        retention_score = calculate_retention_score(
            topic["revision_count"],
            topic["average_score"],
            days_since_learning,
            days_since_last_revision,
            topic.get(
                "topic_complexity",
                5
            )
        )

        row = {
            "topic": topic["topic"],

            "revision_count":
                topic["revision_count"],

            "average_score":
                round(
                    topic["average_score"],
                    2
                ),

            "days_since_learning":
                days_since_learning,

            "days_since_last_revision":
                days_since_last_revision,

            "topic_complexity":
                topic.get(
                    "topic_complexity",
                    5
                ),
            "retention_score": retention_score
        }

        dataset.append(row)

    return dataset