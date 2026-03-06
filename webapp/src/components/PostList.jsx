import { Link } from 'react-router-dom'
import { formatDate } from '../data/posts'
import styles from './PostList.module.css'

export default function PostList({ items, showNoticeBadge = false }) {
  if (!items?.length) {
    return (
      <div className={styles.empty}>
        게시글이 없습니다.
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {items.map((post) => (
        <li key={post.id} className={styles.item}>
          <Link to={`/post/${post.id}`} className={styles.link}>
            <span className={styles.title}>
              {showNoticeBadge && post.isNotice && (
                <span className={styles.noticeBadge}>공지</span>
              )}
              {post.title}
            </span>
            <span className={styles.meta}>
              {post.author} · {formatDate(post.createdAt)} · 조회 {post.viewCount}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
