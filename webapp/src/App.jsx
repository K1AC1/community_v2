import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Board from './pages/Board'
import Notice from './pages/Notice'
import PostDetail from './pages/PostDetail'
import WritePost from './pages/WritePost'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/write/:id" element={<WritePost />} />
      </Routes>
    </Layout>
  )
}

export default App
