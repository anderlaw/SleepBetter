import{S as V,i as X,s as Y,e as w,t as q,a as B,b as l,c as A,d as r,l as K,f as N,g as D,h as T,j as O,k as ee,n as F,m as G}from"./vendor.21a7c8da.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};le();function H(n,e,t){const i=n.slice();return i[11]=e[t],i}function J(n,e,t){const i=n.slice();return i[14]=e[t],i}function Q(n){let e,t=n[14].label+"",i,s,a,u,d;function f(){return n[6](n[14])}return{c(){e=w("button"),i=q(t),s=B(),l(e,"class",a="category-button "+(n[14].name===n[0]?"active":"")+" svelte-1j3ngex")},m(g,b){A(g,e,b),r(e,i),r(e,s),u||(d=K(e,"click",f),u=!0)},p(g,b){n=g,b&1&&a!==(a="category-button "+(n[14].name===n[0]?"active":"")+" svelte-1j3ngex")&&l(e,"class",a)},d(g){g&&N(e),u=!1,d()}}}function R(n){let e,t,i,s,a,u,d=n[11].label+"",f,g,b,p,I;function $(){return n[7](n[11])}return{c(){e=w("div"),t=w("div"),i=w("img"),a=B(),u=w("span"),f=q(d),g=B(),D(i.src,s=n[11].icon)||l(i,"src",s),l(i,"class","svelte-1j3ngex"),l(t,"class","icon-container svelte-1j3ngex"),l(e,"class",b="music-option "+(n[1].indexOf(n[11].name)>-1?"active":"")+" svelte-1j3ngex")},m(m,h){A(m,e,h),r(e,t),r(t,i),r(e,a),r(e,u),r(u,f),r(e,g),p||(I=K(e,"click",$),p=!0)},p(m,h){n=m,h&8&&!D(i.src,s=n[11].icon)&&l(i,"src",s),h&8&&d!==(d=n[11].label+"")&&T(f,d),h&10&&b!==(b="music-option "+(n[1].indexOf(n[11].name)>-1?"active":"")+" svelte-1j3ngex")&&l(e,"class",b)},d(m){m&&N(e),p=!1,I()}}}function te(n){let e,t,i,s,a;return{c(){e=O("svg"),t=O("circle"),i=O("path"),l(t,"cx","17"),l(t,"cy","17"),l(t,"r","16.5"),l(t,"stroke","white"),l(i,"d","M28.057 17.1144L11.5076 26.5547L11.6068 7.50236L28.057 17.1144Z"),l(i,"fill","white"),l(e,"width","34"),l(e,"height","34"),l(e,"viewBox","0 0 34 34"),l(e,"fill","none"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(u,d){A(u,e,d),r(e,t),r(e,i),s||(a=K(e,"click",n[9]),s=!0)},p:F,d(u){u&&N(e),s=!1,a()}}}function ne(n){let e,t,i,s,a,u;return{c(){e=O("svg"),t=O("circle"),i=O("rect"),s=O("rect"),l(t,"cx","17"),l(t,"cy","17"),l(t,"r","16.5"),l(t,"stroke","white"),l(i,"x","12"),l(i,"y","9"),l(i,"width","3"),l(i,"height","16"),l(i,"fill","white"),l(s,"x","19"),l(s,"y","9"),l(s,"width","3"),l(s,"height","16"),l(s,"fill","white"),l(e,"width","34"),l(e,"height","34"),l(e,"viewBox","0 0 34 34"),l(e,"fill","none"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(d,f){A(d,e,f),r(e,t),r(e,i),r(e,s),a||(u=K(e,"click",n[8]),a=!0)},p:F,d(d){d&&N(e),a=!1,u()}}}function se(n){let e,t,i,s,a,u,d,f,g,b,p,I,$,m,h=n[1].length+"",y,Z,M,j,U,P=n[4],v=[];for(let o=0;o<P.length;o+=1)v[o]=Q(J(n,P,o));let C=n[3],_=[];for(let o=0;o<C.length;o+=1)_[o]=R(H(n,C,o));function z(o,x){return o[2]===!0?ne:te}let W=z(n),L=W(n);return{c(){e=w("div"),t=w("main"),i=w("button"),i.textContent="\u6350\u8D60",s=B(),a=w("div"),u=B(),d=w("div");for(let o=0;o<v.length;o+=1)v[o].c();f=B(),g=w("div");for(let o=0;o<_.length;o+=1)_[o].c();b=B(),p=w("div"),L.c(),I=B(),$=w("div"),m=q("\u5F53\u524D\uFF1A"),y=q(h),Z=q("\u4E2A\u9879\u76EE"),M=B(),j=O("svg"),U=O("path"),l(i,"class","donate-button svelte-1j3ngex"),l(a,"class","divider svelte-1j3ngex"),ee(a,"margin-top","12px"),l(d,"class","category-container svelte-1j3ngex"),l(g,"class","music-option-container svelte-1j3ngex"),l($,"class","intro svelte-1j3ngex"),l(U,"d","M1 12L12 1L23 12"),l(U,"stroke","#C4C4C4"),l(j,"width","24"),l(j,"height","13"),l(j,"viewBox","0 0 24 13"),l(j,"fill","none"),l(j,"xmlns","http://www.w3.org/2000/svg"),l(p,"class","player-container svelte-1j3ngex"),l(t,"class","container svelte-1j3ngex"),l(e,"class","layout svelte-1j3ngex")},m(o,x){A(o,e,x),r(e,t),r(t,i),r(t,s),r(t,a),r(t,u),r(t,d);for(let c=0;c<v.length;c+=1)v[c].m(d,null);r(t,f),r(t,g);for(let c=0;c<_.length;c+=1)_[c].m(g,null);r(t,b),r(t,p),L.m(p,null),r(p,I),r(p,$),r($,m),r($,y),r($,Z),r(p,M),r(p,j),r(j,U)},p(o,[x]){if(x&17){P=o[4];let c;for(c=0;c<P.length;c+=1){const S=J(o,P,c);v[c]?v[c].p(S,x):(v[c]=Q(S),v[c].c(),v[c].m(d,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=P.length}if(x&42){C=o[3];let c;for(c=0;c<C.length;c+=1){const S=H(o,C,c);_[c]?_[c].p(S,x):(_[c]=R(S),_[c].c(),_[c].m(g,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=C.length}W===(W=z(o))&&L?L.p(o,x):(L.d(1),L=W(o),L&&(L.c(),L.m(p,I))),x&2&&h!==(h=o[1].length+"")&&T(y,h)},i:F,o:F,d(o){o&&N(e),G(v,o),G(_,o),L.d()}}}const k="https://audio-resource-1256270265.cos.ap-shanghai.myqcloud.com/audio",E="http://localhost:3000/images";function ie(n,e,t){let i,s;const a=m=>{console.log(m)};document.documentElement.addEventListener("keydown",a);const u=[{label:"\u9E1F\u7C7B",name:"birds",subItems:[{name:"birds",label:"\u9E1F\u53EB",url:`${k}/\u9E1F.mp3`,audioEle:null,icon:`${E}/birds.svg`},{name:"morningBirds",label:"\u6E05\u6668\u9E1F\u53EB",url:`${k}/\u6E05\u6668\u9E1F\u53EB.mp3`,audioEle:null,icon:`${E}/morningBirds.svg`},{name:"tropicalBirds",label:"\u70ED\u5E26\u9E1F",url:`${k}/\u70ED\u5E26\u9E1F.mp3`,audioEle:null,icon:`${E}/tropicalBirds.svg`},{name:"cuckooBird",label:"\u675C\u9E43",url:`${k}/\u675C\u9E43.mp3`,audioEle:null,icon:`${E}/cuckooBird.svg`}]},{label:"\u4E61\u6751",name:"farm",subItems:[{name:"chicks",label:"\u5C0F\u9E21",url:`${k}/\u5C0F\u9E21.mp3`,audioEle:null,icon:`${E}/chicks.svg`},{name:"chickens",label:"\u6BCD\u9E21\u5E26\u5C0F\u9E21",url:`${k}/\u6BCD\u9E21\u5C0F\u9E21.mp3`,audioEle:null,icon:`${E}/chickens.svg`},{name:"cows",label:"\u9EC4\u725B",url:`${k}/\u725B\u53EB.mp3`,audioEle:null,icon:`${E}/cows.svg`},{name:"bees",label:"\u871C\u8702",url:`${k}/\u871C\u8702.mp3`,audioEle:null,icon:`${E}/bees.svg`}]},{label:"\u6D77\u6D0B",name:"ocean",subItems:[{name:"seagulls",label:"\u6D77\u9E25",url:`${k}/\u6D77\u9E25.mp3`,audioEle:null,icon:`${E}/seagulls.svg`},{name:"whales",label:"\u9CB8\u9C7C\u53EB",url:`${k}/\u9CB8\u9C7C\u53EB.mp3`,audioEle:null,icon:`${E}/whales.svg`},{name:"whalesWater",label:"\u9CB8\u9C7C\u620F\u6C34",url:`${k}/\u9CB8\u9C7C\u620F\u6C34.mp3`,audioEle:null,icon:`${E}/whalesWater.svg`}]}];let d="birds",f=[];const g=m=>{let h=-1,y=null;if(u.find(M=>y=M.subItems.find(j=>j.name===m)),(h=f.indexOf(m))>-1)f.splice(h,1),t(1,f=[...f]),y.audioEle.pause();else{if(t(1,f=[...f,m]),y&&!y.audioEle){const M=y.audioEle=document.createElement("audio");M.controls=!1,M.src=y.url}y.audioEle.play()}},b=m=>t(0,d=m.name),p=m=>g(m.name),I=()=>alert("stop"),$=()=>alert("play");return n.$$.update=()=>{var m,h;n.$$.dirty&1&&t(3,i=(h=(m=u.find(y=>y.name===d))==null?void 0:m.subItems)!=null?h:[]),n.$$.dirty&2&&t(2,s=f.length>0)},[d,f,s,i,u,g,b,p,I,$]}class oe extends V{constructor(e){super();X(this,e,ie,se,Y,{})}}new oe({target:document.getElementById("app")});
