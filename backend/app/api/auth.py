from fastapi import APIRouter
from app.schemas.user_schema import UserCreate
from app.database.mongodb import db
from app.core.security import hash_password

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate):

    existing_user = db.users.find_one(
        {"email": user.email}
    )

    if existing_user:
        return {
            "message": "User already exists"
        }

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