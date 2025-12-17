from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage
import socket

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

@app.get("/")
def root():
    return {"status": "ok"}

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

        host = "smtp.gmail.com"
        port = 465
        addr_info = socket.getaddrinfo(host, port, socket.AF_INET, socket.SOCK_STREAM)
        ipv4_address = addr_info[0][4][0]

        with smtplib.SMTP_SSL(ipv4_address, port, timeout=15) as server:
            # Important : spécifier le hostname pour le certificat SSL
            server.connect(ipv4_address, port)
            server.helo(host) 
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except smtplib.SMTPAuthenticationError:
        raise HTTPException(
            status_code=500,
            detail="Email authentication failed. Check your App Password."
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )