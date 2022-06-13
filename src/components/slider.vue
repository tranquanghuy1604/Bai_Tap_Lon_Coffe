<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper lg:mt-[45px]"
  >
    <swiper-slide
      ><img
        class="w-full h-full"
        src="https://trungnguyenecoffee.com/wp-content/uploads/2022/02/CPC-1360x540-1.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="w-full h-full"
        src="https://trungnguyenecoffee.com/wp-content/uploads/2021/10/1360x540px.NQTNE_-2048x813.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="w-full h-full"
        src="https://trungnguyenecoffee.com/wp-content/uploads/2021/08/Bannner-T.chu_.jpg"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import { Pagination, Navigation } from "swiper";
export default {
  name: "slider",
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
