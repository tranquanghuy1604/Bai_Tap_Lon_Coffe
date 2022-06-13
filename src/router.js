import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import Recruit from "./views/recruit.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/recruit",
    component: Recruit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
