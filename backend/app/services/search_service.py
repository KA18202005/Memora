from app.database.chroma import collection
from app.services.embedding_service import (
    generate_embedding
)

def search_chunks(
    query,
    n_results=5
):

    query_embedding = generate_embedding(
        query
    )

    results = collection.query(
        query_embeddings=[
            query_embedding
        ],
        n_results=n_results
    )

    return results