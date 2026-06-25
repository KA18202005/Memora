from app.database.mongodb import db


def get_dashboard_stats(
    user_id: str
):

    total_documents = db.documents.count_documents({
        "user_id": user_id
    })

    total_topics = db.topics.count_documents({
        "document_id": {
            "$in": [
                str(doc["_id"])
                for doc in db.documents.find(
                    {
                        "user_id": user_id
                    }
                )
            ]
        }
    })

    analytics = list(
        db.topic_analytics.find(
            {
                "user_id": user_id
            }
        )
    )

    if not analytics:

        return {
            "documents": total_documents,
            "topics": total_topics,
            "strong_topics": 0,
            "weak_topics": 0,
            "average_retention": 0
        }

    strong_topics = 0
    weak_topics = 0

    retention_scores = []

    for item in analytics:

        score = item.get(
            "average_score",
            0
        ) * 10

        retention_scores.append(
            score
        )

        if score >= 70:

            strong_topics += 1

        else:

            weak_topics += 1

    average_retention = round(
        sum(retention_scores)
        /
        len(retention_scores),
        2
    )

    return {

        "documents": total_documents,

        "topics": total_topics,

        "strong_topics": strong_topics,

        "weak_topics": weak_topics,

        "average_retention": average_retention

    }