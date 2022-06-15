<template>
    
    <div id="product-list" class="lg:container lg:w-4/6 mx-auto">

        <div class="grid lg:grid-cols-2 sm:grid-cols-1 h-16">
            <div class="flex items-center">
                <div class="text-lg">
                    <a href="#" class="text-gray-500 hover:text-black">Trang chủ</a>
                    <span>/</span>
                    <span class="font-semibold">Cà Phê Đóng Gói</span>
                </div>
            </div>

            <div class="flex items-center h-full justify-around">
                <div class="grow text-center">
                    <p v-if="products.length > 40" class="inline-block">Hiển thị 1–40 của {{products.length}} kết quả</p>
                    <p  class="inline-block">Hiển thị tất cả {{products.length}} kết quả</p>
                </div>
                <div class="grow inline-block">
                    <select @change="onChange" class="w-full grow inline-block border border-gray-200 py-2.5 ">
                        <option value="menu_order" selected>Thứ tự mặc định</option>
                        <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                        <option value="lowToHigh">Thứ tự theo giá: thấp đến cao</option>
                        <option value="highToLow">Thứ tự theo giá: cao xuống thấp</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
            <div v-for="product in products"
                :key="product.id"
                class="product-box px-2 pb-4 border border-b-2 cursor-pointer">

                <div class="product-box hover:target:cart-icon:visible">
                    <div class="relative product-img">
                        <img :src="product.image" class="h-64">

                        <button class="absolute cart-icon text-2xl bottom-0 invisible " style="animation: fadeIn 1s">
                            <span>
                                <i class="fa-solid fa-bag-shopping"></i>
                            </span>
                        </button>
                    </div>
                    <div class="px-2.5 pb-5 pt-2.5 text-center">
                        <div class="">
                            <p class="hover:text-yellow-200">{{product.product_name}}</p>
                        </div>
                        <div class="">
                            <span class="price font-semibold">{{product.intro_price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
