import Layout from '@/components/Layout'
import PageBanner from '@/components/PageBanner'

export default function Page() {
  return (
    <Layout>
      <PageBanner title="회사소개" />
      <div id="container">
        <section className="sub-section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: `<section id="sub-hero" className="hero-01">
<div className="hero-bg"></div>
<div className="hero-caption container">
<div className="caption-cell">
<h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">회사소개</h2>
<p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">(주)한빛레이저를 소개합니다.</p>
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


<section className="sub-section about-visual-section">
<div className="container-fluid">

<div className="main-heading">
<h2>회사소개</h2>
</div>


<div className="about-visual margin-offset" data-aos="fade-up" data-aos-duration="1000">
<div className="container">
<h3>㈜한빛레이저는 1997년 대전에서 창업한 레이저 전문기술 기업입니다.
<br><strong>다년간 축적된 레이저 시스템에 대한 노하우로 광범위한 산업분야에서 명성을 쌓고 있습니다.</strong></h3>

<div className="row row-table-sm vertical-top">
<div className="col-xs-6 col-visual">
<div className="icon-wrap">
<i className="ion-ios-business" aria-hidden="true"></i>
</div>
<h4>설립일자</h4>
<p>1997년 10월</p>
</div>
<div className="col-xs-6 col-visual">
<div className="icon-wrap">
<i className="ion-ios-briefcase" aria-hidden="true"></i>
</div>
<h4>사업분야</h4>
<p>레이저 발생·전송·가공기술</p>
</div>
</div>

</div>
</div>

</div>
</section>


<section className="sub-section about-summary-section no-padding-top">
<div className="container">





<dl className="row summarylist">
<dt className="col-sm-3 col-m`}} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
