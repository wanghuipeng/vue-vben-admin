import{cW as e,b as i,d as s,g as o,h as t,o as r,i as a,w as d,j as n}from"./index.d77f02a9.js";import{A as p}from"./index.d61bd1bf.js";import{h as m,_ as j}from"./index.b1a0a170.js";import{_ as l}from"./index.6781f66c.js";import{u as c}from"./useForm.357a7f51.js";import"./vendor.3b1829c7.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";const{uploadUrl:u=""}=i();function f(i,s){return e.uploadFile({url:u,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var x=s({components:{BasicUpload:m,BasicForm:j,PageWrapper:l,[p.name]:p},setup(){const{createMessage:e}=o(),[i]=c({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:f,register:i}}});x.render=function(e,i,s,o,p,m){const j=t("a-alert"),l=t("BasicUpload"),c=t("BasicForm"),u=t("PageWrapper");return r(),a(u,{title:"上传组件示例"},{default:d((()=>[n(j,{message:"基础示例"}),n(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),n(j,{message:"嵌入表单,加入表单校验"}),n(c,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;