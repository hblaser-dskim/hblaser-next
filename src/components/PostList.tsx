import { Post } from '@/lib/supabase'
import Link from 'next/link'

export default function PostList({ posts, category }: { posts: Post[], category: string }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center" style={{ padding: '60px 0', color: '#999' }}>
        <p>등록된 게시물이 없습니다.</p>
      </div>
    )
  }
  return (
    <div className="board-wrap">
      <table className="board-list table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>번호</th>
            <th>제목</th>
            <th style={{ width: '15%' }}>날짜</th>
            {category === 'resource' && <th style={{ width: '10%' }}>첨부</th>}
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (
            <tr key={post.id}>
              <td className="text-center">{posts.length - i}</td>
              <td>
                <Link href={`/posts/${post.id}`} style={{ color: '#333' }}>
                  {post.title}
                </Link>
              </td>
              <td className="text-center">
                {new Date(post.created_at).toLocaleDateString('ko-KR')}
              </td>
              {category === 'resource' && (
                <td className="text-center">
                  {post.file_url
                    ? <a href={post.file_url} download={post.file_name}>📎</a>
                    : '-'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
