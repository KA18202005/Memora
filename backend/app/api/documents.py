from fastapi import APIRouter, UploadFile, File, HTTPException
from bson import ObjectId
from datetime import datetime
import os
from fastapi import Depends
from app.dependencies import get_current_user

from app.database.mongodb import db

from app.services.pdf_service import extract_text_from_pdf
from app.services.chunking_service import chunk_text
from app.services.vector_service import store_chunk
from app.services.search_service import search_chunks
from app.services.rag_service import ask_memora
from app.services.topic_service import extract_topics
from app.services.graph_service import generate_relationships
from app.schemas.question_schema import QuestionRequest

router = APIRouter()
UPLOAD_DIR = "uploads"


# ==========================
# Upload Document
# ==========================

@router.post("/upload")
async def upload_document(

    file: UploadFile = File(...),

    user_id: str = Depends(
        get_current_user
    )

):
    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    # Extract PDF Text
    extracted_text = extract_text_from_pdf(
        file_path
    )

    # Save Document
    document = {

        "user_id": user_id,

        "title": file.filename,

        "filename": file.filename,

        "source_type": "pdf",

        "content": extracted_text,

        "text_length": len(
            extracted_text
        ),

        "uploaded_at":
            datetime.utcnow()

    }

    result = db.documents.insert_one(
        document
    )

    document_id = str(
        result.inserted_id
    )

    # Generate Chunks
    chunks = chunk_text(
        extracted_text
    )

    # Save Chunks + Embeddings
    for idx, chunk in enumerate(chunks):

        chunk_result = db.chunks.insert_one({
            "document_id": document_id,
            "chunk_index": idx,
            "content": chunk
        })

        store_chunk(
            chunk_id=str(
                chunk_result.inserted_id
            ),
            content=chunk,
            document_id=document_id
        )

    # Extract Topics
    topics = extract_topics(
        extracted_text
    )
    relationships = generate_relationships(
        extracted_text,
        topics
    )

    # Save Topics
    for topic in topics:

        db.topics.insert_one({
            "document_id": document_id,
            "topic": topic
        })
        
    for edge in relationships:
        
        db.graph_edges.insert_one({
            "document_id": document_id,
            "source": edge["source"],
            "target": edge["target"]
        })

    return {
        "document_id": document_id,
        "filename": file.filename,
        "characters": len(extracted_text),
        "total_chunks": len(chunks),
        "topics_found": len(topics),
        "relationships_found": len(relationships),
        "topics": topics
    }


# ==========================
# List Documents
# ==========================



@router.get("/")
def get_documents(
    user_id: str = Depends(get_current_user)
):

    print("=" * 50)
    print("CURRENT USER:", user_id)

    docs = list(
        db.documents.find(
            {
                "user_id": user_id
            }
        )
    )

    print("FOUND DOCS:", len(docs))

    for doc in docs:
        print(doc["title"], doc["user_id"])

    return [
        {
            "id": str(doc["_id"]),
            "title": doc["title"],
            "source_type": doc["source_type"],
            "text_length": doc["text_length"],
            "uploaded_at": doc.get("uploaded_at")
        }
        for doc in docs
    ]
    
# ==========================
# Get Chunks
# ==========================

@router.get("/chunks/{document_id}")
def get_chunks(document_id: str):

    chunks = []

    for chunk in db.chunks.find(
        {"document_id": document_id}
    ):

        chunks.append({
            "chunk_index": chunk["chunk_index"],
            "preview": chunk["content"][:100]
        })

    return chunks


# ==========================
# Get Topics
# ==========================

@router.get("/topics/{document_id}")
def get_topics(document_id: str):

    topics = []

    for topic in db.topics.find(
        {"document_id": document_id}
    ):

        topics.append(
            topic["topic"]
        )

    return {
        "document_id": document_id,
        "topics": topics
    }


# ==========================
# Semantic Search
# ==========================

@router.post("/search")
def search_documents(
    query: str
):

    results = search_chunks(
        query
    )

    return results


# ==========================
# Ask Memora (RAG)
# ==========================

@router.post("/ask")
def ask_question(
    request: QuestionRequest
):

    return ask_memora(
        request.question
    )

# ==========================
# Knowledge Graph (ALL)
# ==========================

@router.get("/graph/all")
def get_all_graph():

    nodes = set()
    edges = []

    graph_edges = db.graph_edges.find()

    for edge in graph_edges:

        source = edge["source"]
        target = edge["target"]

        nodes.add(source)
        nodes.add(target)

        edges.append({
            "source": source,
            "target": target
        })

    return {
        "nodes": [
            {"id": node}
            for node in nodes
        ],
        "edges": edges
    }


# ==========================
# Knowledge Graph (Single Document)
# ==========================

@router.get("/graph/{document_id}")
def get_graph(document_id: str):

    nodes = set()
    edges = []

    graph_edges = db.graph_edges.find(
        {"document_id": document_id}
    )

    for edge in graph_edges:

        source = edge["source"]
        target = edge["target"]

        nodes.add(source)
        nodes.add(target)

        edges.append({
            "source": source,
            "target": target
        })

    return {
        "nodes": [
            {"id": node}
            for node in nodes
        ],
        "edges": edges
    }


# ==========================
# Get Single Document
# KEEP THIS LAST
# ==========================

@router.get("/{document_id}")
def get_document(document_id: str):

    document = db.documents.find_one(
        {"_id": ObjectId(document_id)}
    )

    if not document:

        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    return {
        "id": str(document["_id"]),
        "title": document["title"],
        "content": document["content"]
    }