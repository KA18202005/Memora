from app.database.mongodb import db

from app.services.dashboard_service import (
    get_dashboard_stats
)

from app.services.recommendation_service import (
    get_revision_recommendation
)


def get_dashboard_full(
    user_id: str
):

    stats = get_dashboard_stats(
        user_id
    )

    analytics = list(
        db.topic_analytics.find(
            {
                "user_id": user_id
            }
        )
    )

    weak_topics = []

    recommendations = []

    for item in analytics:

        topic = item["topic"]

        recommendation = get_revision_recommendation(
            user_id,
            topic
        )

        recommendations.append(
            recommendation
        )

        if (
            recommendation.get(
                "retention_score",
                100
            ) < 50
        ):

            weak_topics.append({

                "topic": topic,

                "retention_score":
                    recommendation[
                        "retention_score"
                    ]

            })

    priority_order = {

        "CRITICAL": 4,

        "HIGH": 3,

        "MEDIUM": 2,

        "LOW": 1

    }

    recommendations.sort(

        key=lambda x:

        priority_order.get(

            x.get(
                "priority",
                "LOW"
            ),

            0

        ),

        reverse=True

    )

    weak_topics.sort(

        key=lambda x:

        x["retention_score"]

    )

    return {

        "stats": stats,

        "weak_topics": weak_topics,

        "recommendations": recommendations

    }