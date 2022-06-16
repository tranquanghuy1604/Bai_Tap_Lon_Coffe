<template>
    
    <section class="max-w-[1080px] mx-auto">
        <div class="max-w-[1080px] mx-auto text-center">
            <h2 class="uppercase font-bold text-2xl mb-10">
                <span class="py-1.5 px-4 border-2" style="border-color: rgba(0,0,0,0.1);">
                    <i class="fa-solid fa-user opacity-60"></i>
                    Góc chia sẻ từ đối tác
                </span>
            </h2>
            <div class="wrapper">
                <div class="viewport overflow-hidden cursor-pointer ">
                    <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :loop="true"
                        :pagination="{
                            clickable: true,    
                        }"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '768': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '1024': {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }"
                        :modules="modules"
                        class="mySwiper"
                    >  
                        <swiper-slide>
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2022/02/DSC_0635-600x400.jpg" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Chị Nguyễn Thị Hồng Diễm – Đối tác Thành Công – Trung Nguyên E-Coffee (683A Âu Cơ, Quận Tân Phú, TP. HCM)</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">Tại sao Trung Nguyên E-Coffee được hơn 1.000 đối tác trong và ngoài nước lựa [...]</p>
                                    </div>
                                </a>
                            </div> 
                        </swiper-slide>     
                        
                        <swiper-slide> 
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2022/02/DSC_0864-600x400.jpg" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Anh Thái Vũ Hoàng Phong – Đối tác Thành Công – Trung Nguyên E-Coffee (57 Đường Số 1, Khu Hiệp Ân, Quận 8, TP. HCM)</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">Trong năm vừa qua, với không ít thách thức từ đại dịch Covid-19 đã khiến [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>  

                        <swiper-slide>  
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2022/01/AM2Q4649-600x400.jpg" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Chị Phạm Thị Thu Hiền – Đối tác Thành Công – Trung Nguyên E-Coffee Vinhomes Gardenia, Quận Nam Từ Liêm, Hà Nội</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">“Trước đây, mình từng kinh doanh thất bại và mất nhiều thời gian để tìm [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>  

                        <swiper-slide>  
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/Anh-H%E1%BB%92-MINH-TRI%E1%BB%82N-%E2%80%93-%C4%90%E1%BB%91i-t%C3%A1c-nh%C6%B0%E1%BB%A3ng-quy%E1%BB%81n-th%C3%A0nh-c%C3%B4ng-89-Nguy%E1%BB%85n-Th%E1%BB%8B-S%C3%A1u-Q.12-HCM_Moment-768x432.jpg" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Anh Hồ Minh Triển – Đối tác Thành Công – Trung Nguyên E-Coffee 89 Nguyễn Thị Sáu, Q.12, HCM</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">“Cà phê Trung Nguyên là sản phẩm cà phê mang thương hiệu Việt mà tôi [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>  

                        <swiper-slide>  
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/vo_thi_hai_avt.png" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Cô Vũ Thị Hải – Đối Tác Thành Công – Trung Nguyên E-Coffee 005 Chung Cư Sư Vạn Hạnh, Q.10</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">“Tôi đã kinh doanh cà phê Trung Nguyên từ năm 2001 đến nay và có [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>  

                        <swiper-slide>  
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/chau_ngoc_hai_avt.png" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Anh Châu Ngọc Hải – Đối Tác Thành Công – Trung Nguyên E-Coffee 120B Linh Đông, Q.Thủ Đức</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">“Vợ chồng tôi chưa từng kinh doanh hàng quán, đặc biệt kiểu quán cà phê. [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide> 
                        
                        <swiper-slide>   
                            <div class="box pb-8 px-4 inline-flex items-center justify-center">
                                <a href="#">
                                    <div class="overflow-hidden h-52">
                                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/Anh-PH%E1%BA%A0M-HI%E1%BB%80N-V%C6%AF%C6%A0NG-%E2%80%93-%C4%90%E1%BB%91i-t%C3%A1c-nh%C6%B0%E1%BB%A3ng-quy%E1%BB%81n-th%C3%A0nh-c%C3%B4ng-CC-Sunrise-Riverside-Nh%C3%A0-B%C3%A8-HCM_Moment-768x432.jpg" alt="" style="" class="h-full w-full">
                                    </div>
                                    <div class="pt-2.5 px-2.5 py-5 whitespace-normal">
                                        <h5 class="text-base font-bold">Anh Phạm Hiền Vương – Đối Tác Nhượng Quyền Thành Công – Trung Nguyên E-Coffee CC Sunrise Riverside Nhà Bè, HCM</h5>
                                        <div class="mx-auto my-2 h-0.5 bg-black block w-full " style="max-width: 30px;"></div>
                                        <p class="text-sm ">Anh Phạm Hiền Vương – Chủ Đầu Tư cửa hàng Trung Nguyên E-Coffee (A0.03 khu [...]</p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide> 
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
