(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f68e551a"],{5273:function(t,s,i){"use strict";var a=i("d3d1"),e=i.n(a);e.a},a79c:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"cd_blocks"},[i("Section",{attrs:{id:"herointro",title:"中宏英豪项目介绍",icon:"title_heroinfo.png",bg:"grey"}},[i("div",{staticClass:"hero-intro"},[i("div",{staticClass:"intro-left"},[i("div",{staticClass:"intro-text"},[i("div",{staticClass:"text-1"},[t._v(" MSL HERO旨在发掘、激励并表彰时刻践行我们价值观的模范。“英雄不是从天而降，只因你我挺身而出。”他们可能来自中宏所有业务条线、职能部门或全国各地的分支机构，无论是直接面对客户的一线员工、营销员伙伴，还是为前线提供支持的中、后台部门，都有他们的身影。 ")]),i("div",{staticClass:"text-2"},[t._v(" 让我们一起来发现身边的MSL HERO！ ")])]),i("div",{staticClass:"intro-right mobile-view"},[i("img",{staticClass:"top-img",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/hero_logo.png"}}),i("img",{staticClass:"bottom-img",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/mslhero.png"}})]),i("div",{staticClass:"intro-tag"},[i("div",{staticClass:"tag tag-1"},[i("div",{staticClass:"title"},[i("span",{staticClass:"vertical-bar"}),i("span",{staticClass:"title-text"},[t._v("评选标准")])]),i("div",{staticClass:"text"},[t._v(" 立足自身岗位，沉淀积累并时刻践行“以客为先”，拥有杰出服务事迹，以身作则诠释“6条价值观”，为内、外部客户创造非凡价值与卓越体验，锐意创新、敢于突破、赋能他人、成就团队。 ")])]),i("div",{staticClass:"tag tag-2"},[i("div",{staticClass:"title"},[i("span",{staticClass:"vertical-bar"}),i("span",{staticClass:"title-text"},[t._v("奖项设置")])]),i("div",{staticClass:"text"},[i("div",[t._v("中宏英豪荣誉称号（20位)")]),i("div",[t._v("中宏英豪2020年度大奖（10位)")]),i("div",[t._v("中宏英豪提名奖（20位）")])])]),i("div",{staticClass:"tag tag-3"},[i("div",{staticClass:"title"},[i("span",{staticClass:"vertical-bar"}),i("span",{staticClass:"title-text"},[t._v("候选人")])]),i("div",{staticClass:"text"},[t._v(" 全体员工、营销员 ")])])])]),i("div",{staticClass:"intro-right desktop-view"},[i("img",{staticClass:"top-img",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/hero_logo.png"}}),i("img",{staticClass:"bottom-img",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/mslhero.png"}})])])])],1),i("div",{staticClass:"cd_blocks"},[i("Section",{attrs:{title:"2020中宏英豪",id:"heroes",icon:"title_zhhero.png"}},[i("div",[i("div",{staticClass:"itme-title"},[i("span",{staticClass:"heroes-line"}),i("span",{staticClass:"heroes-issue"},[t._v("2020年度大奖获得者 ")])]),i("div",{staticClass:"manulife-hero"},t._l(t.manulifeHeros,(function(s){return i("router-link",{key:s.chineseName,staticClass:"hero",attrs:{to:"/home/heroes/details/"+s.id}},[i("div",[s.img?i("img",{staticClass:"portrait",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/"+s.img}}):t._e(),i("div",{staticClass:"name"},[i("div",[t._v(t._s(s.chineseName))]),i("div",[t._v(t._s(s.englishName))])]),i("div",{staticClass:"division"},[i("div",[t._v(t._s(s.chineseDivisionName))]),i("div",[t._v(t._s(s.englishDivisionName))])]),i("div",{staticClass:"entry-time"},[t._v(" "+t._s(s.entryTime)+"年入职 ")]),i("div",{staticClass:"bottom-btn mobile-view"},[t._v("查看详情"),i("img",{attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/arrow_r_dark.png"}})])])])})),1)])])],1),i("div",{staticClass:"back-top",on:{click:function(s){return t.toTop()}}},[i("img",{attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/backtop.png"}})])])},e=[],n=i("d435"),o=i("9c89"),c={name:"Heroes ",components:{Section:n["a"]},props:{msg:String},data:function(){return{active:18,manulifeHeros:o["b"],manulifeHeros2:o["heroes2"]}},mounted:function(){for(var t=this,s=document.getElementsByClassName("cd_blocks"),i=.93,a=0;a<s.length;a++)s[a].getBoundingClientRect().top<=window.innerHeight*i&&s[a].classList.add("animated","fadeInUp","delay-06s");this.$route.query.to&&this.$nextTick((function(){document.querySelector("#".concat(t.$route.query.to)).scrollIntoView({behavior:"smooth"})}));window.addEventListener("scroll",(function(t){for(var a=0;a<s.length;a++)s[a].getBoundingClientRect().top<=window.innerHeight*i&&s[a].classList.add("animated","fadeInUp","delay-06s");var e=document.documentElement.scrollTop||document.body.scrollTop;e>320?document.querySelector(".back-top").classList.add("mobile-hide"):document.querySelector(".back-top").classList.remove("mobile-hide")}),!0)},methods:{toTop:function(){document.documentElement.scrollTop||document.body.scrollTop;document.querySelector(".main-header").scrollIntoView({behavior:"smooth"})}}},l=c,r=(i("5273"),i("2877")),d=Object(r["a"])(l,a,e,!1,null,"4017aaa6",null);s["default"]=d.exports},d3d1:function(t,s,i){},d435:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tabs-below-pt",class:{"bg-grey":"grey"===t.bg,"bg-white":"white"===t.bg}},[i("div",{staticClass:"section main-width"},[i("div",{staticClass:"section-header"},[i("img",{staticClass:"icon",attrs:{src:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/"+t.icon}})]),i("div",[t._t("default")],2)])])},e=[],n={name:"Section",props:{title:String,icon:{type:String,default:"http://mslpop3.oss-cn-hangzhou.aliyuncs.com/static/Branding/2020/ykwx/assets/bt_zhyhjs.png"},bg:{type:String,default:"white"}},data:function(){return{imgSrc:[{}]}}},o=n,c=i("2877"),l=Object(c["a"])(o,a,e,!1,null,"907db9b0",null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-f68e551a.7f0514e0.js.map