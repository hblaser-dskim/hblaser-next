import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div id="container">
        {/* 메인 히어로 슬라이더 */}
        <section id="main-hero" data-interval="4000">
          {[
            { img: 'main_hero_img1.jpg', keyword: 'VALUE', text: '레이저 기술을 통한 혁신적 고객 가치 창조' },
            { img: 'main_hero_img2.jpg', keyword: 'SOLUTION', text: '레이저 통합 자동화 시스템 솔루션 파트너' },
            { img: 'main_hero_img3.jpg', keyword: 'SMART', text: 'Machine Vision을 통한 자동화 기술의 혁신' },
            { img: 'main_hero_img4.jpg', keyword: 'INNOVATION', text: '레이저 융복합 기술의 선도기업' },
            { img: 'main_hero_img7.jpg', keyword: 'FUTURE', text: '미래를 향한 행복한 기술 창조' },
          ].map((slide) => (
            <div key={slide.keyword} className="slide-item"
              style={{ backgroundImage: `url(/img/onepixel/images/${slide.img})` }}>
              <div className="slide-caption container">
                <div className="caption-inner">
                  <strong><h2>{slide.keyword}</h2></strong>
                  <h2>{slide.text}</h2>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 회사 소개 섹션 */}
        <section className="main-section main-about-section">
          <div className="container">
            <div className="section-heading" data-aos="fade-up" data-aos-duration="800">
              <h2 lang="en">MAKING THE FUTURE</h2>
              <p>한빛레이저의 경쟁력</p>
            </div>
            <div className="row gutter-sm">
              {[
                { img: 'main_about_img1.jpg', title: '기술/영업상담', href: '/service/contact' },
                { img: 'main_about_img2.jpg', title: '레이저 응용센터', href: '/laser' },
                { img: 'main_about_img3.jpg', title: '자료실', href: '/service/resources' },
                { img: 'main_about_img4.jpg', title: '글로벌 네트워크', href: '/service/global' },
              ].map((item, i) => (
                <div key={item.title} className="col-sm-6 col-md-3 col-about"
                  data-aos="fade-up" data-aos-duration="800" data-aos-delay={String((i + 1) * 200)}>
                  <figure>
                    <img src={`/img/onepixel/images/${item.img}`} alt={item.title} />
                  </figure>
                  <h4>{item.title}</h4>
                  <Link href={item.href} className="btn btn-arrow">자세히 보기</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 패럴랙스 배너 */}
        <section className="main-parallax-section parallax-section"
          data-src="/img/onepixel/images/main_parallax_bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center" data-aos="fade-up" data-aos-duration="800">
                <h2>Global No.1 Laser System Solution</h2>
                <p>최첨단 레이저 기술로 글로벌 시장을 선도하며 확장하고 있습니다.</p>
                <Link href="/company" className="btn btn-white">회사 소개 보기</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 주력사업 미리보기 */}
        <section className="main-section">
          <div className="container">
            <div className="section-heading" data-aos="fade-up" data-aos-duration="800">
              <h2 lang="en">BUSINESS</h2>
              <p>주력사업</p>
            </div>
            <div className="row">
              {[
                { title: '레이저 개발', desc: '고정밀 레이저 시스템 설계 및 제작', href: '/business/laser', img: 'business_goal_img1.jpg' },
                { title: '자동화 설비', desc: '레이저 기반 자동화 생산 시스템', href: '/business/automation', img: 'business_goal_img2.jpg' },
                { title: '비전 시스템', desc: 'Machine Vision 검사 자동화', href: '/business/vision', img: 'business_goal_img3.jpg' },
              ].map((item, i) => (
                <div key={item.title} className="col-md-4"
                  data-aos="fade-up" data-aos-duration="800" data-aos-delay={String(i * 200)}>
                  <div className="business-card">
                    <img src={`/img/onepixel/images/${item.img}`} alt={item.title} className="img-responsive" />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <Link href={item.href} className="btn btn-arrow">자세히 보기</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
