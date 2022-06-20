import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import Recruit from "./views/recruit.vue";
import Shopping from "./views/shopping.vue";
import Tintuc from "./views/tintuc.vue";
import Nhuongquyen from "./views/nhuong_quyen.vue";
import CaPheDongGoi from "./views/ca_phe_dong_goi.vue";
import SachQuy from "./views/sach_quy.vue";
import Cauchuyenthuonghieu from "./views/CauChuyenThuongHieu.vue";
import KhuyenMai from "./views/khuyen_mai.vue";
import SanPham from "./views/products_page.vue";
import Admin from "./views/admin.vue";
import Login from "./views/Login.vue";

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
    path: "/KhuyenMai",
    component: KhuyenMai,
  },
  {
    path: "/SanPham",
    component: SanPham,
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
  },
  {
    path: "/cauchuyenthuonghieu",
    component: Cauchuyenthuonghieu,
  },
  {
    path: "/dashboard",
    component: Admin,
  },
  {
    path: "/admin",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
