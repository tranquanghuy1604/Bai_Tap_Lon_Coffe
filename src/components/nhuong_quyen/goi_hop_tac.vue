<template>
  <section class="pb-10">
    <div class="max-w-[1080px] mx-auto text-center">
      <h2 class="uppercase font-bold text-2xl mb-10">
        <span
          class="py-1.5 px-4 border-2"
          style="border-color: rgba(0, 0, 0, 0.1)"
        >
          <i class="fa-solid fa-gift opacity-60"></i>
          Gói hợp tác
        </span>
      </h2>
      <ul class="flex justify-center mb-10 nhuongQuyen-tablinks">
        <li
          class="mr-1.5 inline-block tablink-hoptac active"
          v-for="category in categories"
          :key="category.index"
        >
          <button
            href=""
            class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black"
            @click="selectCategory(category.index)"
          >
            {{ category.name }}
          </button>
        </li>
        <!-- <li
          class="mr-1.5 inline-block tablink-hoptac active"
          onclick="openTabGoi(event, 'tab_goi-Thinh-Vuong', 'tablink-hoptac', 'tab-hoptac')"
        >
          <a
            class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black"
          >
            Gói thịnh vượng
          </a>
        </li>
        <li
          class="mr-2 inline-block mx-1.5 tablink-hoptac"
          onclick="openTabGoi(event, 'tab_goi-Khoi-Nghiep', 'tablink-hoptac', 'tab-hoptac')"
        >
          <a
            class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black"
          >
            Gói khởi nghiệp
          </a>
        </li>
        <li
          class="ml-1.5 inline-block tablink-hoptac"
          onclick="openTabGoi(event, 'tab_goi-Ket-Noi', 'tablink-hoptac', 'tab-hoptac')"
        >
          <a
            class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black"
          >
            Gói kết nối
          </a>
        </li> -->
      </ul>
      <Listgoi :selectedCategory="selectedCategory" />
    </div>
  </section>
</template>

<script>
import Listgoi from "./list_goi.vue";
export default {
  components: {
    Listgoi,
  },
  data() {
    return {
      categories: [
        {
          name: "Gói thịnh vượng",
          index: 0,
        },
        {
          name: "Gói khởi nghiệp",
          index: 1,
        },
        {
          name: "Gói kết nối",
          index: 2,
        },
      ],
      selectedCategory: 0,
    };
  },
  methods: {
    selectCategory(index) {
      console.log(index);
      this.selectedCategory = index;
    },
  },

  // methods: {
  //     openTabGoi(evt, tab, tablink, tabs) {
  //         var tablink, tabcontent, i;
  //         tablink = document.getElementsByClassName(tablink);
  //         for (i = 0; i < tablink.length; i++) {
  //             tablink[i].className = tablink[i].className.replace(' active', "");
  //         }

  //         tabcontent = document.getElementsByClassName(tabs);
  //         for (i = 0; i < tabcontent.length; i++) {
  //             tabcontent[i].className = tabcontent[i].className.replace(' active', "");
  //         }

  //         document.getElementById(tab).className += ' active';
  //         evt.currentTarget.className += ' active';
  //     }
  // },
};
</script>
