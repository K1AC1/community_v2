import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPostById } from '../data/posts'
import styles from './WritePost.module.css'

export default function WritePost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const existing = id ? getPostById(id) : null

  const [title, setTitle] = useState(existing?.title ?? '')
  const [content, setContent] = useState(existing?.content ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    // TODO: API 연동 시 여기서 저장
    alert(isEdit ? '수정 기능은 백엔드 연동 후 적용됩니다.' : '글쓰기 기능은 백엔드 연동 후 적용됩니다.')
    navigate(isEdit ? `/post/${id}` : '/')
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        {isEdit ? '글 수정' : '글쓰기'}
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            제목
          </label>
          <input
            id="title"
            type="text"
            className={styles.input}
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="content" className={styles.label}>
            내용
          </label>
          <textarea
            id="content"
            className={styles.textarea}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            required
          />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="submit" className={styles.submitBtn}>
            {isEdit ? '수정' : '등록'}
          </button>
        </div>
      </form>
    </div>
  )
}
