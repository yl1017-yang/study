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
      <div class="order">
        <div class="order__search">
          <div class="order__search__box">
            <h3 class="order__search__title">조회기간</h3>
            <div class="months__form left">
              <div class="form__date">
                <input type="text" name="startDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button>
              </div>
              <span class="form__tilde">~</span>
              <div class="form__date">
                <input type="text" name="endDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button>
              </div>
              <div class="form__box">
                <button type="button" value="3" class="form__months active">3개월</button><button type="button" value="6" class="form__months">6개월</button><button type="button" value="12" class="form__months">12개월</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="order__search__submit">조회하기</button>
      </div>
    </section>
  </main>
</template>

<script>
// import CommonHeader from './components/CommonHeader.vue'

export default {
  name: 'App',
  components: {
    // CommonHeader
  },
}
</script>

<!-- 깃 빌드 에러 깃허브 페이지 생성을 도와주는 패키지 npm install --save gh-pages -->
<!-- https://hee-dev.tistory.com/7 -->
<style scoped>

</style>
