from fastapi import APIRouter
from datetime import datetime

from app.database.mongodb import db

from app.schemas.revision_schema import (
    RevisionRequest
)

from app.services.revision_service import (
    generate_revision_questions
)

router = APIRouter()


@router.post("/generate")
def generate_revision(
    request: RevisionRequest
):

    questions = generate_revision_questions(
        request.topic
    )

    result = db.revisions.insert_one({
        "topic": request.topic,
        "questions": questions,
        "created_at": datetime.utcnow()
    })

    return {
        "revision_id": str(
            result.inserted_id
        ),
        "topic": request.topic,
        "questions": questions
    }