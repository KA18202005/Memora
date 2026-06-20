from app.services.search_service import (
    search_chunks
)

from app.services.llm_service import (
    generate_answer
)

def ask_memora(question):

    results = search_chunks(
        question
    )

    chunks = results["documents"][0]

    context = "\n\n".join(
        chunks
    )

    answer = generate_answer(
        question,
        context
    )

    return {
        "answer": answer,
        "sources": len(chunks)
    }