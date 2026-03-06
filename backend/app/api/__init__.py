from fastapi import APIRouter
from app.api import health, items

router = APIRouter()
router.include_router(health.router, prefix="/health", tags=["health"])
router.include_router(items.router, prefix="/items", tags=["items"])
