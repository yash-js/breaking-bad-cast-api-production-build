(this["webpackJsonpbreaking-bad-api"]=this["webpackJsonpbreaking-bad-api"]||[]).push([[0],{139:function(e,t,c){},450:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(3),r=c.n(a),i=c(17),s=c.n(i),j=c(73),d=c.n(j),o=c(131),l=c(31),b=(c(139),c.p+"static/media/logo.e6ecab44.png");var u=function(){return Object(n.jsx)("header",{className:"center",children:Object(n.jsx)("img",{src:b,alt:""})})},h=c(132),O=c.n(h),x=c.p+"static/media/spinner.11d9cde8.gif";var g=function(){return Object(n.jsx)("img",{src:x,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})};var m=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:t.img,alt:""})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Actor Name: "})," ",t.portrayed]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Nickname: "})," ",t.nickname]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Birthday: "})," ",t.birthday]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Status: "})," ",t.status]})]})]})]})})};var p=function(e){var t=e.items;return e.isLoading?Object(n.jsx)(g,{}):Object(n.jsx)("section",{className:"cards",children:t.map((function(e){return Object(n.jsx)(m,{item:e},e.char_id)}))})};c(156);var f=function(e){var t=e.getQuery,c=Object(a.useState)(""),r=Object(l.a)(c,2),i=r[0],s=r[1];return Object(n.jsx)("section",{className:"search",children:Object(n.jsx)("form",{action:"",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Character",value:i,onChange:function(e){return c=e.target.value,s(c),void t(c);var c}})})})};var v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(!0),s=Object(l.a)(i,2),j=s[0],b=s[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),g=x[0],m=x[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()(g.length<1?"https://www.breakingbadapi.com/api/characters":"https://www.breakingbadapi.com/api/characters?name=".concat(g));case 2:t=e.sent,r(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(u,{}),Object(n.jsx)("p",{style:{color:"white",textAlign:"center",fontWeight:"800",padding:"35px"},children:"Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan."}),Object(n.jsx)(f,{getQuery:function(e){return m(e)}}),Object(n.jsx)("em",{style:{textAlign:"center",paddingBottom:"20px"},children:"Breaking Bad's cast and their info is listed below"}),Object(n.jsx)(p,{isLoading:j,items:c})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,451)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),k()}},[[450,1,2]]]);
//# sourceMappingURL=main.4a000ee4.chunk.js.map