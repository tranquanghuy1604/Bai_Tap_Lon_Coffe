<template>
    <layout>
        <div class="px-[40px] mb-[30px]">
            <h2 class="text-[28px] font-[700]">Danh sách sản phẩm</h2>
            <form action="" class="inline-block ml-1">
                <input
                        type="search"
                        name=""
                        id=""
                        class="h-10 p-2.5 my-2.5 w-80 border rounded-[5px] border-gray-500 outline-none"
                        placeholder="Tìm kiếm..."
                />
            </form>
            <a href="/themsanpham">
                <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-[20px]"
                >
                    <i class="fa-solid fa-plus"></i>
                    Thêm Sản Phẩm
                </button>
            </a>
            <div class="border-2 border-[#000] px-[10px] py-[10px]">
                <div>
                    <div
                            class="py-[30px] border-b-2 border-solid border-[#000] mt-[30px]"
                    >
                        <h2 class="text-[20px] font-[500]">DANH SÁCH SẢN PHẨM</h2>
                    </div>
                </div>
                <div class="mt-[30px]">
                    <table class="border-collapse w-full">
                        <tr>
                            <th class="font-bold text-lg">Hình ảnh</th>
                            <th class="font-bold text-lg" style="    padding-left: 80px;
                                text-align: left;">
                                Tên sản phẩm</th>
                            <th class="font-bold text-lg">Giá tiền</th>
                            <th class="font-bold text-lg">Số lượng</th>
                            <th class="font-bold text-lg">Danh mục</th>
                            <th class="font-bold text-lg"></th>
                        </tr>
                        <tr
                                v-for="product in products"
                                :key="product.id"
                                class="hover:bg-gray-100 cursor-pointer"
                        >
                            <th class="font-medium text-sm flex justify-center py-[20px]">
                                <img
                                        class="h-[60px] w-[60px] border-2 border-[#000] object-container rounded-md"
                                        :src="product.image"
                                        alt=""
                                        style="height: 60px; width: 60px"
                                />
                            </th>
                            <th class="font-medium text-sm" style="
                                text-align: left;
                                padding-left: 80px;">
                                {{ product.product_name }}
                            </th>
                            <th class="font-medium text-sm">
                                {{ product.intro_price }}
                            </th>
                            <th class="font-medium text-sm">
                                {{ product.quantity }}
                            </th>
                            <th class="font-medium text-sm">
                                {{ product.tag }}
                            </th>
<!--                            <th-->
<!--                                    v-if="user.status == 'Online'"-->
<!--                                    class="text-green-500 font-medium text-sm"-->
<!--                            >-->
<!--                                {{ user.status }}-->
<!--                            </th>-->
<!--                            <th v-else class="text-red-500 font-medium text-sm">-->
<!--                                {{ user.status }}-->
<!--                            </th>-->
                            <th class="font-medium text-sm">
                                <a href="/suathongtinsanpham">
                                    <button class="p-2 text-yellow-500 hover:text-yellow-400">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <button
                                        type="button"
                                        class="p-2 text-green-500 hover:text-green-400"
                                        @click="() => (show = true)"
                                >
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="flex justify-center items-center">
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
import Dialog from "./user/deletepopup.vue";

const tu_sach_products = [
  {
    product_id: "0200",
    product_name: "Bàn Về Khế Ước Xã Hội",
    intro_price: "125.000",
    price: "125000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/B%C3%A0n-V%E1%BB%81-Kh%E1%BA%BF-%C6%AF%E1%BB%9Bc-X%C3%A3-H%E1%BB%99i-300x300.jpg",
    quantity: "3",
    popularity: "38520",
    tag: "Tủ sách",
  },
  {
    product_id: "0201",
    product_name: "Chiến Tranh Tiền Tệ",
    intro_price: "138.000",
    price: "138000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/97476627_3095602150478764_5421794692440260608_n-300x300.jpg",
    quantity: "3",
    popularity: "56804",
    tag: "Tủ sách",
  },
  {
    product_id: "0202",
    product_name: "Chính Trị Luận",
    intro_price: "169.000",
    price: "169000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Ch%C3%ADnh-Tr%E1%BB%8B-Lu%E1%BA%ADn-1-300x300.jpg",
    quantity: "3",
    popularity: "14740",
    tag: "Tủ sách",
  },
  {
    product_id: "0203",
    product_name: "Quân Vương Thuật Cai Trị",
    intro_price: "109.000",
    price: "109000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Qu%C3%A2n-V%C6%B0%C6%A1ng-Thu%E1%BA%ADt-Cai-Tr%E1%BB%8B-300x300.jpg",
    quantity: "3",
    popularity: "82349",
    tag: "Tủ sách",
  },
  {
    product_id: "0204",
    product_name:
      "Sự-Va-Chạm-Giữa-Các-Nền-Văn-Minh-Và-Sự-Tái-Lập-Trật-Tự-Thế-Giới-300x300",
    intro_price: "209.000",
    price: "209000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/S%E1%BB%B1-Va-Ch%E1%BA%A1m-Gi%E1%BB%AFa-C%C3%A1c-N%E1%BB%81n-V%C4%83n-Minh-V%C3%A0-S%E1%BB%B1-T%C3%A1i-L%E1%BA%ADp-Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
    quantity: "3",
    popularity: "10844",
    tag: "Tủ sách",
  },
  {
    product_id: "0205",
    product_name: "Trật Tự Thế Giới",
    intro_price: "209.000",
    price: "209000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
    quantity: "3",
    popularity: "23849",
    tag: "Tủ sách",
  },
  {
    product_id: "0205",
    product_name: "Tương Lai Của Quyền Lực",
    intro_price: "135.000",
    price: "135000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/T%C6%B0%C6%A1ng-Lai-C%E1%BB%A7a-Quy%E1%BB%81n-L%E1%BB%B1c-300x300.jpg",
    quantity: "3",
    popularity: "19593",
    tag: "Tủ sách",
  },
  {
    product_id: "0205",
    product_name: "Văn Minh Phương Tây Và Phần Còn Lại Của Thế Giới",
    intro_price: "189.000",
    price: "189000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/V%C4%83n-Minh-Ph%C6%B0%C6%A1ng-T%C3%A2y-V%C3%A0-Ph%E1%BA%A7n-C%C3%B2n-L%E1%BA%A1i-C%E1%BB%A7a-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
    quantity: "3",
    popularity: "24950",
    tag: "Tủ sách",
  },
  {
    product_id: "0001",
    product_name: "Bộ quà tặng Trung Nguyên Legend",
    intro_price: "2.180.000",
    price: "2180000",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/Hop-Qua-ABCD.jpg",
    quantity: "4",
    popularity: "19079",
    tag: "Cà phê đóng gói",
  },

  {
    product_id: "0002",
    product_name: "Cà phê Drip 1 - Culi Robusta",
    intro_price: "179.500",
    price: "179500",
    image:
      "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-hat-1-culi-robusta-3kg-1-300x300.jpg",
    quantity: "3",
    popularity: "15460",
    tag: "Cà phê đóng gói",
  },

];
export default {
  components: {
      Dialog,
    Layout,
  },
  el: "#products",
  data() {
    return {
      products: tu_sach_products,
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
