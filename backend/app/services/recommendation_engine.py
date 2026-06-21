from app.database.mongodb import db

from app.services.retention_analysis_service import (
    get_retention_analysis
)


def generate_smart_recommendation(topic):

    retention = get_retention_analysis(
        topic
    )

    if "message" in retention:
        return retention

    attempts = list(
        db.quiz_attempts.find(
            {"topic": topic}
        )
    )

    avg_score = retention[
        "average_score"
    ]

    retention_score = retention[
        "retention_score"
    ]

    weaknesses = []

    for attempt in attempts:

        weakness = attempt.get(
            "weaknesses"
        )

        if weakness:
            weaknesses.append(
                weakness
            )

    if retention_score < 40:

        revision_type = [
            "MCQ",
            "Flashcards",
            "Concept Questions"
        ]

    elif retention_score < 70:

        revision_type = [
            "Concept Questions",
            "Short Answers"
        ]

    else:

        revision_type = [
            "Quick Review"
        ]

    return {
        "topic": topic,

        "retention_score":
            retention_score,

        "average_score":
            avg_score,

        "revision_plan":
            revision_type,

        "weak_areas":
            weaknesses[:5]
    }