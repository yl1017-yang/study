(function(){"use strict";var a={7460:function(a,t,e){var c=e(5130),n=e(6768);const s={class:"wrap"},o={class:"wrap-inner"};function r(a,t,e,c,r,l){const d=(0,n.g2)("CommonHeader"),i=(0,n.g2)("router-view"),v=(0,n.g2)("CommonFooter");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("div",o,[(0,n.bF)(d),(0,n.bF)(i),(0,n.bF)(v)])])}var l=e(4232);const d=a=>((0,n.Qi)("data-v-535c4211"),a=a(),(0,n.jt)(),a),i={class:"header-wrap"},v={class:"hedaer-top"},p={class:"logo"},u=d((()=>(0,n.Lk)("span",{class:"blind"},"#Pulmuone",-1))),f={class:"search"},h=d((()=>(0,n.Lk)("span",{class:"blind"},"검색",-1))),m=[h],_={class:"hedaer-nav"},b={class:"category"},g=["onMouseenter"],w=["onMouseenter"],k={href:"#none"},y=["onMouseenter"],L=["href"],C=(0,n.Fv)('<nav data-v-535c4211><a href="#none" class="nav_list" data-v-535c4211>베스트</a><a href="#none" class="nav_list" data-v-535c4211>일일배송</a><a href="#none" class="nav_list" data-v-535c4211>매장배송</a><a href="#none" class="nav_list" data-v-535c4211>지금세일</a><a href="#none" class="nav_list" data-v-535c4211>신상품</a><a href="#none" class="nav_list" data-v-535c4211>기획전/이벤트</a></nav>',1);function x(a,t,e,s,o,r){const d=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("header",i,[(0,n.Lk)("div",v,[(0,n.Lk)("h1",p,[(0,n.bF)(d,{to:"/study/"},{default:(0,n.k6)((()=>[u])),_:1})]),(0,n.Lk)("div",f,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>o.searchInput=a),placeholder:"#풀무원, 나와 지구를 위한 바른먹거리 마켓",maxlength:"30"},null,512),[[c.Jo,o.searchInput]]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=a=>r.searchClick()),type:"button",class:"btn-search"},m)]),(0,n.bF)(d,{to:"/study/js",class:"btn-link"},{default:(0,n.k6)((()=>[(0,n.eW)("자바스크립트 테스트")])),_:1})]),(0,n.Lk)("div",_,[(0,n.Lk)("div",b,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=a=>r.categoryClick()),type:"button",href:"#전체 카테고리",class:"btn-category"},"전체 카테고리"),(0,n.Lk)("div",{class:(0,l.C4)(["category-list",{active:o.categoryShow}])},[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.items,((a,e)=>((0,n.uX)(),(0,n.CE)("li",{key:e,onMouseenter:a=>r.depOver(e),onMouseleave:t[5]||(t[5]=a=>r.depOver(null))},[(0,n.Lk)("a",{href:"#none",class:(0,l.C4)(["dep1",{active:o.depShow===e}])},(0,l.v_)(a.dep1),3),(0,n.Lk)("ul",{class:(0,l.C4)(["dep2",{active:o.depShow===e}])},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.children,((a,c)=>((0,n.uX)(),(0,n.CE)("li",{key:c,onMouseenter:a=>r.dep2Over(e,c),onMouseleave:t[4]||(t[4]=a=>r.dep2Over(null,null))},[(0,n.Lk)("a",k,(0,l.v_)(a.dep2),1),(0,n.Lk)("ul",{class:(0,l.C4)(["dep3",{active:o.dep2Show===c&&o.depShow===e}])},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.dep3,((a,s)=>((0,n.uX)(),(0,n.CE)("li",{key:s,onMouseenter:a=>r.dep3Over(e,c,s),onMouseleave:t[3]||(t[3]=a=>r.dep3Over(null,null,null))},[(0,n.Lk)("a",{href:`https://shop.pulmuone.co.kr/shop/goodsList?itemId=${a.link}`},(0,l.v_)(a.name),9,L)],40,y)))),128))],2)],40,w)))),128))],2)],40,g)))),128))])],2)]),C])])}var O={name:"CommonHeader",data(){return{searchInput:"",categoryShow:null,depShow:null,dep2Show:null,dep3Show:null,items:[{id:1,dep1:"로하스",children:[{dep2:"로하스11",dep3:[{name:"로하스111",link:"4908"},{name:"로하스111",link:"4909"},{name:"로하스11111",link:"4909"}]},{dep2:"로하스22",dep3:[{name:"로하스221",link:"4911"},{name:"로하스222",link:"4912"}]},{dep2:"로하스33",dep3:[{name:"로하스333",link:"4911"},{name:"로하스333",link:"4912"}]}]},{id:2,dep1:"선물세트",children:[{dep2:"선물세트11"},{dep2:"선물세트22"}]},{id:3,dep1:"두부,콩나물,달걀",children:[{dep2:"두부,콩나물,달걀11",dep3:[{name:"두부,콩나물,달걀11",link:"4928"},{name:"두부,콩나물,달걀11",link:"4929"}]},{dep2:"두부,콩나물,달걀22",dep3:[{name:"두부,콩나물,달걀22",link:"4931"},{name:"두부,콩나물,달걀22",link:"4932"}]}]}]}},methods:{searchClick(){console.log(this.searchInput),this.searchInput="클릭해서 나오는 문구"},categoryClick(){this.categoryShow=!this.categoryShow},depOver(a){this.depShow=a},dep2Over(a,t){null!==a&&null!==t?(this.depShow=a,this.dep2Show=t):this.dep3Show=null},dep3Over(a,t,e){null!==a&&null!==t&&null!==e?(this.depShow=a,this.dep2Show=t,this.dep3Show=e):this.dep3Show=null}}},S=e(1241);const A=(0,S.A)(O,[["render",x],["__scopeId","data-v-535c4211"]]);var M=A;const j={class:"footer-wrap"};function E(a,t,e,c,s,o){return(0,n.uX)(),(0,n.CE)("footer",j," 하단 내용 ")}var I={name:"CommonFooter"};const F=(0,S.A)(I,[["render",E]]);var X=F,P={name:"App",components:{CommonHeader:M,CommonFooter:X}};const B=(0,S.A)(P,[["render",r]]);var H=B,D=e(1387);const J={class:"container"},K=(0,n.Fv)('<section class="lnb-wrap"><h2 class="lnb-title"><a href="#none">마이페이지</a></h2><div class="lnb-nav"><h3 class="lnb-subtitle"> 마이 쇼핑 </h3><ul class="lnb-list"><li><a href="#none"> 주문/배송 조회 </a></li><li><a href="#none" class="active"> 취소/반품 조회 </a></li><li><a href="#none"> 일일배송 관리 </a></li><li><a href="#none"> 보낸 선물함 </a></li></ul></div></section><section class="content"><h2 class="title"> 취소/반품 조회 </h2><div class="order"><div class="order__search"><div class="order__search__box"><h3 class="order__search__title">조회기간</h3><div class="months__form left"><div class="form__date"><input type="text" name="startDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><span class="form__tilde">~</span><div class="form__date"><input type="text" name="endDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><div class="form__box"><button type="button" value="3" class="form__months active">3개월</button><button type="button" value="6" class="form__months">6개월</button><button type="button" value="12" class="form__months">12개월</button></div></div></div></div><button type="button" class="order__search__submit">조회하기</button></div></section>',2),Q=[K];function T(a,t,e,c,s,o){return(0,n.uX)(),(0,n.CE)("main",J,Q)}var V={name:"PulmuoneIndex",components:{}};const W=(0,S.A)(V,[["render",T]]);var $=W;const q=a=>((0,n.Qi)("data-v-4837ccf5"),a=a(),(0,n.jt)(),a),N={class:"container"},R={class:"content"},U={class:"event_wrap",ref:"motionBoxes"},z=(0,n.Fv)('<div class="evt_wide_wrap p_evt_tit" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><h1 data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_tit.jpg" alt="" data-v-4837ccf5></h1><div class="motion_box" data-v-4837ccf5><p class="motion" data-v-4837ccf5>차갑고 깨끗한 노르웨이 바다에서 온</p><h3 class="motion delay02" data-v-4837ccf5>노르웨이 연어는<br data-v-4837ccf5>언제나 옳다<span data-v-4837ccf5>.</span></h3></div></div></div>',1),G=q((()=>(0,n.Lk)("div",{class:"evt_wide_wrap p_evt_sec1"},[(0,n.Lk)("div",{class:"evt_section"},[(0,n.Lk)("img",{src:"https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec1.jpg",alt:""}),(0,n.Lk)("div",{class:"video_wrap"},[(0,n.Lk)("iframe",{src:"https://player.vimeo.com/video/816755934?muted=1&autoplay=1&loop=1&title=0&autopause=1&controls=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"노르웨이 연어 영상"})])])],-1))),Y=(0,n.Fv)('<div class="evt_wide_wrap p_evt_sec2" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec2.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><span class="motion" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/object1.png" alt="" data-v-4837ccf5></span><p class="motion delay01" data-v-4837ccf5> 씨푸드프롬노르웨이(Seafood From Norway)마크는<br data-v-4837ccf5><strong data-v-4837ccf5>노르웨이산 수산물임을 상징하는 원산지 마크</strong>입니다. </p><p class="motion delay02" data-v-4837ccf5> 이 마크는 차갑고 청정한 노르웨이 바다에서 지속 가능한 방식으로<br data-v-4837ccf5> 양식되거나 어획된 최고 품질의 수산물임을 상징합니다.<br data-v-4837ccf5> 제품 포장 혹은 온라인 스토어에서<br data-v-4837ccf5> 씨푸드프롬노르웨이 마크를 확인해보세요! </p></div></div></div><div class="evt_wide_wrap p_evt_sec3" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec3.jpg" alt="" data-v-4837ccf5><a href="https://shop.pulmuone.co.kr/shop/goodsView?goods=2586" class="btn btn_lnk1" data-v-4837ccf5><span class="blind" data-v-4837ccf5>ASC 생연어 슬라이스 (200g) 구매하러 가기</span></a></div></div><div class="evt_wide_wrap p_evt_sec4" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec4.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>추운 환경에서 서식하지만,<br data-v-4837ccf5>따뜻한 사랑을 지닌 연어</h3><p class="motion delay01" data-v-4837ccf5> 연어는 유전학적으로 다르게 분류되는 대서양 연어와 태평양 연어로 나뉘는데,<br data-v-4837ccf5> 이 둘은 북반구의 차가운 바다에서만 찾아볼 수 있는 생선입니다.<br data-v-4837ccf5> 가장 흔한 종류는 대서양 연어로, 뛰어난 품질로 전 세계에서 유명합니다. </p><p class="motion delay02" data-v-4837ccf5> 북극까지 이어지는 노르웨이 해안선은 차가운 물에서 번성하는 생선에게<br data-v-4837ccf5> 이상적인 생태 조건으로 이 곳에서 연어가 자연적인 환경에서 살아갈 수 있습니다. </p><p class="motion delay03" data-v-4837ccf5><strong data-v-4837ccf5>노르웨이 바다의 모든 양식장은 지속 가능한 방식</strong>으로 운영되며,<br data-v-4837ccf5> 물고기가 자유롭게 움직일 수 있도록 충분한 공간을 확보해줍니다.<br data-v-4837ccf5> 양식장 용량의 2.5%만이 연어이며, 남은 97.5%는 물로 채워집니다.<br data-v-4837ccf5> 또한, <strong data-v-4837ccf5>깨끗한 고품질의 고형 사료만을 제공</strong>합니다. </p><p class="motion delay04" data-v-4837ccf5> 여기에 더불어 노르웨이에서는 연어 생산 과정에서 항생제 사용률을 현저히 줄였습니다.<br data-v-4837ccf5> 1987년부터 <strong data-v-4837ccf5>항생제 사용을 지양</strong>했으며, 감소 비율은 약 99%에 이릅니다.<br data-v-4837ccf5> 연어 1톤당 항생제는 0.14g만을 사용합니다. 현명한 전통 기법과<br data-v-4837ccf5> 현대 과학의 접근법이 어우러져 노르웨이 수산 양식의 바탕을 이루고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec5" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec5.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>호흡 방식의 변화</h3><p class="motion delay01" data-v-4837ccf5> 연어는 생애 일부는 민물에서 지내고, 남은 삶은<br data-v-4837ccf5> 염분이 있는 바닷물에서 살아가는 흥미로운 특징을 지녔습니다.<br data-v-4837ccf5> 바다에서 살되 민물에서 번식하기 때문에,<br data-v-4837ccf5> 연어는 산소를 받아들이는 방식을 바꿔야 합니다. </p><p class="motion delay02" data-v-4837ccf5> 민물고기로서 숨쉬고 생활하기 위해 연어는 특별한 능력을 지녔습니다.<br data-v-4837ccf5> 수천 년 넘게 연어는 아가미의 특정 세포에서 펌프질하는 방식을<br data-v-4837ccf5> 역으로 바꾸는 놀라운 능력을 진화 시켜 왔습니다.<br data-v-4837ccf5> 이렇게 놀라운 생리학적 능력은 <strong data-v-4837ccf5>‘삼투압 조절’</strong>이라 불리며,<br data-v-4837ccf5> 몇몇 종류의 생선만이 이런 기술을 사용합니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec6" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec6.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>노르웨이 연어<br data-v-4837ccf5>안심하고 먹어도 될까?</h3><p class="motion delay01" data-v-4837ccf5> 인공지능(AI)를 활용한 얼굴 인식 기술이 연어에게도 사용된다는<br data-v-4837ccf5> 사실, 알고 계셨나요? 사람마다 지문이 다르듯 <strong data-v-4837ccf5>연어는 얼굴에 있는</strong><br data-v-4837ccf5><strong data-v-4837ccf5>점의 분포 형태가 각자 다르다는 점</strong>을 이용하는 것인데요. </p><p class="motion delay02" data-v-4837ccf5> 연어가 부레의 부력을 조절하기 위해 수면으로 올라올 때<br data-v-4837ccf5> 3D 레이저 스캐너가 연어의 얼굴을 인식해 가상의 신분증을 만들고<br data-v-4837ccf5> 신원을 확인합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이는 <strong data-v-4837ccf5>최첨단 모니터링, 자동 사료 공급 시스템</strong>으로<br data-v-4837ccf5> 일관성 있는 맛과 품질의 연어를 공급합니다.<br data-v-4837ccf5> 노르웨이 연어는 해썹 <strong data-v-4837ccf5>(HACCP) 인증을 취득</strong>하여 한국 소비자들에게<br data-v-4837ccf5> 보다 안전하고 신선한 연어를 제공하기 위해 노력하고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec7" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec7.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>착한 소비 실천</h3><p class="motion delay01" data-v-4837ccf5> 노르웨이 연어와 고등어는 소나 돼지 등 다른 단백질 공급원에 비해<br data-v-4837ccf5><strong data-v-4837ccf5>생산 과정에서 배출되는 탄소 발자국이 적습니다.</strong></p><p class="motion delay02" data-v-4837ccf5> 온실가스 배출에는 사료의 양이 큰 영향을 미치는데,<br data-v-4837ccf5> 노르웨이 연어는 1kg 생산에 1.15kg 사료만 필요합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이 연어 양식장은 전체 면적의 2.5%만 연어로 유지,<br data-v-4837ccf5> 남은 97.5%는 물로 채워져 연어가 자유롭게 움직일 수 있도록<br data-v-4837ccf5><strong data-v-4837ccf5>충분한 공간을 확보한 채 운영</strong>됩니다. </p></div></div></div>',6),Z=[z,G,Y];function aa(a,t,e,c,s,o){return(0,n.uX)(),(0,n.CE)("main",N,[(0,n.Lk)("section",R,[(0,n.eW)((0,l.v_)(c.scriptInput.value)+" ",1),(0,n.Lk)("div",U,Z,512)])])}var ta={name:"AppJs",components:{},setup(){const a="노르웨이 기획전",t={value:a};return console.log(t.value),{scriptInput:t}},data(){return{options:{root:null,rootMargin:"0px",threshold:0},io:null,boxElList:[]}},mounted(){this.initIntersectionObserver(),this.observeBoxes()},methods:{initIntersectionObserver(){this.io=new IntersectionObserver((a=>{a.forEach((a=>{a.intersectionRatio>0?a.target.classList.add("active"):a.target.classList.remove("active"),console.log("entry:",a)}))}),this.options)},observeBoxes(){this.boxElList=this.$refs.motionBoxes.querySelectorAll(".motion"),this.boxElList.forEach((a=>{this.io.observe(a)}))}}};const ea=(0,S.A)(ta,[["render",aa],["__scopeId","data-v-4837ccf5"]]);var ca=ea;const na=[{path:"/study/",name:"Index",component:$},{path:"/study/js",name:"Js",component:ca}],sa=(0,D.aE)({history:(0,D.LA)(),routes:na});var oa=sa;(0,c.Ef)(H).use(oa).mount("#app")}},t={};function e(c){var n=t[c];if(void 0!==n)return n.exports;var s=t[c]={exports:{}};return a[c].call(s.exports,s,s.exports,e),s.exports}e.m=a,function(){var a=[];e.O=function(t,c,n,s){if(!c){var o=1/0;for(i=0;i<a.length;i++){c=a[i][0],n=a[i][1],s=a[i][2];for(var r=!0,l=0;l<c.length;l++)(!1&s||o>=s)&&Object.keys(e.O).every((function(a){return e.O[a](c[l])}))?c.splice(l--,1):(r=!1,s<o&&(o=s));if(r){a.splice(i--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var i=a.length;i>0&&a[i-1][2]>s;i--)a[i]=a[i-1];a[i]=[c,n,s]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var c in t)e.o(t,c)&&!e.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:t[c]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,c){var n,s,o=c[0],r=c[1],l=c[2],d=0;if(o.some((function(t){return 0!==a[t]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var i=l(e)}for(t&&t(c);d<o.length;d++)s=o[d],e.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return e.O(i)},c=self["webpackChunkpulmuone"]=self["webpackChunkpulmuone"]||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))}();var c=e.O(void 0,[504],(function(){return e(7460)}));c=e.O(c)})();
//# sourceMappingURL=app.cd552110.js.map