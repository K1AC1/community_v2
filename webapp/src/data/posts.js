// 목 데이터: 나중에 API로 교체 가능
export const posts = [
  {
    id: 1,
    title: '커뮤니티 이용 안내',
    content: '안녕하세요. 커뮤니티를 이용해 주셔서 감사합니다. 서로 존중하는 말씀 부탁드립니다.',
    author: '관리자',
    createdAt: '2025-03-01T10:00:00',
    isNotice: true,
    viewCount: 312,
  },
  {
    id: 2,
    title: '3월 정기 점검 안내',
    content: '3월 10일 새벽 2시~4시 정기 점검이 있습니다. 불편을 드려 죄송합니다.',
    author: '관리자',
    createdAt: '2025-03-02T09:00:00',
    isNotice: true,
    viewCount: 256,
  },
  {
    id: 3,
    title: '첫 번째 게시글입니다',
    content: '반갑습니다. 첫 글 남깁니다. 많은 이야기 나눠요.',
    author: '회원1',
    createdAt: '2025-03-04T14:30:00',
    isNotice: false,
    viewCount: 42,
  },
  {
    id: 4,
    title: '질문이 있어요',
    content: '게시판 사용법이 궁금합니다. 답변 부탁드려요.',
    author: '회원2',
    createdAt: '2025-03-05T11:20:00',
    isNotice: false,
    viewCount: 18,
  },
  {
    id: 5,
    title: '정보 공유합니다',
    content: '유용한 링크 공유해요. [링크] 참고하세요.',
    author: '회원3',
    createdAt: '2025-03-06T08:15:00',
    isNotice: false,
    viewCount: 7,
  },
]

export function getPostById(id) {
  const numId = Number(id)
  return posts.find((p) => p.id === numId)
}

export function getNotices() {
  return posts.filter((p) => p.isNotice)
}

export function getGeneralPosts() {
  return posts.filter((p) => !p.isNotice)
}

export function formatDate(isoString) {
  const d = new Date(isoString)
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
