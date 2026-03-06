import { Link } from 'react-router-dom'
import PostList from '../components/PostList'
import { getNotices, getGeneralPosts } from '../data/posts'
import styles from './Board.module.css'

export default function Board() {
  const notices = getNotices()
  const generalPosts = getGeneralPosts()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h1 className={styles.title}>게시판</h1>
        <Link to="/write" className={styles.writeBtn}>
          글쓰기
        </Link>
      </div>

      {notices.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>공지사항</h2>
          <PostList items={notices} showNoticeBadge />
        </section>
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>전체 글</h2>
        <PostList items={generalPosts} showNoticeBadge={false} />
      </section>
    </div>
  )
}
