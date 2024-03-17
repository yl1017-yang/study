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
        <div class="category-list" :class="{ active: categoryShow }">
          <ul>
            <li v-for="(item, index) in items" :key="index" @mouseenter="depOver(index)" @mouseleave="depOver(index)">
              <a href="#none" class="dep1" :class="{ active: depShow === index }">{{ item.dep1 }}</a>
              <ul class="dep2" :class="{ active: depShow === index }">
                <li>
                  <a href="#none">{{ item.dep2 }}</a>
                  <ul class="dep3" :class="{ active: depShow === index }">
                    <li><a href="#none">{{ item.dep3 }}</a></li>
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
      categoryShow: false,
      depShow: null,
      dep2Show: null,

      items: [
        { dep1: '로하스', dep2: ['로하스11', '로하스2'], dep3: '로하스22222' },
        { dep1: '선물세트', dep2: ['선물세트11', '선물세트22'], dep3: '선물세트22222' },
        { dep1: '두부,콩나물,달걀', dep2: ['두부,콩나물,달걀11', '두부,콩나물,달걀22'], dep3: '22222' }
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
    depOver(index) {
      // this.depShow = this.depShow === index ? null : index;
      this.depShow = index;
    },
  }
}
</script>

<style scoped>
.category{position:relative;}
.category-list{display:none;position:absolute;top:54px;left:0;width:214px;background:#fff;border:1px solid #ccc;border-top:0;border-radius:0 0 0 10px;box-shadow: rgba(0, 0, 0, 0.1) 20px 10px 20px;z-index:1;}
.category-list.active{display:block;}
.category-list > ul{position:relative;padding:20px 0 24px 0;height:100%;}

.dep1{display:flex;padding:10px 20px 10px;height:100%;}
.dep1.active{background:#eee;}
.dep2{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px;}
.dep2.active{display:block;}
.dep2 > li{padding:6px 0;}
.dep3{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px;}
.dep3.active{display:block;}
</style>
