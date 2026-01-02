from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import contact

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://portfolioai-4tpg.onrender.com",
        "https://portfolio-ai-mauve.vercel.app",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],          # <-- allows OPTIONS
    allow_headers=["*"],
)

app.include_router(contact.router)
