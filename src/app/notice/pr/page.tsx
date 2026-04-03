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
    .eq('category', 'pr')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function PRPage() {
  const posts = await getPosts()
  return (
    <Layout>
      <PageBanner title="PR" subtitle="보도자료" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <ul className="sub-tab">
              <li><Link href="/notice/disclosure">공시정보</Link></li>
              <li><Link href="/notice/ir">IR</Link></li>
              <li className="active"><Link href="/notice/pr">PR</Link></li>
            </ul>
            <PostList posts={posts} category="pr" />
          </div>
        </section>
      </div>
    </Layout>
  )
}
