'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const nav = [
  {
    label: '회사소개', href: '/company',
    sub: [
      { label: '회사소개', href: '/company' },
      { label: '기업이념', href: '/company/vision' },
      { label: '윤리경영', href: '/company/ethics' },
      { label: '연혁', href: '/company/history' },
      { label: '위치', href: '/company/location' },
    ]
  },
  {
    label: '주력사업', href: '/business',
    sub: [
      { label: '레이저 개발', href: '/business/laser' },
      { label: '자동화 설비', href: '/business/automation' },
      { label: '비전 시스템', href: '/business/vision' },
    ]
  },
  {
    label: '산업분야', href: '/industry',
    sub: [
      { label: '자동차', href: '/industry/automotive' },
      { label: '배터리', href: '/industry/battery' },
      { label: '반도체/기타', href: '/industry/semiconductor' },
    ]
  },
  {
    label: '레이저 응용센터', href: '/laser',
    sub: [
      { label: '보유설비', href: '/laser/equipment' },
      { label: '솔루션', href: '/laser/solution' },
    ]
  },
  {
    label: '서비스', href: '/service',
    sub: [
      { label: '글로벌사이트', href: '/service/global' },
      { label: '기술/영업상담', href: '/service/contact' },
      { label: '자료실', href: '/service/resources' },
    ]
  },
  {
    label: 'IR/PR', href: '/notice',
    sub: [
      { label: '공시정보', href: '/notice/disclosure' },
      { label: 'IR', href: '/notice/ir' },
      { label: 'PR', href: '/notice/pr' },
    ]
  },
  {
    label: '채용공고', href: '/recruit',
    sub: [
      { label: '채용공고', href: '/recruit' },
    ]
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* 원본 CSS 그대로 */}
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

      <main role="main">
        {/* 헤더 - 원본과 동일한 구조 */}
        <header id="header">
          <div className="container-fluid">
            <h1 className="logo">
              <Link href="/">
                <img className="logo-light" src="/img/onepixel/images/logo-light.svg" alt="HBL Corporation" />
                <img className="logo-dark" src="/img/onepixel/images/logo-dark.svg" alt="HBL Corporation" />
              </Link>
            </h1>

            <button type="button" aria-expanded={menuOpen}
              className={`btn-open-nav ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span /><span /><span />
            </button>

            <nav className={menuOpen ? 'open' : ''}>
              <div className="mobile-header">
                <Link href="/">
                  <img src="/img/onepixel/images/logo-light.svg" alt="HBL" />
                </Link>
                <button type="button" className="btn-close-nav" onClick={() => setMenuOpen(false)}>
                  <i className="ion-ios-close" />
                </button>
              </div>

              <ul className="gnb" role="navigation" aria-label="상단메뉴">
                {nav.map(item => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                    {item.sub && (
                      <ul className="subnav">
                        {item.sub.map(s => (
                          <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {children}

        {/* 푸터 - 원본과 동일 */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 footer-logo">
                  <Link href="/">
                    <img src="/img/onepixel/images/logo-light.svg" alt="HBL Corporation" />
                  </Link>
                  <p>Global No.1 Laser System Solution Provider</p>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {nav.map(item => (
                      <div key={item.href} className="col-md-2 footer-links">
                        <h4><Link href={item.href}>{item.label}</Link></h4>
                        <ul>
                          {item.sub?.map(s => (
                            <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>대전광역시 유성구 유성대로 1596번길 32-48 | Tel. 042-879-3300 | E-mail. hbl@hblaser.co.kr</p>
                </div>
                <div className="col-md-6 text-right">
                  <p>COPYRIGHT © 2024 HBL Corporation ALL RIGHTS RESERVED.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* 원본 JS 그대로 */}
      <Script src="/img/onepixel/js/vendor/jquery-1.12.1.min.js" strategy="beforeInteractive" />
      <Script src="/img/onepixel/js/vendor/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/img/onepixel/js/vendor/slick.min.js" strategy="afterInteractive" />
      <Script src="/img/onepixel/js/vendor/aos.js" strategy="afterInteractive" />
      <Script src="/img/onepixel/js/vendor/jquery.parallax.min.js" strategy="afterInteractive" />
      <Script src="/img/onepixel/js/vendor/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/img/onepixel/js/script.js" strategy="afterInteractive" />
    </>
  )
}
