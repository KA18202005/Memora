from app.services.retention_analysis_service import (
    get_retention_analysis
)


def get_revision_recommendation(topic):

    retention_data = get_retention_analysis(
        topic
    )

    if "message" in retention_data:
        return retention_data

    retention_score = retention_data[
        "retention_score"
    ]

    if retention_score >= 80:

        priority = "LOW"

        recommendation = (
            "No revision needed"
        )

        revision_type = (
            "Quick Review"
        )

    elif retention_score >= 60:

        priority = "MEDIUM"

        recommendation = (
            "Review within 7 days"
        )

        revision_type = (
            "Concept Questions"
        )

    elif retention_score >= 40:

        priority = "HIGH"

        recommendation = (
            "Review within 3 days"
        )

        revision_type = (
            "MCQ + Concept Questions"
        )

    else:

        priority = "CRITICAL"

        recommendation = (
            "Review immediately"
        )

        revision_type = (
            "MCQ + Flashcards + Concept Questions"
        )

    return {
        "topic": topic,
        "retention_score": retention_score,
        "priority": priority,
        "recommendation": recommendation,
        "revision_type": revision_type
    }