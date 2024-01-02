"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[909],{909:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,o,c,s,i,u,p,l,d,h,x,f,v=t(861),g=t(439),m=t(757),b=t.n(m),j=t(789),w=t(791),Z=t(689),y=t(87),k=t(834),E=t(168),z=t(924),_=z.zo.div(r||(r=(0,E.Z)(["\npadding: 30px 0;\n    display:flex;\n    align-items: center;\n    gap: 40px;\n"]))),D=z.zo.img(a||(a=(0,E.Z)(["\n    width: 300px;\n    height: 450px;\n    border-radius: 6px;\n"]))),B=z.zo.div(o||(o=(0,E.Z)(["\n   \n"]))),A=z.zo.h2(c||(c=(0,E.Z)(["\n    margin-bottom: 30px;\n    font-size: 32px;\n"]))),R=z.zo.p(s||(s=(0,E.Z)(["\n    color: #fff;  \n    margin-bottom: 20px;\n    font-weight: 600;\n"]))),S=z.zo.span(i||(i=(0,E.Z)(["\n    color:  #BDEEE4;\n    font-weight: 400;\n"]))),C=z.zo.span(u||(u=(0,E.Z)(["\ncolor:  #BDEEE4;\nfont-weight: 400;\npadding-right: 6px;\n"]))),M=t(184),O=function(n){var e=n.original_title,t=n.release_date,r=n.overview,a=n.genres,o=n.poster_path,c=Array.isArray(a)?a:[],s="";return s=o?"https://image.tmdb.org/t/p/w300".concat(o):"https://via.placeholder.com/300x450",(0,M.jsx)(k.Z,{children:(0,M.jsxs)(_,{children:[(0,M.jsx)(D,{src:s,loading:"lazy",alt:e}),(0,M.jsxs)(B,{children:[(0,M.jsx)(A,{children:e}),(0,M.jsxs)(R,{children:["Release date ",(0,M.jsx)("br",{}),(0,M.jsx)(S,{children:t})]}),(0,M.jsxs)(R,{children:["Overview  ",(0,M.jsx)("br",{}),(0,M.jsxs)(S,{children:[" ",r]})]}),(0,M.jsxs)(R,{children:[" Genres ",(0,M.jsx)("br",{}),c.map((function(n){return(0,M.jsx)(C,{children:n.name},n.id)}))]})]})]})})},U=z.zo.button(p||(p=(0,E.Z)(["\nbackground-color: inherit;\nfont-weight: 600;\nborder: none;\npadding-bottom: 3px;\nborder-bottom: 1px solid #BDEEE4;\ncolor: #BDEEE4;\ntransition: color 0.3s ease, border0.3s ease;\n    &:hover{\n        color: #1DAB91;\n        border-bottom: 1px solid #1DAB91;\n    }\n"]))),G=function(){return(0,M.jsx)(U,{children:"< Go back"})},H=t(454),I=z.zo.section(l||(l=(0,E.Z)(["\n    width: 100%;\n    background-color: #314049;\n    margin-top: 20px;\n"]))),L=z.zo.div(d||(d=(0,E.Z)(["\n    margin-top: 135px;\n"]))),W=z.zo.div(h||(h=(0,E.Z)(["\n    display: flex;\n    gap: 20px;\n    padding: 20px 0;\n"]))),q=(0,z.zo)(y.OL)(x||(x=(0,E.Z)(["\n    font-weight: 600;\n    color: #BDEEE4;\n    border-bottom: 1px solid #BDEEE4;\n    padding-bottom:3px;\n    transition: color 0.3s ease, border-color 0.3s ease ;\n       \n    &:hover{\n        border-color:#1DAB91;\n        color: #1DAB91;\n    }\n"]))),F=z.zo.h2(f||(f=(0,E.Z)(["\n    text-align: center;\n    font-size: 38px;\n    padding: 30px 0;\n"]))),P=(0,w.lazy)((function(){return t.e(792).then(t.bind(t,792))})),T=(0,w.lazy)((function(){return t.e(32).then(t.bind(t,32))})),V=function(){var n,e,t=(0,Z.UO)().movieId,r=(0,w.useState)({}),a=(0,g.Z)(r,2),o=a[0],c=a[1],s=(0,w.useState)(!1),i=(0,g.Z)(s,2),u=i[0],p=i[1];(0,w.useEffect)((function(){p(!0);var n=function(){var n=(0,v.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,j.Mc)(t);case 5:e=n.sent,c(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.error("Error fetching data:",n.t0);case 12:return n.prev=12,p(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);var l=(0,Z.TH)(),d=(0,w.useRef)(null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k.Z,{children:(0,M.jsx)(L,{children:(0,M.jsx)(y.rU,{to:d.current,children:(0,M.jsx)(G,{})})})}),(0,M.jsxs)(I,{children:[u&&(0,M.jsx)(H.Z,{}),o?(0,M.jsx)(O,{original_title:o.original_title,poster_path:o.poster_path,release_date:o.release_date,overview:o.overview,genres:o.genres}):(0,M.jsx)(F,{children:" Movie not found! "})]}),o&&(0,M.jsx)(k.Z,{children:(0,M.jsxs)(W,{children:[(0,M.jsx)(q,{to:"cast",children:"Cast"}),(0,M.jsx)(q,{to:"reviews",children:"Reviews"})]})}),(0,M.jsx)(w.Suspense,{fallback:(0,M.jsx)(H.Z,{}),children:(0,M.jsxs)(Z.Z5,{children:[(0,M.jsx)(Z.AW,{path:"cast",element:(0,M.jsx)(P,{})}),(0,M.jsx)(Z.AW,{path:"reviews",element:(0,M.jsx)(T,{})})]})})]})}},789:function(n,e,t){t.d(e,{E3:function(){return f},IV:function(){return g},Mc:function(){return h},sD:function(){return l},wH:function(){return b}});var r=t(861),a=t(757),o=t.n(a),c=t(340),s="https://api.themoviedb.org/3",i="/trending",u="ff7af564ffcf2b7c2ca4fa26aeda6360",p=new URLSearchParams({api_key:u,page:1});function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,p.page=e,n.prev=2,n.next=5,c.Z.get("".concat(s).concat(i,"/all/day?").concat(p));case 5:return t=n.sent,n.next=8,t.data;case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[2,12]])}))),d.apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/search/movie?query=").concat(e,"&").concat(p));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function b(n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=909.d159bf0f.chunk.js.map