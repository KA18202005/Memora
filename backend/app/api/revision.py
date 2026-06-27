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
from fastapi import Depends

from app.dependencies import get_current_user

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

    request: EvaluationRequest,

    user_id: str = Depends(
        get_current_user
    )

):

    result = evaluate_answer(

        request.question,

        request.answer

    )

    db.quiz_attempts.insert_one({

        "user_id": user_id,

        "topic": request.topic,

        "question": request.question,

        "answer": request.answer,

        "score": result["score"],

        "strengths": result["strengths"],

        "weaknesses": result["weaknesses"],

        "created_at": datetime.utcnow()

    })

    update_topic_analytics(

        user_id,

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

    topic: str,

    user_id: str = Depends(
        get_current_user
    )

):

    analytics = db.topic_analytics.find_one({

        "user_id": user_id,

        "topic": topic

    })

    if not analytics:

        return {

            "message": "No analytics found"

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

    topic: str,

    user_id: str = Depends(
        get_current_user
    )

):

    return get_retention_analysis(

        user_id,

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

    topic: str,

    user_id: str = Depends(
        get_current_user
    )

):

    return get_revision_recommendation(

        user_id,

        topic

    )
    
@router.get("/smart-recommendation/{topic}")
def smart_recommendation(
    topic: str
):

    return generate_smart_recommendation(
        topic
    )
    
@router.get("/topic/{topic}")
def get_topic_details(

    topic: str,

    user_id: str = Depends(
        get_current_user
    )

):

    recommendation = get_revision_recommendation(

        user_id,

        topic

    )

    analytics = db.topic_analytics.find_one({

        "user_id": user_id,

        "topic": topic

    })

    if analytics:

        analytics["_id"] = str(
            analytics["_id"]
        )

    return {

        "topic": topic,

        "recommendation": recommendation,

        "analytics": analytics

    }

@router.get("/topics")
def get_all_topics(

    user_id: str = Depends(
        get_current_user
    )

):

    topics = db.topics.find({

        "user_id": user_id

    })

    unique_topics = sorted(

        {

            item["topic"]

            for item in topics

        }

    )

    return unique_topics