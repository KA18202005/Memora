from datetime import datetime

from app.database.mongodb import db


def update_topic_analytics(
    topic,
    score
):

    analytics = db.topic_analytics.find_one(
        {
            "topic": topic
        }
    )

    if analytics:

        revision_count = (
            analytics["revision_count"] + 1
        )

        total_score = (
            analytics["average_score"]
            *
            analytics["revision_count"]
        ) + score

        average_score = (
            total_score
            /
            revision_count
        )

        db.topic_analytics.update_one(
            {
                "topic": topic
            },
            {
                "$set": {
                    "revision_count": revision_count,
                    "average_score": average_score,
                    "last_revision": datetime.utcnow()
                }
            }
        )

    else:

        db.topic_analytics.insert_one({
            "topic": topic,
            "revision_count": 1,
            "average_score": score,
            "created_at": datetime.utcnow(),
            "last_revision": datetime.utcnow()
        })