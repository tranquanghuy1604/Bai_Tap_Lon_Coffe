<template>
  <layout>
    <div class="px-[40px] mb-[40px]">
      <h2 class="text-[28px] font-[700]">Quản lý tin tức</h2>
      <form action="" class="inline-block ml-1">
        <input
          type="search"
          name=""
          id=""
          class="h-10 p-2.5 my-2.5 w-80 border rounded-[5px] border-gray-500 outline-none"
          placeholder="Tìm kiếm..."
        />
      </form>
      <a href="/themtintuc">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-[20px]"
        >
          <i class="fa-solid fa-plus"></i>
          Thêm tin tức
        </button>
      </a>
      <div
        class="border-2 border-[#000] py-[20px] px-[20px] border-solid rounded-xl"
      >
        <div class="border-b-2 border-[#000] border-solid">
          <h2 class="text-[#000000] text-[24px] font-[500]">
            Danh sách tin tức
          </h2>
        </div>
        <div
          class="grid lg:grid-cols-3 md:grid-cols-1 text-center justify-center gap-8 mt-[40px]"
        >
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh1.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              CHÚC MỪNG SINH NHẬT BẠN – TRUNG NGUYÊN E-COFFEE ƯU ĐÃI 30%
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh2.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              CHÀO THÁNG 3 TƯƠI MỚI VỚI BỘ BA SỮA CHUA TRÁI CÂY TẠI TRUNG NGUYÊN
              E-COFFEE
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh3.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              THÊM BẠN THÊM VUI – NHẬN NGAY ƯU ĐÃI MUA 03 TẶNG 01​
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh4.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              CHỈ 65 TRIỆU ĐỒNG HỢP TÁC CÙNG THƯƠNG HIỆU TRUNG NGUYÊN
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh5.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              CÙNG HIỆN THỰC HOÁ KHÁT VỌNG KHỞI NGHIỆP KINH DOANH VỚI NGÀNH CÀ
              PHÊ
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh6.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              KHỞI NGHIỆP THÀNH CÔNG – GIÀU CÓ BỀN VỮNG CÙNG TRUNG NGUYÊN
              E-COFFEE
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh7.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              Cà Phê Chai Hạt Mộc Trung Nguyên E-Coffee
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh8.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              Sẻ Chia Năng Lượng Ngọt Ngào Với Pudding Legend Cà Phê Sữa Đá
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 relative">
            <img
              src="../../assets/img/hinh9.jpg"
              alt=""
              class="cursor-pointer border-2 object-cover border-[#000] border-solid rounded-md w-full h-60"
            />
            <h2 class="font-bold mt-[20px] mb-[50px]">
              Nạp Năng Lượng Sáng Tạo, Tươi Trẻ Với Cà Phê Trung Nguyên Legend
              Passiona Khổ Qua
            </h2>
            <div
              class="mb-[20px] absolute py-[30px] bottom-0 translate-y-[50px] translate-x-[58%]"
            >
              <a href="/suatintuc">
                <button
                  type="button"
                  class="px-[20px] py-[5px] border-2 border-solid border-[#000] bg-[#B4CD93] text-lg text-white rounded-lg"
                >
                  Sửa
                </button>
              </a>
              <button
                type="button"
                class="ml-[10px] px-[20px] py-[5px] border-2 border-solid border-[#000] bg-red-500 text-lg text-white rounded-lg"
                @click="() => (show = true)"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog v-if="show" @close="closeModal" />
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";
import Dialog from "../admin/user/deletepopup.vue";
export default {
  components: {
    Layout,
    Dialog,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal(isOpen) {
      this.show = isOpen;
    },
  },
};
</script>
