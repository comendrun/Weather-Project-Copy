(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=(a(14),a(6)),s=a(1),l=a(3),u=a.n(l);a(16);function m(e){return u.a.createPortal(c.a.createElement("footer",{className:"attribution"},e.children),document.body)}function p(e){var t=e.onClick;return c.a.createElement("button",{type:"button",className:"hide-button",onClick:t},"Hide Backdrop")}a(18);function d(e){return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{placeholder:"Enter City Name ...",className:"input",id:"search",value:e.value,onChange:function(t){return e.onChange(t)},name:e.query,onKeyPress:e.search}),c.a.createElement("button",{onClick:function(t){return e.searchButtonClick(t)}},c.a.createElement("i",{className:"fa-solid fa-magnifying-glass-location fa-2xl"})))}a(20).config();var h=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),l=Object(s.a)(o,2),u=l[0],h=l[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),g=b[0],E=b[1],y=Object(n.useState)(null),v=Object(s.a)(y,2),w=v[0],N=v[1],k=Object(n.useState)(!1),j=Object(s.a)(k,2),O=j[0],x=j[1],C=Object(n.useState)(!1),M=Object(s.a)(C,2),S=M[0],z=M[1],J=new Date,q=["January","February","March","April","May","June","July","August","September","October","November","December"][J.getMonth()],H="https://weather-app-servers.herokuapp.com/unsplash?query=".concat(a),A="https://weather-app-servers.herokuapp.com/weather?q=".concat(a),B=function(){N(null);try{fetch(A).then(function(e){return e.json()}).then(function(e){200===e.cod?h(e):(N(e.message),h({}))})}catch(e){console.log(e)}fetch(H).then(function(e){return e.json()}).then(function(e){E(e)}),r("")},D="undefined"!==typeof u.main&&g?{backgroundImage:"url(".concat(g,")")}:{backgroundImage:"url('https://images.unsplash.com/photo-1572787514629-72872e4fc123?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjIzNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTA4MzczMjU&ixlib=rb-1.2.1&q=85')"},I=Object(i.a)({},D,{backgroundSize:"cover",backgroundPosition:"top",maxWidth:"100%",borderRadius:"15px",backgroundRepeat:"no-repeat"});return c.a.createElement("div",{className:"whole-page"},c.a.createElement("div",{className:"App",style:I},c.a.createElement(d,{onChange:function(e){r(e.target.value)},query:a,search:function(e){"Enter"===e.key&&(x(!0),B(),x(!1))},searchButtonClick:B,value:a}),O&&c.a.createElement("p",{className:"pending"},"Please wait..."),w&&c.a.createElement("p",{className:"error"},w),"undefined"!==typeof u.main?c.a.createElement("div",{className:"undefined"!==typeof u.main?"container show":"container not-show"},c.a.createElement("div",{className:"location-info"},c.a.createElement("div",{className:"info city"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"info date"},"".concat(J.getDate(),". ").concat(q,"  ").concat(J.getFullYear()))),c.a.createElement("div",{className:"weather-info ".concat(S?"hide":"")},c.a.createElement("div",{className:"info degree"},Math.round(u.main.temp),"\xb0C"),c.a.createElement("div",{className:"info sky"},u.weather[0].main),c.a.createElement("img",{className:"weather-icon",src:"http://openweathermap.org/img/wn/".concat(u.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("div",{className:"info sky-description"},u.weather[0].description),c.a.createElement(p,{onClick:function(){return z(function(e){return!e})}}))):"",c.a.createElement(m,null,c.a.createElement("p",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://comendrun.com",className:"github-link"},"comendrun@",J.getFullYear())))))};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(h,null))},7:function(e,t,a){e.exports=a(24)}},[[7,2,1]]]);
//# sourceMappingURL=main.8779e6c0.chunk.js.map