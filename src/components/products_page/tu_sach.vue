<template>
    <div id="product-list" class="max-w-[1080px] mx-auto lg:mt-[45px] ">

        <div class="justify-center box-content font-bold mt-10">
            <h2 class="text-left text-lg pl-[5%] uppercase">Sản phẩm sách quý</h2>
            <div class="bg-[#999] w-full h-px mb-10"></div>
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
</template>

<script>
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

    },
    el: '#product-list',
    data() {
        return {
            products: tu_sach_products
        }
    },
}


</script>