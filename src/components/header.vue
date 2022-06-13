<script></script>
<template>
  <div class="lg:h-[100px] h-[80px] w-full">
    <div
      class="flex items-center justify-between px-[15px] lg:max-w-[1080px] lg:mx-auto"
    >
      <button class="px-[8px]" @click="() => (openModal = true)">
        <i class="text-[28px] lg:hidden fa-solid fa-bars"></i>
      </button>

      <a href="/" class="logo mx-auto lg:mx-0">
        <img
          class="lg:w-[100px] w-[80px]"
          src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Logo-M%C3%A0u-Tr%E1%BA%B1ng-E-Coffee.png"
          alt=""
        />
      </a>
      <div class="hidden lg:flex w-[700px] bg-[#fff] shadow-md">
        <input
          class="flex-1 outline-none p-[8px] border-[1px] border-[#ccc]"
          type="text"
          placeholder="Tìm kiếm sản phẩm"
        />
        <div
          class="search-icon h-full bg-black py-[10px] px-[16px] cursor-pointer"
        >
          <i class="text-[#fff] h-full fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="login hover:underline underline-offset-8">
        <a href="" class="hidden lg:block">
          <span class="text-[#666666D9] hover:text-black">
            Đăng nhập / Đăng ký</span
          >
        </a>
      </div>
      <div class="hidden lg:block border-r-[1px] border-[#ccc] h-[30px]"></div>
      <div
        class="cart text-[#666666D9] hover:underline underline-offset-8 hover:text-black"
      >
        <a href="" class="">
          <span class="hidden lg:inline-block mr-[8px]">0đ</span>
          <i class="text-[25px] fa-solid fa-basket-shopping"></i>
        </a>
      </div>
    </div>

    <div class="hidden lg:block navbar bg-[#aaaaaa] h-[45px]">
      <div class="flex max-w-[1080px] mx-auto justify-between">
        <div class="ds w-[20%] min-w-[245px] cursor-pointer relative">
          <div
            class="bg-[#000] pb-[12px] py-[10px] pl-[15px] text-[#fff] text-[15px]"
          >
            <i class="mr-[9px] fa-solid fa-bars"></i>
            Danh mục sản phẩm
          </div>
          <ul
            class="hidden list absolute bg-[#fff] shadow-lg min-w-[256px] z-[100]"
          >
            <li class="items p-[8px] hover:bg-[#ccc]">
              <a href="">Cà phê chai hạt mộc</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Cà phê đóng gói</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Quà tặng cao cấp</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Vật phẩm bán lẻ</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Sản phẩm sách quý</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Sản phẩm đối tác</a>
            </li>
            <li
              class="subnav items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc] relative"
            >
              <a class="flex justify-between items-center" href="">
                Máy móc thiết bị
                <i class="right-0 fa-solid fa-caret-right"></i>
              </a>
              <ul
                class="hidden subnav-list absolute bg-[#fff] shadow-lg top-0 -right-[181px] min-w-[180px]"
              >
                <li class="subnav-item block p-[6px] hover:bg-[#ccc]">
                  Máy pha ca phê
                </li>
                <li
                  class="subnav-item block p-[6px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
                >
                  Máy say cà phê
                </li>
              </ul>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Công cụ dụng cụ</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Nguyên liệu pha chế</a>
            </li>
            <li
              class="items p-[8px] hover:bg-[#ccc] border-t-[1px] border-solid border-[#ccc]"
            >
              <a href="">Bao bì thương hiệu</a>
            </li>
          </ul>
        </div>
        <ul class="flex items-center justify-between ml-[20px]">
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Câu chuyện thương hiệu</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Nhượng quyền</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Sản phẩm</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Khuyến mãi</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Tin tức</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a
              href=""
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Cửa hàng</a
            >
          </li>
          <li class="item px-[10px]">
            <a
              href="/recruit"
              class="hover:text-black text-white text-[14px] xl:text-[16px]"
              >Tuyển dụng</a
            >
          </li>
        </ul>
      </div>
    </div>
    <modal v-if="openModal" @close="closeModal" class="z-[1000]" />
  </div>
</template>

<script>
import modal from "../component/modal.vue";
export default {
  name: "header",
  components: {
    modal: modal,
  },
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    closeModal(isOpen) {
      this.openModal = isOpen;
    },
  },
};
</script>
