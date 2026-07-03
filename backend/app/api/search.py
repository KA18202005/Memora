from fastapi import APIRouter, Depends

from app.dependencies import get_current_user

from app.services.global_search_service import global_search

router = APIRouter()


@router.get("/global")
def search(

    q: str,

    user_id: str = Depends(get_current_user)

):

    return global_search(

        user_id,

        q

    )