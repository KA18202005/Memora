from datetime import datetime

from app.database.mongodb import db


def update_topic_analytics(
    user_id: str,
    topic: str,
    score: float
):

    analytics = db.topic_analytics.find_one({
        "user_id": user_id,
        "topic": topic
    })

    if analytics:

        revision_count = analytics["revision_count"] + 1

        total_score = (
            analytics["average_score"]
            * analytics["revision_count"]
        ) + score

        average_score = (
            total_score /
            revision_count
        )

        db.topic_analytics.update_one(
            {
                "user_id": user_id,
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

            "user_id": user_id,

            "topic": topic,

            "revision_count": 1,

            "average_score": score,

            "created_at": datetime.utcnow(),

            "last_revision": datetime.utcnow()

        })