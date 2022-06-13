<template>
  <div class="py-[50px]">
    <div class="max-w-[1080px] mx-auto">
      <h2 class="font-[600] text-[18px] lg:text-[25px] mb-[16px]">
        KHỐI VĂN PHÒNG
        <div
          class="border-b-[2px] border-[#7777] w-[20%] mb-[-18px] z-10"
        ></div>
      </h2>

      <div class="border-[1px] border-[#9999] max-w-full"></div>
      <table class="w-full border-colalapse text-center mt-[50px] table-fixed">
        <tr class="w-full bg-[#BDBDBD] text-[18px]">
          <th class="p-[7px]">Vị trí</th>
          <th class="p-[7px]">Địa điểm</th>
          <th class="p-[7px]">Số lượng</th>
          <th class="p-[7px]">Hạn nộp hồ sơ</th>
          <th class="p-[7px]">Ứng tuyển</th>
        </tr>
        <tr class="w-full text-[16px hover:bg-[#f9f9f9]">
          <td class="p-[16px]">Giám sát khu vực</td>
          <td class="p-[16px]">HCM,Tiền Giang</td>
          <td class="p-[16px]">5</td>
          <td class="p-[16px]">15/06/2022</td>
          <td class="p-[16px]">
            <button class="p-[10px] bg-black text-[#fff] rounded-[50px]">
              Ứng tuyển
            </button>
          </td>
        </tr>
        <tr
          class="w-full text-[16px] border-y-[1px] border-[#ccc] bg-[#f9f9f9]"
        >
          <td class="p-[16px]">Nhân viên bảo trì</td>
          <td class="p-[16px]">Cửa hàng Cà phê Trung Nguyên</td>
          <td class="p-[16px]">10</td>
          <td class="p-[16px]">31/12/2021</td>
          <td class="p-[16px]">
            <button class="p-[10px] bg-black text-[#fff] rounded-[50px]">
              Ứng tuyển
            </button>
          </td>
        </tr>
        <tr class="w-full text-[16px] hover:bg-[#f9f9f9]">
          <td class="p-[16px]">Chuyên Viên Đào Tạo & Setup</td>
          <td class="p-[16px]">HCM</td>
          <td class="p-[16px]">10</td>
          <td class="p-[16px]">31/12/2021</td>
          <td class="p-[16px]">
            <button class="p-[10px] bg-black text-[#fff] rounded-[50px]">
              Ứng tuyển
            </button>
          </td>
        </tr>
      </table>

      <h2 class="font-[600] text-[18px] lg:text-[25px] mb-[16px] mt-[50px]">
        HỆ THỐNG CỬA HÀNG
        <div
          class="border-b-[2px] border-[#7777] w-[20%] mb-[-18px] z-10"
        ></div>
      </h2>
      <div class="border-[1px] border-[#9999] max-w-full"></div>
      <table class="w-full border-colalapse text-center mt-[50px] table-fixed">
        <tr class="w-full bg-[#BDBDBD] text-[18px]">
          <th class="p-[7px]">Vị trí</th>
          <th class="p-[7px]">Địa điểm</th>
          <th class="p-[7px]">Số lượng</th>
          <th class="p-[7px]">Hạn nộp hồ sơ</th>
          <th class="p-[7px]">Ứng tuyển</th>
        </tr>
        <tr class="w-full text-[16px hover:bg-[#f9f9f9]">
          <td class="p-[16px]">Nhân Viên Bán Hàng</td>
          <td class="p-[16px]">HCM</td>
          <td class="p-[16px]">10</td>
          <td class="p-[16px]">31/12/2021</td>
          <td class="p-[16px]">
            <button class="p-[10px] bg-black text-[#fff] rounded-[50px]">
              Ứng tuyển
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "introduct",
};
</script>
