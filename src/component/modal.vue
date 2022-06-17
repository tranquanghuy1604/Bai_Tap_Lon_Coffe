<template>
  <div class="menuMobile fixed top-0 right-0 left-0 bottom-0 z-[100] flex open">
    <div class="w-[280px] bg-white left-0 h-[100vh] z-[999] animate-move-out">
      <div class="flex w-[20px] bg-[#ecececec] shadow-md mt-[50px] ml-[26px]">
        <input
          class="flex-1 outline-none px-[3px] border-[1px] border-[#99999]"
          type="text"
          placeholder="Tìm kiếm sản phẩm"
        />
        <div
          class="search-icon h-full bg-black py-[5px] px-[8px] cursor-pointer"
        >
          <i class="text-[#fff] h-full fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <ul class="block mt-[40px]">
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Câu chuyện thương hiệu</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Nhượng quyền</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Sản phẩm</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Khuyến mãi</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href="/tintuc"
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Tin tức</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Cửa hàng</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href="/recruit"
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Tuyển dụng</a
          >
        </li>
        <li class="item py-[14px] border-t-[1px] border-[#99999]">
          <a
            href=""
            class="hover:text-black text-[#888] text-[14px] xl:text-[16px] ml-[12px]"
            >Đăng nhập</a
          >
        </li>
      </ul>
    </div>
    <div class="flex-1 opacity-70 bg-black z-100" @click="closeModal">
      <button
        class="p-1 mt-[10%] float-right opacity-60 cursor-pointer"
        @click="closeModal"
      >
        <i class="fa-solid fa-circle-xmark text-white text-3xl"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>
