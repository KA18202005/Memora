from fastapi import APIRouter
from datetime import datetime
from app.database.mongodb import db
from app.schemas.revision_schema import RevisionRequest
from app.services.revision_service import generate_revision_questions
from app.schemas.evaluation_schema import EvaluationRequest
from app.services.evaluation_service import evaluate_answer
from app.services.analytics_service import get_topic_report
from app.services.topic_analytics_service import update_topic_analytics
from app.services.retention_dataset_service import build_retention_dataset
from app.services.retention_analysis_service import get_retention_analysis
from app.services.export_service import export_dataset
from app.services.recommendation_service import get_revision_recommendation
from app.services.recommendation_engine import generate_smart_recommendation

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

@router.post("/evaluate")
def evaluate_revision_answer(
    request: EvaluationRequest
):

    result = evaluate_answer(
        request.question,
        request.answer
    )

    db.quiz_attempts.insert_one({
        "topic": request.topic,
        "question": request.question,
        "answer": request.answer,
        "score": result["score"],
        "strengths": result["strengths"],
        "weaknesses": result["weaknesses"],
        "created_at": datetime.utcnow()
    })
    
    update_topic_analytics(
        request.topic,
        result["score"]
    )
    return result

@router.get("/report/{topic}")
def topic_report(topic: str):

    return get_topic_report(
        topic
    )
    
@router.get("/analytics/{topic}")
def get_analytics(
    topic: str
):

    analytics = db.topic_analytics.find_one(
        {
            "topic": topic
        }
    )

    if not analytics:

        return {
            "message":"No analytics found"
        }

    analytics["_id"] = str(
        analytics["_id"]
    )

    return analytics

@router.get("/dataset")
def retention_dataset():

    return build_retention_dataset()

@router.get("/retention/{topic}")
def retention_report(
    topic: str
):

    return get_retention_analysis(
        topic
    )
    
@router.get("/export-dataset")
def export_retention_dataset():

    path = export_dataset()

    return {
        "message":
            "Dataset exported",
        "path":
            path
    }

@router.get("/recommendation/{topic}")
def recommendation(
    topic: str
):

    return get_revision_recommendation(
        topic
    )
    
@router.get("/smart-recommendation/{topic}")
def smart_recommendation(
    topic: str
):

    return generate_smart_recommendation(
        topic
    )
    
