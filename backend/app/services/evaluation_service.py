import json
import re

from app.services.llm_service import model


def evaluate_answer(
    question,
    answer
):

    prompt = f"""
You are an expert evaluator.

Question:
{question}

Answer:
{answer}

Evaluate the answer.

Return ONLY JSON.

Format:

{{
    "score": 8,
    "strengths": "Good understanding",
    "weaknesses": "Missed some details",
    "improved_answer": "..."
}}

Score should be from 0 to 10.
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
        return json.loads(text)

    except Exception:

        return {
            "score": 0,
            "strengths": "",
            "weaknesses": "",
            "improved_answer": ""
        }