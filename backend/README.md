# Community API (FastAPI REST 서버)

FastAPI 기반 REST API 백엔드입니다.

## 요구사항

- Python 3.10+

## 설치 및 실행

```bash
# 가상환경 생성 및 활성화 (선택)
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt

# 서버 실행 (개발 시 자동 리로드)
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

또는:

```bash
python main.py
```

## API 문서

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/` | 서비스 정보 |
| GET | `/health` | 헬스 체크 |
| GET | `/api/health` | API 헬스 체크 |
| GET | `/api/items` | 아이템 목록 |
| GET | `/api/items/{id}` | 아이템 단건 조회 |
| POST | `/api/items` | 아이템 생성 (예시) |

## 프로젝트 구조

```
backend/
├── main.py              # 앱 진입점
├── requirements.txt
├── README.md
└── app/
    ├── __init__.py
    └── api/
        ├── __init__.py   # 라우터 통합
        ├── health.py
        └── items.py      # 예시 CRUD
```

추가 도메인은 `app/api/` 아래에 라우터를 만들고 `app/api/__init__.py`에서 `include_router`로 등록하면 됩니다.
