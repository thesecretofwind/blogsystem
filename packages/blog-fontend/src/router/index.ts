

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   component: () => import('@/pages/Home.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   // name: 'Home',
  // }, //首页
  {
    path: '/home',
    component: Home,
    meta: {
      auth: true,
    },
    name: 'Home',
  }, //首页
  // {
  //   path: '/share',
  //   component: () => import('@/pages/Share.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   name: 'Share',
  // }, //分类
  // {
  //   path: '/detail-article',
  //   component: () => import('@/pages/DetailArticle.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   name: 'DetailArticle',
  // }, //分享详情
  // {
  //   path: '/reward',
  //   component: () => import('@/pages/Reward.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   name: 'Reward',
  // }, //赞赏
  // {
  //   path: '/friendsLink',
  //   component: () => import('@/pages/FriendsLink.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   name: 'FriendsLink',
  // }, //友链

  // {
  //   path: '/login',
  //   component: () => import('@/pages/Login.vue'),
  //   meta: {
  //     auth: false,
  //   },
  //   name: 'Login',
  // }, //注册登录
  // {
  //   path: '/userInfo',
  //   component: () => import('@/pages/UserInfo.vue'),
  //   meta: {
  //     auth: true,
  //   },
  //   name: 'UserInfo',
  // }, //用户个人中心
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // scrollBehavior: function (to, from, savePosition) {
  //   if (savePosition) {
  //     return savePosition;
  //   } else {
  //     var top;
  //     if (window.innerWidth >= 700) {
  //       top = 676;
  //     } else {
  //       top = 267;
  //     }
  //     return {
  //       left: 0,
  //       top: top,
  //     };
  //   }
  // },
});

export default router;
