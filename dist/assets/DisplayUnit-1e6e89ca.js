import{f as u}from"./fetch-json-3e103348.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,o as n,c as s,a as o,F as c,f as _,h,g as p,t as f}from"./index-06c4a90f.js";const g={name:"Games",props:{currentUnit:{type:String,default:""}},data(){return{linkInfo:[],currentGame:"MA3011",data:null}},methods:{changeCurrentGame(e){this.currentGame=`${this.currentUnit}${e}`,console.log(this.currentGame)}},computed:{currentGameData(){return this.data===null?null:this.data[this.currentGame]}},mounted(){(async()=>{const e=await u("/math/grade30-game-info.json"),r=`unit_${parseInt(this.currentUnit.slice(-1),16)}`;this.data=e.data[r],console.log(this.data,this.data[this.currentGame])})()},created(){console.log("gameView")}},G={class:"game-list"},y=["onClick"];function k(e,r,v,C,l,t){const i=d("router-view");return n(),s(c,null,[o("ul",G,[(n(),s(c,null,_(10,a=>o("li",{key:a,onClick:D=>t.changeCurrentGame(a)},f(`第 ${a} 個遊戲`),9,y)),64))]),t.currentGameData!==null?(n(),h(i,{key:0,name:l.currentGame,data:t.currentGameData},null,8,["name","data"])):p("",!0)],64)}const x=m(g,[["render",k],["__scopeId","data-v-dc3b09ea"]]);export{x as default};