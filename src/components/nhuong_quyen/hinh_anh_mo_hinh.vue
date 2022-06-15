<template>
    <section class="py-10">
        <div class="container  mx-auto text-center">
            <h2 class="uppercase font-bold text-2xl mb-10">
                <span class="py-1.5 px-4 border-2" style="border-color: rgba(0,0,0,0.1);">
                    <i class="fa-solid fa-magnifying-glass opacity-60"></i>
                    Hình ảnh mô hình
                </span>
            </h2>

            <ul class="flex justify-center mb-10 nhuongQuyen-tablinks">
                <li class="mr-1.5 inline-block tablink-mohinh active" onclick="openTabGoi(event, 'tab_gOi-Thinh-Vuong', 'tablink-mohinh', 'tab-mohinh')">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black" >
                        Gói thịnh vượng
                    </a>
                </li>
                <li class="mr-2 inline-block mx-1.5 tablink-mohinh" onclick="openTabGoi(event, 'tab_gOi-Khoi-Nghiep', 'tablink-mohinh', 'tab-mohinh')">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black" >
                        Gói khởi nghiệp
                    </a>
                </li>
                <li class="ml-1.5 inline-block tablink-mohinh" onclick="openTabGoi(event, 'tab_gOi-Ket-Noi', 'tablink-mohinh', 'tab-mohinh')">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black">
                        Gói kết nối
                    </a>
                </li>
            </ul>
            <div id="tab_gOi-Thinh-Vuong" class="nhuongQuyen-tab tab-mohinh active">
                <div class="grid md:grid-cols-3 sm:grid-cols-1">
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/S%E1%BB%91-38C-H%C3%B9ng-V%C6%B0%C6%A1ng-Long-Xuy%C3%AAn-An-Giang-1.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/Chung-C%C6%B0-Remax-S%E1%BB%91-116-117-118-B%C3%A3i-S%E1%BA%ADy-Ph%C6%B0%E1%BB%9Dng-1-Qu%E1%BA%ADn-6-Th%C3%A0nh-ph%E1%BB%91-H%E1%BB%93-Ch%C3%AD-Minh-1200x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/C2-1-%C4%91%C6%B0%E1%BB%9Dng-Ch%C3%A2u-V%C4%83n-Li%C3%AAm-P2-Ph%C3%BA-Thu%E1%BB%B7-TP-Phan-Thi%E1%BA%BFt-B%C3%ACnh-Thu%E1%BA%ADn-1067x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab_gOi-Khoi-Nghiep" class="nhuongQuyen-tab tab-mohinh">
                <div class="grid md:grid-cols-3 sm:grid-cols-1">
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/227-%C4%90%E1%BB%93ng-%C4%90en-Ph%C6%B0%E1%BB%9Dng-11-Qu%E1%BA%ADn-T%C3%A2n-B%C3%ACnh-TP.-H%E1%BB%93-Ch%C3%AD-Minh-1200x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/114A6-Tr%E1%BA%A7n-Huy-Li%E1%BB%87u-Gi%E1%BA%A3ng-V%C3%B5-Ba-%C4%90%C3%ACnh-H%C3%A0-N%E1%BB%99i-1-1067x800.jpgg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/23-L%C3%AA-Th%C3%A1i-T%E1%BB%95-V%C3%B5-C%C6%B0%E1%BB%9Dng-TP-B%E1%BA%AFc-Ninh-B%E1%BA%AFc-Ninh-1067x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab_gOi-Ket-Noi" class="nhuongQuyen-tab tab-mohinh">
                <div class="grid md:grid-cols-3 sm:grid-cols-1">
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/40-Mai-Anh-Tu%E1%BA%A5n-%C4%90%E1%BB%91ng-%C4%90a-H%C3%A0-N%E1%BB%99i-1067x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/71.1.5-Nguy%E1%BB%85n-V%C4%83n-Th%C6%B0%C6%A1ng-Ph%C6%B0%E1%BB%9Dng-25-Qu%E1%BA%ADn-B%C3%ACnh-Th%E1%BA%A1nh-TP.-H%E1%BB%93-Ch%C3%AD-Minh.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                    <div class="pb-8 px-4">
                        <div class="md:h-72 sm:h-96">
                            <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/S%E1%BA%A3nh-B-T%C3%B2a-nh%C3%A0-NewSkyline-Nguy%E1%BB%85n-Khuy%E1%BA%BFn-V%C4%83n-Qu%C3%A1n-H%C3%A0-%C4%90%C3%B4ng-H%C3%A0-N%E1%BB%99i-960x800.jpg" alt="Trung Nguyen Coffee" class="h-full md:w-auto sm:w-full">
                        </div>
                        <div class="text-center px-2 5 pt-2 5 pb-5">
                            <h4 class="uppercase font-bold">Trung Nguyen E-coffee</h4>
                            <p class="text-sm">38C Hùng Vương, Long Xuyên, An Giang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </section>
</template>
<script>
export default {
    name: 'hinhAnhMoHinh',
}
</script>