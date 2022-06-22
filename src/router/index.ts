import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/views/home.vue";
import Doc from "@/views/doc/index.vue";
import { docRoutes } from "./doc-routes";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/doc",
    redirect: "/doc/intro",
    component: Doc,
    children: docRoutes,
  }];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
});

export default router;