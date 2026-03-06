from fastapi import APIRouter

router = APIRouter()


@router.get("")
def api_health():
    """API 헬스 체크"""
    return {"status": "ok", "api": "ready"}
