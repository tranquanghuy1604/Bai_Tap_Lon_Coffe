<template>
  <div
    class="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0 z-[1000] text-[#fff]"
  >
    <div
      class="w-[32%] bg-white h-[25%] z-[999] border-2 border-[#000] rounded-xl animate-wave-handing"
    >
      <div class="py-[10px]">
        <h3 class="text-center text-[#101840] text-[20px] font-[600]">
          Xác nhận xóa
        </h3>
      </div>
      <div class="border-y-2 border-[#cccccc] py-[20px]">
        <p class="text-[#000] text-center">Bạn có chắc muốn xóa...</p>
      </div>
      <div class="text-center mt-[20px]">
        <button
          type="button"
          class="text-[#696F8C] text-[12px] font[600] px-[20px] py-[5px] bg-[#E6E8F0] rounded-lg"
          @click="closeModal"
        >
          Hủy bỏ
        </button>
        <button
          type="button"
          class="text-[#FFFFFF] text-[12px] font[600] px-[20px] py-[5px] bg-[#B4CD93] rounded-lg ml-[10px]"
          @click="closeModal"
        >
          Đồng ý
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>
