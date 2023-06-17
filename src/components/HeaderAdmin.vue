<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center flex-1 w-[100%]">
      <button class="text-gray-500 focus:outline-none lg:hidden"></button>
    </div>
    <div class="flex items-center">
      <!-- <div class="px-[10px] py-[10px] bg-[#9A3012] rounded-md">NV</div> -->
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <i class="fa-solid fa-bell"></i>
      </button>
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        >
          <img
            class="object-cover w-full h-full"
            src="https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
          style="display: none"
        ></div>
        <div
          v-show="dropdownOpen"
          class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-lg shadow-2xl"
          style="display: none"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer mt-[5px]"
          >
            <p class="font-[600] text-[13px]">Trần Quang Huy</p>
            <span class="text-[12px] text-[#ccc]">quanhuytran12@gmail.com</span>
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Quản lý tài khoản</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Đổi mật khẩu</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { useSidebar } from "../hooks/useSidebar";

const dropdownOpen = ref(false);
// const { isOpen } = useSidebar();
</script>
