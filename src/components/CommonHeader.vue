<template>
  <header class="header-wrap">
    <div class="hedaer-top">
      <h1 class="logo">
        <router-link to="/study/"><span class="blind">#Pulmuone</span></router-link>
      </h1>
      <div class="search">
        <input type="text" v-model="searchInput" placeholder="#풀무원, 나와 지구를 위한 바른먹거리 마켓" maxlength="30">
        <button @click="searchClick()" type="button" class="btn-search"><span class="blind">검색</span></button>
      </div>
      <router-link to="/study/js" class="btn-link">자바스크립트 테스트</router-link>
    </div>
    <div class="hedaer-nav">
      <div class="category">
        <button @click="categoryClick()" type="button" href="#전체 카테고리" class="btn-category">전체 카테고리</button>
        <div class="category-list" v-if="categoryShow">
          카태고리 내용 데이타 받아와야함
        </div>
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
  name: 'CommonHeader',

  data() {
    return {
      searchInput: "",
      categoryShow: false
    };
  },

  methods : {
    searchClick() {
      console.log(this.searchInput);
      // alert(this.input);
      this.searchInput = "클릭해서 나오는 문구";
    }, 
    categoryClick() {
      this.categoryShow = !this.categoryShow;
    }
  }
}
</script>

<style scoped>
.category{position:relative;}
.category-list{position:absolute;top:54px;left:0;width:214px;min-height:500px;background:#fff;border:1px solid #ccc;border-top:0;border-radius:0 0 10px 10px;box-shadow: rgba(0, 0, 0, 0.1) 20px 10px 20px;z-index:1;}
</style>
