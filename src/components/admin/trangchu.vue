<template>
  <layout>
    <div class="font-[600] text-[28px]">
      <h1 class="pl-[3%] pb-[5%] lg:text-[30px] font-[700]">
        Thống kê Trung Nguyên
      </h1>
    </div>
    <div>
      <div class="grid grid-cols-4 gap-x-[2%] px-[3%]">
        <div class="col-span-1 shadow-lg p-[10%]">
          <div class="flex justify-between">
            <span class="text-[#777] text-[20px]">Giảm giá</span>
            <i class="text-[30px] fa-solid fa-truck"></i>
          </div>
          <h3 class="text-[25px] font-[500] my-[5%]">2.382</h3>
          <p class="text-[#777]">
            <span class="text-red-500">-3.65% </span>Tháng trước
          </p>
        </div>
        <div class="col-span-1 shadow-lg p-[10%]">
          <div class="flex justify-between">
            <span class="text-[#777] text-[20px]">Thu nhập</span>
            <i class="text-[30px] fa-solid fa-truck"></i>
          </div>
          <h3 class="text-[25px] font-[500] my-[5%]">$21.000</h3>
          <p class="text-[#777]">
            <span class="text-green-500">6.65% </span>Tháng trước
          </p>
        </div>
        <div class="col-span-1 shadow-lg p-[10%]">
          <div class="flex justify-between">
            <span class="text-[#777] text-[20px]">Khách hàng</span>
            <i class="text-[30px] fa-solid fa-truck"></i>
          </div>
          <h3 class="text-[25px] font-[500] my-[5%]">14.212</h3>
          <p class="text-[#777]">
            <span class="text-green-500">5.52% </span>Tháng trước
          </p>
        </div>
        <div class="col-span-1 shadow-lg p-[10%]">
          <div class="flex justify-between">
            <span class="text-[#777] text-[20px]">Đơn hàng</span>
            <i class="text-[30px] fa-solid fa-truck"></i>
          </div>
          <h3 class="text-[25px] font-[500] my-[5%]">64</h3>
          <p class="text-[#777]">
            <span class="text-red-500">-2.25% </span>Tháng trước
          </p>
        </div>
      </div>
    </div>

    <div class="py-[5%]">
      <img src="../../assets/img/map.png" alt="" />
    </div>
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";
export default {
  components: {
    Layout,
  },
};
</script>
