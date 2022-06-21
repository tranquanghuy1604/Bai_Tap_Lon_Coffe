<template>
  <layout>
    <div class="font-[600] text-[28px]">
      <h1 class="pl-[3%] pb-[5%] lg:text-[30px] font-[700]">
        Analyst Trung Nguyên
      </h1>
    </div>
    <div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 grid grid-cols-2 gap-x-[2%] px-[3%]">
          <div class="col-span-1 shadow-lg p-[10%]">
            <div class="flex justify-between">
              <span class="text-[#777] text-[20px]">Sales</span>
              <i class="text-[30px] fa-solid fa-truck"></i>
            </div>
            <h3 class="text-[25px] font-[500] my-[5%]">2.382</h3>
            <p class="text-[#777]">
              <span class="text-red-500">-3.65% </span>Since last week
            </p>
          </div>
          <div class="col-span-1 shadow-lg p-[10%]">
            <div class="flex justify-between">
              <span class="text-[#777] text-[20px]">Earning</span>
              <i class="text-[30px] fa-solid fa-truck"></i>
            </div>
            <h3 class="text-[25px] font-[500] my-[5%]">$21.000</h3>
            <p class="text-[#777]">
              <span class="text-green-500">6.65% </span>Since last week
            </p>
          </div>
          <div class="col-span-1 shadow-lg p-[10%]">
            <div class="flex justify-between">
              <span class="text-[#777] text-[20px]">Visitors</span>
              <i class="text-[30px] fa-solid fa-truck"></i>
            </div>
            <h3 class="text-[25px] font-[500] my-[5%]">14.212</h3>
            <p class="text-[#777]">
              <span class="text-green-500">5.52% </span>Since last week
            </p>
          </div>
          <div class="col-span-1 shadow-lg p-[10%]">
            <div class="flex justify-between">
              <span class="text-[#777] text-[20px]">Oders</span>
              <i class="text-[30px] fa-solid fa-truck"></i>
            </div>
            <h3 class="text-[25px] font-[500] my-[5%]">64</h3>
            <p class="text-[#777]">
              <span class="text-red-500">-2.25% </span>Since last week
            </p>
          </div>
        </div>
        <div class="col-span-1">
          <img
            src="src/assets/img/284003709_341511501486862_4554673260460733690_n.png"
            alt=""
          />
        </div>
      </div>

      <div class="py-[5%]">
        <img src="src/assets/img/map.png" alt="" />
      </div>
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
