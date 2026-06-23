from app.database.mongodb import db


def get_dashboard_stats():

    total_documents = db.documents.count_documents({})

    total_topics = db.topics.count_documents({})

    analytics = list(
        db.topic_analytics.find()
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

    for topic in analytics:

        score = topic.get(
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