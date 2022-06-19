import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import Recruit from "./views/recruit.vue";
import Shopping from "./views/shopping.vue";
import Tintuc from "./views/tintuc.vue";
import Nhuongquyen from "./views/nhuong_quyen.vue";
import CaPheDongGoi from "./views/ca_phe_dong_goi.vue";
import SachQuy from "./views/sach_quy.vue";

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
  {
    path: "/caPheDongGoi",
    component: CaPheDongGoi,
  },
  {
    path: "/sachQuy",
    component: SachQuy,
  },
  {
    path: "/tintuc",
    component: Tintuc,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
