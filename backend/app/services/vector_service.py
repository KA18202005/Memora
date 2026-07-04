from uuid import uuid5, NAMESPACE_DNS

from qdrant_client.models import PointStruct

from app.database.qdrant import (
    client,
    COLLECTION_NAME
)

from app.services.embedding_service import (
    generate_embedding
)


def store_chunk(
    chunk_id,
    content,
    document_id
):

    embedding = generate_embedding(content)

    point_id = str(
        uuid5(
            NAMESPACE_DNS,
            chunk_id
        )
    )

    client.upsert(

        collection_name=COLLECTION_NAME,

        wait=True,

        points=[

            PointStruct(

                id=point_id,

                vector=embedding,

                payload={

                    "chunk_id": chunk_id,

                    "document_id": document_id,

                    "content": content

                }

            )

        ]

    )