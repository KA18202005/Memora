from app.database.chroma import collection
from app.services.embedding_service import (
    generate_embedding
)

def store_chunk(
    chunk_id,
    content,
    document_id
):

    embedding = generate_embedding(
        content
    )

    collection.add(
        ids=[chunk_id],
        embeddings=[embedding],
        documents=[content],
        metadatas=[
            {
                "document_id": document_id
            }
        ]
    )