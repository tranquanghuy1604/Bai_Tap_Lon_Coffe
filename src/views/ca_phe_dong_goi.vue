<template>
    <Header />
    <div id="product-list" class="max-w-[1080px] mx-auto lg:mt-[45px] ">

        <div class="grid lg:grid-cols-2 mobile:grid-cols-1 h-16">
            <div class="flex items-center mobile:justify-center lg:justify-start">
                <div class="text-lg">
                    <a href="#" class="text-gray-500 hover:text-black">Trang chủ</a>
                    <span>/</span>
                    <span class="font-semibold">Cà Phê Đóng Gói</span>
                </div>
            </div>

            <div class="flex items-center h-full lg:justify-around mobile:justify-center">
                <div class="lg:grow">
                    <p v-if="products.length > 40" class="inline-block">Hiển thị 1–40 của {{products.length}} kết quả</p>
                    <p  class="lg:inline-block mobile:hidden">Hiển thị tất cả {{products.length}} kết quả</p>
                </div>
                <div class="lg:grow inline-block">
                    <select @change="onChange" class="w-full grow inline-block border border-gray-200">
                        <option value="menu_order" selected>Thứ tự mặc định</option>
                        <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                        <option value="lowToHigh">Thứ tự theo giá: thấp đến cao</option>
                        <option value="highToLow">Thứ tự theo giá: cao xuống thấp</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 gap-3 my-[16px]">
            <div v-for="product in products"
                :key="product.id"
                class="product-box px-2 pb-4 border border-b-2 cursor-pointer">

                <div class="product-box hover:target:cart-icon:visible">
                    <div class="relative product-box_img">
                        <img :src="product.image">

                        <button class="absolute product-box_cart text-2xl bottom-0 invisible " style="animation: fadeIn 1s">
                            <span>
                                <i class="fa-solid fa-bag-shopping"></i>
                            </span>
                        </button>
                    </div>
                    <div class="px-2.5 pb-5 pt-2.5 text-center">
                        <div class="">
                            <p class="hover:text-yellow-200">{{product.product_name}}</p>
                        </div>
                        <div>
                            <span class="product-box_price font-semibold">{{product.intro_price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <Footer />
</template>


<script>
    import Header from "../components/header.vue";
    import Footer from "../components/footer.vue";
    const ca_phe_dong_goi_products = [
        {
            product_id: "0001",
            product_name: "Bộ quà tặng Trung Nguyên Legend",
            intro_price: "2.180.000",
            price: "2180000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/Hop-Qua-ABCD.jpg",
            quantity: "4",
            popularity:"19079",
        },

        {
            product_id: "0002",
            product_name: "Cà phê Drip 1 - Culi Robusta",
            intro_price:  "179.500",
            price: "179500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-hat-1-culi-robusta-3kg-1-300x300.jpg",
            quantity: "3",
            popularity:"15460",
        },
        {
            product_id: "0003",
            product_name: "Cà Phê Espresso Buôn Ma Thuột",
            intro_price:  "179.000",
            price: "179000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Buon-Ma-Thuot-1-300x300.png",
            quantity: "3",
            popularity:"25244",
        },
        {
            product_id: "0004",
            product_name: "Cà Phê Chế Phin 1",
            intro_price:  "104.500",
            price: "104500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-1-300x300.jpg",
            quantity: "3",
            popularity:"10346",
        },
        {
            product_id: "0005",
            product_name: "Cà Phê Chế Phin 2",
            intro_price:  "120.000",
            price: "120000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-2-300x300.jpg",
            quantity: "3",
            popularity:"30802",
        },
        {
            product_id: "0006",
            product_name: "Cà Phê Chế Phin 3",
            intro_price:  "141.000",
            price: "141000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-3-300x300.jpg",
            quantity: "6",
            popularity:"23652",
        },
        {
            product_id: "0007",
            product_name: "Cà Phê Chế Phin 4",
            intro_price:  "167.000",
            price: "167000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-4-300x300.jpg",
            quantity: "3",
            popularity:"63751",
        },
        {
            product_id: "0008",
            product_name: "Cà Phê Chế Phin 5",
            intro_price:  "199.000",
            price: "199000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/CP-5-300x300.jpg",
            quantity: "3",
            popularity:"16846",
        },
        {
            product_id: "0009",
            product_name: "Cà Phê Drip 2 – Robusta Arabica",
            intro_price:  "223.833",
            price: "223833",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-2-Arabica-Robusta-3kg-300x300.jpg",
            quantity: "3",
            popularity:"13130",
        },
        {
            product_id: "0010",
            product_name: "Cà Phê Drip 4 – Premium Culi",
            intro_price:  "286.524",
            price: "286524",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-4-Culi-Thuong-Hang-3kg-300x300.jpg",
            quantity: "3",
            popularity:"24124",
        },
        {
            product_id: "0011",
            product_name: "Cà Phê Drip 5 – Culi Arabica",
            intro_price:  "360.500",
            price: "360500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-5-Culi-Arabica-3kg-300x300.jpg",
            quantity: "3",
            popularity:"39613",
        },
        {
            product_id: "0012",
            product_name: "Cà Phê Drip 8 – Legend",
            intro_price:  "806.833",
            price: "806833",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Tem-Hat-8-_-3kg-300x300.jpg",
            quantity: "3",
            popularity:"98464",
        },
        {
            product_id: "0013",
            product_name: "Cà Phê G7 3in1 – Hộp 21 Gói",
            intro_price:  "60.000",
            price: "60000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/HinhRetail-18-300x300.jpg",
            quantity: "3",
            popularity:"37845",
        },
        {
            product_id: "0014",
            product_name: "Cà Phê G7 3in1 – Bịch 50 Sachets",
            intro_price:  "135.500",
            price: "135500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/HinhRetail-15-300x300.jpg",
            quantity: "3",
            popularity:"27145",
        },
        {
            product_id: "0015",
            product_name: "Cà Phê G7 3in1 – Hộp 18 Sticks",
            intro_price:  "54.500",
            price: "54500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/G7-Hop-18st-1-300x300.jpg",
            quantity: "3",
            popularity:"51008",
        },
        {
            product_id: "0016",
            product_name: "Cà Phê G7 hòa tan đen",
            intro_price:  "27.000",
            price: "27000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/G7-hoa-tan-den-15-goi-300x300.jpg",
            quantity: "3",
            popularity:"73456",
        },
        {
            product_id: "0017",
            product_name: "Cà Phê Gourmet Blend",
            intro_price:  "111.500",
            price: "111500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Gourmet-Blend-final-300x300.png",
            quantity: "3",
            popularity:"15993",
        },
        {
            product_id: "0018",
            product_name: "Cà Phê Hạt Mộc Legend Success 8 (340g)",
            intro_price:  "368.000",
            price: "368000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/Success-8-1-300x300.jpg",
            quantity: "3",
            popularity:"28287",
        },
        {
            product_id: "0019",
            product_name: "Cà phê hòa tan G7 Gu mạnh X2",
            intro_price:  "53.500",
            price: "53500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/HinhRetail-20-300x300.jpg",
            quantity: "3",
            popularity:"27891",
        },
        {
            product_id: "0020",
            product_name: "Cà phê Legend 225gr",
            intro_price:  "1.004.000",
            price: "1004000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/LEgend-300x300.jpg",
            quantity: "3",
            popularity:"21265",
        },
        {
            product_id: "0021",
            product_name: "Cà Phê Legend Classic – Bịch 24",
            intro_price:  "69.000",
            price: "69000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/24-goi-mang-300x300.jpg",
            quantity: "3",
            popularity:"68370",
        },
        {
            product_id: "0022",
            product_name: "Cà Phê Legend Classic – Bịch 50",
            intro_price:  "139.000",
            price: "139000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/z3269273892848_c3a31b9e4b2894b54781b5e237e5e6b5-1-300x300.jpg",
            quantity: "3",
            popularity:"46524",
        },
        {
            product_id: "0023",
            product_name: "Cà phê Legend Classic Hộp 12",
            intro_price:  "40.000",
            price: "40000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/Trung-Nguyen-Legend-Classic_Hop-12-sticks-300x300.jpg",
            quantity: "3",
            popularity:"14455",
        },
        {
            product_id: "0024",
            product_name: "Cà Phê Legend Sữa Đá (9 gói)",
            intro_price:  "78.000",
            price: "78000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/07/9-goi-mang-300x300.jpg",
            quantity: "3",
            popularity:"23100",
        },
        {
            product_id: "0025",
            product_name: "Cà Phê N – Sức Sống",
            intro_price:  "85.253",
            price: "85253",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Nau-suc-song-dai-ngan-500g-300x300.jpg",
            quantity: "3",
            popularity:"17188",
        },
        {
            product_id: "0026",
            product_name: "Cà Phê Passiona Hòa Tan 4in1",
            intro_price:  "111.500",
            price: "111500",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/Passiona-mang-300x300.jpg",
            quantity: "3",
            popularity:"15358",
        },
        {
            product_id: "0027",
            product_name: "Cà Phê Phin Giấy Trung Nguyên Legend Americano",
            intro_price:  "118.000",
            price: "118000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/HOP-PHIN-GIAY-AMERICANO-300x300.png",
            quantity: "3",
            popularity:"45439",
        },
    ]

    const tu_sach_products = [        
        {
            product_id: "0200",
            product_name: "Bàn Về Khế Ước Xã Hội",
            intro_price:  "125.000",
            price: "125000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/B%C3%A0n-V%E1%BB%81-Kh%E1%BA%BF-%C6%AF%E1%BB%9Bc-X%C3%A3-H%E1%BB%99i-300x300.jpg",
            quantity: "3",
            popularity:"38520",
        },
        {
            product_id: "0201",
            product_name: "Chiến Tranh Tiền Tệ",
            intro_price:  "138.000",
            price: "138000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/08/97476627_3095602150478764_5421794692440260608_n-300x300.jpg",
            quantity: "3",
            popularity:"56804",
        },
        {
            product_id: "0202",
            product_name: "Chính Trị Luận",
            intro_price:  "169.000",
            price: "169000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Ch%C3%ADnh-Tr%E1%BB%8B-Lu%E1%BA%ADn-1-300x300.jpg",
            quantity: "3",
            popularity:"14740",
        },
        {
            product_id: "0203",
            product_name: "Quân Vương Thuật Cai Trị",
            intro_price:  "109.000",
            price: "109000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Qu%C3%A2n-V%C6%B0%C6%A1ng-Thu%E1%BA%ADt-Cai-Tr%E1%BB%8B-300x300.jpg",
            quantity: "3",
            popularity:"82349",
        },
        {
            product_id: "0204",
            product_name: "Sự-Va-Chạm-Giữa-Các-Nền-Văn-Minh-Và-Sự-Tái-Lập-Trật-Tự-Thế-Giới-300x300",
            intro_price:  "209.000",
            price: "209000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/S%E1%BB%B1-Va-Ch%E1%BA%A1m-Gi%E1%BB%AFa-C%C3%A1c-N%E1%BB%81n-V%C4%83n-Minh-V%C3%A0-S%E1%BB%B1-T%C3%A1i-L%E1%BA%ADp-Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"10844",
        },
        {
            product_id: "0205",
            product_name: "Trật Tự Thế Giới",
            intro_price:  "209.000",
            price: "209000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Tr%E1%BA%ADt-T%E1%BB%B1-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"23849",
        },
        {
            product_id: "0205",
            product_name: "Tương Lai Của Quyền Lực",
            intro_price:  "135.000",
            price: "135000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/T%C6%B0%C6%A1ng-Lai-C%E1%BB%A7a-Quy%E1%BB%81n-L%E1%BB%B1c-300x300.jpg",
            quantity: "3",
            popularity:"19593",
        },
        {
            product_id: "0205",
            product_name: "Văn Minh Phương Tây Và Phần Còn Lại Của Thế Giới",
            intro_price:  "189.000",
            price: "189000",
            image: "https://trungnguyenecoffee.com/wp-content/uploads/2020/09/V%C4%83n-Minh-Ph%C6%B0%C6%A1ng-T%C3%A2y-V%C3%A0-Ph%E1%BA%A7n-C%C3%B2n-L%E1%BA%A1i-C%E1%BB%A7a-Th%E1%BA%BF-Gi%E1%BB%9Bi-300x300.jpg",
            quantity: "3",
            popularity:"24950",
        },
    ]
export default {
    components: {
        Header,
        Footer
    },
        el: '#product-list',
        data() {
            return {
                products: ca_phe_dong_goi_products
            }
        },
        methods: {
            onChange(event) {
                const sort = event.target.value
                if (sort == 'lowToHigh') {
                    this.products.sort((a, b) => a.price - b.price)
                } else if (sort == 'highToLow') {
                    this.products.sort((a, b) => b.price - a.price)
                } else if (sort == 'popularity') {
                    this.products.sort((a, b) => a.popularity - b.popularity)
                } else if (sort == 'menu_order') {
                    this.products.sort((a, b) => a.product_id - b.product_id)
                }
            }
    },
}


</script>