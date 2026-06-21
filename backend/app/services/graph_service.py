import json
import re

from app.services.llm_service import model


def generate_relationships(
    text: str,
    topics: list
):

    text = text[:8000]

    prompt = f"""
You are given a document and list of topics.

Topics:
{topics}

Identify meaningful relationships between topics.

Return ONLY JSON.

Example:

[
    {{
        "source": "FastAPI",
        "target": "JWT"
    }},
    {{
        "source": "FastAPI",
        "target": "MongoDB"
    }}
]

Document:
{text}
"""

    response = model.generate_content(
        prompt
    )

    response_text = response.text.strip()

    response_text = re.sub(
        r"```json|```",
        "",
        response_text
    ).strip()

    try:

        relationships = json.loads(
            response_text
        )

        if isinstance(
            relationships,
            list
        ):
            return relationships

        return []

    except Exception:

        return []