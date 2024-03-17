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
        <!-- <div class="category-list" v-if="categoryShow"> -->
        <!-- 중첩 반복문 https://velog.io/@reasonz/2022.06.03-Vue3-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81%EB%B0%B0%EC%97%B4-%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8-v-for-%EC%A4%91%EC%B2%A9-%EB%B0%98%EB%B3%B5 -->
        <div class="category-list" :class="{ active: categoryShow }">
          <ul>
            <li v-for="(item, dep1Index) in items" :key="dep1Index" @mouseenter="depOver(dep1Index)" @mouseleave="depOver(dep1Index)">
              <a href="#none" class="dep1" :class="{ active: depShow === dep1Index }">{{ item.dep1 }}</a>
              <ul class="dep2" :class="{ active: depShow === dep1Index }">
                <li v-for="(dep2, dep2Index) in item.dep2" :key="dep2Index" @mouseenter="dep2Over(dep1Index)">
                  <a href="#none">{{ dep2 }}</a>
                  <ul class="dep3" :class="{ active: dep2Show === dep1Index }">
                    <li v-for="(dep3, dep3Index) in item.dep3" :key="dep3Index"><a :href="`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${item.link}`">{{ dep3 }}</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
      categoryShow: null,
      depShow: null,
      dep2Show: null,

      items: [
        { dep1: '로하스', dep2: ['로하스11', '로하스2'], dep3: ['로하스3333', '로하스333', '로하스333', '로하스333'], link: 4908 },
        { dep1: '선물세트', dep2: ['선물세트11', '선물세트22'], dep3: ['선물세트3332', '선물세트33'], link: 5404 },
        { dep1: '두부,콩나물,달걀', dep2: ['두부,콩나물,달걀11', '두부,콩나물,달걀22'], dep3: ['두부,콩나물,달걀3332', '두부,콩나물,달걀33'], link: 4908 }
      ]
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
    },
    depOver(dep1Index) {
      // this.depShow = this.depShow === dep1Index ? null : dep1Index;
      this.depShow = dep1Index;
    },
    dep2Over(dep1Index) {
      this.dep2Show = dep1Index;
    },
  }
}
</script>

<style scoped>
.category{position:relative;}
.category-list{display:none;position:absolute;top:53px;left:0;width:214px;background:#fff;border:1px solid #ccc;border-top:0;border-radius:0 0 0 10px;box-shadow: rgba(0, 0, 0, 0.1) 20px 10px 20px;z-index:1;}
.category-list.active{display:block;}
.category-list > ul{position:relative;padding:20px 0 24px 0;height:100%;}

.dep1{display:block;padding:10px 20px 10px;height:100%;}
.dep1.active{background:#eee;color:#80c342;}
.dep2{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px;}
.dep2.active{display:block;color:#80c342;}
.dep2 > li{padding:6px 0;}
.dep3{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px;}
.dep3.active{display:block;color:#000;}
.dep3.active:hover{color:#80c342;}
.dep3 > li{padding:6px 0;}
</style>
