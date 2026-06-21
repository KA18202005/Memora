from app.database.mongodb import db

def get_topic_report(topic):

    attempts = list(
        db.quiz_attempts.find(
            {"topic": topic}
        )
    )

    if not attempts:

        return {
            "topic": topic,
            "attempts": 0,
            "average_score": 0,
            "best_score": 0,
            "lowest_score": 0
        }

    scores = [
        attempt["score"]
        for attempt in attempts
    ]

    return {
        "topic": topic,
        "attempts": len(scores),
        "average_score": round(
            sum(scores) / len(scores),
            2
        ),
        "best_score": max(scores),
        "lowest_score": min(scores)
    }