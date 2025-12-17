from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage

load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_USER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASS")
MAIL_TO = os.getenv("TO_EMAIL")

if not all([EMAIL_ADDRESS, EMAIL_PASSWORD, MAIL_TO]):
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

@app.post("/contact")
async def send_contact_message(form: ContactForm):
    try:
        msg = EmailMessage()
        msg["Subject"] = f"[Portfolio] Message from {form.name}"
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = MAIL_TO
        msg.set_content(
            f"Name: {form.name}\nEmail: {form.email}\n\n{form.message}"
        )

        with smtplib.SMTP("smtp.gmail.com", 587, timeout=10) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except smtplib.SMTPAuthenticationError:
        raise HTTPException(
            status_code=500,
            detail="Email authentication failed"
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
