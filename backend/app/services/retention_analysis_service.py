from datetime import datetime

from app.database.mongodb import db

from app.services.retention_service import (
    calculate_retention_score
)

from app.services.ml_retention_service import (
    predict_retention
)

def get_retention_analysis(topic):

    analytics = db.topic_analytics.find_one(
        {"topic": topic}
    )

    if not analytics:

        return {
            "message": "Topic not found"
        }

    days_since_learning = (
        datetime.utcnow()
        - analytics["created_at"]
    ).days

    days_since_last_revision = (
        datetime.utcnow()
        - analytics["last_revision"]
    ).days

    retention_score = predict_retention(
        analytics["revision_count"],
        analytics["average_score"],
        days_since_learning,
        days_since_last_revision,
        analytics.get(
            "topic_complexity",
            5
        )
    )

    if retention_score >= 80:

        status = "Strong"

        recommendation = (
            "No revision needed"
        )

    elif retention_score >= 60:

        status = "Moderate"

        recommendation = (
            "Review within 7 days"
        )

    else:

        status = "Weak"

        recommendation = (
            "Review within 2 days"
        )

    return {
        "topic": topic,
        "retention_score": retention_score,
        "status": status,
        "recommendation": recommendation,
        "revision_count": analytics["revision_count"],
        "average_score": round(
            analytics["average_score"],
            2
        ),
        "days_since_learning":
            days_since_learning,
        "days_since_last_revision":
            days_since_last_revision
    }