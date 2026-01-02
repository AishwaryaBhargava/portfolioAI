import requests
from app.config import RESEND_API_KEY

RESEND_URL = "https://api.resend.com/emails"


def send_contact_email(name: str, email: str, message: str):
    payload = {
        "from": "Portfolio <onboarding@resend.dev>",
        "to": ["aishwarya.bhargava1198@gmail.com"],
        "subject": f"New Portfolio Message from {name}",
        "html": f"""
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        """
    }

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(RESEND_URL, json=payload, headers=headers)

    if response.status_code >= 400:
        raise Exception(f"Resend failed: {response.text}")
