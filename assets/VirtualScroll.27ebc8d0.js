import{af as t,ag as e,d as s,dl as i,dm as a,r,o as d,f as o,g as l,t as m,bv as n,q as p}from"./index.8ee268f5.js";import{D as c}from"./index.8a231396.js";import{_ as u}from"./index.588fa705.js";import"./vendor.3b1829c7.js";import"./index.745441c2.js";import"./index.704d9bda.js";import"./RightOutlined.8408a911.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";import"./DownOutlined.e4764c63.js";/* empty css              */import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";const f=t((()=>e((()=>import("./index.b22670ff.js")),["/assets/index.b22670ff.js","/assets/index.5ddcb78c.css","/assets/index.8ee268f5.js","/assets/index.c8f5422a.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css"]))),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var v=s({components:{VScroll:f,Divider:c,PageWrapper:u},setup:()=>({data:j})});const _=n("data-v-b4120884");i("data-v-b4120884");const b=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},h={class:"virtual-scroll-demo__item"},x=p("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};a();const O=_(((t,e,s,i,a,n)=>{const p=r("Divider"),c=r("VScroll"),u=r("PageWrapper");return d(),o(u,{class:"virtual-scroll-demo"},{default:_((()=>[l(p,null,{default:_((()=>[b])),_:1}),l("div",g,[l(c,{itemHeight:41,items:t.data,height:300,width:300},{default:_((({item:t})=>[l("div",h,m(t.title),1)])),_:1},8,["items"])]),l(p,null,{default:_((()=>[x])),_:1}),l("div",w,[l(c,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));v.render=O,v.__scopeId="data-v-b4120884";export default v;