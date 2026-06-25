from fastapi import APIRouter
from app.schemas.user_schema import UserCreate
from app.database.mongodb import db
from fastapi import HTTPException
from app.core.security import hash_password
from app.schemas.user_schema import UserLogin
from app.core.security import (
    verify_password,
    create_access_token
)

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate):

    existing_user = db.users.find_one(
        {"email": user.email}
    )

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="User already exists"
        )

    db.users.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hash_password(
            user.password
        )
    })

    return {
        "message": "User created successfully"
    }

@router.post("/login")
def login(user: UserLogin):

    print("=" * 50)
    print("EMAIL:", user.email)

    existing_user = db.users.find_one(
        {"email": user.email}
    )

    print("USER FOUND:", existing_user)

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    password_ok = verify_password(
        user.password,
        existing_user["password"]
    )

    print("PASSWORD OK:", password_ok)

    if not password_ok:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {
            "user_id": str(existing_user["_id"])
        }
    )

    print("LOGIN SUCCESS")
    print("=" * 50)

    return {
        "access_token": token,
        "token_type": "bearer"
    }