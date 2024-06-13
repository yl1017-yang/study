<template>
  <header class="header-wrap">
    <div class="hedaer-top">
      <h1 class="logo">
        <router-link to="/study/"><span class="blind">#Pulmuone</span></router-link>
      </h1>
      <div class="search">
        <input type="text" v-model="searchInput" placeholder="#풀무원, 나와 지구를 위한 바른먹거리 마켓" maxlength="30">
        <button type="button" class="btn-search" @click="searchClick('나와 지구를 위한 바른먹거리 마켓, #풀무원')"><span class="blind">검색</span></button>
      </div>
      <router-link to="/study/js" class="btn-link">스크립트</router-link>
      <router-link to="/study/Gsap" class="btn-link">Gsap</router-link>
      <router-link to="/study/GsapCdn" class="btn-link">Gsap-cdn</router-link>
      <router-link to="/study/GsapLoad" class="btn-link">Gsap-load</router-link>
    </div>
    <div class="hedaer-nav">
      <div class="category">
        <button @click="categoryClick()" type="button" href="#전체 카테고리" class="btn-category">전체 카테고리</button>
        <div class="category-list" :class="{ active: categoryShow }">
          <ul>
            <li v-for="(item, dep1Index) in categoryAll" :key="dep1Index" @mouseenter="depOver(dep1Index)" @mouseleave="depOver(null)">
              <a :href="`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${item.ilCategoryId}`" class="dep1" :class="{ active: depShow === dep1Index }">{{ item.categoryName }}</a>
              <ul class="dep2" :class="{ active: depShow === dep1Index }">
                <li v-for="(dep2Item, dep2Index) in item.subCategoryList" :key="dep2Index" @mouseenter="dep2Over(dep1Index, dep2Index)" @mouseleave="dep2Over(null, null)">
                  <a :href="`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${dep2Item.ilCategoryId}`">{{ dep2Item.categoryName }}</a>
                  <ul class="dep3" :class="{ active: dep2Show === dep2Index && depShow === dep1Index }">
                    <li v-for="(dep3Item, dep3Index) in dep2Item.subCategoryList" :key="dep3Index" @mouseenter="dep3Over(dep1Index, dep2Index, dep3Index)" @mouseleave="dep3Over(null, null, null)">
                      <a :href="`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${dep3Item.ilCategoryId}`">{{ dep3Item.categoryName }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <a href="/study/" class="nav_list ">베스트</a>
        <a href="/study/" class="nav_list ">일일배송</a>
        <a href="/study/" class="nav_list ">매장배송</a>
        <a href="/study/" class="nav_list ">지금세일</a>
        <a href="/study/" class="nav_list ">신상품</a>
        <a href="/study/" class="nav_list ">기획전/이벤트</a>
      </nav>
    </div>
  </header>
</template>

<script>
import category from '../assets/js/category.js'
export default {
  name: 'CommonHeader', 

  data() {
    return {
      searchInput: "",
      categoryShow: null,
      depShow: null,
      dep2Show: null,
      dep3Show: null,
      
      categoryAll: category[0].category
    }
  },

  mounted() {
      // this.categoryAll = [...this.category[0].category];
  },

  methods : {
    searchClick(inputTxt) {
      console.log(this.searchInput);
      this.searchInput = inputTxt;
    }, 
    categoryClick() {
      this.categoryShow = !this.categoryShow;

      if (this.categoryShow) {
        document.body.addEventListener('click', this.categoryClickClose)
      } else {
        document.body.removeEventListener('click', this.categoryClickClose)
      }
    },
    categoryClickClose(e) {
      if (!e.target.closest('.btn-category')) {
        this.categoryShow = false;
      }
    },
    depOver(dep1Index) {
      this.depShow = dep1Index;
      console.log(dep1Index);
    },
    dep2Over(dep1Index, dep2Index) {
      if (dep1Index !== null && dep2Index !== null) {
        this.depShow = dep1Index;
        this.dep2Show = dep2Index;
      } else {
        this.dep2Show = null;
        this.dep3Show = null;
      }
    },
    dep3Over(dep1Index, dep2Index, dep3Index) {
      if (dep1Index !== null && dep2Index !== null && dep3Index !== null) {
        this.depShow = dep1Index;
        this.dep2Show = dep2Index;
        this.dep3Show = dep3Index;
      } else {
        this.dep3Show = null;
      }
    }
  },
}
</script>

<style scoped>
.category{position:relative;}
.category-list{display:none;position:absolute;top:53px;left:0;width:214px;background:#fff;border:1px solid #ccc;border-top:0;border-radius:0 0 0 10px;box-shadow: rgba(0, 0, 0, 0.1) 20px 10px 20px;z-index:1;}
.category-list.active{display:block;}
.category-list > ul{position:relative;padding:20px 0 24px 0;height:100%;}

.dep1{display:block;padding:10px 20px 10px;height:100%;}
.dep1.active{background:#eee;color:#80c342;}
.dep2{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px 0;}
.dep2.active{display:block;}
.dep2 a:hover{color:#80c342;}
.dep2 li > a{display:block;padding:10px 20px;}
.dep3{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px 0;}
.dep3.active{display:block;color:#000;}
.dep3 a:hover{color:#80c342;}
.dep3 li > a{display:block;padding:10px 20px;}
</style>
