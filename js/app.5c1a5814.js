(function(){"use strict";var t={7796:function(t,a,c){var s=c(5130),e=c(6768);const o={class:"wrap"},n={class:"wrap-inner"};function r(t,a,c,s,r,i){const d=(0,e.g2)("CommonHeader"),l=(0,e.g2)("router-view"),v=(0,e.g2)("CommonFooter");return(0,e.uX)(),(0,e.CE)("div",o,[(0,e.Lk)("div",n,[(0,e.bF)(d),(0,e.bF)(l),(0,e.bF)(v)])])}var i=c(4232);const d=t=>((0,e.Qi)("data-v-237f960b"),t=t(),(0,e.jt)(),t),l={class:"header-wrap"},v={class:"hedaer-top"},p={class:"logo"},f=d((()=>(0,e.Lk)("span",{class:"blind"},"#Pulmuone",-1))),u={class:"search"},_=d((()=>(0,e.Lk)("span",{class:"blind"},"검색",-1))),m=[_],h={class:"hedaer-nav"},b={class:"category"},g=["onMouseenter","onMouseleave"],y=["onMouseenter"],w={href:"#none"},k=["href"],L=(0,e.Fv)('<nav data-v-237f960b><a href="#none" class="nav_list" data-v-237f960b>베스트</a><a href="#none" class="nav_list" data-v-237f960b>일일배송</a><a href="#none" class="nav_list" data-v-237f960b>매장배송</a><a href="#none" class="nav_list" data-v-237f960b>지금세일</a><a href="#none" class="nav_list" data-v-237f960b>신상품</a><a href="#none" class="nav_list" data-v-237f960b>기획전/이벤트</a></nav>',1);function C(t,a,c,o,n,r){const d=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("header",l,[(0,e.Lk)("div",v,[(0,e.Lk)("h1",p,[(0,e.bF)(d,{to:"/study/"},{default:(0,e.k6)((()=>[f])),_:1})]),(0,e.Lk)("div",u,[(0,e.bo)((0,e.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>n.searchInput=t),placeholder:"#풀무원, 나와 지구를 위한 바른먹거리 마켓",maxlength:"30"},null,512),[[s.Jo,n.searchInput]]),(0,e.Lk)("button",{onClick:a[1]||(a[1]=t=>r.searchClick()),type:"button",class:"btn-search"},m)]),(0,e.bF)(d,{to:"/study/js",class:"btn-link"},{default:(0,e.k6)((()=>[(0,e.eW)("자바스크립트 테스트")])),_:1})]),(0,e.Lk)("div",h,[(0,e.Lk)("div",b,[(0,e.Lk)("button",{onClick:a[2]||(a[2]=t=>r.categoryClick()),type:"button",href:"#전체 카테고리",class:"btn-category"},"전체 카테고리"),(0,e.Lk)("div",{class:(0,i.C4)(["category-list",{active:n.categoryShow}])},[(0,e.Lk)("ul",null,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(n.items,((t,a)=>((0,e.uX)(),(0,e.CE)("li",{key:a,onMouseenter:t=>r.depOver(a),onMouseleave:t=>r.depOver(a)},[(0,e.Lk)("a",{href:"#none",class:(0,i.C4)(["dep1",{active:n.depShow===a}])},(0,i.v_)(t.dep1),3),(0,e.Lk)("ul",{class:(0,i.C4)(["dep2",{active:n.depShow===a}])},[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(t.dep2,((c,s)=>((0,e.uX)(),(0,e.CE)("li",{key:s,onMouseenter:t=>r.dep2Over(a)},[(0,e.Lk)("a",w,(0,i.v_)(c),1),(0,e.Lk)("ul",{class:(0,i.C4)(["dep3",{active:n.dep2Show===a}])},[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(t.dep3,((a,c)=>((0,e.uX)(),(0,e.CE)("li",{key:c},[(0,e.Lk)("a",{href:`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${t.link}`},(0,i.v_)(a),9,k)])))),128))],2)],40,y)))),128))],2)],40,g)))),128))])],2)]),L])])}var x={name:"CommonHeader",data(){return{searchInput:"",categoryShow:null,depShow:null,dep2Show:null,items:[{dep1:"로하스",dep2:["로하스11","로하스2"],dep3:["로하스3333","로하스333","로하스333","로하스333"],link:4908},{dep1:"선물세트",dep2:["선물세트11","선물세트22"],dep3:["선물세트3332","선물세트33"],link:5404},{dep1:"두부,콩나물,달걀",dep2:["두부,콩나물,달걀11","두부,콩나물,달걀22"],dep3:["두부,콩나물,달걀3332","두부,콩나물,달걀33"],link:4908}]}},methods:{searchClick(){console.log(this.searchInput),this.searchInput="클릭해서 나오는 문구"},categoryClick(){this.categoryShow=!this.categoryShow},depOver(t){this.depShow=t},dep2Over(t){this.dep2Show=t}}},A=c(1241);const j=(0,A.A)(x,[["render",C],["__scopeId","data-v-237f960b"]]);var E=j;const I={class:"footer-wrap"};function O(t,a,c,s,o,n){return(0,e.uX)(),(0,e.CE)("footer",I," 하단 내용 ")}var F={name:"CommonFooter"};const M=(0,A.A)(F,[["render",O]]);var S=M,X={name:"App",components:{CommonHeader:E,CommonFooter:S}};const P=(0,A.A)(X,[["render",r]]);var B=P,H=c(1387);const D={class:"container"},J=(0,e.Fv)('<section class="lnb-wrap"><h2 class="lnb-title"><a href="#none">마이페이지</a></h2><div class="lnb-nav"><h3 class="lnb-subtitle"> 마이 쇼핑 </h3><ul class="lnb-list"><li><a href="#none"> 주문/배송 조회 </a></li><li><a href="#none" class="active"> 취소/반품 조회 </a></li><li><a href="#none"> 일일배송 관리 </a></li><li><a href="#none"> 보낸 선물함 </a></li></ul></div></section><section class="content"><h2 class="title"> 취소/반품 조회 </h2><div class="order"><div class="order__search"><div class="order__search__box"><h3 class="order__search__title">조회기간</h3><div class="months__form left"><div class="form__date"><input type="text" name="startDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><span class="form__tilde">~</span><div class="form__date"><input type="text" name="endDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><div class="form__box"><button type="button" value="3" class="form__months active">3개월</button><button type="button" value="6" class="form__months">6개월</button><button type="button" value="12" class="form__months">12개월</button></div></div></div></div><button type="button" class="order__search__submit">조회하기</button></div></section>',2),K=[J];function Q(t,a,c,s,o,n){return(0,e.uX)(),(0,e.CE)("main",D,K)}var T={name:"PulmuoneIndex",components:{}};const V=(0,A.A)(T,[["render",Q]]);var W=V;const $=t=>((0,e.Qi)("data-v-4837ccf5"),t=t(),(0,e.jt)(),t),q={class:"container"},N={class:"content"},R={class:"event_wrap",ref:"motionBoxes"},U=(0,e.Fv)('<div class="evt_wide_wrap p_evt_tit" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><h1 data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_tit.jpg" alt="" data-v-4837ccf5></h1><div class="motion_box" data-v-4837ccf5><p class="motion" data-v-4837ccf5>차갑고 깨끗한 노르웨이 바다에서 온</p><h3 class="motion delay02" data-v-4837ccf5>노르웨이 연어는<br data-v-4837ccf5>언제나 옳다<span data-v-4837ccf5>.</span></h3></div></div></div>',1),z=$((()=>(0,e.Lk)("div",{class:"evt_wide_wrap p_evt_sec1"},[(0,e.Lk)("div",{class:"evt_section"},[(0,e.Lk)("img",{src:"https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec1.jpg",alt:""}),(0,e.Lk)("div",{class:"video_wrap"},[(0,e.Lk)("iframe",{src:"https://player.vimeo.com/video/816755934?muted=1&autoplay=1&loop=1&title=0&autopause=1&controls=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"노르웨이 연어 영상"})])])],-1))),G=(0,e.Fv)('<div class="evt_wide_wrap p_evt_sec2" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec2.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><span class="motion" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/object1.png" alt="" data-v-4837ccf5></span><p class="motion delay01" data-v-4837ccf5> 씨푸드프롬노르웨이(Seafood From Norway)마크는<br data-v-4837ccf5><strong data-v-4837ccf5>노르웨이산 수산물임을 상징하는 원산지 마크</strong>입니다. </p><p class="motion delay02" data-v-4837ccf5> 이 마크는 차갑고 청정한 노르웨이 바다에서 지속 가능한 방식으로<br data-v-4837ccf5> 양식되거나 어획된 최고 품질의 수산물임을 상징합니다.<br data-v-4837ccf5> 제품 포장 혹은 온라인 스토어에서<br data-v-4837ccf5> 씨푸드프롬노르웨이 마크를 확인해보세요! </p></div></div></div><div class="evt_wide_wrap p_evt_sec3" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec3.jpg" alt="" data-v-4837ccf5><a href="https://shop.pulmuone.co.kr/shop/goodsView?goods=2586" class="btn btn_lnk1" data-v-4837ccf5><span class="blind" data-v-4837ccf5>ASC 생연어 슬라이스 (200g) 구매하러 가기</span></a></div></div><div class="evt_wide_wrap p_evt_sec4" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec4.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>추운 환경에서 서식하지만,<br data-v-4837ccf5>따뜻한 사랑을 지닌 연어</h3><p class="motion delay01" data-v-4837ccf5> 연어는 유전학적으로 다르게 분류되는 대서양 연어와 태평양 연어로 나뉘는데,<br data-v-4837ccf5> 이 둘은 북반구의 차가운 바다에서만 찾아볼 수 있는 생선입니다.<br data-v-4837ccf5> 가장 흔한 종류는 대서양 연어로, 뛰어난 품질로 전 세계에서 유명합니다. </p><p class="motion delay02" data-v-4837ccf5> 북극까지 이어지는 노르웨이 해안선은 차가운 물에서 번성하는 생선에게<br data-v-4837ccf5> 이상적인 생태 조건으로 이 곳에서 연어가 자연적인 환경에서 살아갈 수 있습니다. </p><p class="motion delay03" data-v-4837ccf5><strong data-v-4837ccf5>노르웨이 바다의 모든 양식장은 지속 가능한 방식</strong>으로 운영되며,<br data-v-4837ccf5> 물고기가 자유롭게 움직일 수 있도록 충분한 공간을 확보해줍니다.<br data-v-4837ccf5> 양식장 용량의 2.5%만이 연어이며, 남은 97.5%는 물로 채워집니다.<br data-v-4837ccf5> 또한, <strong data-v-4837ccf5>깨끗한 고품질의 고형 사료만을 제공</strong>합니다. </p><p class="motion delay04" data-v-4837ccf5> 여기에 더불어 노르웨이에서는 연어 생산 과정에서 항생제 사용률을 현저히 줄였습니다.<br data-v-4837ccf5> 1987년부터 <strong data-v-4837ccf5>항생제 사용을 지양</strong>했으며, 감소 비율은 약 99%에 이릅니다.<br data-v-4837ccf5> 연어 1톤당 항생제는 0.14g만을 사용합니다. 현명한 전통 기법과<br data-v-4837ccf5> 현대 과학의 접근법이 어우러져 노르웨이 수산 양식의 바탕을 이루고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec5" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec5.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>호흡 방식의 변화</h3><p class="motion delay01" data-v-4837ccf5> 연어는 생애 일부는 민물에서 지내고, 남은 삶은<br data-v-4837ccf5> 염분이 있는 바닷물에서 살아가는 흥미로운 특징을 지녔습니다.<br data-v-4837ccf5> 바다에서 살되 민물에서 번식하기 때문에,<br data-v-4837ccf5> 연어는 산소를 받아들이는 방식을 바꿔야 합니다. </p><p class="motion delay02" data-v-4837ccf5> 민물고기로서 숨쉬고 생활하기 위해 연어는 특별한 능력을 지녔습니다.<br data-v-4837ccf5> 수천 년 넘게 연어는 아가미의 특정 세포에서 펌프질하는 방식을<br data-v-4837ccf5> 역으로 바꾸는 놀라운 능력을 진화 시켜 왔습니다.<br data-v-4837ccf5> 이렇게 놀라운 생리학적 능력은 <strong data-v-4837ccf5>‘삼투압 조절’</strong>이라 불리며,<br data-v-4837ccf5> 몇몇 종류의 생선만이 이런 기술을 사용합니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec6" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec6.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>노르웨이 연어<br data-v-4837ccf5>안심하고 먹어도 될까?</h3><p class="motion delay01" data-v-4837ccf5> 인공지능(AI)를 활용한 얼굴 인식 기술이 연어에게도 사용된다는<br data-v-4837ccf5> 사실, 알고 계셨나요? 사람마다 지문이 다르듯 <strong data-v-4837ccf5>연어는 얼굴에 있는</strong><br data-v-4837ccf5><strong data-v-4837ccf5>점의 분포 형태가 각자 다르다는 점</strong>을 이용하는 것인데요. </p><p class="motion delay02" data-v-4837ccf5> 연어가 부레의 부력을 조절하기 위해 수면으로 올라올 때<br data-v-4837ccf5> 3D 레이저 스캐너가 연어의 얼굴을 인식해 가상의 신분증을 만들고<br data-v-4837ccf5> 신원을 확인합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이는 <strong data-v-4837ccf5>최첨단 모니터링, 자동 사료 공급 시스템</strong>으로<br data-v-4837ccf5> 일관성 있는 맛과 품질의 연어를 공급합니다.<br data-v-4837ccf5> 노르웨이 연어는 해썹 <strong data-v-4837ccf5>(HACCP) 인증을 취득</strong>하여 한국 소비자들에게<br data-v-4837ccf5> 보다 안전하고 신선한 연어를 제공하기 위해 노력하고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec7" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec7.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>착한 소비 실천</h3><p class="motion delay01" data-v-4837ccf5> 노르웨이 연어와 고등어는 소나 돼지 등 다른 단백질 공급원에 비해<br data-v-4837ccf5><strong data-v-4837ccf5>생산 과정에서 배출되는 탄소 발자국이 적습니다.</strong></p><p class="motion delay02" data-v-4837ccf5> 온실가스 배출에는 사료의 양이 큰 영향을 미치는데,<br data-v-4837ccf5> 노르웨이 연어는 1kg 생산에 1.15kg 사료만 필요합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이 연어 양식장은 전체 면적의 2.5%만 연어로 유지,<br data-v-4837ccf5> 남은 97.5%는 물로 채워져 연어가 자유롭게 움직일 수 있도록<br data-v-4837ccf5><strong data-v-4837ccf5>충분한 공간을 확보한 채 운영</strong>됩니다. </p></div></div></div>',6),Y=[U,z,G];function Z(t,a,c,s,o,n){return(0,e.uX)(),(0,e.CE)("main",q,[(0,e.Lk)("section",N,[(0,e.eW)((0,i.v_)(s.scriptInput.value)+" ",1),(0,e.Lk)("div",R,Y,512)])])}var tt={name:"AppJs",components:{},setup(){const t="노르웨이 기획전",a={value:t};return console.log(a.value),{scriptInput:a}},data(){return{options:{root:null,rootMargin:"0px",threshold:0},io:null,boxElList:[]}},mounted(){this.initIntersectionObserver(),this.observeBoxes()},methods:{initIntersectionObserver(){this.io=new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio>0?t.target.classList.add("active"):t.target.classList.remove("active"),console.log("entry:",t)}))}),this.options)},observeBoxes(){this.boxElList=this.$refs.motionBoxes.querySelectorAll(".motion"),this.boxElList.forEach((t=>{this.io.observe(t)}))}}};const at=(0,A.A)(tt,[["render",Z],["__scopeId","data-v-4837ccf5"]]);var ct=at;const st=[{path:"/study/",name:"Index",component:W},{path:"/study/js",name:"Js",component:ct}],et=(0,H.aE)({history:(0,H.LA)(),routes:st});var ot=et;(0,s.Ef)(B).use(ot).mount("#app")}},a={};function c(s){var e=a[s];if(void 0!==e)return e.exports;var o=a[s]={exports:{}};return t[s].call(o.exports,o,o.exports,c),o.exports}c.m=t,function(){var t=[];c.O=function(a,s,e,o){if(!s){var n=1/0;for(l=0;l<t.length;l++){s=t[l][0],e=t[l][1],o=t[l][2];for(var r=!0,i=0;i<s.length;i++)(!1&o||n>=o)&&Object.keys(c.O).every((function(t){return c.O[t](s[i])}))?s.splice(i--,1):(r=!1,o<n&&(n=o));if(r){t.splice(l--,1);var d=e();void 0!==d&&(a=d)}}return a}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,e,o]}}(),function(){c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,{a:a}),a}}(),function(){c.d=function(t,a){for(var s in a)c.o(a,s)&&!c.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){c.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={524:0};c.O.j=function(a){return 0===t[a]};var a=function(a,s){var e,o,n=s[0],r=s[1],i=s[2],d=0;if(n.some((function(a){return 0!==t[a]}))){for(e in r)c.o(r,e)&&(c.m[e]=r[e]);if(i)var l=i(c)}for(a&&a(s);d<n.length;d++)o=n[d],c.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return c.O(l)},s=self["webpackChunkpulmuone"]=self["webpackChunkpulmuone"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=c.O(void 0,[504],(function(){return c(7796)}));s=c.O(s)})();
//# sourceMappingURL=app.5c1a5814.js.map