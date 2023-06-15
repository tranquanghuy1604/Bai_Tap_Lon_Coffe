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
import Trangchu from "./components/admin/trangchu.vue";
import Quanlynguoidung from "./components/admin/quanlynguoidung.vue";
import Quanlytintuc from "./components/admin/quanlytintuc.vue";
import Quanlysanpham from "./components/admin/quanlysanpham.vue";
import Dangnhap from "./component/login.vue";
import ThemNguoiDung from "./components/admin/user/addUser.vue";
import SuaThongTinNguoiDung from "./components/admin/user/updateUser.vue";
import Themtintuc from "./components/admin/user/addNews.vue";
import Suatintuc from "./components/admin/user/updateNews.vue";

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
    path: "/Dangnhap",
    component: Dangnhap,
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
  {
    name: "Trangchu",
    path: "/trangchu",
    component: Trangchu,
  },
  {
    name: "Quanlynguoidung",
    path: "/Quanlynguoidung",
    component: Quanlynguoidung,
  },
  {
    name: "Quanlytintuc",
    path: "/Quanlytintuc",
    component: Quanlytintuc,
  },
  {
    name: "Quanlysanpham",
    path: "/Quanlysanpham",
    component: Quanlysanpham,
  },
  {
    name: "Themnguoidung",
    path: "/themnguoidung",
    component: ThemNguoiDung,
  },
  {
    name: "Suathongtinnguoidung",
    path: "/suathongtinnguoidung",
    component: SuaThongTinNguoiDung,
  },
  {
    name: "Themtintuc",
    path: "/themtintuc",
    component: Themtintuc,
  },
  {
    name: "updateNews",
    path: "/suatintuc",
    component: Suatintuc,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
