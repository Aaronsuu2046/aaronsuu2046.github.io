import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { requiresAuth: false },
      component: () => import("@/views/index.vue"),
    },
    //將遊戲選擇整合至一個頁面
    {
      path: "/GameSelect/:id",
      name: "GameSelect",
      component: () => import("@/views/GameSelect.vue"),
    },
    {
      path:"/Game/:Subject/:Grade/:id/:GameName",
      name:"Game",
      component:()=>import("@/views/Game.vue")
    },
    {
      path :"/GameTemplate",
      name: "GameTemplate",
      component:()=>import("@/views/GameTemplate/index.vue")
    },
    {
      path :"/PublicSample",
      name: "PublicSample",
      component:()=>import("@/views/GameTemplate/PublicSample.vue")
    },
    {
      path :"/SelectGame",
      name: "SelectGame",
      component:()=>import("@/views/GameTemplate/SelectGame.vue")
    },
    {
      path :"/VirtualNumPad",
      name: "VirtualNumPad",
      component:()=>import("@/components/VirtualNumPad.vue")
    },
    {
      path:"/NumberInputGame",
      name:"NumberInputGame",
      component:()=>import("@/views/GameTemplate/NumberInputGame.vue")
    },
    {
      path:"/testdnd",
      name:"testdnd",
      component:()=>import("@/components/testdnd.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.warn(`route: ${from.path} -> ${to.path}`);
  next();
});

export default router;
