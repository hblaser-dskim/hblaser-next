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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        {/* 원본과 동일한 viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/img/onepixel/images/favicon.ico" />

        {/* CSS - 원본과 동일한 순서 */}
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

        {/* JS - 원본과 동일하게 동기 로드 (반응형/슬라이더 정상 동작) */}
        <script src="/img/onepixel/js/vendor/jquery-1.12.1.min.js"></script>
        <script src="/img/onepixel/js/vendor/bootstrap.min.js"></script>
        <script src="/img/onepixel/js/vendor/jquery.validate.min.js"></script>
        <script src="/img/onepixel/js/vendor/jquery.parallax.min.js"></script>
        <script src="/img/onepixel/js/vendor/slick.min.js"></script>
        <script src="/img/onepixel/js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="/img/onepixel/js/vendor/jquery.justifiedGallery.min.js"></script>
        <script src="/img/onepixel/js/vendor/ofi.min.js"></script>
        <script src="/img/onepixel/js/vendor/aos.js"></script>
        <script src="/img/onepixel/js/script.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
