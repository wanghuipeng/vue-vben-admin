let e=document.createElement("style");e.innerHTML=".high-form[data-v-0d2bde26]{padding-bottom:48px}",document.head.appendChild(e);import{aU as o,a as t,r as i,d5 as s,d6 as r,i as n,o as d,j as l,k as a,bo as p,p as m}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./useSortable.21535c0e.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import{s as c}from"./index.fa3985b1.js";import"./colors.10f556e6.js";import"./index.0616d603.js";import"./RightOutlined.a70b4ee4.js";import"./index.d9af1a5a.js";import"./types.6d681d3e.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./_baseFor.f4e5f03f.js";import"./index.e86a54b9.js";import"./index.a172b251.js";import"./index.9f7110f0.js";import"./index.4d043235.js";import"./UpOutlined.b2b80e9e.js";import"./LeftOutlined.fd1f9817.js";import"./index.d2c7e5f0.js";import"./index.aab85027.js";import"./index.599b5919.js";import"./index.6cba0df7.js";import"./index.d437983f.js";import"./zh_CN.0242bd16.js";import"./index.52dad374.js";import"./index.92b03691.js";import"./CaretDownFilled.9cd05574.js";import"./index.47ef10aa.js";import"./CheckOutlined.9bb6282e.js";import"./CloseOutlined.4f388f3b.js";import"./index.bb73e3b0.js";import"./FullscreenOutlined.6da9f78b.js";import"./LeftOutlined.db5f23aa.js";import"./LoadingOutlined.f68cb32b.js";import"./TableAction.8167910e.js";import"./RightOutlined.29e5aa33.js";import"./SettingOutlined.86be5837.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./index.74fc0660.js";import"./index.75e7151a.js";import"./useWindowSizeFn.248d4164.js";import{u as f}from"./useForm.3e1c3265.js";import"./uuid.40269c00.js";import"./useExpose.97caf2e5.js";import"./useTable.6da73207.js";import b from"./PersonTable.ce479185.js";const u=o((()=>import("./PageFooter.528e767b.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:c,PersonTable:b,PageFooter:u},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:r}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:s,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const v=p("data-v-0d2bde26");s("data-v-0d2bde26");const T={class:"high-form"},q=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),O={class:"m-5"},_=m("提交");r();const S=v(((e,o,t,i,s,r)=>{const p=n("a-page-header"),m=n("BasicForm"),c=n("a-card"),f=n("PersonTable"),b=n("a-button"),u=n("PageFooter");return d(),l("div",T,[a(p,{title:"高级表单",ghost:!1},{default:v((()=>[q])),_:1}),a("div",O,[a(c,{title:"仓库管理",bordered:!1},{default:v((()=>[a(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[a(m,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),a(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[a(f,{ref:"tableRef"},null,512)])),_:1})]),a(u,null,{right:v((()=>[a(b,{type:"primary",onClick:e.submitAll},{default:v((()=>[_])),_:1},8,["onClick"])])),_:1})])}));h.render=S,h.__scopeId="data-v-0d2bde26";export default h;