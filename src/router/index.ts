import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/views/main/HomePage.vue'),
    meta: {
      layout: 'AppLayoutDefault',
      requiredAuth : false
    },
  },
  {
    path : '/myInfo',
    name : 'MyInfo',
    component : () => import(/* webpackChunkName: "MyInfoPage" */ '@/views/userInfo/UserInfoPage.vue'),
    meta: {
      layout: 'AppLayoutDefault',
      requiredAuth : true
    },
  },
  {
    path : '/config',
    name : 'Config',
    component : () => import(/* webpackChunkName: "ConfigPage" */ '@/views/config/ConfigPage.vue'),
    meta: {
      layout: 'AppLayoutDefault',
      requiredAuth : false
    },
  },
  {
    path : '/signIn',
    name : 'SignIn',
    component : () => import(/* webpackChunkName: "SignInPage" */ '@/views/login/SignInPage.vue'),
    meta: {
      layout: "AppLayoutDefault",
      requiredAuth : false
    },
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'Error',
    component: () => import('@/views/Error404Page.vue'),
    meta:{
      layout: 'AppLayoutEmpty',
      requiredAuth : false
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function(to,from, next) {
  console.log(store.getters["auth/getAuthData"].token);
  if(!store.getters["auth/getAuthData"].token){
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    if(access_token){
      const data = {
        access_token:access_token,
        refresh_token:refresh_token
      };
      store.commit('service/setToken',data);
    }
  }
  const auth = store.getters["service/isTokenActive"]

  if(to.fullPath === "/"){
    return next()
  }
  else if(auth && !to.meta.requiredAuth){
    return next({path:"/myInfo"})
  }
  else if(!auth && to.meta.requiredAuth){
    return next({path: '/signIn'})
  }
  return next()
})

export default router
