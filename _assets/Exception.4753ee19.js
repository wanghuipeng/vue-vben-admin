let t=document.createElement("style");t.innerHTML=".exception{display:flex;align-items:center;flex-direction:column}",document.head.appendChild(t);import{a as e,R as s,r as n,S as l,T as i,u as a,s as r,f as o,U as u,V as c,B as p,W as T}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import{R as b}from"./index.2d79dc1b.js";var x=e({name:"ErrorPage",props:{status:{type:Number,default:s.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(t){const e=n(new Map),{query:x}=l(),d=T(),y=i(),{t:E}=a(),_=r((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),m=r((()=>o(e).get(o(_)))),O=E("sys.exception.backLogin"),f=E("sys.exception.backHome");return o(e).set(s.PAGE_NOT_ACCESS,{title:"403",status:`${s.PAGE_NOT_ACCESS}`,subTitle:E("sys.exception.subTitle403"),btnText:t.full?O:f,handler:()=>t.full?d(u.BASE_LOGIN):d()}),o(e).set(s.PAGE_NOT_FOUND,{title:"404",status:`${s.PAGE_NOT_FOUND}`,subTitle:E("sys.exception.subTitle404"),btnText:t.full?O:f,handler:()=>t.full?d(u.BASE_LOGIN):d()}),o(e).set(s.ERROR,{title:"500",status:`${s.ERROR}`,subTitle:E("sys.exception.subTitle500"),btnText:f,handler:()=>d()}),o(e).set(s.PAGE_NOT_DATA,{title:E("sys.exception.noDataTitle"),subTitle:"",btnText:E("sys.exception.redo"),handler:()=>y(),icon:"./_assets/no-data.7a45acb3.png"}),o(e).set(s.NET_WORK_ERROR,{title:E("sys.exception.networkErrorTitle"),subTitle:E("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>y(),icon:"./_assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:n,icon:l,handler:i,status:a}=o(m)||{};return c(b,{class:"exception ",status:a,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>n&&c(p,{type:"primary",onClick:i},(()=>n)),icon:()=>l?c("img",{src:l}):null})}}});export default x;