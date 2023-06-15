<template>
  <layout>
    <div class="px-[40px] mb-[30px]">
      <div class="py-[20px]">
        <h2 class="text-[28px] font-[600]">QUẢN LÝ TIN TỨC</h2>
      </div>
      <div
        class="border-2 border-solid border-[#000] px-[10px] py-[10px] rounded-lg"
      >
        <div class="border-b-2 border-solid border-[#000] py-[10px]">
          <h4 class="text-[18px] font-[500]">Thêm tin tức</h4>
        </div>
        <div class="mt-[10px] flex justify-start">
          <img
            src="https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg"
            alt="addAvatar"
            class="w-[7%] rounded-lg object-cover"
          />
          <div class="ml-[20px]">
            <button class="px-[15px] py-[4px] bg-[#B4CD93] rounded-md">
              Thêm
            </button>
            <p
              class="mt-[4px] text-center text-[12px] font-[400] text-[#808080 ]"
            >
              Ảnh tiêu đề
            </p>
          </div>
        </div>
        <form action="Quanlytintuc" class="mt-[20px]">
          <div class="">
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Tiêu đề
            </p>
            <textarea
              class="bg-[#EAF0F9] w-[30%] h-[70px] px-[10px] rounded-md resize-none"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Danh mục
            </p>
            <input
              class="bg-[#EAF0F9] w-[30%] px-[10px] rounded-md box-border focus:border-none"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="w-[100%]">
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Nội dung
            </p>
            <textarea
              class="bg-[#EAF0F9] w-full rounded-md h-[100px] resize-none px-[10px]"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="flex justify-end mt-[20px]">
            <button
              class="border-2 border-solid border-[#000] bg-[#fff] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
            >
              Hủy
            </button>
            <a href="/Quanlytintuc">
              <button
                class="ml-[10px] border-2 border-solid border-[#000] bg-[#B4CD93] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
              >
                Thêm
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../../DashboardLayout.vue";
export default {
  name: "Themtintuc",
  components: {
    Layout,
  },
};
</script>
