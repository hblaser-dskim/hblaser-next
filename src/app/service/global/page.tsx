import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'

export default function Page() {
  return (
    <Layout>
      <PageBanner title="글로벌사이트" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: `<section id="sub-hero" className="hero-05">
                <div className="hero-bg"></div>
                <div className="hero-caption container">
                    <div className="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">글로벌사이트</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">한빛레이저의 글로벌사이트 입니다.</p>
                    </div>
                </div>
            </section>
            
            
            <section className="dropdown-nav-section">
    <div className="container">
        <a className="link-home" href="<?php echo G5_URL ?>/"><i className="xi-home" aria-hidden="true"></i></a>
        <div className="dropdown-wrap dropdown-01">
            <a href="javascript:void(0)" role="button" aria-expanded="false" lang="en"></a>
            <ul className="dropdown"></ul>
        </div>
        <div className="dropdown-wrap dropdown-02">
            <a href="javascript:void(0)" role="button" aria-expanded="false"></a>
            <ul className="dropdown"></ul>
        </div>
    </div>
</section>
            
            
            <section className="sub-section global-section">
                <div className="container">
                    
                    <div className="main-heading">
                        <h2>글로벌사이트</h2>
                    </div>
                    
                    <div className="global-wrap">
                        <div className="img-box">
                            <img src="/img/onepixel/images/global_img.png" alt="글로벌사이트 PC 이미지" className="hidden-xs">
                            <img src="/img/onepixel/images/m_global_img.png" alt="글로벌사이트 MOBILE 이미지" className="visible-xs">
                        </div>
                    </div>
                </div>
            </section>`}} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
