from app.database.mongodb import db

from app.services.recommendation_service import (
    get_revision_recommendation
)

from app.services.dashboard_service import (
    get_dashboard_stats
)

stats = get_dashboard_stats()

def get_dashboard_full():

    weak_topics = []

    recommendations = []

    analytics = list(
        db.topic_analytics.find()
    )

    for item in analytics:

        topic = item["topic"]

        recommendation = (
            get_revision_recommendation(
                topic
            )
        )

        recommendations.append(
            recommendation
        )

        if (
            recommendation[
                "retention_score"
            ] < 70
        ):

            weak_topics.append({
                "topic": topic,
                "retention_score":
                    recommendation[
                        "retention_score"
                    ]
            })
    weak_topics.sort(
        key=lambda x: x["retention_score"]
    )
    priority_order = {
        "CRITICAL": 4,
        "HIGH": 3,
        "MEDIUM": 2,
        "LOW": 1
    }

    recommendations.sort(
        key=lambda x: priority_order.get(
            x["priority"],
            0
        ),
        reverse=True
    )

    return {
        "stats": stats,
        "weak_topics": weak_topics,
        "recommendations": recommendations
    }