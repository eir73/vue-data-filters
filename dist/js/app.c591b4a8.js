(function(e){function t(t){for(var s,c,a=t[0],o=t[1],u=t[2],d=0,h=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,a=1;a<r.length;a++){var o=r[a];0!==n[o]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var s={},n={app:0},i=[];function c(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=s,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(r,s,function(t){return e[t]}.bind(null,s));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-data-filters/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},i=[],c=r("2877"),a={},o=Object(c["a"])(a,n,i,!1,null,null,null),u=o.exports,l=r("9483");Object(l["a"])("".concat("/vue-data-filters/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",{staticClass:"header"},[r("a",{staticClass:"h--menu-link",attrs:{href:"#"},on:{click:e.toggleMenu}},[e._v(" Меню ")])]),r("div",{attrs:{id:"app"}},[r("div",{staticClass:"row"},[r("Sidebar",{ref:"menu",attrs:{categories:e.categories,types:e.types},on:{themeClick:e.filterThemes,checkClick:e.filterChecks}}),r("div",{staticClass:"m--content col"},[r("div",{staticClass:"m--section-top d-flex justify-content-between"},[r("h1",{staticClass:"m--heading"},[e._v(e._s(e._f("category")(e.currentTheme)))]),r("div",{staticClass:"m--tools d-flex"},[r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"search"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})]),r("div",{on:{click:e.setGridView}}),r("div",{on:{click:e.setListView}})])]),e.typesVideos.length?r("div",{key:e.isGrid,staticClass:"m--videos d-flex",class:{grid:e.isGrid}},e._l(e.typesVideos,(function(e){return r("Video",{key:e.id,attrs:{video:e}})})),1):r("div",[r("p",[e._v("На жаль, відеозаписи не знайдено")])])])],1)])])},f=[],p=(r("4160"),r("caad"),r("4fad"),r("2532"),r("159b"),r("96cf"),r("1da1")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"sidebar col col-3"},[r("div",{staticClass:"s--controls",class:{active:e.videoActive}},[r("div",{on:{click:e.toggleVideo}},[r("img",{attrs:{src:"./img/icons/controls-video.png",alt:""}}),e._v(" Відео "),r("i",{staticClass:"fa",class:{"fa-chevron-right":!e.videoActive,"fa-chevron-down":e.videoActive}})]),r("form",e._l(e.types,(function(t){return r("div",{key:t[0]},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checks[""+t[0]],expression:"checks[`${entry[0]}`]"}],attrs:{type:"checkbox",name:"video",id:t[0],disabled:!t[1]},domProps:{checked:Array.isArray(e.checks[""+t[0]])?e._i(e.checks[""+t[0]],null)>-1:e.checks[""+t[0]]},on:{change:function(r){var s=e.checks[""+t[0]],n=r.target,i=!!n.checked;if(Array.isArray(s)){var c=null,a=e._i(s,c);n.checked?a<0&&e.$set(e.checks,""+t[0],s.concat([c])):a>-1&&e.$set(e.checks,""+t[0],s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.checks,""+t[0],i)}}}),r("label",{attrs:{for:t[0]}},[e._v(" "+e._s(e._f("category")(t[0]))+" ("+e._s(t[1])+") ")]),e._v(" "),r("br")])})),0)]),r("div",{staticClass:"s--controls",class:{active:e.themesActive}},[r("div",{on:{click:e.toggleThemes}},[r("img",{attrs:{src:"./img/icons/controls-themes.png",alt:""}}),e._v(" Теми "),r("i",{staticClass:"fa",class:{"fa-chevron-right":!e.themesActive,"fa-chevron-down":e.themesActive}})]),r("div",{staticClass:"s--themes"},[r("p",{staticClass:"s--category",on:{click:function(t){return e.showTheme("all")}}},[e._v(" Всі теми ("+e._s(e.catLength)+") ")]),e._l(e.categories,(function(t){return r("p",{key:t[0],staticClass:"s--category",on:{click:function(r){return e.showTheme(t[0])}}},[e._v(" "+e._s(e._f("category")(t[0]))+" ("+e._s(t[1])+") ")])}))],2)])])},m=[],g=r("b85c"),w={props:["categories","types"],data:function(){return{videoActive:!0,themesActive:!0,checks:{discount:!1,popular:!1,nevv:!1}}},watch:{checks:{deep:!0,handler:function(){this.$emit("checkClick",this.checks)}}},methods:{toggleVideo:function(){this.videoActive=!this.videoActive},toggleThemes:function(){this.themesActive=!this.themesActive},hideVideo:function(){this.videoActive=!1},hideThemes:function(){this.themesActive=!1},showTheme:function(e){this.$emit("themeClick",e)}},computed:{catLength:function(){var e,t=0,r=Object(g["a"])(this.categories);try{for(r.s();!(e=r.n()).done;){var s=e.value;t+=s[1]}}catch(n){r.e(n)}finally{r.f()}return t}}},y=w,b=Object(c["a"])(y,v,m,!1,null,null,null),k=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m--videowr",class:{grid:e.isGrid}},[r("div",{staticClass:"m--video"},[r("div",{staticClass:"m--imgwr"},[r("img",{attrs:{src:""+e.video.covers.main,alt:""}})]),r("div",{staticClass:"m--textwr d-flex"},[r("p",{staticClass:"m--title",domProps:{innerHTML:e._s(e.video.title)}}),r("a",{staticClass:"m--link",class:{buy:e.video.access,watch:!e.video.access},attrs:{href:e.video.options.link}},[e._v(" "+e._s(e.video.access?"Придбати":"Дивитися")+" "),e._m(0)])])])])},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("i",{staticClass:"fa fa-chevron-right"})])}],C={props:["video","isGrid"]},V=C,j=Object(c["a"])(V,_,x,!1,null,null,null),O=j.exports,T={data:function(){return{data:[],isGrid:!0,categories:[],videos:[],typesVideos:[],searchedVideos:[],currentTheme:"all",searchText:"",menuIsExpanded:!1}},watch:{searchText:function(){var e=this;this.typesVideos=this.searchedVideos.filter((function(t){return t.title.includes(e.searchText)}))}},methods:{setGridView:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setGrid",!0);case 2:e.isGrid=t.sent;case 3:case"end":return t.stop()}}),t)})))()},setListView:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setGrid",!1);case 2:e.isGrid=t.sent;case 3:case"end":return t.stop()}}),t)})))()},toggleMenu:function(){this.$refs.menu.$el.style.left=this.menuIsExpanded?"-100%":"0",this.menuIsExpanded=!this.menuIsExpanded},filterThemes:function(e){screen.width<607&&this.toggleMenu(),this.currentTheme=e,"all"!==e?(this.typesVideos=this.data.filter((function(t){return t.theme===e})),this.videos=this.typesVideos,this.searchedVideos=this.typesVideos):this.typesVideos=this.data},filterChecks:function(e){screen.width<607&&this.toggleMenu(),this.typesVideos=this.videos.filter((function(t){return e.discount?t.options.sale:e.popular?t.options.popular:!e.nevv||7===new Date(t.date).getMonth()})),this.searchedVideos=this.typesVideos}},computed:{types:function(){return[["discount",this.typesVideos.filter((function(e){return e.options.sale})).length],["popular",this.typesVideos.filter((function(e){return e.options.popular})).length],["nevv",this.typesVideos.filter((function(e){return 7===new Date(e.date).getMonth()})).length]]}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchData");case 2:return e.data=t.sent,e.typesVideos=e.data,e.videos=e.data,e.searchedVideos=e.data,t.next=8,e.$store.dispatch("fetchView");case 8:e.isGrid=t.sent,e.data.forEach((function(t){e.categories[t.theme]=e.categories[t.theme]+1||1})),e.categories=Object.entries(e.categories);case 11:case"end":return t.stop()}}),t)})))()},components:{Sidebar:k,Video:O}},A=T,$=(r("de63"),Object(c["a"])(A,h,f,!1,null,"251d7aed",null)),G=$.exports;s["a"].use(d["a"]);var E=[{path:"/",name:"Home",component:G}],M=new d["a"]({mode:"history",base:"/vue-data-filters/",routes:E}),S=M,P=r("8468"),R=r("2f62"),I=r("bc3a"),L=r.n(I);s["a"].use(R["a"]);var N=new R["a"].Store({state:{},mutations:{},actions:{fetchData:function(){return Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("./state/data.json");case 3:return t=e.sent.data,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchView:function(){return Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("view"),e.abrupt("return","false"!==t);case 5:throw e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},setGrid:function(e,t){return Object(P["a"])(e),localStorage.setItem("view",t),t}},modules:{}});r("99af"),r("a15b"),r("a434"),r("ac1f"),r("1276");function D(e){return e.length>59?e.split("").splice(0,59).join("").concat("..."):e}function F(e){switch(e){case"business_trips":return"Відрядження";case"currency":return"Валюта";case"production":return"Виробництво і собівартість";case"vacation":return"Відпустки";case"excise_tax":return"Акцизний податок";case"all":return"Усі відео";case"popular":return"Популярні";case"discount":return"Акція";case"nevv":return"Новинки";default:return"Помилка"}}s["a"].config.productionTip=!1,s["a"].filter("title",D),s["a"].filter("category",F),new s["a"]({router:S,store:N,render:function(e){return e(u)}}).$mount("#app")},"6ce4":function(e,t,r){},de63:function(e,t,r){"use strict";var s=r("6ce4"),n=r.n(s);n.a}});
//# sourceMappingURL=app.c591b4a8.js.map