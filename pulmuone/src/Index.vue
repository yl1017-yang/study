<template>
  <div class="wrap">
    <div class="wrap-inner">
      <header class="header-wrap">
        <div class="hedaer-util">
          <h1 class="logo">
            <!-- <a href="/"><span class="blind">#Pulmuone</span></a> -->
            <router-link to="/"><span class="blind">#Pulmuone</span></router-link>
          </h1>
          <div class="search">
            <input type="text" placeholder="#풀무원, 나와 지구를 위한 바른먹거리 마켓" maxlength="30">
            <button type="button" class="btn-search">검색</button>
          </div>
          <!-- <a href="/js">자바스크립트 테스트</a> -->
          <router-link to="/js">자바스크립트 테스트</router-link>
        </div>
        <div class="hedaer-nav">
          <div class="category">
            <button type="button" href="#전체 카테고리" class="btn-category">전체 카테고리</button>
          </div>
          <nav>
            <a href="#none" class="nav_list ">베스트</a>
            <a href="#none" class="nav_list ">일일배송</a>
            <a href="#none" class="nav_list ">매장배송</a>
            <a href="#none" class="nav_list ">지금세일</a>
            <a href="#none" class="nav_list ">신상품</a>
            <a href="#none" class="nav_list ">기획전/이벤트</a>
          </nav>
        </div>      
      </header>
      <main class="container">
        <div class="lnb">
          <h2>
            <a href="#none">마이페이지</a>
          </h2>
          <div class="lnb_nav">
            <h3 class="menu__title"> 마이 쇼핑 </h3>
            <ul class="menu__box">
              <li class="menu__list">
                <a href="#none"> 주문/배송 조회 </a>
              </li>
              <li class="menu__list">
                <a href="#none" class="active"> 취소/반품 조회 </a>
              </li>
              <li class="menu__list">
                <a href="#none"> 일일배송 관리 </a>
              </li>
              <li class="menu__list">
                <a href="#none"> 보낸 선물함 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="content">
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
        </div>
      </main>
    </div>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
