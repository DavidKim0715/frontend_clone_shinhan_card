import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "@/views/default/home/HomePage.vue"),
    meta: {
      layout: "AppLayoutDefault",
      requiredAuth: false,
    },
  },
  {
    path: "/myInfo",
    name: "MyInfo",
    component: () =>
      import(
        /* webpackChunkName: "MyInfoPage" */ "@/views/emptyLayout/userInfo/UserInfoPage.vue"
      ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/benefit",
    name: "Benefit",
    component: () =>
      import(
        /* webpackChunkName: "BenefitPage" */ "@/views/mainLayout/benefit/BenefitPage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/finance",
    name: "Finance",
    component: () =>
      import(
        /* webpackChunkName: "FinancePage" */ "@/views/mainLayout/finance/FinancePage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/card",
    name: "Card",
    component: () =>
      import(
        /* webpackChunkName: "CardPage" */ "@/views/mainLayout/card/CardPage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/convenience",
    name: "Convenience",
    component: () =>
      import(
        /* webpackChunkName: "ConveniencePage" */ "@/views/mainLayout/convenience/ConveniencePage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/digital",
    name: "Digital",
    component: () =>
      import(
        /* webpackChunkName: "DigitalPage" */ "@/views/mainLayout/digital/DigitalPage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/life",
    name: "Life",
    component: () =>
      import(
        /* webpackChunkName: "LifePage" */ "@/views/mainLayout/life/LifePage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/topsClub",
    name: "TopsClub",
    component: () =>
      import(
        /* webpackChunkName: "TopsClubPage" */ "@/views/mainLayout/topsClub/TopsClubPage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/cS",
    name: "CS",
    component: () =>
      import(
        /* webpackChunkName: "CSPage" */ "@/views/mainLayout/cs/CSPage.vue"
        ),
    meta: {
      layout: "AppLayoutMain",
      requiredAuth: false,
    },
  },
  {
    path: "/config",
    name: "Config",
    component: () =>
      import(
        /* webpackChunkName: "ConfigPage" */ "@/views/emptyLayout/config/ConfigPage.vue"
      ),
    meta: {
      layout: "AppLayoutDefault",
      requiredAuth: false,
    },
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: () =>
      import(
        /* webpackChunkName: "SignInPage" */ "@/views/emptyLayout/login/SignInPage.vue"
      ),
    meta: {
      layout: "AppLayoutMobile",
      requiredAuth: false,
    },
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: () =>
        import(
            /* webpackChunkName: "SignInPage" */ "@/views/emptyLayout/registration/SignUpPage.vue"
            ),
    meta: {
      layout: "AppLayoutMobile",
      requiredAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: () => import("@/views/Error404Page.vue"),
    meta: {
      layout: "AppLayoutEmpty",
      requiredAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function (to, from, next) {
  console.log(store.getters["auth/getAuthData"].token);
  if (!store.getters["auth/getAuthData"].token) {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    if (access_token) {
      const data = {
        access_token: access_token,
        refresh_token: refresh_token,
      };
      store.commit("service/setToken", data);
    }
  }
  const auth = store.getters["service/isTokenActive"];

  if (to.fullPath === "/") {
    return next();
  } else if (auth && !to.meta.requiredAuth) {
    return next({ path: "/myInfo" });
  } else if (!auth && to.meta.requiredAuth) {
    return next({ path: "/signIn" });
  }
  return next();
});

export default router;
