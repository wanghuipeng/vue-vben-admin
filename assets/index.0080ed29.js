import{u as e}from"./useContextMenu.123fc816.js";import{d as t}from"./ScrollContainer.9446e27c.js";import{d as n,n as i,r as o,o as s,f as l,p as r,g as a,q as p}from"./index.8ee268f5.js";import{_ as d}from"./index.588fa705.js";import"./index.704d9bda.js";import"./RightOutlined.8408a911.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";/* empty css              */import"./index.8a231396.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./useTimeout.72f9750e.js";import"./useScrollTo.da0b1c1d.js";import"./vendor.3b1829c7.js";import"./index.745441c2.js";import"./DownOutlined.e4764c63.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";var m=n({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:n}=i();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,n,i,p,d){const m=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return s(),l(f,{title:"右键菜单示例"},{default:r((()=>[a(b,{title:"Simple"},{default:r((()=>[a(m,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),a(b,{title:"Multiple",class:"mt-4"},{default:r((()=>[a(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;