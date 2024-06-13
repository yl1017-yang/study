import { createWebHistory, createRouter } from "vue-router";
import Index from './Index.vue';
import Js from './Js.vue';
import Gsap from './Gsap.vue';
import GsapCdn from './GsapCdn.vue';
import GsapLoad from './GsapLoad.vue';

const routes = [
  {
    path: "/study/",
    name: "Index",
    component: Index,
  },
  {
    path: "/study/js",
    name: "Js",
    component: Js,
  },
  {
    path: "/study/Gsap",
    name: "Gsap",
    component: Gsap,
  },
  {
    path: "/study/GsapCdn",
    name: "AppGsapCdn",
    component: GsapCdn,
  },
  {
    path: "/study/GsapLoad",
    name: "AppGsapLoad",
    component: GsapLoad,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
