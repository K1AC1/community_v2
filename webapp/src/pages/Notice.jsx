import PostList from '../components/PostList'
import { getNotices } from '../data/posts'
import styles from './Notice.module.css'

export default function Notice() {
  const notices = getNotices()

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>공지사항</h1>
      <p className={styles.desc}>
        운영진이 올리는 공지사항입니다.
      </p>
      <PostList items={notices} showNoticeBadge />
    </div>
  )
}
