<template>
  <layout>
    <div class="">
      <div class="flex flex-row justify-around">
        <h1 class="font-bold text-xl">Danh sách bài viết</h1>
        <div class="w-56 bg-gray-200 h-1"></div>
        <button
          type="button"
          class="text-white bg-green-400 rounded-lg text-lg p-1"
        >
          Thêm bài viết +
        </button>
      </div>
      <div class="bg-black w-4/5 h-1 mx-auto mt-1"></div>
      <!-- items -->
      <div
        class="grid lg:grid-cols-3 md:grid-cols-1 text-center justify-center gap-8 mx-20 mt-20"
      >
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh1.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            CHÚC MỪNG SINH NHẬT BẠN – TRUNG NGUYÊN E-COFFEE ƯU ĐÃI 30%
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh2.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            CHÀO THÁNG 3 TƯƠI MỚI VỚI BỘ BA SỮA CHUA TRÁI CÂY TẠI TRUNG NGUYÊN
            E-COFFEE
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh3.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            THÊM BẠN THÊM VUI – NHẬN NGAY ƯU ĐÃI MUA 03 TẶNG 01​
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh4.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            CHỈ 65 TRIỆU ĐỒNG HỢP TÁC CÙNG THƯƠNG HIỆU TRUNG NGUYÊN
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh5.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            CÙNG HIỆN THỰC HOÁ KHÁT VỌNG KHỞI NGHIỆP KINH DOANH VỚI NGÀNH CÀ PHÊ
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh6.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            KHỞI NGHIỆP THÀNH CÔNG – GIÀU CÓ BỀN VỮNG CÙNG TRUNG NGUYÊN E-COFFEE
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh7.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            Cà Phê Chai Hạt Mộc Trung Nguyên E-Coffee
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh8.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            Sẻ Chia Năng Lượng Ngọt Ngào Với Pudding Legend Cà Phê Sữa Đá
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <img
            src="../../assets/img/hinh9.jpg"
            alt=""
            class="w-full h-60 hover:scale-[1.1] ease-in duration-300"
          />
          <h2 class="font-bold mt-4">
            Nạp Năng Lượng Sáng Tạo, Tươi Trẻ Với Cà Phê Trung Nguyên Legend
            Passiona Khổ Qua
          </h2>
          <div class="mt-4">
            <button
              type="button"
              class="bg-yellow-300 text-lg text-white rounded-lg mx-5 p-2"
            >
              Sửa
            </button>
            <button
              type="button"
              class="bg-red-500 text-lg text-white rounded-lg mx-5 p-2"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";
export default {
  components: {
    Layout,
  },
};
</script>
