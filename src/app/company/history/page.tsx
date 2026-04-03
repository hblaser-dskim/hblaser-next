import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'

export default function Page() {
  return (
    <Layout>
      <PageBanner title="연혁" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: `<section id="sub-hero" className="hero-01">
                <div className="hero-bg"></div>
                <div className="hero-caption container">
                    <div className="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">연혁</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">(주)한빛레이저 걸어온 발자취입니다.</p>
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
            
            
            <section className="sub-section history-section">
                <div className="container">
                    
                    <div className="main-heading">
                        <h2>연혁</h2>
                    </div>
                    
                    
                    <div className="history-group">
                        <div className="row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            <div className="col-sm-5 col-history">


                                <h4 lang="en">2015-현재</h4>
                                <ul>
                                           <li><strong>o</strong>
                                        <p>2024. 01. KOSDAQ 상장</p>


                                           <l`}} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
