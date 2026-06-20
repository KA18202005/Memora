import json
import re
from collections import Counter

from app.services.llm_service import model


def extract_topics(text: str):

    text = text[:8000]

    prompt = f"""
Extract the most important learning concepts from the text.

Rules:
1. Return ONLY a JSON array.
2. No explanation.
3. No markdown.
4. Maximum 20 topics.
5. Keep topic names concise.

Example:

[
    "FastAPI",
    "MongoDB",
    "JWT Authentication",
    "Machine Learning"
]

Text:
{text}
"""

    response = model.generate_content(prompt)

    response_text = response.text.strip()

    response_text = re.sub(
        r"```json|```",
        "",
        response_text
    ).strip()

    try:
        topics = json.loads(response_text)
        raw_topics = topics
        topic_frequency = get_topic_frequency(
            raw_topics
        )
        topics = normalize_topics(
            raw_topics
        )
        topics = remove_duplicates(
            topics
        )

        if isinstance(topics, list):
            return topics

        return []

    except Exception:
        return []
    
SPECIAL_TOPICS = {
    "mongodb": "MongoDB",
    "fastapi": "FastAPI",
    "jwt": "JWT",
    "rag": "RAG",
    "langchain": "LangChain",
    "chromadb": "ChromaDB",
    "next.js": "Next.js"
}


def normalize_topic(topic):

    key = topic.lower().strip()

    if key in SPECIAL_TOPICS:
        return SPECIAL_TOPICS[key]

    return topic.title()


def normalize_topics(topics):

    return [
        normalize_topic(topic)
        for topic in topics
    ]


def remove_duplicates(topics):

    seen = set()
    cleaned = []

    for topic in topics:

        if topic.lower() not in seen:

            seen.add(topic.lower())
            cleaned.append(topic)

    return cleaned

def get_topic_frequency(topics):

    counter = Counter(topics)

    return dict(counter)