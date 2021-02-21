import{d as e,dl as t,dm as i,r as s,o,f as r,g as a,bv as d,q as m}from"./index.8ee268f5.js";import{A as n}from"./index.a92108e7.js";import{D as p}from"./index.8a231396.js";import{D as c}from"./index.06e43883.js";import{f as j}from"./BasicForm.4ee3e781.js";import{u as l}from"./useForm.2453984c.js";import{step2Schemas as f}from"./data.2505cb7f.js";import"./vendor.3b1829c7.js";import"./responsiveObserve.c545f1cc.js";import"./index.ace90ad4.js";import"./index.0c18e139.js";import"./_baseIteratee.61382218.js";import"./isEqual.bd3c511a.js";import"./get.0479aa65.js";import"./_baseProperty.74f89655.js";import"./findIndex.a12e0f15.js";import"./toInteger.f9a43c77.js";import"./index.0d0c93f8.js";import"./index.5cb73b71.js";import"./SearchOutlined.fadfdeec.js";import"./EyeOutlined.438e5550.js";import"./index.ed9f4e7d.js";import"./CheckOutlined.6e3ff980.js";import"./DownOutlined.e4764c63.js";import"./index.31a2b7d8.js";import"./index.5b69606c.js";import"./index.c62fa8ed.js";import"./UpOutlined.b53d5bc5.js";import"./index.b8699f3f.js";import"./RightOutlined.8408a911.js";import"./RedoOutlined.db3025b9.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./Tree.bf2dd908.js";import"./util.0bced5d1.js";import"./useFormItem.8d3cf537.js";/* empty css              */import"./uuid.8bfac6dc.js";import"./uniqBy.a0ccb3b6.js";import"./index.3886869f.js";import"./DeleteOutlined.ea4eefb6.js";import"./useModal.e810cfd8.js";import"./useTimeout.72f9750e.js";import"./useWindowSizeFn.4452f4f1.js";import"./ScrollContainer.9446e27c.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./useScrollTo.da0b1c1d.js";import"./FullscreenOutlined.fa6777c1.js";import"./Dropdown.be4507ac.js";import"./index.e5f2441c.js";import"./LeftOutlined.3e62adc3.js";import"./download.49d447d5.js";var u=e({components:{BasicForm:j,[n.name]:n,[p.name]:p,[c.name]:c,[c.Item.name]:c.Item},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=l({labelWidth:80,schemas:f,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const b=d("data-v-01481d2f");t("data-v-01481d2f");const x={class:"step2"},O=m(" ant-design@alipay.com "),g=m(" test@example.com "),v=m(" Vben "),_=m(" 500元 ");i();const y=b(((e,t,i,d,m,n)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),f=s("BasicForm");return o(),r("div",x,[a(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),a(j,{column:1,class:"mt-5"},{default:b((()=>[a(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),a(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),a(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),a(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),a(l),a(f,{onRegister:e.register},null,8,["onRegister"])])}));u.render=y,u.__scopeId="data-v-01481d2f";export default u;