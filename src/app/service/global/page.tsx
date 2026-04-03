import Layout from '@/components/Layout'

export default function Page() {
  const html = `<div id="container">
            <!-- hero : s -->
            <section id="sub-hero" class="hero-05">
                <div class="hero-bg"></div>
                <div class="hero-caption container">
                    <div class="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">글로벌사이트</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">한빛레이저의 글로벌사이트 입니다.</p>
                    </div>
                </div>
            </section>
            <!-- hero : e -->
            <!-- dropdown navigation : s -->
            <section class="dropdown-nav-section">
    <div class="container">
        <a class="link-home" href="/"><i class="xi-home" aria-hidden="true"></i></a>
        <div class="dropdown-wrap dropdown-01">
            <a href="javascript:void(0)" role="button" aria-expanded="false" lang="en"></a>
            <ul class="dropdown"></ul>
        </div>
        <div class="dropdown-wrap dropdown-02">
            <a href="javascript:void(0)" role="button" aria-expanded="false"></a>
            <ul class="dropdown"></ul>
        </div>
    </div>
</section>
            <!-- dropdown navigation : e -->
            <!-- contact section : s -->
            <section class="sub-section global-section">
                <div class="container">
                    <!-- main heading : s -->
                    <div class="main-heading">
                        <h2>글로벌사이트</h2>
                    </div>
                    <!-- main heading : e -->
                    <div class="global-wrap">
                        <div class="img-box">
                            <img src="/img/onepixel/images/global_img.png" alt="글로벌사이트 PC 이미지" class="hidden-xs">
                            <img src="/img/onepixel/images/m_global_img.png" alt="글로벌사이트 MOBILE 이미지" class="visible-xs">
                        </div>
                    </div>
                </div>
            </section>
            <!-- contact section : e -->
        </div>
        <!-- container : e -->
        <!-- footer : s -->
<footer id="footer">
    <div class="container">
        <!-- nav : s -->
        <nav>
            <ul class="footer-nav">
                <li><a href="/service/sub03.html">자료실</a></li>
                <li><a href="/company/sub01.html">기업이념</a></li>
                <li><a href="/company/sub03.html">오시는길</a></li>
            </ul>
        </nav>
        <!-- nav : e -->
        <!-- sns icons : s -->
        <ul class="sns-icons">
            <li><a href="//naver.com" target="_blank"><i class="ion-logo-instagram"></i></a></li>
            <li><a href="//naver.com" target="_blank"><i class="ion-logo-facebook"></i></a></li>
            <li><a href="//naver.com" target="_blank"><i class="ion-logo-youtube"></i></a></li>
        </ul>
        <!-- sns icons : e -->
        <!-- info : s -->
        <div class="info">
            <p>(주)한빛레이저 <span>대표</span> 김정묵 <span> </span>  <br><span>주소</span> 대전광역시 유성구 유성대로 1596번길 32-48<br><span>문의메일</span> hbl@hblaser.co.kr <span>문의전화</span> 042-879-3300 <br><span></p>
            <p>COPYRIGHT 2021 HBL Corporation ALL RIGHTS RESERVED.</p>
        </div>
        <!-- info : e -->
    </div>
</footer>
<!-- footer : e -->
    </main>
    <!-- main : e -->
</body>
</html>
<script language="javascript" type="text/javascript" src="/cjs/javascript.lib.js?date=1721110582"></script>

            <script type="text/javascript">
            var JsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
            var sTime = new Date().getTime();
            document.write(unescape("%3Cscript id='log_script' src='" + JsHost + "blg-jsk.cafe24.com/weblog.js?uid=hblaser01&t=" + sTime + "' type='text/javascript'%3E%3C/script%3E"));
            </script>
        `
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}
