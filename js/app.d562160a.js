(function(){"use strict";var e={6948:function(e,a,I){var o=I(5130),t=I(6768);const g={class:"wrap"},m={class:"wrap-inner"};function c(e,a,I,o,c,r){const i=(0,t.g2)("CommonHeader"),l=(0,t.g2)("router-view"),M=(0,t.g2)("CommonFooter");return(0,t.uX)(),(0,t.CE)("div",g,[(0,t.Lk)("div",m,[(0,t.bF)(i),(0,t.bF)(l),(0,t.bF)(M)])])}var r=I(4232);const i=e=>((0,t.Qi)("data-v-25de50f5"),e=e(),(0,t.jt)(),e),l={class:"header-wrap"},M={class:"hedaer-top"},E={class:"logo"},d=i((()=>(0,t.Lk)("span",{class:"blind"},"#Pulmuone",-1))),_={class:"search"},y=i((()=>(0,t.Lk)("span",{class:"blind"},"검색",-1))),s=[y],C={class:"hedaer-nav"},A={class:"category"},G=["onMouseenter"],p=["onMouseenter"],n={href:"#none"},b=["onMouseenter"],L=(0,t.Fv)('<nav data-v-25de50f5><a href="#none" class="nav_list" data-v-25de50f5>베스트</a><a href="#none" class="nav_list" data-v-25de50f5>일일배송</a><a href="#none" class="nav_list" data-v-25de50f5>매장배송</a><a href="#none" class="nav_list" data-v-25de50f5>지금세일</a><a href="#none" class="nav_list" data-v-25de50f5>신상품</a><a href="#none" class="nav_list" data-v-25de50f5>기획전/이벤트</a></nav>',1);function v(e,a,I,g,m,c){const i=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("header",l,[(0,t.Lk)("div",M,[(0,t.Lk)("h1",E,[(0,t.bF)(i,{to:"/study/"},{default:(0,t.k6)((()=>[d])),_:1})]),(0,t.Lk)("div",_,[(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>m.searchInput=e),placeholder:"#풀무원, 나와 지구를 위한 바른먹거리 마켓",maxlength:"30"},null,512),[[o.Jo,m.searchInput]]),(0,t.Lk)("button",{onClick:a[1]||(a[1]=e=>c.searchClick()),type:"button",class:"btn-search"},s)]),(0,t.bF)(i,{to:"/study/js",class:"btn-link"},{default:(0,t.k6)((()=>[(0,t.eW)("자바스크립트 테스트")])),_:1})]),(0,t.Lk)("div",C,[(0,t.Lk)("div",A,[(0,t.Lk)("button",{onClick:a[2]||(a[2]=e=>c.categoryClick()),type:"button",href:"#전체 카테고리",class:"btn-category"},"전체 카테고리"),(0,t.Lk)("div",{class:(0,r.C4)(["category-list",{active:m.categoryShow}])},[(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(m.categoryAll,((e,I)=>((0,t.uX)(),(0,t.CE)("li",{key:I,onMouseenter:e=>c.depOver(I),onMouseleave:a[5]||(a[5]=e=>c.depOver(null))},[(0,t.Lk)("a",{href:"#none",class:(0,r.C4)(["dep1",{active:m.depShow===I}])},(0,r.v_)(e.categoryName),3),(0,t.Lk)("ul",{class:(0,r.C4)(["dep2",{active:m.depShow===I}])},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.subCategoryList,((e,o)=>((0,t.uX)(),(0,t.CE)("li",{key:o,onMouseenter:e=>c.dep2Over(I,o),onMouseleave:a[4]||(a[4]=e=>c.dep2Over(null,null))},[(0,t.Lk)("a",n,(0,r.v_)(e.categoryName),1),(0,t.Lk)("ul",{class:(0,r.C4)(["dep3",{active:m.dep2Show===o&&m.depShow===I}])},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.subCategoryList,((e,g)=>((0,t.uX)(),(0,t.CE)("li",{key:g,onMouseenter:e=>c.dep3Over(I,o,g),onMouseleave:a[3]||(a[3]=e=>c.dep3Over(null,null,null))},[(0,t.Lk)("a",null,(0,r.v_)(e.categoryName),1)],40,b)))),128))],2)],40,p)))),128))],2)],40,G)))),128))])],2)]),L])])}var u=[{category:[{ilCategoryId:4888,categoryName:"로하스",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4901,categoryName:"무농약∙유기농∙저탄소농산",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4908,categoryName:"과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4909,categoryName:"채소∙나물∙버섯",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4910,categoryName:"쌀∙잡곡",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5366,categoryName:"견과∙건과",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5367,categoryName:"쌀가루∙미숫가루",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5369,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4902,categoryName:"무항생제∙유기축산",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4911,categoryName:"소고기",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4912,categoryName:"돼지고기",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5370,categoryName:"닭∙오리",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4913,categoryName:"양념육∙가공육",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4914,categoryName:"달걀∙기타난류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5371,categoryName:"간편식∙간식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4903,categoryName:"지속가능수산",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4916,categoryName:"생선∙해산물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5372,categoryName:"김∙건어물∙다시팩",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5373,categoryName:"간편식∙간식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4904,categoryName:"동물복지",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4917,categoryName:"달걀.기타란",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4918,categoryName:"정육.양념육∙가공육",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4919,categoryName:"간편식∙간식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4905,categoryName:"비건",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5374,categoryName:"비건인증",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5379,categoryName:"비건지향",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4906,categoryName:"식물성 단백질",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4920,categoryName:"두부",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4921,categoryName:"김치∙반찬∙국탕",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4922,categoryName:"밥∙면∙간편식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5380,categoryName:"간식∙차∙음료∙건강식품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5413,categoryName:"고령친화식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5381,categoryName:"친환경 식품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5382,categoryName:"밥∙면∙간편식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5383,categoryName:"김치∙반찬∙국탕",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5384,categoryName:"간식∙차∙음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5385,categoryName:"양념∙소스∙유지",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5386,categoryName:"건강식품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4889,categoryName:"두부∙콩나물∙달걀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4924,categoryName:"두부",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4928,categoryName:"두부",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4929,categoryName:"간편식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4930,categoryName:"반찬",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4925,categoryName:"콩나물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4931,categoryName:"콩나물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4932,categoryName:"숙주나물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5399,categoryName:"유부",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5400,categoryName:"유부초밥",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4926,categoryName:"달걀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4933,categoryName:"달걀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4934,categoryName:"기타란",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4927,categoryName:"나또",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4935,categoryName:"나또",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4946,categoryName:"과일∙채소∙쌀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4947,categoryName:"과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4952,categoryName:"과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4953,categoryName:"냉동과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4954,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4955,categoryName:"수입과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4948,categoryName:"채소∙나물∙버섯",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4956,categoryName:"열매채소",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4957,categoryName:"뿌리채소",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4958,categoryName:"잎채소",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4959,categoryName:"나물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4960,categoryName:"버섯",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4949,categoryName:"쌀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4962,categoryName:"백미",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4963,categoryName:"찹쌀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4964,categoryName:"현미",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4965,categoryName:"잡곡",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4950,categoryName:"견과∙말린과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4966,categoryName:"견과",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4967,categoryName:"말린과일",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4951,categoryName:"쌀가루∙선식∙떡",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4968,categoryName:"쌀가루",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4969,categoryName:"잡곡가루",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4970,categoryName:"선식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4971,categoryName:"떡",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4972,categoryName:"정육∙달걀∙수산",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4973,categoryName:"정육",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4978,categoryName:"소고기",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4979,categoryName:"돼지고기",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4980,categoryName:"닭∙오리",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4981,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4974,categoryName:"햄소세지∙가공육",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4982,categoryName:"햄소세지",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4983,categoryName:"양념육",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4984,categoryName:"육가공품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4975,categoryName:"달걀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4985,categoryName:"달걀",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4986,categoryName:"기타난류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4976,categoryName:"생선∙해산물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4987,categoryName:"생선류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4988,categoryName:"해물류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4989,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4990,categoryName:"수산가공품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4977,categoryName:"김∙건어물∙다시팩",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4991,categoryName:"김",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4992,categoryName:"해조류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4993,categoryName:"건어물",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4994,categoryName:"다시팩",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4890,categoryName:"만두∙피자∙떡볶이",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4936,categoryName:"만두",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4940,categoryName:"만두",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4939,categoryName:"피자",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4944,categoryName:"피자",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4945,categoryName:"브리또",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4938,categoryName:"떡볶이",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4942,categoryName:"떡볶이",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4943,categoryName:"떡볶이 떡",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4937,categoryName:"핫도그",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4941,categoryName:"핫도그",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4895,categoryName:"밥∙면∙간편식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4896,categoryName:"밥",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4995,categoryName:"밥",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4996,categoryName:"볶음밥",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4997,categoryName:"기타즉석밥",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4897,categoryName:"라면∙국수∙파스타",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4998,categoryName:"라면",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4999,categoryName:"국수",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5001,categoryName:"냉면",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5e3,categoryName:"파스타",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5002,categoryName:"우동",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5003,categoryName:"기타면",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4898,categoryName:"만두∙돈가스∙냉동",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5004,categoryName:"만두",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5005,categoryName:"떡볶이",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5006,categoryName:"냉동빵",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5007,categoryName:"냉동가공반찬",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5008,categoryName:"전∙튀김",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5009,categoryName:"죽∙씨리얼∙간편식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5010,categoryName:"씨리얼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5011,categoryName:"죽∙스프",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5012,categoryName:"샐러드∙밀키트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5013,categoryName:"샐러드",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5014,categoryName:"밀키트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:4882,categoryName:"김치∙반찬∙국탕",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5015,categoryName:"김치",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5016,categoryName:"배추김치",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5017,categoryName:"기타김치",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:4883,categoryName:"두부∙어묵∙나또",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:4884,categoryName:"두부",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4885,categoryName:"나또",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4886,categoryName:"어묵",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:4887,categoryName:"묵",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5018,categoryName:"반찬∙젓갈∙장아찌",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5019,categoryName:"밑반찬",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5020,categoryName:"장아찌",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5021,categoryName:"젓갈",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5022,categoryName:"일품반찬",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5023,categoryName:"김밥주먹밥재료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5024,categoryName:"기타반찬",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5025,categoryName:"국탕찌개",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5026,categoryName:"국",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5027,categoryName:"탕",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5028,categoryName:"찌개",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5061,categoryName:"양념∙소스∙유지",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5063,categoryName:"밀가루∙믹스",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5068,categoryName:"가루∙믹스",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5064,categoryName:"소금∙설탕∙꿀∙잼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5069,categoryName:"소금∙설탕 꿀∙잼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5071,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5065,categoryName:"양념∙액젓∙장류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5073,categoryName:"양념",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5075,categoryName:"장류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5066,categoryName:"참기름∙소스∙드레싱",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5077,categoryName:"참기름∙유지류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5079,categoryName:"소스∙드레싱",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5081,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5029,categoryName:"간식∙차∙음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5030,categoryName:"스낵∙간식∙빵",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5034,categoryName:"스낵",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5035,categoryName:"원물∙견과∙영양바",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5036,categoryName:"쿠키케이크",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5037,categoryName:"기타간식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5031,categoryName:"생수∙주스∙음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5038,categoryName:"생수",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5039,categoryName:"과채음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5040,categoryName:"푸딩젤리",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5041,categoryName:"기타음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5032,categoryName:"차∙커피",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5042,categoryName:"과일차",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5043,categoryName:"알곡차",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5044,categoryName:"전통차",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5045,categoryName:"커피",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5048,categoryName:"선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5033,categoryName:"우유∙유제품∙치즈",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5052,categoryName:"발효유",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5053,categoryName:"두유",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5055,categoryName:"우유",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5057,categoryName:"가공우유",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5058,categoryName:"치즈∙버터",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5090,categoryName:"건강식품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5092,categoryName:"홍삼∙산삼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5099,categoryName:"홍삼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5100,categoryName:"산삼",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5093,categoryName:"유산균∙비타민∙키즈",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5102,categoryName:"유산균",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5103,categoryName:"비타민",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5104,categoryName:"영양제",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5106,categoryName:"키즈영양제",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5095,categoryName:"건강즙∙환∙분말",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5108,categoryName:"건강즙∙주스",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5110,categoryName:"환∙분말",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5096,categoryName:"생식∙다이어트∙세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5112,categoryName:"생식∙효모 다이어트∙보충제",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5115,categoryName:"건강선물세트",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5118,categoryName:"일일배달녹즙∙음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5119,categoryName:"녹즙∙건강즙",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5125,categoryName:"녹즙∙건강즙",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5121,categoryName:"과일∙유산균음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5145,categoryName:"유산균음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5147,categoryName:"과일음료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5150,categoryName:"이유식∙키즈",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5152,categoryName:"이유식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5159,categoryName:"냉장 이유식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5160,categoryName:"택배 이유식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5155,categoryName:"이유식재료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5162,categoryName:"이유식재료",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5157,categoryName:"키즈",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5164,categoryName:"간편식∙간식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5170,categoryName:"디자인밀 맞춤식단",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5172,categoryName:"칼로리영양균형식",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5178,categoryName:"정기배송",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5415,categoryName:"택배",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5176,categoryName:"메디케어",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5417,categoryName:"시니어케어",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5188,categoryName:"생활∙주방∙반려용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5200,categoryName:"생활용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5207,categoryName:"개인위생",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5209,categoryName:"청소용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5210,categoryName:"지류",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5212,categoryName:"부자재",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5215,categoryName:"생활잡화",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5217,categoryName:"기타",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5202,categoryName:"주방용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5220,categoryName:"조리용기",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5222,categoryName:"주방잡화",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5205,categoryName:"반려동물용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5225,categoryName:"반려견",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5402,categoryName:"반려묘",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]},{ilCategoryId:5418,categoryName:"주방∙생활가전",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5419,categoryName:"주방가전",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5420,categoryName:"생활가전",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5228,categoryName:"뷰티용품",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5230,categoryName:"헤어∙바디∙비누",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5236,categoryName:"헤어",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5238,categoryName:"바디",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5239,categoryName:"비누",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]},{ilCategoryId:5234,categoryName:"페이스",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE",subCategoryList:[{ilCategoryId:5241,categoryName:"기초",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"},{ilCategoryId:5243,categoryName:"색조",pcImage:"PC_IMAGE",mobileImage:"MOBILE_IMAGE"}]}]}]}],O={name:"CommonHeader",data(){return{searchInput:"",categoryShow:null,depShow:null,dep2Show:null,dep3Show:null,categoryAll:u[0].category}},methods:{searchClick(){console.log(this.searchInput),this.searchInput="클릭해서 나오는 문구"},categoryClick(){this.categoryShow=!this.categoryShow},depOver(e){this.depShow=e,console.log(e)},dep2Over(e,a){null!==e&&null!==a?(this.depShow=e,this.dep2Show=a):this.dep3Show=null},dep3Over(e,a,I){null!==e&&null!==a&&null!==I?(this.depShow=e,this.dep2Show=a,this.dep3Show=I):this.dep3Show=null}}},P=I(1241);const B=(0,P.A)(O,[["render",v],["__scopeId","data-v-25de50f5"]]);var N=B;const h={class:"footer-wrap"};function f(e,a,I,o,g,m){return(0,t.uX)(),(0,t.CE)("footer",h," 하단 내용 ")}var w={name:"CommonFooter"};const k=(0,P.A)(w,[["render",f]]);var x=k,S={name:"App",components:{CommonHeader:N,CommonFooter:x}};const j=(0,P.A)(S,[["render",c]]);var F=j,X=I(1387);const H={class:"container"},D=(0,t.Fv)('<section class="lnb-wrap"><h2 class="lnb-title"><a href="#none">마이페이지</a></h2><div class="lnb-nav"><h3 class="lnb-subtitle"> 마이 쇼핑 </h3><ul class="lnb-list"><li><a href="#none"> 주문/배송 조회 </a></li><li><a href="#none" class="active"> 취소/반품 조회 </a></li><li><a href="#none"> 일일배송 관리 </a></li><li><a href="#none"> 보낸 선물함 </a></li></ul></div></section><section class="content"><h2 class="title"> 취소/반품 조회 </h2><div class="order"><div class="order__search"><div class="order__search__box"><h3 class="order__search__title">조회기간</h3><div class="months__form left"><div class="form__date"><input type="text" name="startDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><span class="form__tilde">~</span><div class="form__date"><input type="text" name="endDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><div class="form__box"><button type="button" value="3" class="form__months active">3개월</button><button type="button" value="6" class="form__months">6개월</button><button type="button" value="12" class="form__months">12개월</button></div></div></div></div><button type="button" class="order__search__submit">조회하기</button></div></section>',2),J=[D];function K(e,a,I,o,g,m){return(0,t.uX)(),(0,t.CE)("main",H,J)}var Q={name:"PulmuoneIndex",components:{}};const T=(0,P.A)(Q,[["render",K]]);var V=T;const W=e=>((0,t.Qi)("data-v-12cd1c90"),e=e(),(0,t.jt)(),e),q={class:"container"},R={class:"content"},U={class:"event_wrap",ref:"motionBoxes"},$=(0,t.Fv)('<div class="evt_wide_wrap p_evt_tit" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><h1 data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_tit.jpg" alt="" data-v-12cd1c90></h1><div class="motion_box" data-v-12cd1c90><p class="motion" data-v-12cd1c90>차갑고 깨끗한 노르웨이 바다에서 온</p><h3 class="motion delay02" data-v-12cd1c90>노르웨이 연어는<br data-v-12cd1c90>언제나 옳다<span data-v-12cd1c90>.</span></h3></div></div></div>',1),z=W((()=>(0,t.Lk)("div",{class:"evt_wide_wrap p_evt_sec1"},[(0,t.Lk)("div",{class:"evt_section"},[(0,t.Lk)("img",{src:"https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec1.jpg",alt:""}),(0,t.Lk)("div",{class:"video_wrap"},[(0,t.Lk)("iframe",{src:"https://player.vimeo.com/video/816755934?muted=1&autoplay=1&loop=1&title=0&autopause=1&controls=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"노르웨이 연어 영상"})])])],-1))),Y=(0,t.Fv)('<div class="evt_wide_wrap p_evt_sec2" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec2.jpg" alt="" data-v-12cd1c90><div class="motion_box" data-v-12cd1c90><span class="motion" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/object1.png" alt="" data-v-12cd1c90></span><p class="motion delay01" data-v-12cd1c90> 씨푸드프롬노르웨이(Seafood From Norway)마크는<br data-v-12cd1c90><strong data-v-12cd1c90>노르웨이산 수산물임을 상징하는 원산지 마크</strong>입니다. </p><p class="motion delay02" data-v-12cd1c90> 이 마크는 차갑고 청정한 노르웨이 바다에서 지속 가능한 방식으로<br data-v-12cd1c90> 양식되거나 어획된 최고 품질의 수산물임을 상징합니다.<br data-v-12cd1c90> 제품 포장 혹은 온라인 스토어에서<br data-v-12cd1c90> 씨푸드프롬노르웨이 마크를 확인해보세요! </p></div></div></div><div class="evt_wide_wrap p_evt_sec3" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec3.jpg" alt="" data-v-12cd1c90><a href="https://shop.pulmuone.co.kr/shop/goodsView?goods=2586" class="btn btn_lnk1" data-v-12cd1c90><span class="blind" data-v-12cd1c90>ASC 생연어 슬라이스 (200g) 구매하러 가기</span></a></div></div><div class="evt_wide_wrap p_evt_sec4" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec4.jpg" alt="" data-v-12cd1c90><div class="motion_box" data-v-12cd1c90><h3 class="motion" data-v-12cd1c90>추운 환경에서 서식하지만,<br data-v-12cd1c90>따뜻한 사랑을 지닌 연어</h3><p class="motion delay01" data-v-12cd1c90> 연어는 유전학적으로 다르게 분류되는 대서양 연어와 태평양 연어로 나뉘는데,<br data-v-12cd1c90> 이 둘은 북반구의 차가운 바다에서만 찾아볼 수 있는 생선입니다.<br data-v-12cd1c90> 가장 흔한 종류는 대서양 연어로, 뛰어난 품질로 전 세계에서 유명합니다. </p><p class="motion delay02" data-v-12cd1c90> 북극까지 이어지는 노르웨이 해안선은 차가운 물에서 번성하는 생선에게<br data-v-12cd1c90> 이상적인 생태 조건으로 이 곳에서 연어가 자연적인 환경에서 살아갈 수 있습니다. </p><p class="motion delay03" data-v-12cd1c90><strong data-v-12cd1c90>노르웨이 바다의 모든 양식장은 지속 가능한 방식</strong>으로 운영되며,<br data-v-12cd1c90> 물고기가 자유롭게 움직일 수 있도록 충분한 공간을 확보해줍니다.<br data-v-12cd1c90> 양식장 용량의 2.5%만이 연어이며, 남은 97.5%는 물로 채워집니다.<br data-v-12cd1c90> 또한, <strong data-v-12cd1c90>깨끗한 고품질의 고형 사료만을 제공</strong>합니다. </p><p class="motion delay04" data-v-12cd1c90> 여기에 더불어 노르웨이에서는 연어 생산 과정에서 항생제 사용률을 현저히 줄였습니다.<br data-v-12cd1c90> 1987년부터 <strong data-v-12cd1c90>항생제 사용을 지양</strong>했으며, 감소 비율은 약 99%에 이릅니다.<br data-v-12cd1c90> 연어 1톤당 항생제는 0.14g만을 사용합니다. 현명한 전통 기법과<br data-v-12cd1c90> 현대 과학의 접근법이 어우러져 노르웨이 수산 양식의 바탕을 이루고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec5" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec5.jpg" alt="" data-v-12cd1c90><div class="motion_box" data-v-12cd1c90><h3 class="motion" data-v-12cd1c90>호흡 방식의 변화</h3><p class="motion delay01" data-v-12cd1c90> 연어는 생애 일부는 민물에서 지내고, 남은 삶은<br data-v-12cd1c90> 염분이 있는 바닷물에서 살아가는 흥미로운 특징을 지녔습니다.<br data-v-12cd1c90> 바다에서 살되 민물에서 번식하기 때문에,<br data-v-12cd1c90> 연어는 산소를 받아들이는 방식을 바꿔야 합니다. </p><p class="motion delay02" data-v-12cd1c90> 민물고기로서 숨쉬고 생활하기 위해 연어는 특별한 능력을 지녔습니다.<br data-v-12cd1c90> 수천 년 넘게 연어는 아가미의 특정 세포에서 펌프질하는 방식을<br data-v-12cd1c90> 역으로 바꾸는 놀라운 능력을 진화 시켜 왔습니다.<br data-v-12cd1c90> 이렇게 놀라운 생리학적 능력은 <strong data-v-12cd1c90>‘삼투압 조절’</strong>이라 불리며,<br data-v-12cd1c90> 몇몇 종류의 생선만이 이런 기술을 사용합니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec6" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec6.jpg" alt="" data-v-12cd1c90><div class="motion_box" data-v-12cd1c90><h3 class="motion" data-v-12cd1c90>노르웨이 연어<br data-v-12cd1c90>안심하고 먹어도 될까?</h3><p class="motion delay01" data-v-12cd1c90> 인공지능(AI)를 활용한 얼굴 인식 기술이 연어에게도 사용된다는<br data-v-12cd1c90> 사실, 알고 계셨나요? 사람마다 지문이 다르듯 <strong data-v-12cd1c90>연어는 얼굴에 있는</strong><br data-v-12cd1c90><strong data-v-12cd1c90>점의 분포 형태가 각자 다르다는 점</strong>을 이용하는 것인데요. </p><p class="motion delay02" data-v-12cd1c90> 연어가 부레의 부력을 조절하기 위해 수면으로 올라올 때<br data-v-12cd1c90> 3D 레이저 스캐너가 연어의 얼굴을 인식해 가상의 신분증을 만들고<br data-v-12cd1c90> 신원을 확인합니다. </p><p class="motion delay03" data-v-12cd1c90> 또한 노르웨이는 <strong data-v-12cd1c90>최첨단 모니터링, 자동 사료 공급 시스템</strong>으로<br data-v-12cd1c90> 일관성 있는 맛과 품질의 연어를 공급합니다.<br data-v-12cd1c90> 노르웨이 연어는 해썹 <strong data-v-12cd1c90>(HACCP) 인증을 취득</strong>하여 한국 소비자들에게<br data-v-12cd1c90> 보다 안전하고 신선한 연어를 제공하기 위해 노력하고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec7" data-v-12cd1c90><div class="evt_section" data-v-12cd1c90><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec7.jpg" alt="" data-v-12cd1c90><div class="motion_box" data-v-12cd1c90><h3 class="motion" data-v-12cd1c90>착한 소비 실천</h3><p class="motion delay01" data-v-12cd1c90> 노르웨이 연어와 고등어는 소나 돼지 등 다른 단백질 공급원에 비해<br data-v-12cd1c90><strong data-v-12cd1c90>생산 과정에서 배출되는 탄소 발자국이 적습니다.</strong></p><p class="motion delay02" data-v-12cd1c90> 온실가스 배출에는 사료의 양이 큰 영향을 미치는데,<br data-v-12cd1c90> 노르웨이 연어는 1kg 생산에 1.15kg 사료만 필요합니다. </p><p class="motion delay03" data-v-12cd1c90> 또한 노르웨이 연어 양식장은 전체 면적의 2.5%만 연어로 유지,<br data-v-12cd1c90> 남은 97.5%는 물로 채워져 연어가 자유롭게 움직일 수 있도록<br data-v-12cd1c90><strong data-v-12cd1c90>충분한 공간을 확보한 채 운영</strong>됩니다. </p></div></div></div>',6),Z=[$,z,Y];function ee(e,a,I,o,g,m){return(0,t.uX)(),(0,t.CE)("main",q,[(0,t.Lk)("section",R,[(0,t.eW)((0,r.v_)(o.scriptInput.value)+" ",1),(0,t.Lk)("div",U,Z,512)])])}var ae={name:"AppJs",components:{},setup(){const e="노르웨이 기획전",a={value:e};return console.log(a.value),{scriptInput:a}},data(){return{options:{root:null,rootMargin:"0px",threshold:0},io:null,boxElList:[]}},mounted(){this.initIntersectionObserver(),this.observeBoxes()},methods:{initIntersectionObserver(){this.io=new IntersectionObserver((e=>{e.forEach((e=>{e.intersectionRatio>0?e.target.classList.add("active"):e.target.classList.remove("active"),console.log("entry:",e)}))}),this.options)},observeBoxes(){this.boxElList=this.$refs.motionBoxes.querySelectorAll(".motion"),this.boxElList.forEach((e=>{this.io.observe(e)}))}}};const Ie=(0,P.A)(ae,[["render",ee],["__scopeId","data-v-12cd1c90"]]);var oe=Ie;const te=[{path:"/study/",name:"Index",component:V},{path:"/study/js",name:"Js",component:oe}],ge=(0,X.aE)({history:(0,X.LA)(),routes:te});var me=ge;(0,o.Ef)(F).use(me).mount("#app")}},a={};function I(o){var t=a[o];if(void 0!==t)return t.exports;var g=a[o]={exports:{}};return e[o].call(g.exports,g,g.exports,I),g.exports}I.m=e,function(){var e=[];I.O=function(a,o,t,g){if(!o){var m=1/0;for(l=0;l<e.length;l++){o=e[l][0],t=e[l][1],g=e[l][2];for(var c=!0,r=0;r<o.length;r++)(!1&g||m>=g)&&Object.keys(I.O).every((function(e){return I.O[e](o[r])}))?o.splice(r--,1):(c=!1,g<m&&(m=g));if(c){e.splice(l--,1);var i=t();void 0!==i&&(a=i)}}return a}g=g||0;for(var l=e.length;l>0&&e[l-1][2]>g;l--)e[l]=e[l-1];e[l]=[o,t,g]}}(),function(){I.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return I.d(a,{a:a}),a}}(),function(){I.d=function(e,a){for(var o in a)I.o(a,o)&&!I.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){I.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){I.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};I.O.j=function(a){return 0===e[a]};var a=function(a,o){var t,g,m=o[0],c=o[1],r=o[2],i=0;if(m.some((function(a){return 0!==e[a]}))){for(t in c)I.o(c,t)&&(I.m[t]=c[t]);if(r)var l=r(I)}for(a&&a(o);i<m.length;i++)g=m[i],I.o(e,g)&&e[g]&&e[g][0](),e[g]=0;return I.O(l)},o=self["webpackChunkpulmuone"]=self["webpackChunkpulmuone"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=I.O(void 0,[504],(function(){return I(6948)}));o=I.O(o)})();
//# sourceMappingURL=app.d562160a.js.map