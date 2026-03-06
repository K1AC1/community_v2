import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          커뮤니티
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            게시판
          </Link>
          <Link to="/notice" className={styles.navLink}>
            공지사항
          </Link>
          <Link to="/write" className={styles.navLinkHighlight}>
            글쓰기
          </Link>
        </nav>
      </div>
    </header>
  )
}
