<template>
  <layout>
    <div class="px-[40px] mb-[40px]">
      <div><h2 class="text-[28px] font-[700]">THÊM NGƯỜI DÙNG</h2></div>
      <div class="border-2 border-[#000] px-[20px] py-[20px] mt-[20px]">
        <div
          class="border-b-[2px] border-solid border-[#EBEBEB] py-[20px] rounded-md"
        >
          <h4 class="text-[20px] font-[500] text-[#4C4C4C]">
            Thông tin cơ bản
          </h4>
        </div>
        <form action="user" class="mt-[20px]">
          <div class="flex">
            <img
              class="w-[5%] bg-cover rounded-lg"
              src="https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg"
              alt="avatar"
            />
            <div class="ml-[10px]">
              <h5 class="text-[#B4CD93] text-[16px] font-[600]">Thêm ảnh</h5>
              <p class="text-[13px] font-[400] text-[#808080]">Ảnh đại diện</p>
            </div>
          </div>
          <div class="grid grid-cols-4 mt-[20px] gap-x-[20px]">
            <div class="col-span-2 w-[100%]">
              <div class="">
                <h3 class="text-[#000] font-[600]">Tên đầy đủ</h3>
                <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
              <div class="mt-[20px]">
                <h3 class="text-[#000] font-[600]">Ngày sinh</h3>
                <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
            </div>
            <div class="col-span-2 w-[100%]">
              <div class="">
                <h3 class="text-[#000] font-[600]">Tên tài khoản</h3>
                <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
              <div class="mt-[20px]">
                <h3 class="text-[#000] font-[600]">Giới tính</h3>
                <!-- <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                /> -->
                <select
                  name="gender"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px] cursor-pointer"
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        class="border-2 border-[#000] px-[20px] py-[20px] mt-[20px] rounded-md"
      >
        <div class="border-b-[2px] border-solid border-[#EBEBEB] py-[20px]">
          <h4>Thông tin liên hệ</h4>
        </div>
        <form action="user" class="mt-[20px]">
          <div class="grid grid-cols-4 mt-[20px] gap-x-[20px]">
            <div class="col-span-2 w-[100%]">
              <div class="">
                <h3 class="text-[#000] font-[600]">Số điện thoại</h3>
                <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
              <div class="mt-[20px]">
                <h3 class="text-[#000] font-[600]">Email</h3>
                <input
                  type="email"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
            </div>
            <div class="col-span-2 w-[100%]">
              <div class="">
                <h3 class="text-[#000] font-[600]">Số điện thoại</h3>
                <input
                  type="text"
                  class="bg-[#EAF0F9] mt-[10px] w-[100%] py-[5px] pl-[10px] rounded-[10px]"
                />
              </div>
              <div class="flex justify-end gap-[20px] mt-[50px]">
                <a
                  href="/Quanlynguoidung"
                  class="py-[4px] px-[25px] bg-[#fff] border-2 border-[#000] text-[#000] rounded-md"
                >
                  Đóng
                </a>
                <a
                  href="/Quanlynguoidung"
                  class="py-[4px] px-[25px] bg-[#B4CD93] text-[#000] rounded-md"
                >
                  Thêm
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../../DashboardLayout.vue";
export default {
  name: "adduser",
  components: {
    Layout,
  },
};
</script>
