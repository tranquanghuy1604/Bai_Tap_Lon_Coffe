<template>
  <layout>
  
    <div id="products" class="content">
        
        <form action="" class="inline-block ml-1">
            <input type="search" name="" id="" class="h-10 p-2.5 my-2.5 w-80 border border-gray-500 outline-none" placeholder="Tìm kiếm...">
        </form>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            <i class="fa-solid fa-plus"></i>
            Thêm sản phẩm
          </button>

        <div class="">
            <table class="border-collapse w-full">                           
                <tr>
                    <th class="font-bold text-lg border text-left p-2">Hình ảnh</th>
                    <th class="font-bold text-lg border text-left p-2">Sản phẩm</th>
                    <th class="font-bold text-lg border text-left p-2">Giá tiền</th>
                    <th class="font-bold text-lg border text-left p-2">Tồn kho</th>
                    <th class="font-bold text-lg border text-left p-2">Danh mục</th>
                    <th class="font-bold text-lg border text-left p-2"></th>
                </tr>                           
                <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100 cursor-pointer">
                    <th class="font-medium text-sm border text-left p-2">
                        <img class="h-[60px] w-[60px]" :src="product.image" alt="" style="height: 60px; width: 60px;">
                    </th>
                    <th class="font-medium text-sm border text-left p-2">{{product.product_name}}</th>
                    <th class="font-medium text-sm border text-left p-2">{{product.intro_price}}</th>
                    <th class="font-medium text-sm border text-left p-2">{{product.quantity}}</th>
                    <th class="font-medium text-sm border text-left p-2">{{product.tag}}</th>
                    <th class="font-medium text-sm border text-left p-2">
                        <button class="p-2 text-yellow-500 hover:text-yellow-400"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="p-2 text-green-500 hover:text-green-400"><i class="fa-solid fa-trash"></i></button>
                    </th>
                </tr>

            </table>                
            <div class="text-center w-full h-9 overflow-hidden cursor-pointer" style="box-shadow: inset 0px -25px 25px -8px grey; transition: height 0.5s ease-in;">
                    <p>
                        Xem thêm
                        <i class="fa-solid fa-angle-down"></i>
                    </p>
                </div>
        </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";

    const tu_sach_products = [        
        {
            product_id: "0200",
            product_name: "Bàn Về Khế Ước Xã Hội",
            intro_price:  "125.000",
            price: "125000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/B%C3%A0n-V%E1%BB%81-Kh%E1%BA%BF-%C6%AF%E1%BB%9Bc-X%C3%A3-H%E1%BB%99i-300x300.jpg",
            quantity: "3",
            popularity:"38520",
            tag: "Tủ sách",
        },
        {
            product_id: "0201",
            product_name: "Chiến Tranh Tiền Tệ",
            intro_price:  "138.000",
            price: "138000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/97476627_3095602150478764_5421794692440260608_n-300x300.jpg",
            quantity: "3",
            popularity:"56804",
            tag: "Tủ sách",
        },
        {
            product_id: "0202",
            product_name: "Chính Trị Luận",
            intro_price:  "169.000",
            price: "169000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Ch%C3%ADnh-Tr%E1%BB%8B-Lu%E1%BA%ADn-1-300x300.jpg",
            quantity: "3",
            popularity:"14740",
            tag: "Tủ sách",
        },
        {
            product_id: "0203",
            product_name: "Quân Vương Thuật Cai Trị",
            intro_price:  "109.000",
            price: "109000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Qu%C3%A2n-V%C6%B0%C6%A1ng-Thu%E1%BA%ADt-Cai-Tr%E1%BB%8B-300x300.jpg",
            quantity: "3",
            popularity:"82349",
            tag: "Tủ sách",
        },
        {
            product_id: "0204",
            product_name: "Sự-Va-Chạm-Giữa-Các-Nền-Văn-Minh-Và-Sự-Tái-Lập-Trật-Tự-Thế-Giới-300x300",
            intro_price:  "209.000",
            price: "209000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/S%E1%BB%B1-Va-Ch%E1%BA%A1m-Gi%E1%BB%AFa-C%C3%A1c-N%E1%BB%81n-V%C4%83n-Minh-V%C3%A0-S%E1%BB%B1-T%C3%A1i-L%E1%BA%ADp-Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"10844",
            tag: "Tủ sách",
        },
        {
            product_id: "0205",
            product_name: "Trật Tự Thế Giới",
            intro_price:  "209.000",
            price: "209000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"23849",
            tag: "Tủ sách",
        },
        {
            product_id: "0205",
            product_name: "Tương Lai Của Quyền Lực",
            intro_price:  "135.000",
            price: "135000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/T%C6%B0%C6%A1ng-Lai-C%E1%BB%A7a-Quy%E1%BB%81n-L%E1%BB%B1c-300x300.jpg",
            quantity: "3",
            popularity:"19593",
            tag: "Tủ sách",
        },
        {
            product_id: "0205",
            product_name: "Văn Minh Phương Tây Và Phần Còn Lại Của Thế Giới",
            intro_price:  "189.000",
            price: "189000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/V%C4%83n-Minh-Ph%C6%B0%C6%A1ng-T%C3%A2y-V%C3%A0-Ph%E1%BA%A7n-C%C3%B2n-L%E1%BA%A1i-C%E1%BB%A7a-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"24950",
            tag: "Tủ sách",
        },
        {
            product_id: "0001",
            product_name: "Bộ quà tặng Trung Nguyên Legend",
            intro_price: "2.180.000",
            price: "2180000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/Hop-Qua-ABCD.jpg",
            quantity: "4",
            popularity:"19079",
            tag: "Cà phê đóng gói",
        },

        {
            product_id: "0002",
            product_name: "Cà phê Drip 1 - Culi Robusta",
            intro_price:  "179.500",
            price: "179500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-hat-1-culi-robusta-3kg-1-300x300.jpg",
            quantity: "3",
            popularity:"15460",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0003",
            product_name: "Cà Phê Espresso Buôn Ma Thuột",
            intro_price:  "179.000",
            price: "179000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Buon-Ma-Thuot-1-300x300.png",
            quantity: "3",
            popularity:"25244",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0004",
            product_name: "Cà Phê Chế Phin 1",
            intro_price:  "104.500",
            price: "104500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-1-300x300.jpg",
            quantity: "3",
            popularity:"10346",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0005",
            product_name: "Cà Phê Chế Phin 2",
            intro_price:  "120.000",
            price: "120000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-2-300x300.jpg",
            quantity: "3",
            popularity:"30802",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0006",
            product_name: "Cà Phê Chế Phin 3",
            intro_price:  "141.000",
            price: "141000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-3-300x300.jpg",
            quantity: "6",
            popularity:"23652",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0007",
            product_name: "Cà Phê Chế Phin 4",
            intro_price:  "167.000",
            price: "167000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-4-300x300.jpg",
            quantity: "3",
            popularity:"63751",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0008",
            product_name: "Cà Phê Chế Phin 5",
            intro_price:  "199.000",
            price: "199000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-5-300x300.jpg",
            quantity: "3",
            popularity:"16846",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0009",
            product_name: "Cà Phê Drip 2 – Robusta Arabica",
            intro_price:  "223.833",
            price: "223833",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-2-Arabica-Robusta-3kg-300x300.jpg",
            quantity: "3",
            popularity:"13130",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0010",
            product_name: "Cà Phê Drip 4 – Premium Culi",
            intro_price:  "286.524",
            price: "286524",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-4-Culi-Thuong-Hang-3kg-300x300.jpg",
            quantity: "3",
            popularity:"24124",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0011",
            product_name: "Cà Phê Drip 5 – Culi Arabica",
            intro_price:  "360.500",
            price: "360500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-5-Culi-Arabica-3kg-300x300.jpg",
            quantity: "3",
            popularity:"39613",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0012",
            product_name: "Cà Phê Drip 8 – Legend",
            intro_price:  "806.833",
            price: "806833",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-8-_-3kg-300x300.jpg",
            quantity: "3",
            popularity:"98464",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0013",
            product_name: "Cà Phê G7 3in1 – Hộp 21 Gói",
            intro_price:  "60.000",
            price: "60000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/HinhRetail-18-300x300.jpg",
            quantity: "3",
            popularity:"37845",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0014",
            product_name: "Cà Phê G7 3in1 – Bịch 50 Sachets",
            intro_price:  "135.500",
            price: "135500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/HinhRetail-15-300x300.jpg",
            quantity: "3",
            popularity:"27145",
            tag: "Cà phê đóng gói",
        },
        {
            product_id: "0015",
            product_name: "Cà Phê G7 3in1 – Hộp 18 Sticks",
            intro_price:  "54.500",
            price: "54500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/G7-Hop-18st-1-300x300.jpg",
            quantity: "3",
            popularity:"51008",
            tag: "Cà phê đóng gói",
        },
    ]
export default {
  components: {
    Layout,
  },
  el: '#products',
  data() {
    return {
      products: tu_sach_products
    }
  },
};
</script>
