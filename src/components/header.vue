<template>
  <div>
    <div class="h-[100px]">
      <div
        class="flex items-center justify-between px-[15px] max-w-[1080px] mx-auto"
      >
        <a href="" class="logo">
          <img
            class="w-[100px]"
            src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Logo-M%C3%A0u-Tr%E1%BA%B1ng-E-Coffee.png"
            alt=""
          />
        </a>
        <div class="flex w-[700px] bg-[#fff] shadow-md">
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
          <a href="" class="">
            <span class="text-[#666666D9] hover:text-black">
              Đăng nhập / Đăng ký</span
            >
          </a>
        </div>
        <div class="border-r-[1px] border-[#ccc] h-[30px]"></div>
        <div class="cart text-[#666666D9] hover:underline underline-offset-8">
          <a href="" class="">
            <span class="mr-[8px]">0đ</span>
            <i class="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="navbar bg-[#aaaaaa] h-[45px]">
      <div class="flex max-w-[1080px] mx-auto justify-between">
        <div class="ds w-[20%] min-w-[245px] cursor-pointer relative">
          <div
            class="bg-[#000] pb-[12px] py-[10px] pl-[15px] text-[#fff] text-[15px]"
          >
            <i class="mr-[9px] fa-solid fa-bars"></i>
            Danh mục sản phẩm
          </div>
          <ul
            class="hidden list absolute bg-[#fff] shadow-lg min-w-[256px] z-[1]"
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
            <a href="" class="hover:text-black text-white"
              >Câu chuyện thương hiệu</a
            >
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a href="" class="hover:text-black text-white">Nhượng quyền</a>
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a href="" class="hover:text-black text-white">Sản phẩm</a>
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a href="" class="hover:text-black text-white">Khuyến mãi</a>
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a href="" class="hover:text-black text-white">Tin tức</a>
          </li>
          <li class="item px-[10px] border-r-[1px] border-[#888888]">
            <a href="" class="hover:text-black text-white">Cửa hàng</a>
          </li>
          <li class="item px-[10px]">
            <a href="" class="hover:text-black text-white">Tuyển dụng</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dfdsfd",
};
</script>
