from fastapi import FastAPI
from app.api.auth import router as auth_router
from app.api.documents import router as document_router
from app.api.revision import router as revision_router
from app.api.dashboard import router as dashboard_router
from app.api.search import router as search_router

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Memora API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

app.include_router(
    revision_router,
    prefix="/revision",
    tags=["Revision"]
)

app.include_router(
    dashboard_router,
    prefix="/dashboard",
    tags=["Dashboard"]
)

app.include_router(
    search_router,
    prefix="/search",
    tags=["Search"]
)