import{r as o,ce as a,e as t,aU as r}from"./index.726a1292.js";import{r as s}from"./animation.7e1378fc.js";function n({el:n,to:c,duration:e=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;e=a(e)?500:e;const m=function(){if(!t(i))return;p+=20;const o=(a=p,c=u,v=f,(a/=e/2)<1?v/2*a*a+c:-v/2*(--a*(a-2)-1)+c);var a,c,v;((o,a)=>{o.scrollTop=a})(n,o),p<e&&t(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};