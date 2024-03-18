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
        <div class="category-list" :class="{ active: categoryShow }">
          <ul>
            <li v-for="(item, dep1Index) in items" :key="dep1Index" @mouseenter="depOver(dep1Index)" @mouseleave="depOver(null)">
              <a href="#none" class="dep1" :class="{ active: depShow === dep1Index }">{{ item.dep1 }}</a>
              <ul class="dep2" :class="{ active: depShow === dep1Index }">
                <li v-for="(dep2Item, dep2Index) in item.children" :key="dep2Index" @mouseenter="dep2Over(dep1Index, dep2Index)" @mouseleave="dep2Over(null, null)">
                  <a href="#none">{{ dep2Item.dep2 }}</a>
                  <ul class="dep3" :class="{ active: dep2Show === dep2Index && depShow === dep1Index }">
                    <li v-for="(dep3Item, dep3Index) in dep2Item.dep3" :key="dep3Index" @mouseenter="dep3Over(dep1Index, dep2Index, dep3Index)" @mouseleave="dep3Over(null, null, null)">
                      <a :href="`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${dep3Item.link}`">{{ dep3Item.name }}</a>
                    </li>
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
      dep3Show: null,

      items: [
        { id: 1, 
          dep1: '로하스',
          children: [
            { dep2: '로하스11', dep3: [{ name: '로하스111', link: '4908' }, { name: '로하스111', link: '4909' }, { name: '로하스11111', link: '4909' }] },
            { dep2: '로하스22', dep3: [{ name: '로하스221', link: '4911' }, { name: '로하스222', link: '4912' }] },
            { dep2: '로하스33', dep3: [{ name: '로하스333', link: '4911' }, { name: '로하스333', link: '4912' }] },
          ]
        },
        { id: 2, 
          dep1: '선물세트',
          children: [
            { dep2: '선물세트11' },
            { dep2: '선물세트22' }
          ]
        },
        { id: 3, 
          dep1: '두부,콩나물,달걀',
          children: [
            { dep2: '두부,콩나물,달걀11', dep3: [{ name: '두부,콩나물,달걀11', link: '4928' }, { name: '두부,콩나물,달걀11', link: '4929' }] },
            { dep2: '두부,콩나물,달걀22', dep3: [{ name: '두부,콩나물,달걀22', link: '4931' }, { name: '두부,콩나물,달걀22', link: '4932' }] }
          ]
        },
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
      this.depShow = dep1Index;
    },
    dep2Over(dep1Index, dep2Index) {
      if (dep1Index !== null && dep2Index !== null) {
        this.depShow = dep1Index;
        this.dep2Show = dep2Index;
      } else {
        //this.dep2Show = null;
        this.dep3Show = null; // dep2가 비활성화되면 dep3도 함께 비활성화
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
.dep2.active{display:block;}
.dep2 a:hover{color:#80c342;}
.dep2 > li{padding:6px 0;}
.dep3{display:none;position:absolute;top:1px;left:210px;width:214px;height:100%;background:#eee;border-right:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px;}
.dep3.active{display:block;color:#000;}
.dep3 a:hover{color:#80c342;}
.dep3 > li{padding:6px 0;}
</style>
