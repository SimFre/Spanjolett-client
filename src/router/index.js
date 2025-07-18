// @ == src folder
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Start",
      component: () => import("@/views/Start.vue"),
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/Welcome.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("@/views/Settings.vue"),
    },
    // {
    //   path: "/:slug(live|vod|series)/play",
    //   name: "Player",
    //   component: () => import("@/views/Player.vue"),
    //   props: true,
    // },
    // {
    //   path: "/streamer",
    //   name: "Streamer",
    //   component: Streamer,
    // },
    // {
    //   path: '/play',
    //   name: 'Play',
    //   component: Player,
    // },
    // {
    //   path: '/:slug(\\d+-\\d+/?)',
    //   name: 'Player',
    //   component: Player,
    //   // props: true,
    //   // children: [
    //   //   {
    //   //     path: '',
    //   //     name: 'Default',
    //   //     redirect: function (route) {
    //   //       console.log(route.path);
    //   //       return route.path + '/play';
    //   //     },
    //   //   },
    //   // ]
    // },
  ],
});

export default router;
