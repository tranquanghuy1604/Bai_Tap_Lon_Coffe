<template>
  <layout>
    <div class="px-[40px] mb-[30px]">
      <div class="py-[20px]">
        <h2 class="text-[28px] font-[600]">QUẢN LÝ TIN TỨC</h2>
      </div>
      <div
        class="border-2 border-solid border-[#000] px-[20px] pb-[20px] rounded-lg shadow-2xl"
      >
        <div class="border-b-2 border-solid border-[#000] py-[10px] mt-[10px]">
          <h4 class="text-[24px] font-[500]">Sửa tin tức</h4>
        </div>
        <div class="mt-[20px] flex justify-start">
          <img
            src="https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg"
            alt="addAvatar"
            class="w-[8%] rounded-lg object-cover"
          />
          <div class="ml-[20px]">
            <button class="px-[15px] py-[4px] bg-[#B4CD93] rounded-md">
              Sửa ảnh
            </button>
            <p
              class="mt-[4px] text-center text-[12px] font-[400] text-[#808080 ]"
            >
              Ảnh tiêu đề
            </p>
          </div>
        </div>
        <form action="Quanlytintuc" class="mt-[20px]">
          <div class="">
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Tiêu đề
            </p>
            <textarea
              class="bg-[#EAF0F9] w-[30%] h-[70px] px-[10px] pt-[10px] rounded-md resize-none text-[#0A4B65] text-[15px]"
              type="text"
              value="Tin chuẩn chưa anh?"
            />
          </div>
          <div>
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Danh mục
            </p>
            <input
              class="bg-[#EAF0F9] w-[30%] px-[10px] py-[10px] rounded-md box-border focus:border-none text-[#0A4B65] text-[15px]"
              type="text"
              value="Nghệ thuật counter"
            />
          </div>
          <div class="w-[100%]">
            <p
              class="py-[20px] text-[#4C4C4C] text-[16px] font-[500]"
              for="addNews"
            >
              Nội dung
            </p>
            <textarea
              class="bg-[#EAF0F9] w-full rounded-md h-[100px] resize-none px-[10px] pt-[10px] text-[#0A4B65] text-[15px]"
              type="text"
              value="Rất nhiều bạn cứ nhai đi nhai lại cái câu là. Tin chuẩn chưa anh?, muốn biết Tin chuẩn chưa anh? thì hãy so sánh, hãy đọc các nguồn tin khác, hãy đọc báo. Nếu đọc được một tin mà vẫn còn cảm thấy rằng là. À, chưa tin nổi thì mình phải đi tìm kiếm các chỗ khác thay vì hỏi một câu cứ nhai đi nhai lại như một con bò là Tin (chuẩn chưa anh) rồi là vào cười haha xong rồi vào viết linh ta linh tinh ở trên đấy"
            />
          </div>
          <div class="flex justify-end mt-[20px]">
            <a href="/Quanlytintuc">
              <button
                class="border-2 border-solid border-[#000] bg-[#fff] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
              >
                Hủy
              </button>
            </a>
            <a href="/Quanlytintuc">
              <button
                class="ml-[10px] border-2 border-solid border-[#000] bg-[#B4CD93] text-[#000] rounded-md px-[20px] py-[4px] cursor-pointer"
              >
                Cập nhật
              </button>
            </a>
          </div>
        </form>
      </div>
    </div></layout
  >
</template>

<script>
import Layout from "../../DashboardLayout.vue";

export default {
  name: "updateNews",
  components: {
    Layout,
  },
};
</script>
