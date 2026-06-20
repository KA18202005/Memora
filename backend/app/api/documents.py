from fastapi import APIRouter, UploadFile, File
from app.services.pdf_service import extract_text_from_pdf
from app.database.mongodb import db
from bson import ObjectId
from fastapi import HTTPException
from datetime import datetime
from app.services.chunking_service import chunk_text
from app.services.vector_service import store_chunk
from app.services.search_service import search_chunks

import os

router = APIRouter()

UPLOAD_DIR = "uploads"


@router.get("/")
def get_documents():

    documents = []

    for doc in db.documents.find():

        documents.append({
            "id": str(doc["_id"]),
            "title": doc["title"],
            "source_type": doc["source_type"],
            "text_length": doc["text_length"]
        })

    return documents


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
        "content": document["content"][:1000]
    }

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        "uploads",
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    extracted_text = extract_text_from_pdf(
        file_path
    )

    document = {
        "title": file.filename,
        "filename": file.filename,
        "source_type": "pdf",
        "content": extracted_text,
        "text_length": len(extracted_text),
        "uploaded_at": datetime.utcnow()
    }

    result = db.documents.insert_one(
        document
    )

    document_id = str(
        result.inserted_id
    )

    chunks = chunk_text(
        extracted_text
    )

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

    return {
        "document_id": document_id,
        "filename": file.filename,
        "total_chunks": len(chunks),
        "characters": len(extracted_text)
    }
    
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


@router.post("/search")
def search_documents(
    query: str
):

    results = search_chunks(
        query
    )

    return results