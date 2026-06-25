from fastapi import APIRouter, Depends

from app.dependencies import get_current_user

from app.services.dashboard_service import (
    get_dashboard_stats
)

from app.services.dashboard_full_service import (
    get_dashboard_full
)

router = APIRouter()


@router.get("/")
def dashboard(
    user_id: str = Depends(get_current_user)
):

    return get_dashboard_stats(
        user_id
    )


@router.get("/full")
def dashboard_full(
    user_id: str = Depends(get_current_user)
):

    return get_dashboard_full(
        user_id
    )