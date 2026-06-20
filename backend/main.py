from fastapi import FastAPI
from app.api.auth import router as auth_router
from app.api.documents import router as document_router

app = FastAPI(
    title="Memora API"
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

app.include_router(
    document_router,
    prefix="/documents",
    tags=["Documents"]
)