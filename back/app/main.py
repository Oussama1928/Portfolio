from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
import requests
from dotenv import load_dotenv

load_dotenv()

MAILGUN_DOMAIN = os.getenv("MAILGUN_DOMAIN")
MAILGUN_API_KEY = os.getenv("MAILGUN_API_KEY")
TO_EMAIL = os.getenv("TO_EMAIL")

if not all([MAILGUN_DOMAIN, MAILGUN_API_KEY, TO_EMAIL]):
    raise RuntimeError("Missing environment variables")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/contact")
async def send_contact_message(form: ContactForm):
    try:
        response = requests.post(
            f"https://api.mailgun.net/v3/{MAILGUN_DOMAIN}/messages",
            auth=("api", MAILGUN_API_KEY),
            data={
                "from": f"{form.name} <contact@{MAILGUN_DOMAIN}>",
                "to": [TO_EMAIL],
                "subject": f"[Portfolio] Message from {form.name}",
                "text": f"Name: {form.name}\nEmail: {form.email}\n\n{form.message}",
            }
        )

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=response.text)

        return {"success": True, "message": "Message sent successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
