import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '한빛레이저 - Global No.1 Laser System Solution',
  description: '한빛레이저는 레이저 용접·마킹·절단·패터닝 등 정밀 레이저 시스템 솔루션을 제공하는 글로벌 전문기업입니다.',
  openGraph: {
    title: '한빛레이저 - Global No.1 Laser System Solution',
    description: '레이저 용접·마킹·절단 등 정밀 레이저 시스템 솔루션 전문기업 한빛레이저입니다.',
    images: ['/img/onepixel/images/main_hero_img1.jpg'],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
