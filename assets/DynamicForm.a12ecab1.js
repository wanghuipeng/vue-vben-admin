import{_ as e}from"./index.b1a0a170.js";import{a as i}from"./index.074ee3be.js";import{_ as o}from"./index.6781f66c.js";import{d as l,h as t,o as s,i as n,w as a,j as d,m as p}from"./index.d77f02a9.js";import{u as r}from"./useForm.357a7f51.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./index.36fa56ba.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:i}=e;await i()}})}];var f=l({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const[e,{setProps:i,updateSchema:o,appendSchemaByField:l,removeSchemaByFiled:t}]=r({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=r({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:i,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){t("field11")}}}});const b={class:"mb-4"},u=p(" 更改字段3label "),j=p(" 同时更改字段3,4label "),h=p(" 往字段3后面插入字段10 "),x=p(" 删除字段11 ");f.render=function(e,i,o,l,p,r){const c=t("a-button"),m=t("BasicForm"),f=t("CollapseContainer"),P=t("PageWrapper");return s(),n(P,{title:"动态表单示例"},{default:a((()=>[d("div",b,[d(c,{onClick:e.changeLabel3,class:"mr-2"},{default:a((()=>[u])),_:1},8,["onClick"]),d(c,{onClick:e.changeLabel34,class:"mr-2"},{default:a((()=>[j])),_:1},8,["onClick"]),d(c,{onClick:e.appendField,class:"mr-2"},{default:a((()=>[h])),_:1},8,["onClick"]),d(c,{onClick:e.deleteField,class:"mr-2"},{default:a((()=>[x])),_:1},8,["onClick"])]),d(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:a((()=>[d(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),d(f,{class:"mt-5",title:"componentProps动态改变"},{default:a((()=>[d(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;