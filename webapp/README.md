# 커뮤니티 게시판 (React + Vite)

공지사항·일반 게시글이 있는 게시판 웹앱입니다.

## 기능

- **게시판**: 전체 글 목록 + 공지사항 상단 노출
- **공지사항**: 공지 목록 전용 페이지
- **글 상세**: 제목, 작성자, 날짜, 조회수, 내용
- **글쓰기/수정**: 제목·내용 입력 폼 (현재 목 데이터, 추후 API 연동)

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속

## 빌드

```bash
npm run build
npm run preview   # 빌드 결과 미리보기
```

## 기술 스택

- React 18
- Vite 6
- React Router v6
- CSS Modules

## 디렉터리 구조

```
src/
  components/   # Layout, Header, PostList
  data/         # 목 데이터 (posts.js)
  pages/        # Board, Notice, PostDetail, WritePost
  App.jsx, main.jsx, index.css
```
