import{_ as s}from"./index.56a51e6f.js";import{_ as o}from"./index.4b3faacc.js";import{d as t,r,e as a,cp as l,cq as e,h as i,o as c,i as n,j as d,aL as m,aM as p,l as f,bw as u,m as j}from"./index.726a1292.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./index.41b8ad5e.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";import"./DownOutlined.f011354d.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";import"./vendor.3b1829c7.js";var b=t({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=u("data-v-331a2139");l("data-v-331a2139");const _={class:"my-4"},T=j(" 滚动到100px位置 "),v=j(" 滚动到800px位置 "),C=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};e();const y=x(((s,o,t,r,a,l)=>{const e=i("a-button"),u=i("ScrollContainer"),j=i("PageWrapper");return c(),n(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(u,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(c(),n(m,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;