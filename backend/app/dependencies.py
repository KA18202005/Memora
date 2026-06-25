from fastapi import Header, HTTPException

from app.core.security import (
    decode_access_token
)


def get_current_user(

    authorization: str = Header(None)

):

    if authorization is None:

        raise HTTPException(
            status_code=401,
            detail="Authorization header missing"
        )

    if not authorization.startswith("Bearer "):

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    token = authorization.replace(
        "Bearer ",
        ""
    )

    payload = decode_access_token(
        token
    )

    if payload is None:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    return payload["user_id"]