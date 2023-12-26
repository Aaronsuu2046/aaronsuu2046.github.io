import{k as P,l as Q,o as Z,c as tt,d as et}from"./index-06c4a90f.js";import{L as at,O as nt}from"./OptionButton-a84e8ee8.js";import{_ as st}from"./_plugin-vue_export-helper-c27b6911.js";var ct=P();const a=Q(ct);const ot={name:"MA30",components:{LevelButton:at,OptionButton:nt},data(){return{gameData:[{lives:3,bottom:[6,6,6,6],top:[1,2,3,4]},{lives:3,bottom:[7,7,7,7],top:[2,3,4,5]},{lives:3,bottom:[8,8,8,8],top:[3,4,5,6]},{lives:3,bottom:[9,9,9,9],top:[5,6,7,8]},{lives:3,bottom:[10,10,10,10],top:[6,7,8,9]}],currentLevel:1}},methods:{changeCurrentLevel(p){this.currentLevel=p}},mounted(){const p="FILE",v="ALIVE",x="WIN",S="lastBtn",q="startBtn",A="nextBtn",F="submitBtn",G="hintBtn",B=document.querySelector(".game_area"),g=[...document.querySelectorAll(".gameBtn *")],C=document.querySelector(".water"),R=document.querySelector(".water_scale");document.querySelector(".water_control");const N=document.querySelector(".topic"),L=document.querySelector(".scales"),$=document.querySelector(".gameRule"),r=document.querySelector("#firework-container"),V="../../../../assets/images/game_images/fireworks.gif";let n=0,f=3,s=0,i=0,c=10,l=1,u=40,m="",b=`${s} ml`,h,j=!1,d=p,w=D(),k=[];M(f),N.textContent=w,g.forEach(t=>{t.addEventListener("click",e=>{if(console.log(e.target.id),e.target.parentElement.classList.value.includes("levelBtn"))n=parseInt(e.target.textContent),I();else if(m=e.target.id,m===S)U();else if(m===A)J();else if(m===q)H();else if(m===F)O();else if(m===G){if(f>0||!j)return;if(h){h=!1,_("");return}h=!0,b=`目前為：${s} ml`,_(b)}})}),B.addEventListener("wheel",t=>{t.preventDefault(),!(s>c||d!==v)&&(t.deltaY<0&&s<c?s+=l:t.deltaY>0&&s>i&&(s-=l),C.style.height=`${(i+s)/c*100}%`,h&&(b=`目前為：${s} ml`,_(b)))});let T=!1,y,E=null;B.addEventListener("touchstart",t=>{t.preventDefault(),y=t.touches[0].clientY,T=!0}),B.addEventListener("touchmove",t=>{if(t.preventDefault(),T){if(s>c||d!==v)return;if(E=t.touches[0].clientY,y!==null){const e=E-y;e<-u&&s<c?(s+=l,y=E):e>u&&s>i&&(s-=l,y=E)}C.style.height=`${(i+s)/c*100}%`,h&&(b=`"目前為：${s} ml`,_(b))}}),B.addEventListener("touchend",()=>{T=!1});function H(){if(d===v)return;d===x&&Y(),n===0&&(n=1,a(g[0]).addClass("active")),a("#nextBtn").removeClass("jumpBtn"),d=v,$.style.display="none",h=!1,f=3,M(f),_("");let t=(c-i)/2;document.querySelector(".top").textContent=c,document.querySelector(".mid").textContent=t,document.querySelector(".bottom").textContent=i,s=i;const e=(c-i)/l+1-a(L).children().length;if(e<0)a(L).children("li").slice(0,Math.abs(e)).remove();else for(let o=0;o<e;o++)a(L).append("<li>");C.style.height=`${(i+s)/c*100}%`,w=D(),N.textContent=w}function O(){d===v&&(s===w?(d=x,k.push(n),document.getElementById("correct").play(),document.getElementById("bingo").style.display="block",X(),setTimeout(()=>{document.getElementById("bingo").style.display="none"},2500),a("#nextBtn").addClass("jumpBtn")):(document.getElementById("wrong").play(),document.getElementById("dada").style.display="block",setTimeout(()=>{document.getElementById("dada").style.display="none"},2500),a(g[n-1]).removeClass("bingo"),k.pop(n),a(g[n-1]).addClass("active"),j=!0,f-=1,M(f)))}function U(){n<=1?n=5:n-=1,I()}function J(){n>=5?n=1:n+=1,I()}function I(){n===1?(u=40,c=10,l=1):n===2?(u=40,c=50,l=5):n===3?(u=13,c=300,l=10):n===4?(u=20,c=1e3,l=50):n===5&&(u=20,c=2e3,l=100),Y()}function Y(){d=p,a(r).css("display","none"),g.forEach((t,e)=>{a(t).removeClass("active"),a.inArray(e+1,k)!==-1?a(t).addClass("bingo"):e+1===n&&a(t).addClass("active")}),$.style.display="block"}function X(){r.style.display="block",W();let t=0;for(;t<2500;){let e=Math.floor(Math.random()*401)+400;t+=e,setTimeout(W,t)}setTimeout(()=>{r.style.display="none"},t)}function W(){for(let t=0;t<5;t++){let e=100*(Math.random()*2.5);const o=document.createElement("img");o.src=V,o.style.position="absolute",o.style.width=`${e}px`,o.style.height="auto",o.style.left=Math.floor(Math.random()*(r.clientWidth-e))+"px",o.style.top=Math.floor(Math.random()*(r.clientHeight-e*1.5))+"px",r.appendChild(o)}setTimeout(z,1194)}function z(){for(let t=0;t<5;t++)r.removeChild(r.children[0])}function D(){const t=Math.ceil((c-i)/l);let e;do e=Math.floor(Math.random()*(t+1));while(i+e*l===0);return i+e*l}a(".jumpBtn").on("animationiteration",()=>{a(".jumpBtn").css("animation-play-state","paused"),setTimeout(()=>{a(".jumpBtn").css("animation-play-state","running")},2e3)});function M(t){const e=t-a(".lives").children().length;if(!(e===0||t<0)){if(e<0){a(".lives > :last-child").remove();return}for(let o=0;o<e;o++){const K=a("<img>").attr("src","../../../../assets/images/game_images/lives.svg").attr("alt","lives image").attr("width","60").attr("height","auto").css("margin-right","-30px");a(".lives").append(K)}}}function _(t){R.textContent=t}}},lt={class:"gameWidonw"},it=et('<div class="gameBtn levelBtn" data-v-21bfc9c8><button class="level1" data-v-21bfc9c8>1</button><button class="level2" data-v-21bfc9c8>2</button><button class="level3" data-v-21bfc9c8>3</button><button class="level4" data-v-21bfc9c8>4</button><button class="level5" data-v-21bfc9c8>5</button></div><div class="canvas" data-v-21bfc9c8><canvas class="canvas1" data-v-21bfc9c8></canvas><div class="gameRule" data-v-21bfc9c8><h1 id="start" data-v-21bfc9c8> 遊戲玩法： <span id="version" data-v-21bfc9c8>V0.1.7</span></h1><h1 class="context" data-v-21bfc9c8>電腦使用滑鼠滾輪上下調整刻度</h1><h1 class="context" data-v-21bfc9c8>平板使用觸控上下滑動調整刻度</h1><h1 class="context" data-v-21bfc9c8>填入相對的容量後，送出答案</h1><h1 class="context" data-v-21bfc9c8>與題目的要求符合過關</h1><h1 id="end" data-v-21bfc9c8>準備好了嗎？點擊遊戲開始！</h1></div><div class="topic" data-v-21bfc9c8></div><div class="lives" data-v-21bfc9c8></div><div class="game_area" data-v-21bfc9c8><div class="water_scale" data-v-21bfc9c8></div><div class="water_container" data-v-21bfc9c8><div class="milliliterContainer" data-v-21bfc9c8><li class="top" data-v-21bfc9c8>10</li><li class="mid" data-v-21bfc9c8>5</li><li class="bottom" data-v-21bfc9c8>0</li></div><div class="water" data-v-21bfc9c8></div><ul class="scales" data-v-21bfc9c8></ul></div><div class="water_control" data-v-21bfc9c8><div class="updown" data-v-21bfc9c8>⇅</div></div></div><div class="result" data-v-21bfc9c8><h1 id="bingo" data-v-21bfc9c8>Ｏ</h1><h1 id="dada" data-v-21bfc9c8>Ｘ</h1><h1 data-v-21bfc9c8></h1></div><div id="firework-container" data-v-21bfc9c8></div></div><div class="gameBtn optionsBtn" data-v-21bfc9c8><button id="lastBtn" data-v-21bfc9c8>上一關</button><button id="startBtn" data-v-21bfc9c8>遊戲開始</button><button id="nextBtn" data-v-21bfc9c8>下一關</button><button id="hintBtn" data-v-21bfc9c8>提示</button><button id="submitBtn" class="jumpBtn" data-v-21bfc9c8>送出答案</button></div>',3),rt=[it];function dt(p,v,x,S,q,A){return Z(),tt("div",lt,rt)}const mt=st(ot,[["render",dt],["__scopeId","data-v-21bfc9c8"]]);export{mt as default};
