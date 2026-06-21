from pydantic import BaseModel


class EvaluationRequest(BaseModel):

    topic: str

    question: str

    answer: str