(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2118be50":"60173b0e","chunk-22ce2100":"0495055b","chunk-2d0f04c1":"9e2fdc05","chunk-29e27c20":"d10069db","chunk-8f7c9d0e":"9203abfe","chunk-39e2dabb":"933561b7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2118be50":1,"chunk-22ce2100":1,"chunk-29e27c20":1,"chunk-8f7c9d0e":1,"chunk-39e2dabb":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2118be50":"27271d1f","chunk-22ce2100":"5b5b53ab","chunk-2d0f04c1":"31d6cfe0","chunk-29e27c20":"918da46b","chunk-8f7c9d0e":"617aff64","chunk-39e2dabb":"2d9a82c2"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0357":function(e,t,n){},"28c4":function(e,t,n){},3314:function(e,t,n){"use strict";var r=n("28c4"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-grey",attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App",watch:{$route:function(e,t){document.documentElement.scrollTop=0,document.body.scrollTop=0,window.scroll(0,0),window.document.title=e.meta.title,this.$vux.alert.hide()}}},i=c,s=(n("034f"),n("2877")),u=Object(s["a"])(i,a,o,!1,null,null,null),l=u.exports,f=(n("8540"),n("f122"),n("0357"),n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"filler-header"},[n("div",{staticClass:"main-header"},[n("div",{staticClass:"text-area main-width"},[e._m(0),n("div",{staticClass:"tabs"},[n("router-link",{staticClass:"tab tab-customer-first",attrs:{to:"/home/timeline"}},[e._v("以客为先大事件")]),n("router-link",{staticClass:"tab tab-recommendation",attrs:{to:"/home/nps"}},[e._v("净推荐体系")]),n("router-link",{staticClass:"tab tab-hero",attrs:{to:"/home/heroes"}},[e._v("中宏英豪")]),n("router-link",{staticClass:"tab tab-grateful",attrs:{to:"/home/grateful"}},[e._v("感恩有你")])],1)])])]),n("div",{staticClass:"tab_moblie"},[n("router-link",{staticClass:"tab tab-customer-first",attrs:{to:"/home/timeline"}},[n("span",[e._v("以客为先大事件")])]),n("router-link",{staticClass:"tab tab-recommendation",attrs:{to:"/home/nps"}},[n("span",[e._v("净推荐体系")])]),n("router-link",{staticClass:"tab tab-hero",attrs:{to:"/home/heroes"}},[n("span",[e._v("中宏英豪")])]),n("router-link",{staticClass:"tab tab-grateful",attrs:{to:"/home/grateful"}},[n("span",[e._v("感恩有你")])])],1),n("router-view"),e._m(1)],1)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"header-logo",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/topbg_mobile@3x.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-footer"},[n("div",{staticClass:"main-width footer-desc"},[e._v("© 2020 中宏保险版权所有")])])}],m={name:"MainComponent",props:{msg:String},data:function(){return{facultyOptions:[]}},methods:{}},p=m,b=(n("3314"),Object(s["a"])(p,d,h,!1,null,"38de2393",null)),v=b.exports;r["a"].use(f["a"]);var g=[{path:"/",redirect:"/home/timeline"},{path:"/home",component:v,children:[{path:"timeline",name:"timeline",component:function(){return n.e("chunk-22ce2100").then(n.bind(null,"396e"))},meta:{title:"以客为先·秋季分享"}},{path:"nps",name:"nps",component:function(){return n.e("chunk-2118be50").then(n.bind(null,"715a"))},meta:{title:"以客为先·秋季分享"}},{path:"heroes",name:"heroes",component:function(){return Promise.all([n.e("chunk-2d0f04c1"),n.e("chunk-29e27c20")]).then(n.bind(null,"a79c"))},meta:{title:"以客为先·秋季分享"}},{path:"grateful",name:"grateful",component:function(){return n.e("chunk-39e2dabb").then(n.bind(null,"10a3"))},meta:{title:"以客为先·秋季分享"}},{path:"heroes/details/:id",name:"details",component:function(){return Promise.all([n.e("chunk-2d0f04c1"),n.e("chunk-8f7c9d0e")]).then(n.bind(null,"ce2f"))},meta:{title:"详情"}}]}],k=function(){return new f["a"]({scrollBehavior:function(){return{y:0}},routes:g})},y=k();var _=y;n("dfa4");r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(l)}}).$mount("#app")},8540:function(e,t,n){},"85ec":function(e,t,n){},f122:function(e,t,n){}});
//# sourceMappingURL=app.704958ec.js.map