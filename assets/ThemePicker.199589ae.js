import{d as e,aK as i,h as t,o as s,i as r,aL as o,aM as n,j as a}from"./index.d77f02a9.js";import{b as d}from"./index.8d4b6bf8.js";import{C as p}from"./CheckOutlined.7b7e8a9f.js";import"./vendor.3b1829c7.js";import"./index.52f18b9b.js";import"./index.c2f8a287.js";import"./index.73f0a3e8.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useTimeout.2d9628a9.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./ArrowLeftOutlined.3f5c2cff.js";import"./isEqual.66f620a0.js";import"./useHeaderSetting.f552c217.js";import"./SettingOutlined.fb91ae0d.js";var m=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(i){e.event&&d(e.event,i)}}}});m.render=function(e,i,d,p,m,f){const l=t("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(i=>(s(),r("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[a(l)],14,["onClick"])))),128))],2)};export default m;