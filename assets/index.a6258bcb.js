import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.d77f02a9.js";import{A as n}from"./index.d61bd1bf.js";import{u as p}from"./index.c2f8a287.js";import m from"./Drawer1.28151fd4.js";import d from"./Drawer2.37569fa1.js";import j from"./Drawer3.434e799b.js";import c from"./Drawer4.f1de1178.js";import f from"./Drawer5.041fe814.js";import{_ as l}from"./index.6781f66c.js";import"./vendor.3b1829c7.js";import"./index.73f0a3e8.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useTimeout.2d9628a9.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./ArrowLeftOutlined.3f5c2cff.js";import"./isEqual.66f620a0.js";import"./index.b1a0a170.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.04df4c69.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.76712c7b.js";import"./useWindowSizeFn.1e8107c9.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./useForm.357a7f51.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";var w=e({components:{Alert:n,PageWrapper:l,Drawer1:m,Drawer2:d,Drawer3:j,Drawer4:c,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:j}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:j,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),D=a(" 打开Drawer "),g=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,m,d){const j=r("Alert"),c=r("a-button"),f=r("Drawer1"),l=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(j,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(j,{message:"内外同时控制显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(j,{message:"自适应高度/显示footer","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(j,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(j,{message:"详情页模式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(f,{onRegister:e.register1},null,8,["onRegister"]),s(l,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;