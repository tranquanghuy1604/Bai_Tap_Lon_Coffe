<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <button class="text-gray-500 focus:outline-none lg:hidden"></button>
      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          class="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="flex items-center">
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
          class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
          style="display: none"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Trang cá nhân</a
          >
          <a
            href="/admin"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Đăng xuất</a
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
