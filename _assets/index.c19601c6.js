import{P as t,am as e,a as i,z as o,I as n,M as r,F as s,af as a,H as c,k as l,bj as d,L as p,bk as u,ao as f,aA as m,i as g,o as b,j as h,m as j,ad as v}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import{s as x,g as k}from"./index.40b13933.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import"./colors.f2807cc8.js";import"./index.67524836.js";import"./RightOutlined.f62c5ce2.js";import"./index.b4629556.js";import"./types.e649c0d4.js";import"./_baseFor.f4e5f03f.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.510f2512.js";import"./index.f0bc60c2.js";import"./LeftOutlined.850d4c82.js";import"./index.a3477a19.js";import"./index.0eb42b4f.js";import"./zh_CN.0242bd16.js";import"./CaretDownFilled.141f08ee.js";function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function y(){return window}var S=i({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:T(T({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:n("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||y;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||y)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;x(0,{getContainer:void 0===e?y:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,i=k((void 0===e?y:e)(),!0);this.setState({visible:i>t})}},render:function(){var t,e,i=this.prefixCls,o=this.$slots,n=(0,this.configProvider.getPrefixCls)("back-top",i),r=c(n,this.$attrs.class),s=l("div",{class:"".concat(n,"-content")},[l("div",{class:"".concat(n,"-icon")},null)]),a=T(T({},this.$attrs),{onClick:this.scrollToTop,class:r}),f=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,m=d("fade");return l(u,m,"function"==typeof(e=f)||"[object Object]"===Object.prototype.toString.call(e)&&!p(e)?f:{default:function(){return[f]}})}}),w=i({name:"LayoutFeatures",components:{BackTop:e(S),LayoutLockPage:f((()=>import("./index.8cea351e.js"))),SettingDrawer:f((()=>import("./index.f526bed4.js").then((function(t){return t.i}))))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=m();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});w.render=function(t,e,i,o,n,r){const s=g("LayoutLockPage"),a=g("BackTop"),c=g("SettingDrawer");return b(),h(v,null,[l(s),t.getUseOpenBackTop?(b(),h(a,{key:0,target:t.getTarget},null,8,["target"])):j("",!0),t.getShowSettingButton?(b(),h(c,{key:1})):j("",!0)],64)};export default w;