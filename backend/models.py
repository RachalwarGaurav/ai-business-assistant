from pydantic import BaseModel

class Lead(BaseModel):
    name: str
    email: str
    phone: str
    query: str

class ChatRequest(BaseModel):
    message: str