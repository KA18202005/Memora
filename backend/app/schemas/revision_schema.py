from pydantic import BaseModel


class RevisionRequest(BaseModel):
    topic: str