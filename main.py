from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class FAQ(BaseModel):
    question: str
    answer: str

faq_db = []

@app.get("/api/faqs", response_model=List[FAQ])
def get_faqs():
    return faq_db

@app.post("/api/faqs", response_model=FAQ)
def add_faq(faq: FAQ):
    faq_db.append(faq)
    return faq

@app.delete("/api/faqs/{faq_id}")
def delete_faq(faq_id: int):
    del faq_db[faq_id]
    return {"status": "FAQ deleted"}
