import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'

export default function Page() {
  return (
    <Layout>
      <PageBanner title="기업이념" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: `<section id="sub-hero" className="hero-01">
                <div className="hero-bg"></div>
                <div className="hero-caption container">
                    <div className="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">HBL VISION</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Global No.1 Laser Solution
                            Provider.</p>
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
            
            
            <section className="sub-section business-intro-section">
                <div className="container">
                    
                    <div className="main-heading">
                        <h2>VISION</h2>
                        <br>
                        <h4>Global No.1 Laser Solution Provider</h3>
                        <p>혁신적인 기술과 차별화된 서비스로 세계 최고의 레이저 솔루션을 제공합니다.</p>
                        <br><br>
                    </div>
                    
                    <div className="main-heading">
                        <h2>MISSION</h2>
                        <p>최고의 Laser Solution Provider로서 고객만족을 실현하고 구성원과 주주와 함께 성장합니다.</p>
                    </div>
                    
                    
              `}} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
