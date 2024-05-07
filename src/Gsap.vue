<template>
  <main class="container">
    <section class="content">
        {{ scriptInput.value }}

        <!-- 
          https://gsap.com/community/forums/topic/15307-greensock-and-vuejs-v2/
          https://velog.io/@jeong9204/vue3%EC%97%90%EC%84%9C-gsap%EC%82%AC%EC%9A%A9%EA%B8%B0 
          https://codepen.io/GreenSock/pen/BajexOQ
        -->

        <!-- 노르웨이 기획전 -->
        <div class="event_wrap" ref="motionBoxes">
          <div class="evt_wide_wrap p_evt_tit">
            <div class="evt_section">
              <h1><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_tit.jpg" alt="" /></h1>
              <div class="motion_box">
                <p class="motion">GSAP 테스트</p>
                <h3 class="motion delay02">노르웨이 연어는<br>언제나 옳다<span>.</span></h3>
              </div>
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec1">
            <div class="evt_section">
              <img src="https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg" alt="" />
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec2">
            <div class="evt_section">
              <img src="https://cdn.pixabay.com/photo/2020/07/10/04/06/pink-algae-5389441_960_720.jpg" alt="" />
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec3">
            <div class="evt_section">
              <img src="https://cdn.pixabay.com/photo/2024/02/26/09/17/synthetic-8597464_960_720.jpg" alt="" />
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec2">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec2.jpg" alt="" />
              <div class="motion_box">
                <span class="motion"><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/object1.png" alt="" /></span>
                <p class="motion delay01">
                  씨푸드프롬노르웨이(Seafood From Norway)마크는<br>
                  <strong>노르웨이산 수산물임을 상징하는 원산지 마크</strong>입니다.
                </p>
                <p class="motion delay02">
                  이 마크는 차갑고 청정한 노르웨이 바다에서 지속 가능한 방식으로<br>
                  양식되거나 어획된 최고 품질의 수산물임을 상징합니다.<br>
                  제품 포장 혹은 온라인 스토어에서<br>
                  씨푸드프롬노르웨이 마크를 확인해보세요!
                </p>
              </div>
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec3">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec3.jpg" alt="">
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec4">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec4.jpg" alt="">
              <div class="motion_box">
                <h3 class="motion">추운 환경에서 서식하지만,<br>따뜻한 사랑을 지닌 연어</h3>
                <p class="motion delay01">
                  연어는 유전학적으로 다르게 분류되는 대서양 연어와 태평양 연어로 나뉘는데,<br>
                  이 둘은 북반구의 차가운 바다에서만 찾아볼 수 있는 생선입니다.<br>
                  가장 흔한 종류는 대서양 연어로, 뛰어난 품질로 전 세계에서 유명합니다.
                </p>
                <p class="motion delay02">
                  북극까지 이어지는 노르웨이 해안선은 차가운 물에서 번성하는 생선에게<br>
                  이상적인 생태 조건으로 이 곳에서 연어가 자연적인 환경에서 살아갈 수 있습니다.
                </p>
                <p class="motion delay03">
                  <strong>노르웨이 바다의 모든 양식장은 지속 가능한 방식</strong>으로 운영되며,<br>
                  물고기가 자유롭게 움직일 수 있도록 충분한 공간을 확보해줍니다.<br>
                  양식장 용량의 2.5%만이 연어이며, 남은 97.5%는 물로 채워집니다.<br>
                  또한, <strong>깨끗한 고품질의 고형 사료만을 제공</strong>합니다. 
                </p>
                <p class="motion delay04">
                  여기에 더불어 노르웨이에서는 연어 생산 과정에서 항생제 사용률을 현저히 줄였습니다.<br>
                  1987년부터 <strong>항생제 사용을 지양</strong>했으며, 감소 비율은 약 99%에 이릅니다.<br>
                  연어 1톤당 항생제는 0.14g만을 사용합니다. 현명한 전통 기법과<br>
                  현대 과학의 접근법이 어우러져 노르웨이 수산 양식의 바탕을 이루고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec5">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec5.jpg" alt="">
              <div class="motion_box">
                <h3 class="motion">호흡 방식의 변화</h3>
                <p class="motion delay01">
                  연어는 생애 일부는 민물에서 지내고, 남은 삶은<br>
                  염분이 있는 바닷물에서 살아가는 흥미로운 특징을 지녔습니다.<br>
                  바다에서 살되 민물에서 번식하기 때문에,<br>
                  연어는 산소를 받아들이는 방식을 바꿔야 합니다.
                </p>
                <p class="motion delay02">
                  민물고기로서 숨쉬고 생활하기 위해 연어는 특별한 능력을 지녔습니다.<br>
                  수천 년 넘게 연어는 아가미의 특정 세포에서 펌프질하는 방식을<br>
                  역으로 바꾸는 놀라운 능력을 진화 시켜 왔습니다.<br>
                  이렇게 놀라운 생리학적 능력은 <strong>‘삼투압 조절’</strong>이라 불리며,<br>
                  몇몇 종류의 생선만이 이런 기술을 사용합니다.
                </p>
              </div>
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec6">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec6.jpg" alt="">
              <div class="motion_box">
                <h3 class="motion">노르웨이 연어<br>안심하고 먹어도 될까?</h3>
                <p class="motion delay01">
                  인공지능(AI)를 활용한 얼굴 인식 기술이 연어에게도 사용된다는<br>
                  사실, 알고 계셨나요? 사람마다 지문이 다르듯 <strong>연어는 얼굴에 있는</strong><br>
                  <strong>점의 분포 형태가 각자 다르다는 점</strong>을 이용하는 것인데요.
                </p>
                <p class="motion delay02">
                  연어가 부레의 부력을 조절하기 위해 수면으로 올라올 때<br>
                  3D 레이저 스캐너가 연어의 얼굴을 인식해 가상의 신분증을 만들고<br>
                  신원을 확인합니다.
                </p>
                <p class="motion delay03">
                  또한 노르웨이는 <strong>최첨단 모니터링, 자동 사료 공급 시스템</strong>으로<br>
                  일관성 있는 맛과 품질의 연어를 공급합니다.<br>
                  노르웨이 연어는 해썹 <strong>(HACCP) 인증을 취득</strong>하여 한국 소비자들에게<br>
                  보다 안전하고 신선한 연어를 제공하기 위해 노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="evt_wide_wrap p_evt_sec7">
            <div class="evt_section">
              <img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec7.jpg" alt="">
            </div>
          </div>
        </div>
        <!-- //노르웨이 기획전 -->


    </section>
  </main>
</template>

<script>

export default {
  name: 'AppGsap',
  components: {
  },

  setup() {
    const value  = 'Sustainable 페이지 - GSAP' 
    const scriptInput  = { value }
    console.log(scriptInput.value)
    return { scriptInput }
  },

  data() {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: 0
      },
      io: null,
      boxElList: []
    };
  },

  mounted() {
    this.initIntersectionObserver();
    this.observeBoxes();
  },

  methods: {
    initIntersectionObserver() {
      this.io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
          console.log('entry:', entry);
        });
      }, this.options);
    },
    observeBoxes() {
      this.boxElList = this.$refs.motionBoxes.querySelectorAll('.motion');
      this.boxElList.forEach((el) => {
        this.io.observe(el);
      });
    }
  }

}
</script>


<style scoped>
/* wide common */
.event, .event_wrap {position: relative;overflow: hidden;}
.event_wrap .evt_wide_wrap{position:relative;min-width:1168px;max-width:1920px;margin:0 auto;text-align:left}
.event_wrap .evt_section,.event_wrap .evt_notice{position:relative;margin:0 auto}
.event_wrap .evt_section img{display:block;max-width:none;vertical-align:top}

/* 상단모션 */
.event_wrap .motion_box{position:absolute;top:0;left:0;color:#fff}
.event_wrap .p_evt_tit .motion_box p{font-size:30px;line-height:40px;letter-spacing:-1px}
.event_wrap .p_evt_tit .motion_box h3{font-size:100px;font-weight:700;line-height:110px;letter-spacing:-4px;margin-top:14px}
.event_wrap .p_evt_tit .motion_box h3 span{color:#fc6e49}
.event_wrap .motion_box h3{font-size:60px;line-height:1.2;margin-bottom:25px;letter-spacing:-3px}
.event_wrap .motion_box p{font-size:22px;line-height:1.8;margin-bottom:40px;letter-spacing:-1.2px}

.event_wrap .p_evt_tit .motion_box{width:100%;top:380px;left:0;text-align:center}
.event_wrap .p_evt_sec2 .motion_box{top:115px;left:444px}
.event_wrap .p_evt_sec2 .motion_box span{position:absolute;top:6px;left:127px}
.event_wrap .p_evt_sec4 .motion_box{top:230px;left:100px}
.event_wrap .p_evt_sec4 .motion_box h3{font-size:40px;margin-bottom:47px}
.event_wrap .p_evt_sec4 .motion_box p{font-size:20px;line-height:2;margin-bottom:40px}
.event_wrap .p_evt_sec5 .motion_box{top:236px;left:570px}
.event_wrap .p_evt_sec6 .motion_box{top:188px;left:0;color:#333}
.event_wrap .p_evt_sec6 .motion_box h3{margin-bottom:50px}
.event_wrap .p_evt_sec7 .motion_box{top:320px;left:620px}
.event_wrap .p_evt_sec7 .motion_box h3{margin-bottom:40px}

.motion{opacity:0}
.motion.active{opacity:1;animation:silde-top 0.6s ease-in-out both}

@keyframes silde-top {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 80px);
            transform: translate(0, 80px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

.delay01.active{animation-delay:0.1s}
.delay02.active{animation-delay:0.2s}
.delay03.active{animation-delay:0.3s}
.delay04.active{animation-delay:0.4s}
.delay05.active{animation-delay:0.5s}
.delay06.active{animation-delay:0.6s}
.delay08.active{animation-delay:0.8s}
</style>
