<template>
  <div class="flex">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
  </div>
  <div
    :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class="relative overflow-x-hidden inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
  >
    <!-- position: relative;
    overflow-x: hide;
    overflow-x: hidden; -->
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <span class="mx-2 text-2xl font-semibold text-white"
          >Trung Nguyên coffee</span
        >
      </div>
    </div>
    <nav class="mt-10">
      <a
        href="/trangchu"
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
        :class="[$route.name === 'Trangchu' ? activeClass : inactiveClass]"
        to="/trangchu"
      >
        <span class="mx-4"><i class="fa-solid fa-house"></i> Trang chủ</span>
      </a>
      <a
        href="/Quanlynguoidung"
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
        :class="[
          $route.name === 'Quanlynguoidung' ? activeClass : inactiveClass,
        ]"
        to="/Quanlynguoidung"
      >
        <span class="mx-4"
          ><i class="fa-solid fa-users"></i> Quản lý người dùng</span
        >
      </a>
      <a
        href="/Quanlytintuc"
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 hover:bg-gray-600 bg-opacity-25 hover:text-gray-100 hover:border-gray-100"
        :class="[$route.name === 'Quanlytintuc' ? activeClass : inactiveClass]"
        to="/Quanlytintuc"
      >
        <span class="mx-4"
          ><i class="fa-solid fa-newspaper"></i> Quản lý tin tức</span
        >
      </a>
      <a
        href="/Quanlysanpham"
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
        :class="[$route.name === 'Quanlysanpham' ? activeClass : inactiveClass]"
        to="Quanlysanpham"
      >
        <span class="mx-4"
          ><i class="fa-solid fa-box"></i> Quản lý sản phẩm</span
        >
      </a>
      <!-- width: 100%;
    bottom: 0;
    position: absolute;
    margin-bottom: 50px;
    /* text-align: center; */
    margin-left: 30px;
    /* overflow: auto; */
    /* overflow-x: hidden; -->
      <div class="bottom-[0] absolute mb-[50px] ml-[30px] w-[100%]">
        <a href="#" class="flex w-[100%] px-[10px] py-[10px]">
          <img class="w-[10%]" src="src/assets/img/caidat.png" alt="setting" />
          <p class="text-[#fff] ml-[10px]">Cài đặt</p>
        </a>
        <a href="/admin" class="flex w-[100%] px-[10px] py-[10px]">
          <img class="w-[10%]" src="src/assets/img/out.png" alt="out" />
          <p class="text-[#A65959] ml-[10px]">Đăng xuất</p>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../components/admin/hook/useSiidebar";

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);
</script>
