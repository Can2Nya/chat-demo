(function(t){function e(e){for(var a,c,o=e[0],s=e[1],u=e[2],f=0,d=[];f<o.length;f++)c=o[f],r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},2567:function(t,e,n){"use strict";var a=n("6694"),r=n.n(a);r.a},3954:function(t,e,n){},"51e8":function(t,e,n){"use strict";var a=n("3954"),r=n.n(a);r.a},"64a9":function(t,e,n){},6694:function(t,e,n){},"974e":function(t,e,n){"use strict";var a=n("a817"),r=n.n(a);r.a},a817:function(t,e,n){},ad93:function(t,e,n){},b0b6:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Chat",{staticClass:"full-layout"})],1)},i=[],c=n("d225"),o=n("308d"),s=n("6bb5"),u=n("4e2b"),l=n("9ab4"),f=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{text:"Simple Chat"}}),n("div",{staticClass:"content"},[t._l(t.chatList,function(e,a,r){return[n("div",{key:a+"time",staticClass:"center"},[t.isTimeHide(e,r)?t._e():n("Time",{attrs:{timestamp:e.time}})],1),n("MassageItem",{key:a,attrs:{name:e.name,msg:e.text,avatarUrl:e.avatar,direction:"Me"===e.name?"right":"left",hideInfo:t.isHide(e,r)}})]})],2),n("div",{staticClass:"foot"},[n("InputItem",{on:{send:t.insertMsg}})],1)],1)},v=[],p=(n("7f7f"),n("a4bb")),m=n.n(p),h=(n("c5f6"),n("b0b4")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[t._v("\n  "+t._s(t.text)+"\n")])},g=[],j=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["d"]);l["a"]([Object(f["c"])()],j.prototype,"text",void 0),j=l["a"]([f["a"]],j);var O=j,y=O,_=(n("51e8"),n("2877")),M=Object(_["a"])(y,b,g,!1,null,"6e977ca4",null),x=M.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{direction:t.direction,hide:t.hideInfo}},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"avatar-main",attrs:{src:t.avatarUrl}})]),n("div",{staticClass:"msg"},[n("div",{staticClass:"msg-main"},[t.hideInfo?t._e():n("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v("\n      "+t._s(t.msg)+"\n    ")])])])},w=[],C=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["d"]);l["a"]([Object(f["c"])({required:!0})],C.prototype,"name",void 0),l["a"]([Object(f["c"])({required:!0})],C.prototype,"msg",void 0),l["a"]([Object(f["c"])({required:!0})],C.prototype,"avatarUrl",void 0),l["a"]([Object(f["c"])({type:String,default:"left",validator:function(t){return-1!==["left","right"].indexOf(t)}})],C.prototype,"direction",void 0),l["a"]([Object(f["c"])({type:Boolean,default:!1})],C.prototype,"hideInfo",void 0),C=l["a"]([f["a"]],C);var T=C,I=T,S=(n("974e"),Object(_["a"])(I,k,w,!1,null,"0253f48a",null)),L=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("button",{on:{click:t.sendMsg}},[t._v("Send")])])},D=[],H=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.msg="",t}return Object(u["a"])(e,t),Object(h["a"])(e,[{key:"sendMsg",value:function(){var t={avatar:"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",name:"Me",text:this.msg,time:"".concat(Math.round((new Date).getTime()/1e3))};return this.msg="",t}}]),e}(f["d"]);l["a"]([Object(f["b"])("send")],H.prototype,"sendMsg",null),H=l["a"]([f["a"]],H);var P=H,N=P,E=(n("de3d"),Object(_["a"])(N,$,D,!1,null,"37e1bdf8",null)),q=E.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time"},[t._v(t._s(t.dcriseTime))])},U=[],V=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(h["a"])(e,[{key:"getTime",value:function(t){var e;return e=t?new Date(1e3*Number(t)):new Date,{year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),fullDate:e}}},{key:"dcriseTime",get:function(){var t=this.getTime(this.timestamp),e=this.getTime();return e.year-t.year>=1?"".concat(t.fullDate.toLocaleDateString()," ").concat(t.hour,":").concat(t.minute):"".concat(t.hour,":").concat(t.minute)}}]),e}(f["d"]);l["a"]([Object(f["c"])({type:[String,Number],required:!0,validator:function(t){var e=Number(t);return new Date(1e3*e).getTime()>0}})],V.prototype,"timestamp",void 0),V=l["a"]([f["a"]],V);var B=V,F=B,Y=(n("f81c"),Object(_["a"])(F,J,U,!1,null,"39265139",null)),z=Y.exports,A=n("bc3a"),G=n.n(A),K="https://kangroo-557b2.firebaseio.com/",Q={get:function(t){return G.a.get(K+t.action).then(function(t){return console.log(t),t.data}).catch(function(t){return console.log("【axios获取信息失败，Content.vue】：".concat(t)),{err:t}})}},R=Q,W=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.chatList={},t}return Object(u["a"])(e,t),Object(h["a"])(e,[{key:"created",value:function(){var t=this;R.get({action:"fe-chat-test.json"}).then(function(e){t.chatList=e,t.randomMsg(),console.log(e)})}},{key:"compareMin",value:function(t,e){var n=1e3*Number(t),a=1e3*Number(e);return Math.floor((a-n)/6e4)}},{key:"isHide",value:function(t,e){var n=m()(this.chatList)[e+1],a=this.chatList[n];return!!a&&(!(this.compareMin(t.time,a.time)>=5)&&t.name===a.name)}},{key:"isTimeHide",value:function(t,e){var n=m()(this.chatList)[e-1],a=this.chatList[n];return!!a&&!(this.compareMin(a.time,t.time)>=5)}},{key:"insertMsg",value:function(t){var e=this;this.$set(this.chatList,"-LP6J5-pxvCe6Nl7IM9w".concat(t.time),t),this.$nextTick(function(){var t=e.$el.querySelector(".content");t&&(t.scrollTop=t.scrollHeight)})}},{key:"randomMsg",value:function(){var t=this;setInterval(function(){var e={avatar:"https://vuejs.org/images/logo.png",name:"Vue",text:"Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.",time:"".concat(Math.round((new Date).getTime()/1e3))};t.insertMsg(e)},5e3)}}]),e}(f["d"]);W=l["a"]([Object(f["a"])({components:{Header:x,MassageItem:L,InputItem:q,Time:z}})],W);var X=W,Z=X,tt=(n("2567"),Object(_["a"])(Z,d,v,!1,null,"21c0f1bc",null)),et=tt.exports,nt=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["d"]);nt=l["a"]([Object(f["a"])({components:{Chat:et}})],nt);var at=nt,rt=at,it=(n("034f"),Object(_["a"])(rt,r,i,!1,null,null,null)),ct=it.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(ct)}}).$mount("#app")},de3d:function(t,e,n){"use strict";var a=n("ad93"),r=n.n(a);r.a},f81c:function(t,e,n){"use strict";var a=n("b0b6"),r=n.n(a);r.a}});
//# sourceMappingURL=app.62bbcc47.js.map