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
      <div class="py-[20px] px-[20px]">
        <div class="border-b-2 border-[#000] border-solid">
          <h2 class="text-[#000000] text-[24px] font-[500] pb-[10px]">
            Danh sách tin tức
          </h2>
        </div>

        <div class="mt-[30px]">
          <table class="border-collapse w-full">
            <tr>
              <th class="font-bold text-lg">Hình ảnh</th>
              <th class="font-bold text-lg">Tiêu đề</th>
              <th class="font-bold text-lg">Lượt xem</th>
              <th class="font-bold text-lg">Danh mục</th>
              <th class="font-bold text-lg">Ngày đăng</th>
              <th class="font-bold text-lg"></th>
            </tr>
            <tr
              v-for="neww in news"
              :key="neww.id"
              class="hover:bg-gray-100 cursor-pointer"
            >
              <th class="font-medium text-sm flex justify-center py-[20px]">
                <img
                  class="h-[60px] w-[60px] border-2 border-[#000] object-cover rounded-md"
                  :src="neww.image"
                  alt=""
                  style="height: 60px; width: 60px"
                />
              </th>
              <th class="font-medium text-sm text-left pl-[50px]">
                {{ neww.title }}
              </th>
              <th class="font-medium text-sm text-center">
                {{ neww.view }}
              </th>
              <th class="font-medium text-sm text-center">
                {{ neww.category }}
              </th>
              <th class="font-medium text-sm">
                {{ neww.dateSubmitted }}
              </th>
              <th class="font-medium text-sm">
                <a href="/suatintuc">
                  <button
                    class="px-2 pt-1 bg-[#D9D9D9] rounded-md hover:opacity-70"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </a>
                <button
                  type="button"
                  class="ml-3 px-2 pt-1 bg-[#D9D9D9] rounded-md hover:opacity-50"
                  @click="() => (show = true)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </th>
            </tr>
          </table>
        </div>

        <div class="flex justify-center items-center mt-[20px]">
          <p class="text-[#0A4B65] text-[14px]">Kết quả 1-10</p>
          <button
            class="ml-[10px] px-[8px] py-[1px] border-2 border-solid border-[#EFF0F4]"
          >
            <i class="fa-solid fa-caret-left"></i>
          </button>
          <span class="ml-[10px] cursor-pointer text-[12px]">1</span>
          <span class="ml-[10px] cursor-pointer text-[#0A4B65] text-[12px]"
            >2</span
          >
          <span class="ml-[10px] cursor-pointer">...</span>
          <button class="ml-[10px] px-[8px] py-[1px]">
            <i class="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
    </div>
    <Dialog v-if="show" @close="closeModal" />
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";
import Dialog from "../admin/user/deletepopup.vue";

const list_new = [
  {
    id: "0100",
    view: "10.000",
    category: "giải trí",
    title: "CHÚC MỪNG SINH NHẬT BẠN – TRUNG NGUYÊN E-COFFEE ƯU ĐÃI 30%",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh1.jpg",
  },
  {
    id: "0201",
    title: "CHÀO THÁNG 3 TƯƠI MỚI VỚI BỘ BA SỮA CHUA TRÁI CÂY TẠI TRUNG NGUYÊN",
    view: "138.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh2.jpg",
  },
  {
    id: "0202",
    title: "THÊM BẠN THÊM VUI – NHẬN NGAY ƯU ĐÃI MUA 03 TẶNG 01​",
    view: "169.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh3.jpg",
  },
  {
    id: "0203",
    title: "CHỈ 65 TRIỆU ĐỒNG HỢP TÁC CÙNG THƯƠNG HIỆU TRUNG NGUYÊN",
    view: "109.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh4.jpg",
  },
  {
    id: "0204",
    title:
      "CÙNG HIỆN THỰC HOÁ KHÁT VỌNG KHỞI NGHIỆP KINH DOANH VỚI NGÀNH CÀ PHÊ",
    view: "209.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh5.jpg",
  },
  {
    id: "0205",
    title:
      "KHỞI NGHIỆP THÀNH CÔNG – GIÀU CÓ BỀN VỮNG CÙNG TRUNG NGUYÊN E-COFFEE",
    view: "209.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh6.jpg",
  },
  {
    id: "0205",
    title: " Cà Phê Chai Hạt Mộc Trung Nguyên E-Coffee",
    view: "135.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh7.jpg",
  },
  {
    id: "0205",
    title: " Sẻ Chia Năng Lượng Ngọt Ngào Với Pudding Legend Cà Phê Sữa Đá",
    view: "189.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh8.jpg",
  },
  {
    id: "0001",
    title:
      "Nạp Năng Lượng Sáng Tạo, Tươi Trẻ Với Cà Phê Trung Nguyên Legend Passiona Khổ Qua",
    view: "2.180.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh9.jpg",
  },

  {
    id: "0002",
    title: "Cà phê Drip 1 - Culi Robusta",
    view: "179.500",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh10.png",
  },
  {
    id: "0003",
    title: "Cà Phê Espresso Buôn Ma Thuột",
    view: "179.000",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh11.jpg",
  },
  {
    id: "0004",
    title: "Cà Phê Chế Phin 1",
    view: "104.500",
    category: "giải trí",
    dateSubmitted: "12/05/2023",
    image: "src/assets/img/hinh12.jpg",
  },
];
export default {
  components: {
    Layout,
    Dialog,
  },
  data() {
    return {
      show: false,
      news: list_new,
    };
  },
  methods: {
    closeModal(isOpen) {
      this.show = isOpen;
    },
  },
};
</script>
