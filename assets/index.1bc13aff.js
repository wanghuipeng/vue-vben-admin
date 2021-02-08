import{_ as e}from"./index.b092357d.js";import{a as o}from"./index.56a51e6f.js";import{d as i,r as n,g as l,h as t,o as s,i as a,w as p,j as r}from"./index.726a1292.js";import{_ as d}from"./index.4b3faacc.js";import{o as c}from"./select.26c01014.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.6b15e138.js";import"./isEqual.aa473c94.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.64f011cb.js";import"./index.6d83b64c.js";import"./SearchOutlined.47e6a5d6.js";import"./EyeOutlined.c0aabb58.js";import"./index.d1ee17e2.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.95f3772a.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./RightOutlined.97d13c0b.js";import"./RedoOutlined.31b7b26c.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./Tree.23ca4528.js";import"./util.fcd2ca24.js";/* empty css              */import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./DeleteOutlined.f78597ae.js";import"./index.e9b59711.js";import"./index.594319ed.js";import"./useTimeout.621e6290.js";import"./useWindowSizeFn.7fb21022.js";import"./FullscreenOutlined.0d377604.js";import"./index.d77fefba.js";import"./index.40081bc3.js";import"./index.0c4a85ff.js";import"./LeftOutlined.49f96845.js";import"./download.d746980c.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./index.f4bd2380.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./index.41b8ad5e.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const e=n(null),{createMessage:o}=l();return{schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});u.render=function(e,o,i,n,l,d){const c=t("BasicForm"),m=t("CollapseContainer"),u=t("PageWrapper");return s(),a(u,{title:"表单基础示例"},{default:p((()=>[r(m,{title:"基础示例"},{default:p((()=>[r(c,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;