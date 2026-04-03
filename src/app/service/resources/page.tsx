import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'
import PostList from '@/components/PostList'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export const revalidate = 60

async function getPosts() {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('category', 'resource')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function ResourcesPage() {
  const posts = await getPosts()
  return (
    <Layout>
      <PageBanner title="자료실" subtitle="제품 카탈로그 및 기술 자료" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <ul className="sub-tab">
              <li><Link href="/service/global">글로벌사이트</Link></li>
              <li><Link href="/service/contact">기술/영업상담</Link></li>
              <li className="active"><Link href="/service/resources">자료실</Link></li>
            </ul>
            <PostList posts={posts} category="resource" />
          </div>
        </section>
      </div>
    </Layout>
  )
}
