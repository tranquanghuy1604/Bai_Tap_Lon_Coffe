import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import Recruit from "./views/recruit.vue";
import Shopping from "./views/shopping.vue";
import Nhuongquyen from "./views/nhuong_quyen.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/recruit",
    component: Recruit,
  },
  {
    path: "/Giohang",
    component: Shopping,
  },
  {
    path: "/nhuongquyen",
    component: Nhuongquyen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
