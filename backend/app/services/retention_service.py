def calculate_retention_score(
    revision_count,
    average_score,
    days_since_learning,
    days_since_last_revision,
    topic_complexity
):

    score = 50

    score += revision_count * 5

    score += average_score * 3

    score -= days_since_last_revision * 2

    score -= topic_complexity * 1.5

    score = max(0, min(100, score))

    return round(score, 2)