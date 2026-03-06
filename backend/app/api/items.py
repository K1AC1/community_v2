from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter()


class ItemCreate(BaseModel):
    name: str
    description: Optional[str] = None


class ItemResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None


# 예시 인메모리 저장소
_items: dict[int, dict] = {}
_next_id = 1


@router.get("", response_model=list[ItemResponse])
def list_items():
    """아이템 목록 조회"""
    return [ItemResponse(id=k, **v) for k, v in _items.items()]


@router.get("/{item_id}", response_model=ItemResponse)
def get_item(item_id: int):
    """아이템 단건 조회"""
    if item_id not in _items:
        raise HTTPException(status_code=404, detail="Item not found")
    return ItemResponse(id=item_id, **_items[item_id])


@router.post("", response_model=ItemResponse, status_code=201)
def create_item(body: ItemCreate):
    """아이템 생성 (예시)"""
    global _next_id
    item_id = _next_id
    _next_id += 1
    _items[item_id] = {"name": body.name, "description": body.description}
    return ItemResponse(id=item_id, **_items[item_id])
