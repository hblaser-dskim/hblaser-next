import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { company, name, email, phone, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'hblaser-web@resend.dev',
      to: 'hbl@hblaser.co.kr',
      subject: `[한빛레이저 웹 문의] ${company || ''} ${name}`,
      html: `
        <h3>한빛레이저 홈페이지 문의</h3>
        <table border="1" cellpadding="8" style="border-collapse:collapse">
          <tr><td><b>회사명</b></td><td>${company || '-'}</td></tr>
          <tr><td><b>담당자</b></td><td>${name}</td></tr>
          <tr><td><b>이메일</b></td><td>${email}</td></tr>
          <tr><td><b>전화</b></td><td>${phone || '-'}</td></tr>
          <tr><td><b>문의내용</b></td><td>${message}</td></tr>
        </table>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: '전송 실패' }, { status: 500 })
  }
}
