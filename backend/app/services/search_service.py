from app.database.qdrant import (
    client,
    COLLECTION_NAME
)

from app.services.embedding_service import (
    generate_embedding
)


def search_chunks(
    query,
    n_results=5
):

    embedding = generate_embedding(
        query
    )

    results = client.search(

        collection_name=COLLECTION_NAME,

        query_vector=embedding,

        limit=n_results

    )

    documents = []
    ids = []
    metadatas = []

    for point in results:

        payload = point.payload

        documents.append(
            payload["content"]
        )

        ids.append(
            payload["chunk_id"]
        )

        metadatas.append(
            {
                "document_id":
                payload["document_id"]
            }
        )

    return {

        "ids": [ids],

        "documents": [documents],

        "metadatas": [metadatas]

    }