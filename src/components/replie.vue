<template>
  <div class="py-[50px]">
    <div class="max-w-[1080px] mx-auto">
      <div class="flex items-center justify-between px-[20px]">
        <b class="h-[1px] bg-[#ccc] w-[15px] lg:min-w-[295px]"></b>
        <h1 class="text-center text-[18px] lg:text-[28px] font-[600] mx-[15px]">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h1>
        <b class="h-[1px] bg-[#ccc] w-[15px] lg:min-w-[295px]"></b>
      </div>
      <swiper class="mySwiper lg:h-auto h-[380px] cursor-grabbing">
        <swiper-slide>
          <div class="flex mt-[40px] snap-x px-[12px] lg-px-0">
            <img
              class="rounded-[999px] lg:w-[200px] lg:h-[200px] w-[100px] h-[100px]"
              src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Nguy%E1%BB%85n-Xu%C3%A2n-Quang-Copy-280x280.png "
              alt=""
            />
            <div class="ml-[30px]">
              <div class="flex mb-[10px]">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <em class="text-[13px] lg:text-[18px]"
                >“Mô hình Trung Nguyên E-Coffee như “một làn gió mới”, tôi rất
                ấn tượng với kiến trúc, thiết kế và cách bày trí cửa hàng. Sau
                nhiều lần trải nghiệm tại Tp. HCM và Cần Thơ, nhận thấy mô hình
                này phù hợp ở thị trường Rạch Giá, Kiên Giang nên tôi quyết định
                chọn ký hợp đồng mở 2 cửa hàng để bước đầu làm quen và học hỏi
                cách thức quản trị, vận hành.”</em
              >
              <p class="mt-[20px] text-[14px] lg:text-[18px]">
                <span class="font-bold">Anh Nguyễn Xuân Quang</span>/ Kiên Giang
              </p>
              {{ isMouseDown }} {{ oldTransalte }}
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex mt-[40px] snap-x px-[12px] lg-px-0">
            <img
              class="rounded-[999px] lg:w-[200px] lg:h-[200px] w-[100px] h-[100px]"
              src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Nguy%E1%BB%85n-Th%E1%BB%8B-Hoa-H%C6%B0%E1%BB%9Dng-Copy-1-280x280.png "
              alt=""
            />
            <div class="ml-[30px]">
              <div class="flex mb-[10px]">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <em class="text-[13px] lg:text-[18px]"
                >“Lúc đầu vừa chập chững bước vào kinh doanh cà phê mình cũng
                gặp nhiều trở ngại nhưng nhờ sự hỗ trợ nhiệt tình của đội ngũ tư
                vấn nên từ tháng 10/2019 đến nay quán của mình đã có khách hàng
                trung thành và nhận được sự ủng hộ của các bạn sinh viên, giới
                văn phòng và bà con địa phương. Sắp tới đây mình và nhóm 5 người
                bạn dự định sẽ tiếp tục nhân rộng hệ thống cửa hàng Trung Nguyên
                E-Coffee ở các tỉnh miền Tây”.</em
              >
              <p class="mt-[20px] text-[14px] lg:text-[18px]">
                <span class="font-bold">Chị Nguyễn Thị Hoa Hường</span>/ Đồng
                Tháp
              </p>
              {{ isMouseDown }} {{ oldTransalte }}
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex mt-[40px] snap-x px-[12px] lg-px-0">
            <img
              class="rounded-[999px] lg:w-[200px] lg:h-[200px] w-[100px] h-[100px]"
              src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/Phan-Minh-Hi%E1%BB%81n-Tri%E1%BA%BFt-1-280x280.png "
              alt=""
            />
            <div class="ml-[30px]">
              <div class="flex mb-[10px]">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <em class="text-[13px] lg:text-[18px]"
                >“Cà phê Trung Nguyên nổi tiếng từ lâu nên tôi rất tin tưởng khi
                lựa chọn hợp tác để nhượng quyền Trung Nguyên E-Coffee tại Cần
                Thơ. Tôi rất muốn bà con địa phương, giới văn phòng làm việc tại
                khu vực quận Ninh Kiều, Cần Thơ có cơ hội thưởng thức cà phê
                chuẩn nhất, chất lượng nhất tại cửa hàng Trung Nguyên E-Coffee
                sắp tới của mình.”</em
              >
              <p class="mt-[20px] text-[14px] lg:text-[18px]">
                <span class="font-bold">Anh Phan Minh Hiền Triết </span>/Cần Thơ
              </p>
              {{ isMouseDown }} {{ oldTransalte }}
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="text-center my-[30px]">
        <button
          class="rounded-[10px] border-[2px] border-black py-[6px] px-[16px] hover:text-white hover:bg-black text-[16px]"
        >
          Ý Kiến Của Bạn
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "dsch",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
