<template>
  <main class="container">
    <section class="lnb-wrap">
      <h2 class="lnb-title">
        <a href="#none">마이페이지</a>
      </h2>
      <div class="lnb-nav">
        <h3 class="lnb-subtitle"> 마이 쇼핑 </h3>
        <ul class="lnb-list">
          <li>
            <a href="#none"> 주문/배송 조회 </a>
          </li>
          <li>
            <a href="#none" class="active"> 취소/반품 조회 </a>
          </li>
          <li>
            <a href="#none"> 일일배송 관리 </a>
          </li>
          <li>
            <a href="#none"> 보낸 선물함 </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="content">
      <h2 class="title">
        취소/반품 조회
      </h2>
      <div class="order-search-wrap">
        <div class="order-search">
          <h3 class="title">조회기간</h3>
          <div class="date-box">
            <input type="text" name="startDate" readonly="readonly" class="date-input" v-model="currentDate" value="{{currentDate()}}">
            <button type="button" class="btn-date">달력열기</button>
          </div>
          <span class="tilde">~</span>
          <div class="date-box">
            <input type="text" name="endDate" readonly="readonly" class="date-input">
            <button type="button" class="btn-date">달력열기</button>
          </div>
          <div class="months-box">
            <button type="button" value="3" class="btn-months active">3개월</button>
            <button type="button" value="6" class="btn-months">6개월</button>
            <button type="button" value="12" class="btn-months">12개월</button>
          </div>
        </div>
        <button type="button" class="btn-order-search">조회하기</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PulmuoneIndex',

  data() {
    return {
      // currentDate: null,
      // year: null,
      // month: null,
      // day: null,
    };
  },

  methods : {
    currentDate() {
      // const today = new Date();
      // const year = today.getFullYear();
      // const month = today.getMonth() + 1;
      // console.log(today);

      // return dateTime;
    }
  },

  mounted() {
    this.currentDate()

    // this.currentDate = new Date().toLocaleDateString();
    // this.year = this.currentDate.getFullYear();
    // this.month = ('0' + (this.currentDate.getMonth() + 1).slice(-2));
    // this.day = ('0' + this.currentDate.getDate()).slice(-2);

    // console.log(this.currentDate);
  },
}
</script>

<!-- 깃 빌드 에러 깃허브 페이지 생성을 도와주는 패키지 npm install --save gh-pages -->
<!-- https://velog.io/@kimyunbin/Github-Actions-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94 -->
<style scoped>
.order-search-wrap{display:flex;justify-content:space-between;align-items:center;padding: 22px 0;border-top: 2px solid #5c5c5c;border-bottom: 1px solid #5c5c5c;}
.order-search{display:flex;align-items: center;}
.order-search .title{color: #000;font-size: 16px;font-weight:700;margin-right:20px;}
.order-search .date-box{position:relative;width:138px;height:36px;}
.order-search .date-box .btn-date{position: absolute;top:50%;right:8px;width:20px;height:20px;margin-top:-10px;background: url(./assets/images/schedule-line-20.svg) no-repeat 50% / 100%;color: transparent;font-size: 0;line-height: 0;overflow: hidden;text-indent: -10000px;}
.order-search .tilde{display:block;margin:0 8px;}
.order-search .date-input{width:100%;height:100%;padding: 0 36px 0 12px;border: 1px solid #c2c2c2;border-radius: 8px;color: #000;font-size: 14px;}
.order-search .months-box{margin-left:10px;}
.order-search .months-box .btn-months{display:inline-block;position:relative;width:72px;padding: 7px;border-radius:8px 0 0 8px;border:1px solid #c2c2c2;color:#000;font-size: 14px;}
.order-search .months-box .btn-months:nth-of-type(2){border-radius:0;}
.order-search .months-box .btn-months:nth-of-type(3){border-radius:0 8px 8px 0;}
.order-search .months-box .btn-months.active{border: 1px solid #333;}

.order-search-wrap .btn-order-search{color: #fff;font-size:12px;border-radius:8px;background:#525252;padding:10px 28px;}
</style>
