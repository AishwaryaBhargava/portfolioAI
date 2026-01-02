from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from app.services.email import send_contact_email
from app.db import supabase

router = APIRouter(prefix="/contact", tags=["Contact"])


class ContactPayload(BaseModel):
    name: str
    email: EmailStr
    message: str
    source: str = "portfolio"


@router.post("/")
async def submit_contact(payload: ContactPayload):
    # 1. Insert into Supabase
    result = supabase.table("contact_messages").insert({
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "source": payload.source
    }).execute()

    if not result.data:
        raise HTTPException(status_code=500, detail="DB insert failed")

    # 2. Send email notification
    try:
        send_contact_email(
            name=payload.name,
            email=payload.email,
            message=payload.message
        )
    except Exception as e:
        # DB already has the message, so we don't fail the request
        print("Email failed:", e)

    return {"success": True}
