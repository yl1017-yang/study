(function(){"use strict";var a={5068:function(a,t,c){var s=c(5130),o=c(6768);const e={class:"wrap"},n={class:"wrap-inner"};function r(a,t,c,s,r,d){const i=(0,o.g2)("CommonHeader"),l=(0,o.g2)("router-view"),v=(0,o.g2)("CommonFooter");return(0,o.uX)(),(0,o.CE)("div",e,[(0,o.Lk)("div",n,[(0,o.bF)(i),(0,o.bF)(l),(0,o.bF)(v)])])}var d=c(4232);const i=a=>((0,o.Qi)("data-v-35a2d098"),a=a(),(0,o.jt)(),a),l={class:"header-wrap"},v={class:"hedaer-top"},p={class:"logo"},f=i((()=>(0,o.Lk)("span",{class:"blind"},"#Pulmuone",-1))),u={class:"search"},_=i((()=>(0,o.Lk)("span",{class:"blind"},"검색",-1))),m=[_],h={class:"hedaer-nav"},b={class:"category"},g=["onMouseenter","onMouseleave"],y={href:"#none",class:"dep1"},w={href:"#none"},L={class:"dep3"},k={href:"#none"},x=(0,o.Fv)('<nav data-v-35a2d098><a href="#none" class="nav_list" data-v-35a2d098>베스트</a><a href="#none" class="nav_list" data-v-35a2d098>일일배송</a><a href="#none" class="nav_list" data-v-35a2d098>매장배송</a><a href="#none" class="nav_list" data-v-35a2d098>지금세일</a><a href="#none" class="nav_list" data-v-35a2d098>신상품</a><a href="#none" class="nav_list" data-v-35a2d098>기획전/이벤트</a></nav>',1);function C(a,t,c,e,n,r){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",l,[(0,o.Lk)("div",v,[(0,o.Lk)("h1",p,[(0,o.bF)(i,{to:"/study/"},{default:(0,o.k6)((()=>[f])),_:1})]),(0,o.Lk)("div",u,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>n.searchInput=a),placeholder:"#풀무원, 나와 지구를 위한 바른먹거리 마켓",maxlength:"30"},null,512),[[s.Jo,n.searchInput]]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=a=>r.searchClick()),type:"button",class:"btn-search"},m)]),(0,o.bF)(i,{to:"/study/js",class:"btn-link"},{default:(0,o.k6)((()=>[(0,o.eW)("자바스크립트 테스트")])),_:1})]),(0,o.Lk)("div",h,[(0,o.Lk)("div",b,[(0,o.Lk)("button",{onClick:t[2]||(t[2]=a=>r.categoryClick()),type:"button",href:"#전체 카테고리",class:"btn-category"},"전체 카테고리"),(0,o.Lk)("div",{class:(0,d.C4)(["category-list",{active:n.categoryShow}])},[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.items,((a,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,onMouseenter:a=>r.depOver(t),onMouseleave:a=>r.depOver(t)},[(0,o.Lk)("a",y,(0,d.v_)(a.dep1),1),(0,o.Lk)("ul",{class:(0,d.C4)(["dep2",{active:n.depShow===t}])},[(0,o.Lk)("li",null,[(0,o.Lk)("a",w,(0,d.v_)(a.dep2),1),(0,o.Lk)("ul",L,[(0,o.Lk)("li",null,[(0,o.Lk)("a",k,(0,d.v_)(a.dep3),1)])])])],2)],40,g)))),128))])],2)]),x])])}var A={name:"CommonHeader",data(){return{searchInput:"",categoryShow:!1,depShow:null,items:[{dep1:"로하스",dep2:["로하스11","로하스2"],dep3:"로하스22222"},{dep1:"선물세트",dep2:["선물세트11","선물세트22"],dep3:"선물세트22222"},{dep1:"두부,콩나물,달걀",dep2:["두부,콩나물,달걀11","두부,콩나물,달걀22"],dep3:"22222"}]}},methods:{searchClick(){console.log(this.searchInput),this.searchInput="클릭해서 나오는 문구"},categoryClick(){this.categoryShow=!this.categoryShow},depOver(a){this.depShow=a}}},j=c(1241);const O=(0,j.A)(A,[["render",C],["__scopeId","data-v-35a2d098"]]);var I=O;const E={class:"footer-wrap"};function F(a,t,c,s,e,n){return(0,o.uX)(),(0,o.CE)("footer",E," 하단 내용 ")}var M={name:"CommonFooter"};const S=(0,j.A)(M,[["render",F]]);var X=S,P={name:"App",components:{CommonHeader:I,CommonFooter:X}};const B=(0,j.A)(P,[["render",r]]);var H=B,D=c(1387);const J={class:"container"},Q=(0,o.Fv)('<section class="lnb-wrap"><h2 class="lnb-title"><a href="#none">마이페이지</a></h2><div class="lnb-nav"><h3 class="lnb-subtitle"> 마이 쇼핑 </h3><ul class="lnb-list"><li><a href="#none"> 주문/배송 조회 </a></li><li><a href="#none" class="active"> 취소/반품 조회 </a></li><li><a href="#none"> 일일배송 관리 </a></li><li><a href="#none"> 보낸 선물함 </a></li></ul></div></section><section class="content"><h2 class="title"> 취소/반품 조회 </h2><div class="order"><div class="order__search"><div class="order__search__box"><h3 class="order__search__title">조회기간</h3><div class="months__form left"><div class="form__date"><input type="text" name="startDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><span class="form__tilde">~</span><div class="form__date"><input type="text" name="endDate" readonly="readonly" class="form__date__input"><button type="button" class="form__date__picker">달력열기</button></div><div class="form__box"><button type="button" value="3" class="form__months active">3개월</button><button type="button" value="6" class="form__months">6개월</button><button type="button" value="12" class="form__months">12개월</button></div></div></div></div><button type="button" class="order__search__submit">조회하기</button></div></section>',2),T=[Q];function V(a,t,c,s,e,n){return(0,o.uX)(),(0,o.CE)("main",J,T)}var W={name:"PulmuoneIndex",components:{}};const q=(0,j.A)(W,[["render",V]]);var K=q;const N=a=>((0,o.Qi)("data-v-4837ccf5"),a=a(),(0,o.jt)(),a),R={class:"container"},U={class:"content"},$={class:"event_wrap",ref:"motionBoxes"},z=(0,o.Fv)('<div class="evt_wide_wrap p_evt_tit" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><h1 data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_tit.jpg" alt="" data-v-4837ccf5></h1><div class="motion_box" data-v-4837ccf5><p class="motion" data-v-4837ccf5>차갑고 깨끗한 노르웨이 바다에서 온</p><h3 class="motion delay02" data-v-4837ccf5>노르웨이 연어는<br data-v-4837ccf5>언제나 옳다<span data-v-4837ccf5>.</span></h3></div></div></div>',1),G=N((()=>(0,o.Lk)("div",{class:"evt_wide_wrap p_evt_sec1"},[(0,o.Lk)("div",{class:"evt_section"},[(0,o.Lk)("img",{src:"https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec1.jpg",alt:""}),(0,o.Lk)("div",{class:"video_wrap"},[(0,o.Lk)("iframe",{src:"https://player.vimeo.com/video/816755934?muted=1&autoplay=1&loop=1&title=0&autopause=1&controls=1",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"노르웨이 연어 영상"})])])],-1))),Y=(0,o.Fv)('<div class="evt_wide_wrap p_evt_sec2" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec2.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><span class="motion" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/object1.png" alt="" data-v-4837ccf5></span><p class="motion delay01" data-v-4837ccf5> 씨푸드프롬노르웨이(Seafood From Norway)마크는<br data-v-4837ccf5><strong data-v-4837ccf5>노르웨이산 수산물임을 상징하는 원산지 마크</strong>입니다. </p><p class="motion delay02" data-v-4837ccf5> 이 마크는 차갑고 청정한 노르웨이 바다에서 지속 가능한 방식으로<br data-v-4837ccf5> 양식되거나 어획된 최고 품질의 수산물임을 상징합니다.<br data-v-4837ccf5> 제품 포장 혹은 온라인 스토어에서<br data-v-4837ccf5> 씨푸드프롬노르웨이 마크를 확인해보세요! </p></div></div></div><div class="evt_wide_wrap p_evt_sec3" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec3.jpg" alt="" data-v-4837ccf5><a href="https://shop.pulmuone.co.kr/shop/goodsView?goods=2586" class="btn btn_lnk1" data-v-4837ccf5><span class="blind" data-v-4837ccf5>ASC 생연어 슬라이스 (200g) 구매하러 가기</span></a></div></div><div class="evt_wide_wrap p_evt_sec4" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec4.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>추운 환경에서 서식하지만,<br data-v-4837ccf5>따뜻한 사랑을 지닌 연어</h3><p class="motion delay01" data-v-4837ccf5> 연어는 유전학적으로 다르게 분류되는 대서양 연어와 태평양 연어로 나뉘는데,<br data-v-4837ccf5> 이 둘은 북반구의 차가운 바다에서만 찾아볼 수 있는 생선입니다.<br data-v-4837ccf5> 가장 흔한 종류는 대서양 연어로, 뛰어난 품질로 전 세계에서 유명합니다. </p><p class="motion delay02" data-v-4837ccf5> 북극까지 이어지는 노르웨이 해안선은 차가운 물에서 번성하는 생선에게<br data-v-4837ccf5> 이상적인 생태 조건으로 이 곳에서 연어가 자연적인 환경에서 살아갈 수 있습니다. </p><p class="motion delay03" data-v-4837ccf5><strong data-v-4837ccf5>노르웨이 바다의 모든 양식장은 지속 가능한 방식</strong>으로 운영되며,<br data-v-4837ccf5> 물고기가 자유롭게 움직일 수 있도록 충분한 공간을 확보해줍니다.<br data-v-4837ccf5> 양식장 용량의 2.5%만이 연어이며, 남은 97.5%는 물로 채워집니다.<br data-v-4837ccf5> 또한, <strong data-v-4837ccf5>깨끗한 고품질의 고형 사료만을 제공</strong>합니다. </p><p class="motion delay04" data-v-4837ccf5> 여기에 더불어 노르웨이에서는 연어 생산 과정에서 항생제 사용률을 현저히 줄였습니다.<br data-v-4837ccf5> 1987년부터 <strong data-v-4837ccf5>항생제 사용을 지양</strong>했으며, 감소 비율은 약 99%에 이릅니다.<br data-v-4837ccf5> 연어 1톤당 항생제는 0.14g만을 사용합니다. 현명한 전통 기법과<br data-v-4837ccf5> 현대 과학의 접근법이 어우러져 노르웨이 수산 양식의 바탕을 이루고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec5" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec5.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>호흡 방식의 변화</h3><p class="motion delay01" data-v-4837ccf5> 연어는 생애 일부는 민물에서 지내고, 남은 삶은<br data-v-4837ccf5> 염분이 있는 바닷물에서 살아가는 흥미로운 특징을 지녔습니다.<br data-v-4837ccf5> 바다에서 살되 민물에서 번식하기 때문에,<br data-v-4837ccf5> 연어는 산소를 받아들이는 방식을 바꿔야 합니다. </p><p class="motion delay02" data-v-4837ccf5> 민물고기로서 숨쉬고 생활하기 위해 연어는 특별한 능력을 지녔습니다.<br data-v-4837ccf5> 수천 년 넘게 연어는 아가미의 특정 세포에서 펌프질하는 방식을<br data-v-4837ccf5> 역으로 바꾸는 놀라운 능력을 진화 시켜 왔습니다.<br data-v-4837ccf5> 이렇게 놀라운 생리학적 능력은 <strong data-v-4837ccf5>‘삼투압 조절’</strong>이라 불리며,<br data-v-4837ccf5> 몇몇 종류의 생선만이 이런 기술을 사용합니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec6" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec6.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>노르웨이 연어<br data-v-4837ccf5>안심하고 먹어도 될까?</h3><p class="motion delay01" data-v-4837ccf5> 인공지능(AI)를 활용한 얼굴 인식 기술이 연어에게도 사용된다는<br data-v-4837ccf5> 사실, 알고 계셨나요? 사람마다 지문이 다르듯 <strong data-v-4837ccf5>연어는 얼굴에 있는</strong><br data-v-4837ccf5><strong data-v-4837ccf5>점의 분포 형태가 각자 다르다는 점</strong>을 이용하는 것인데요. </p><p class="motion delay02" data-v-4837ccf5> 연어가 부레의 부력을 조절하기 위해 수면으로 올라올 때<br data-v-4837ccf5> 3D 레이저 스캐너가 연어의 얼굴을 인식해 가상의 신분증을 만들고<br data-v-4837ccf5> 신원을 확인합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이는 <strong data-v-4837ccf5>최첨단 모니터링, 자동 사료 공급 시스템</strong>으로<br data-v-4837ccf5> 일관성 있는 맛과 품질의 연어를 공급합니다.<br data-v-4837ccf5> 노르웨이 연어는 해썹 <strong data-v-4837ccf5>(HACCP) 인증을 취득</strong>하여 한국 소비자들에게<br data-v-4837ccf5> 보다 안전하고 신선한 연어를 제공하기 위해 노력하고 있습니다. </p></div></div></div><div class="evt_wide_wrap p_evt_sec7" data-v-4837ccf5><div class="evt_section" data-v-4837ccf5><img src="https://shoppulmuone.cdn.ntruss.com/MALL/planshop/202304/0417_norwegian_salmon/img/p_evt_sec7.jpg" alt="" data-v-4837ccf5><div class="motion_box" data-v-4837ccf5><h3 class="motion" data-v-4837ccf5>착한 소비 실천</h3><p class="motion delay01" data-v-4837ccf5> 노르웨이 연어와 고등어는 소나 돼지 등 다른 단백질 공급원에 비해<br data-v-4837ccf5><strong data-v-4837ccf5>생산 과정에서 배출되는 탄소 발자국이 적습니다.</strong></p><p class="motion delay02" data-v-4837ccf5> 온실가스 배출에는 사료의 양이 큰 영향을 미치는데,<br data-v-4837ccf5> 노르웨이 연어는 1kg 생산에 1.15kg 사료만 필요합니다. </p><p class="motion delay03" data-v-4837ccf5> 또한 노르웨이 연어 양식장은 전체 면적의 2.5%만 연어로 유지,<br data-v-4837ccf5> 남은 97.5%는 물로 채워져 연어가 자유롭게 움직일 수 있도록<br data-v-4837ccf5><strong data-v-4837ccf5>충분한 공간을 확보한 채 운영</strong>됩니다. </p></div></div></div>',6),Z=[z,G,Y];function aa(a,t,c,s,e,n){return(0,o.uX)(),(0,o.CE)("main",R,[(0,o.Lk)("section",U,[(0,o.eW)((0,d.v_)(s.scriptInput.value)+" ",1),(0,o.Lk)("div",$,Z,512)])])}var ta={name:"AppJs",components:{},setup(){const a="노르웨이 기획전",t={value:a};return console.log(t.value),{scriptInput:t}},data(){return{options:{root:null,rootMargin:"0px",threshold:0},io:null,boxElList:[]}},mounted(){this.initIntersectionObserver(),this.observeBoxes()},methods:{initIntersectionObserver(){this.io=new IntersectionObserver((a=>{a.forEach((a=>{a.intersectionRatio>0?a.target.classList.add("active"):a.target.classList.remove("active"),console.log("entry:",a)}))}),this.options)},observeBoxes(){this.boxElList=this.$refs.motionBoxes.querySelectorAll(".motion"),this.boxElList.forEach((a=>{this.io.observe(a)}))}}};const ca=(0,j.A)(ta,[["render",aa],["__scopeId","data-v-4837ccf5"]]);var sa=ca;const oa=[{path:"/study/",name:"Index",component:K},{path:"/study/js",name:"Js",component:sa}],ea=(0,D.aE)({history:(0,D.LA)(),routes:oa});var na=ea;(0,s.Ef)(H).use(na).mount("#app")}},t={};function c(s){var o=t[s];if(void 0!==o)return o.exports;var e=t[s]={exports:{}};return a[s].call(e.exports,e,e.exports,c),e.exports}c.m=a,function(){var a=[];c.O=function(t,s,o,e){if(!s){var n=1/0;for(l=0;l<a.length;l++){s=a[l][0],o=a[l][1],e=a[l][2];for(var r=!0,d=0;d<s.length;d++)(!1&e||n>=e)&&Object.keys(c.O).every((function(a){return c.O[a](s[d])}))?s.splice(d--,1):(r=!1,e<n&&(n=e));if(r){a.splice(l--,1);var i=o();void 0!==i&&(t=i)}}return t}e=e||0;for(var l=a.length;l>0&&a[l-1][2]>e;l--)a[l]=a[l-1];a[l]=[s,o,e]}}(),function(){c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,{a:t}),t}}(),function(){c.d=function(a,t){for(var s in t)c.o(t,s)&&!c.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})}}(),function(){c.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};c.O.j=function(t){return 0===a[t]};var t=function(t,s){var o,e,n=s[0],r=s[1],d=s[2],i=0;if(n.some((function(t){return 0!==a[t]}))){for(o in r)c.o(r,o)&&(c.m[o]=r[o]);if(d)var l=d(c)}for(t&&t(s);i<n.length;i++)e=n[i],c.o(a,e)&&a[e]&&a[e][0](),a[e]=0;return c.O(l)},s=self["webpackChunkpulmuone"]=self["webpackChunkpulmuone"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=c.O(void 0,[504],(function(){return c(5068)}));s=c.O(s)})();
//# sourceMappingURL=app.bcb8c831.js.map