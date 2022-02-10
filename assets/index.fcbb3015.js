var C=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var y=(t,n)=>{var a={};for(var i in t)B.call(t,i)&&n.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&C)for(var i of C(t))n.indexOf(i)<0&&v.call(t,i)&&(a[i]=t[i]);return a};import{u as x,j as e,F as m,s as E,P as l,C as h,a as u,G as o,B as d,T as c,b as A,E as k,I as F,c as L,L as S,d as j,e as b,f as I,D,g as w,h as P,i as T,k as R,l as N,R as M,m as H}from"./vendor.52d64d7c.js";const G=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};G();const J=t=>(x({disableHysteresis:!0,threshold:0}),e(m,{children:t.children})),O=E("div")(t=>({width:200,height:200,margin:"auto",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:16,backgroundImage:`url('${t.image}')`})),W=t=>{const{offset:n}=t;return e(l,{offset:n,speed:.5,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(h,{children:u(o,{container:!0,justifyContent:"center",alignItems:"center",flexWrap:"wrap",spacing:{xs:2,lg:2},children:[e(o,{item:!0,xs:12,lg:4,children:e(O,{image:"https://mui.com/static/images/avatar/1.jpg"})}),u(o,{item:!0,xs:12,lg:6,children:[u(d,{children:[e(c,{variant:"h2",sx:{fontWeight:"600"},children:"\u88FD\u4F5C\u4E2D...."}),e(c,{variant:"h2",sx:{fontWeight:"600"},children:"\u738B\u8C6A\u9038"}),e(c,{variant:"h5",children:"Hao-Yi, Wang"})]}),e(d,{sx:{pt:2},children:e(c,{variant:"body1",children:"\u9577\u671F\u7814\u7A76\u6295\u8CC7\u5E02\u5834\u52D5\u614B\uFF0C\u900F\u904E\u5FC3\u7406\u5B78\u80CC\u666F\u89E3\u91CB\u7576\u524D\u5FC3\u7406\u9762\uFF0C\u642D\u914D\u7D71\u8A08\u80CC\u666F\u89C0\u5BDF\u6280\u8853\u7C4C\u78BC\u3002"})}),u(d,{sx:{pt:3},children:[e(A,{color:"inherit",startIcon:e(k,{}),sx:{textTransform:"none"},children:"ms0407954@gmail.com"}),u(d,{children:[e(F,{target:"_blank",href:"https://github.com/strongball",children:e(L,{})}),e(F,{target:"_blank",href:"https://www.linkedin.com/in/strongball/",children:e(S,{})})]})]})]})]})})})},g=t=>{const r=t,{title:n,techs:a}=r,i=y(r,["title","techs"]);return u(j,{variant:"outlined",sx:{height:"100%",background:"rgba(255,255,255,.55)"},children:[e(b,{children:e(c,{variant:"h5",children:n})}),e(b,{children:a.map(s=>e(I,{label:s,sx:{mr:1,mb:1}},s))})]})},q=t=>{const{offset:n}=t;return u(m,{children:[u(l,{speed:-.2,offset:n,children:[u("svg",{viewBox:"0 0 800 100",preserveAspectRatio:"none",fill:"#87BCDE",children:[e("path",{opacity:.5,d:"M0.00,30.00 C100.00,100.00 349.20,-50.00 800.00,50.00 L800.00,100.00 L0.00,100.00 Z"}),e("path",{opacity:1,d:"M0.00,50.00 C100.00,130.00 349.20,-30.00 800.00,50.00 L800.00,100.00 L0.00,100.00 Z"})]}),e("div",{style:{width:"100%",height:"100%",marginTop:-10,background:"#87BCDE"}})]}),e(l,{offset:n,speed:.5,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:u(h,{children:[e(d,{children:e(c,{variant:"h2",children:"SKILL"})}),e(D,{sx:{mb:2}}),u(o,{container:!0,spacing:2,children:[e(o,{item:!0,xs:12,sm:4,children:e(g,{title:"\u7A0B\u5F0F\u8A9E\u8A00",techs:["JavaScript","TypeScript","C","Java","Python","C#","SQL"]})}),e(o,{item:!0,xs:12,sm:4,children:e(g,{title:"\u7DB2\u9801\u6280\u80FD",techs:["vue","Nuxtjs","React","Nextjs","Restful","Graphql"]})}),e(o,{item:!0,xs:12,sm:4,children:e(g,{title:"\u6A5F\u5668\u5B78\u7FD2",techs:["Pytorch","Tensorflow","\u81EA\u7136\u8A9E\u8A00","\u5F71\u50CF\u8FA8\u8B58"]})})]})]})})]})},f=t=>u(o,{container:!0,spacing:2,children:[u(o,{item:!0,xs:12,sm:4,children:[e(c,{variant:"h5",children:"\u516C\u53F8\u540D\u7A31"}),e("div",{style:{height:300,width:"100%",background:"gray"}})]}),e(o,{item:!0,xs:12,sm:8,children:e(c,{variant:"body1",children:"\u958B\u767C\u516C\u53F8\u5167\u90E8\u7CFB\u7D71\u3002\u6574\u7406\u516C\u53F8\u5167\u5404\u7A2E\u71DF\u904B\u6578\u64DA\u3002\u91DD\u5C0D\u516C\u53F8\u904B\u4F5C\u7684\u6D41\u7A0B\u958B\u767C\u8EDF\u9AD4\uFF0C\u8B93\u54E1\u5DE5\u80FD\u4EE5\u66F4\u5FEB\u7684\u901F\u5EA6\u5B8C\u6210\u65E5\u5E38\u4F5C\u696D\u3002 \u4F7F\u7528\u6280\u80FD: React\u3001Typescript\u3001Graphql\u3001Electron"})})]}),K=t=>{const{offset:n,jobCards:a}=t;return console.log({start:n,end:n+a.length}),u(m,{children:[e(l,{offset:n,factor:a.length,speed:0,style:{background:"#87BCDE"}}),a.map((i,r)=>e(l,{offset:n+r,speed:-.2,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(h,{children:e(f,{})})},r))]})},Z=t=>e(J,{children:e("div",{style:{width:"100%",height:"100vh"},children:u(w,{pages:4,children:[e(W,{offset:0}),e(q,{offset:1}),e(K,{offset:2,jobCards:[e(f,{},1),e(f,{},2)]}),e(l,{className:"outer",sticky:{start:2,end:5},speed:0,children:u(h,{style:{background:"#87BCDE"},children:[e(d,{children:e(c,{variant:"h2",children:"Job"})}),e(D,{sx:{mb:2}})]})})]})})}),_=P({palette:{primary:{main:T[400]}},typography:{fontFamily:["Noto Sans TC","Noto Sans SC"].join(",")},components:{MuiLink:{defaultProps:{underline:"none"}}}}),z=t=>u(R,{theme:_,children:[e(N,{}),e(Z,{})]});M.render(e(H.StrictMode,{children:e(z,{})}),document.getElementById("root"));