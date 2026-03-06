"""
FastAPI REST 서버 진입점
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import router as api_router

app = FastAPI(
    title="Community API",
    description="FastAPI 기반 REST API 서버",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api", tags=["api"])


@app.get("/")
def root():
    """헬스 체크 및 API 정보"""
    return {
        "service": "Community API",
        "docs": "/docs",
        "redoc": "/redoc",
    }


@app.get("/health")
def health():
    """헬스 체크"""
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
