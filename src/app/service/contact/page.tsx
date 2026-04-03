'use client'
import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'done' : 'error')
  }

  return (
    <Layout>
      <PageBanner title="기술/영업상담" subtitle="문의하기" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <ul className="sub-tab">
              <li><Link href="/service/global">글로벌사이트</Link></li>
              <li className="active"><Link href="/service/contact">기술/영업상담</Link></li>
              <li><Link href="/service/resources">자료실</Link></li>
            </ul>

            <div className="row" style={{ marginTop: 40 }}>
              {/* 연락처 정보 */}
              <div className="col-md-4">
                <h4>연락처</h4>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                  <li>📍 대전광역시 유성구 유성대로1596번길 32-48</li>
                  <li>📞 042-879-3300</li>
                  <li>📠 042-862-6289</li>
                  <li>✉️ hbl@hblaser.co.kr</li>
                </ul>
              </div>

              {/* 문의 폼 */}
              <div className="col-md-8">
                {status === 'done' ? (
                  <div className="alert alert-success">
                    문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>회사명</label>
                      <input className="form-control" value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>담당자명 *</label>
                      <input className="form-control" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>이메일 *</label>
                      <input className="form-control" type="email" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>전화번호</label>
                      <input className="form-control" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>문의내용 *</label>
                      <textarea className="form-control" rows={6} required value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    {status === 'error' && (
                      <div className="alert alert-danger">전송 중 오류가 발생했습니다. 다시 시도해주세요.</div>
                    )}
                    <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? '전송 중...' : '문의 보내기'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
