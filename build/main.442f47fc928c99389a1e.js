(()=>{"use strict";var e={614:(e,t,o)=>{e.exports=o.p+"images/90f0b46cec8b5f7cfd12.svg"},911:(e,t,o)=>{e.exports=o.p+"images/0da3d302207bcad90cda.svg"},230:(e,t,o)=>{e.exports=o.p+"images/e933bd6d921c537d7743.svg"},243:(e,t,o)=>{e.exports=o.p+"images/a4206aab7946773b29b7.svg"},146:(e,t,o)=>{e.exports=o.p+"images/07801d05cb11930f0c82.svg"},293:(e,t,o)=>{e.exports=o.p+"images/a42815a014c452e4d958.svg"},964:(e,t,o)=>{e.exports=o.p+"images/a9e6ca53e8cfd641e556.svg"},739:(e,t,o)=>{e.exports=o.p+"images/ff14e4763945338fe002.svg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=o(146),t=o(911),n=o(230),r=o(243),c=o(293),a=o(964),s=o(739),i=o(614);const l=function(){document.querySelector(".hero__image").src=e,document.querySelector(".tabs-content--body__image-1").src=t,document.querySelector(".tabs-content--body__image-2").src=n,document.querySelector(".tabs-content--body__image-3").src=r,document.querySelector(".card__icon--chrome").src=c,document.querySelector(".card__icon--firefox").src=a,document.querySelector(".card__icon--opera").src=s,document.querySelectorAll(".card__dots-img").forEach((e=>e.src=i))};function u([...e],t){e.forEach((e=>e.classList.add(t)))}function d([...e],t){e.forEach((e=>e.classList.remove(t)))}function m(e,t){return`${e} ${t} ease-out 1 forwards`}const g=document.querySelector(".tabs-navigation");function p(e){const t=e.target.closest("li");if(t){[...g.children].map((e=>d([e],"active"))),document.querySelectorAll(".tabs-content--body").forEach((e=>d([e],"active")));const e=document.querySelector(`.tabs-content--body--${t.dataset.tab}`);u([t],"active"),u([e],"active")}}const y=function(){g.addEventListener("click",p)},v=window.matchMedia("(max-width:767px)"),h=document.querySelector(".main"),f=document.querySelector(".header"),_=document.querySelector(".header__logo-wrapper"),b=document.querySelector(".header__hamburger-icon"),S=document.querySelector(".header__close-icon"),q=document.querySelector(".nav");function w(e){e.matches?(u([q],"nav--menu"),u([b],"active")):(d([q],"nav--menu"),d([b],"active"))}function E(e){const t=e.target.closest(".header__hamburger-icon"),o=e.target.closest(".header__close-icon"),n=e.target.closest(".nav__navlink");t?(d([b],"active"),u([S,f,_,q,h],"active")):(o||n&&v.matches)&&(u([b],"active"),d([S,f,_,q,h],"active"))}const x=function(){w(v),v.addEventListener("change",w),f.addEventListener("click",E)},N=document.querySelector(".fqa__questions");function $(e){const t=e.target.closest("h4");t&&t.classList.toggle("active")}const A=function(){N.addEventListener("click",$)},L=document.getElementById("form"),k=document.getElementById("email");let T=document.querySelector(".form-control"),H=document.querySelector(".input-msg");const I=/^[a-z-._0-9]+@[a-z0-9]+\.[a-z]{2,5}$/;const z=function(){L.addEventListener("submit",(e=>{e.preventDefault(),I.test(k.value)?(T.className="form-control valid",H.textContent="Thanks you",console.log("sumitted",k.value),k.value=""):(T.className="form-control  invalid",H.textContent="Whoops, make sure it's an email")}))},B=document.querySelector(".loader"),j=document.querySelector(".hero__image-wrapper"),C=document.querySelector(".header__logo-wrapper"),M=document.querySelector(".header__hamburger-icon"),P=document.querySelectorAll(".nav__navitem"),D=document.querySelector(".nav__btn"),F=document.querySelector(".hero__content"),O=Array.from(P);const W=function(e){window.addEventListener("load",(()=>{setTimeout((()=>{B.style.display="none",C.style.animation=m("slide-in-down",".4s"),M.style.animation=m("slide-in-down",".4s"),O.forEach(((e,t)=>{e.style.animation=m("slide-in-down",`.${4+t++}s`)})),D.style.animation=m("slide-in-down","1s"),j.style.animation=m("slide-in-right",".45s"),[...F.children].forEach(((e,t)=>{e.style.animation=m("slide-in-down",`.${5+t++}s`)})),console.log("loaded")}),444)}))},G=document.querySelectorAll("h2 ,h3 ,h4 ,h5, .u-primary-paragraph"),J=(document.querySelectorAll(".u-primary-paragraph"),document.querySelectorAll(".tabs-navigation__tab")),K=document.querySelectorAll(".tabs-content--body__image-wrapper");console.log(K);const Q=new IntersectionObserver(((e,t)=>{e.forEach((e=>{const t=e.target;if(!e.isIntersecting)return d([t],"slide-in-up"),d([t],"slide-in-down"),void("tabs-navigation__tab"===t.className&&(t.style.animation="unset"));"H2"===t.tagName||"H3"===t.tagName||"H4"===t.tagName||"H5"===t.tagName||"P"===t.tagName?u([t],"slide-in-up"):"tabs-navigation__tab"===t.className?J.forEach(((e,t)=>{e.style.animation=m("slide-in-up",`.${4+t++}s`)})):"tabs-content--body__image-wrapper"===t.className&&K.forEach((e=>{u([e],"slide-in-up")}))}))}),{root:null,threshold:0,rootMargin:"-25px"});const R=function(e){G.forEach((e=>{e.style.opacity=0,Q.observe(e)})),J.forEach((e=>{e.style.opacity=0,Q.observe(e)})),K.forEach((e=>{e.style.opacity=0,Q.observe(e)}))};l(),x(),y(),A(),z(),R(),W()})()})();