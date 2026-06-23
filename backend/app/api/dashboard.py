from fastapi import APIRouter

from app.services.dashboard_service import (
    get_dashboard_stats
)

from app.services.dashboard_full_service import (
    get_dashboard_full
)

router = APIRouter()


@router.get("/")
def dashboard():

    return get_dashboard_stats()

@router.get("/full")
def dashboard_full():

    return get_dashboard_full()