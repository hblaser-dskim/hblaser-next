import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'

export default function Page() {
  return (
    <Layout>
      <PageBanner title="위치" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: `<section id="sub-hero" className="hero-01">
                <div className="hero-bg"></div>
                <div className="hero-caption container">
                    <div className="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">오시는길</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">(주)한빛레이저 찾아오시는 길</p>
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
            
            
            <section className="sub-section location-section">
                <div className="container">
                    
                    <div className="main-heading">
                        <h2>오시는 길</h2>
                    </div>
                    
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3121533668614!2d127.38220475139569!3d36.40164227993464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356549f8ccaa40ef%3A0xff15c7fe4ae69b0c!2z64yA7KCE6rSR7Jet7IucIOycoOyEseq1rCDsoITrr7zrj5kg7Jyg7ISx64yA66GcMTU5NuuyiOq4uCAzMi00OA!5e0!3m2!1sko!2skr!4v1628579034082!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                    </di`}} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
