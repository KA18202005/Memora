from app.services.llm_service import model
import json
import re


def generate_revision_questions(topic):

    prompt = f"""
Generate 5 revision questions about:

{topic}

Rules:
1. Return ONLY JSON.
2. No markdown.

Format:

[
    {{
        "question":"What is FastAPI?",
        "type":"concept"
    }},
    {{
        "question":"Explain Dependency Injection.",
        "type":"short"
    }}
]
"""

    response = model.generate_content(
        prompt
    )

    text = response.text.strip()

    text = re.sub(
        r"```json|```",
        "",
        text
    ).strip()

    try:

        questions = json.loads(text)

        return questions

    except Exception:

        return []