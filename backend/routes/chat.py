from fastapi import APIRouter
from models import ChatRequest
from dotenv import load_dotenv
import requests
import os

load_dotenv()

router = APIRouter()

API_KEY = os.getenv("OPENROUTER_API_KEY")

@router.post("/chat")
def chat(data: ChatRequest):

    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [
            {
                "role": "user",
                "content": data.message
            }
        ]
    }

    response = requests.post(
        url,
        headers=headers,
        json=payload
    )

    result = response.json()

    print(result)

    try:

        ai_response = result["choices"][0]["message"]["content"]

    except:

        ai_response = "AI service temporarily unavailable"

    return {
        "response": ai_response
    }