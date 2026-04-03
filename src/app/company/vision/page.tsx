import Layout from '@/components/Layout'

export default function Page() {
  const html = `<div id="container">
            <!-- hero : s -->
            <section id="sub-hero" class="hero-01">
                <div class="hero-bg"></div>
                <div class="hero-caption container">
                    <div class="caption-cell">
                        <h2 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">HBL VISION</h2>
                        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Global No.1 Laser Solution
                            Provider.</p>
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
            <!-- business intro section : s -->
            <section class="sub-section business-intro-section">
                <div class="container">
                    <!-- main heading : s -->
                    <div class="main-heading">
                        <h2>VISION</h2>
                        <br>
                        <h4>Global No.1 Laser Solution Provider</h3>
                        <p>혁신적인 기술과 차별화된 서비스로 세계 최고의 레이저 솔루션을 제공합니다.</p>
                        <br><br>
                    </div>
                    <!-- main heading : s -->
                    <div class="main-heading">
                        <h2>MISSION</h2>
                        <p>최고의 Laser Solution Provider로서 고객만족을 실현하고 구성원과 주주와 함께 성장합니다.</p>
                    </div>
                    <!-- main heading : e -->
                    <!-- row : s -->
                    <div class="row gutter-no">
                        <!-- circle : s -->
                        <div class="col-md-4 col-circle" data-aos="fade" data-aos-duration="1000" data-aos-delay="200">
                            <div class="circle-outer">
                                <div class="circle-inner">
                                    <div class="vertical-sizer">
                                        <div class="icon-wrap">
                                            <i class="ion-ios-bulb" aria-hidden="true"></i>
                                        </div>
                                        <h4 lang="en">Member First</h4>
                                        <p> 임직원이 함께 발전하는 성장 모델을 실현하기 위해 노력합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- circle : e -->
                        <!-- circle : s -->
                        <div class="col-md-4 col-circle" data-aos="fade" data-aos-duration="1000" data-aos-delay="300">
                            <div class="circle-outer">
                                <div class="circle-inner">
                                    <div class="vertical-sizer">
                                        <div class="icon-wrap">
                                            <i class="ion-ios-heart" aria-hidden="true"></i>
                                        </div>
                                        <h4 lang="en">Customer First</h4>
                                        <p>고객과 함께 성장하고 고객의 만족을 최우선으로 생각합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- circle : e -->
                        <!-- circle : s -->
                        <div class="col-md-4 col-circle" data-aos="fade" data-aos-duration="1000" data-aos-delay="400">
                            <div class="circle-outer">
                                <div class="circle-inner">
                                    <div class="vertical-sizer">
                                        <div class="icon-wrap">
                                            <i class="ion-ios-contacts" aria-hidden="true"></i>
                                        </div>
                                        <h4 lang="en">Shareholder First</h4>
                                        <p>기업가치의 극대화를 통해 주주의 가치창출을 도모합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- circle : e -->
                    </div>
                    <!-- row : e -->
                </div>
            </section>
            <!-- business intro section : e -->
            <!-- business goal section : s -->
            <section class="sub-section business-goal-section">
                <div class="container">
                    <!-- section heading : s -->
                    <div class="main-heading">
                        <h2>CORE VALUES</h2>
                    </div>
                    <!-- section heading : e -->
                    <!-- row : s -->
                    <div class="row">
                        <div class="col-md-4 col-goal" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div class="goal-box">
                                <figure><img class="img-block"
                                        src="/img/onepixel/images/business_goal_img1.jpg" alt=""></figure>
                                <div class="desc-box">
                                    <h3>도전하는 한빛人</h3><br>
                                    <p>새로운 가능성에 열정을 가지고 도전하는 불굴의 한빛인.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-goal" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div class="goal-box">
                                <figure><img class="img-block"
                                        src="/img/onepixel/images/business_goal_img2.jpg" alt=""></figure>
                                <div class="desc-box">
                                    <h3>협력하는 한빛人</h3><br>
                                    <p>상호 소통과 협력을 통해 자신의 역할과 책임을 함께하는 한빛인.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-goal" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <div class="goal-box">
                                <figure><img class="img-block"
                                        src="/img/onepixel/images/business_goal_img3.jpg" alt=""></figure>
                                <div class="desc-box">
                                    <h3>창조하는 한빛人</h3><br>
                                    <p>미래지향적 사고로 혁신적이고 창의적인 방법을 찾아내는 한빛인.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- row : e -->
                </div>
            </section>
            <!-- business process section : e -->
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
