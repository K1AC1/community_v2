import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPostById, formatDate } from '../data/posts'
import styles from './PostDetail.module.css'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = getPostById(id)

  if (!post) {
    return (
      <div className={styles.page}>
        <p className={styles.error}>글이 없습니다.</p>
        <Link to="/">목록으로</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <div className={styles.head}>
          <h1 className={styles.title}>
            {post.isNotice && <span className={styles.noticeBadge}>공지</span>}
            {post.title}
          </h1>
          <div className={styles.meta}>
            {post.author} · {formatDate(post.createdAt)} · 조회 {post.viewCount}
          </div>
        </div>
        <div className={styles.content}>
          {post.content}
        </div>
      </article>

      <div className={styles.actions}>
        <Link to={post.isNotice ? '/notice' : '/'} className={styles.backBtn}>
          목록
        </Link>
        {!post.isNotice && (
          <button
            type="button"
            className={styles.editBtn}
            onClick={() => navigate(`/write/${post.id}`)}
          >
            수정
          </button>
        )}
      </div>
    </div>
  )
}
