from pydantic import BaseModel

class DocumentResponse(BaseModel):
    id: str
    title: str
    source_type: str