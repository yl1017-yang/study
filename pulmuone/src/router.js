import { createWebHistory, createRouter } from "vue-router";
import Index from './Index.vue';
import Js from './Js.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
