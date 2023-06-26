<template>
    <layout>
        <div class="px-[40px] mb-[30px]">
            <div class="py-[20px]">
                <h2 class="text-[28px] font-[600]">SỬA THÔNG TIN SẢN PHẨM</h2>
            </div>
            <div
                    class="border-2 border-solid border-[#000] px-[10px] py-[10px] rounded-lg"
            >
                <div class="border-b-2 border-solid border-[#000] py-[10px]">
                    <h4 class="text-[18px] font-[500]">Thông tin sản phẩm</h4>
                </div>
                <div class="mt-[10px] flex justify-start">
                    <img
                            src="https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg"
                            alt="addAvatar"
                            class="w-[7%] rounded-lg object-cover"
                    />
                    <div class="ml-[20px]">
                        <button class="px-[15px] py-[4px] bg-[#B4CD93] rounded-md">
                            Thêm
                        </button>
                        <p
                                class="mt-[4px] text-center text-[12px] font-[400] text-[#808080 ]"
                        >
                            Hình ảnh sản phẩm
                        </p>
                    </div>
                </div>
                <form action="Quanlytintuc" class="mt-[20px]">
                    <div class="grid grid-cols-4 mt-[20px] gap-x-[350px]">
                        <div class="col-span-2 w-[100%]">
                            <div class="">
                                <h3 class="text-[#000] font-[600]">Mã sản phẩm</h3>
                                <input
                                    placeholder="Nhập mã sản phẩm"
                                        value="TNC001"
                                        type="text"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                            </div>
                            <div class="mt-[20px]">
                                <h3 class="text-[#000] font-[600]">Tên sản phẩm</h3>
                                <input
                                    placeholder="Nhập tên sản phẩm"
                                        value="Cà phê  Moka premium"
                                        type="text"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                            </div>
                            <div class="mt-[20px]">
                                <h3 class="text-[#000] font-[600]">Danh mục</h3>
                                <input
                                    placeholder="Nhập danh mục"
                                        value="Cà phê"
                                        type="text"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                            </div>
                        </div>
                        <div class="col-span-2 w-[100%]" style="transform: translateX(-240px);">
                            <div class="">
                                <h3 class="text-[#000] font-[600]">Giá tiền</h3>
                                <input
                                    placeholder="Nhập giá tiền"
                                        value="100000"
                                        type="number"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                                <p style="    position: absolute;
                                    right: -156px;
                                    top: 40px;
                                    color: #4C4C4C;
                                    font-weight: bold;
                                    font-size: 16px;">
                                    Đơn vị tính: VNĐ
                                </p>
                            </div>
                            <div class="mt-[20px]">
                                <h3 class="text-[#000] font-[600]">Số lượng</h3>
                                <input
                                    placeholder="Nhập số lượng"
                                        value="10"
                                        type="number"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                            </div>
                            <div class="mt-[20px]">
                                <h3 class="text-[#000] font-[600]">Mô tả</h3>
                                <input
                                    placeholder="Nhập mô tả"
                                        value="Cà phê nhập Ý (rất đắt) và chuẩn vị"
                                        type="text"
                                        class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end mt-[20px]">
                        <button
                                class="border-2 border-solid border-[#000] bg-[#fff] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
                        >
                            Hủy
                        </button>
                        <a href="/Quanlytintuc">
                            <button
                                    class="ml-[10px] border-2 border-solid border-[#000] bg-[#B4CD93] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
                            >
                                Thêm
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </layout>
</template>
<script>
import Layout from "../../DashboardLayout.vue";
export default {
    name: "Themsanpham",
    components: {
        Layout,
    },
};
</script>
