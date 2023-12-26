import{L as x,O as L}from"./OptionButton-a84e8ee8.js";import"./fetch-json-3e103348.js";import{r as _,o as t,c as n,b as p,a as e,F as i,f as c,t as u,g as m,e as h,i as f,v as g,p as I,j as y}from"./index-06c4a90f.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const w={name:"MA3017",components:{LevelButton:x,OptionButton:L},props:{data:{type:Object,default:{id:"MA3017",questions:[]}}},data(){return{gameId:"MA3017",currentLevel:1,answers:[],optionsActive:["previous","start","next","hint","record","submit"],levels:1,blankContent1:[{title:"喜歡"},{title:"不喜歡"},{title:"合計(人)"}],blankContent2:[{seatNumber:"1",likes:["🞅","🞅"]},{seatNumber:"2",likes:["🞅","🞅"]},{seatNumber:"3",likes:["🞪","🞅"]},{seatNumber:"4",likes:["🞅","🞪"]},{seatNumber:"5",likes:["🞪","🞪"]},{seatNumber:"6",likes:["🞪","🞅"]},{seatNumber:"7",likes:["🞪","🞅"]},{seatNumber:"8",likes:["🞅","🞪"]},{seatNumber:"9",likes:["🞅","🞅"]},{seatNumber:"10",likes:["🞪","🞪"]}],rowIndex1:3,columnIndex1:3,rowIndex2:10,columnIndex2:2}},methods:{changeCurrentLevel(s){this.currentLevel=s,console.log(s)},optionsEvent(s){console.log(s)}}},a=s=>(I("data-v-5eee4acc"),s=s(),y(),s),A={class:"gameWindow"},B={class:"board"},O={class:"top"},M={class:"blanksLeft"},V=a(()=>e("tr",null,[e("th",{style:{width:"80px"}},[e("div",{class:"title"},[e("b",null,"羽毛球"),e("em",null,"躲避球")])]),e("th",null,"喜歡"),e("th",null,"不喜歡"),e("th",null,"合計(人)")],-1)),E={class:"name"},S=["id"],j=a(()=>e("div",{class:"description"},[e("p",null,"註：🞅 表示喜歡，🞪 表示不喜歡")],-1)),D={class:"blanksRight"},F=a(()=>e("tr",null,[e("th",null,"座號"),e("th",null,"羽毛球"),e("th",null,"躲避球")],-1)),T={class:"name"},U={style:{color:"black"}},R={class:"bottom"},W={key:0},z={key:1},G=["onUpdate:modelValue"];function H(s,J,v,K,l,d){const b=_("LevelButton"),k=_("OptionButton");return t(),n("div",A,[p(b,{onLevelClick:d.changeCurrentLevel,data:1,currentNumber:l.currentLevel},null,8,["onLevelClick","currentNumber"]),e("div",B,[e("div",O,[e("div",M,[e("table",null,[V,(t(!0),n(i,null,c(l.blankContent1,r=>(t(),n("tr",null,[e("td",E,u(r.title),1),(t(!0),n(i,null,c(l.columnIndex1,o=>(t(),n("td",null,[e("input",{type:"text",id:"inputId-"+o},null,8,S)]))),256))]))),256))])]),j,e("div",D,[e("table",null,[F,(t(!0),n(i,null,c(l.blankContent2,r=>(t(),n("tr",null,[e("td",T,u(r.seatNumber),1),(t(!0),n(i,null,c(r.likes,o=>(t(),n("td",U,u(o),1))),256))]))),256))])])]),e("div",R,[e("ol",null,[(t(!0),n(i,null,c(v.data.questions,(r,o)=>(t(),n("li",null,[o===0?(t(),n("h4",W,u(r),1)):m("",!0),o!==0?(t(),n("h4",z,[h(u(r)+"（",1),f(e("input",{type:"text","onUpdate:modelValue":N=>l.answers[o]=N},null,8,G),[[g,l.answers[o]]]),h("）位 ")])):m("",!0)]))),256))])])]),p(k,{optionsActive:l.optionsActive,onOptionsEvent:d.optionsEvent},null,8,["optionsActive","onOptionsEvent"])])}const Z=C(w,[["render",H],["__scopeId","data-v-5eee4acc"]]);export{Z as default};
