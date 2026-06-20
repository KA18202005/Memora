import google.generativeai as genai

from app.core.config import GEMINI_API_KEY

genai.configure(
    api_key=GEMINI_API_KEY
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def generate_answer(
    question,
    context
):

    prompt = f"""
You are Memora.

Answer ONLY from the provided context.

Context:
{context}

Question:
{question}

Answer:
"""

    response = model.generate_content(
        prompt
    )

    return response.text