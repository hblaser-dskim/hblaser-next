export const metadata = {
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

// Next.js viewport 별도 export (metadata의 viewport 자동생성 방지)
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  userScalable: false,
}

import Scripts from '@/components/Scripts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/img/onepixel/images/favicon.ico" />

        {/* CSS */}
        <link rel="stylesheet" href="/img/onepixel/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/img/onepixel/css/vendor/normalize.css" />
        <link rel="stylesheet" href="/img/onepixel/css/vendor/slick.css" />
        <link rel="stylesheet" href="/img/onepixel/css/vendor/aos.css" />
        <link rel="stylesheet" href="/img/onepixel/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/img/onepixel/css/vendor/justifiedGallery.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
        <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/img/onepixel/css/fonts.css" />
        <link rel="stylesheet" href="/img/onepixel/css/general.css" />
        <link rel="stylesheet" href="/img/onepixel/css/layout.css" />
        <link rel="stylesheet" href="/img/onepixel/css/style.css" />
        <link rel="stylesheet" href="/img/onepixel/css/bootstrap.custom.css" />
      </head>
      <body>
        {children}
        <Scripts />
        {/* JS - defer로 React 렌더링 후 순서대로 실행 */}
        <script src="/img/onepixel/js/vendor/jquery-1.12.1.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/bootstrap.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/jquery.validate.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/jquery.parallax.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/slick.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/jquery.magnific-popup.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/jquery.justifiedGallery.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/ofi.min.js" defer={false} />
        <script src="/img/onepixel/js/vendor/aos.js" defer={false} />
      </body>
    </html>
  )
}
