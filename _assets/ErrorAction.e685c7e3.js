import{a as t,u as o,aS as e,I as r,ax as a,dp as s,i as n,o as i,j as u,w as l,k as m}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./Trigger.85e0c6c3.js";import{B as c}from"./index.d000bf4b.js";import"./colors.2c198061.js";import{T as d}from"./index.6227aee6.js";import{B as p}from"./BugOutlined.be5ca092.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:d,Badge:c},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>s.getErrorListCountState)),handleToErrorList:function(){n(a.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,s){const c=n("BugOutlined"),d=n("Badge"),p=n("Tooltip");return i(),u(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(d,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(c)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;