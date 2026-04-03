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
    .eq('category', 'disclosure')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function DisclosurePage() {
  const posts = await getPosts()
  return (
    <Layout>
      <PageBanner title="공시정보" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <ul className="sub-tab">
              <li className="active"><Link href="/notice/disclosure">공시정보</Link></li>
              <li><Link href="/notice/ir">IR</Link></li>
              <li><Link href="/notice/pr">PR</Link></li>
            </ul>
            <PostList posts={posts} category="disclosure" />
          </div>
        </section>
      </div>
    </Layout>
  )
}
