<template>
  <header class="header-wrap">
    <div class="hedaer-top">
      <h1 class="logo">
        <router-link to="/"><span class="blind">#Pulmuone</span></router-link>
      </h1>
      <div class="search">
        <input type="text" placeholder="#풀무원, 나와 지구를 위한 바른먹거리 마켓" maxlength="30">
        <button type="button" class="btn-search"><span class="blind">검색</span></button>
      </div>
      <router-link to="/js" class="btn-link">자바스크립트 테스트</router-link>
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
</template>

<script>
export default {
  name: 'App',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
