import { createWebHistory, createRouter } from "vue-router";
import Index from './Index.vue';
import Js from './Js.vue';
import Gsap from './Gsap.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
