from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import contact

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # Vite dev
    ],
    allow_credentials=True,
    allow_methods=["*"],          # <-- allows OPTIONS
    allow_headers=["*"],
)

app.include_router(contact.router)
