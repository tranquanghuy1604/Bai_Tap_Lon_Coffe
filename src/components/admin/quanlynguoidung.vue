<template>
  <layout>
    <div id="users_management" class="content">
      <form action="" class="inline-block ml-1">
        <input
          type="search"
          name=""
          id=""
          class="h-10 p-2.5 my-2.5 w-80 border rounded-[5px] border-gray-500 outline-none"
          placeholder="Tìm kiếm..."
        />
      </form>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        <i class="fa-solid fa-plus"></i>
        Thêm Tài Khoản
      </button>

      <div class="">
        <table class="border-collapse w-full">
          <tr>
            <th class="font-bold text-lg border text-left p-2">Hình ảnh</th>
            <th class="font-bold text-lg border text-left p-2">
              Tên Tài Khoản
            </th>
            <th class="font-bold text-lg border text-left p-2">Ngày sinh</th>
            <th class="font-bold text-lg border text-left p-2">Email</th>
            <th class="font-bold text-lg border text-left p-2">Địa chỉ</th>
            <th class="font-bold text-lg border text-left p-2">Trạng thái</th>
            <th class="font-bold text-lg border text-left p-2"></th>
          </tr>
          <tr
            v-for="user in users"
            :key="user.id"
            class="hover:bg-gray-100 cursor-pointer"
          >
            <th class="font-medium text-sm border text-left p-2">
              <img
                class="h-[60px] w-[60px]"
                :src="user.image"
                alt=""
                style="height: 60px; width: 60px"
              />
            </th>
            <th class="font-medium text-sm border text-left p-2">
              {{ user.user_name }}
            </th>
            <th class="font-medium text-sm border text-left p-2">
              {{ user.birth }}
            </th>
            <th class="font-medium text-sm border text-left p-2">
              {{ user.email }}
            </th>
            <th class="font-medium text-sm border text-left p-2">
              {{ user.address }}
            </th>
            <th
              v-if="user.status == 'Online'"
              class="text-green-500 font-medium text-sm border text-left p-2"
            >
              {{ user.status }}
            </th>
            <th
              v-else
              class="text-red-500 font-medium text-sm border text-left p-2"
            >
              {{ user.status }}
            </th>
            <th class="font-medium text-sm border text-left p-2">
              <button class="p-2 text-yellow-500 hover:text-yellow-400">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="p-2 text-green-500 hover:text-green-400">
                <i class="fa-solid fa-trash"></i>
              </button>
            </th>
          </tr>
        </table>
        <div
          class="text-center w-full h-9 overflow-hidden cursor-pointer"
          style="
            box-shadow: inset 0px -25px 25px -8px grey;
            transition: height 0.5s ease-in;
          "
        >
          <p>
            Xem thêm
            <i class="fa-solid fa-angle-down"></i>
          </p>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../DashboardLayout.vue";

const users = [
  {
    user_id: "user01",
    user_name: "VuNguyen",
    image:
      "https://trungthanh.net/wp-content/uploads/2020/04/dang-le-nguyen-vu-1.jpg",
    birth: "04/05/1900",
    email: "vunguyen@gmail.com",
    address: "Hà Nội",
    status: "Online",
  },
  {
    user_id: "user02",
    user_name: "DangVu15",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Trung_Nguyen_chairman_Dang_Le_Nguyen.jpg",
    birth: "15/06/1996",
    email: "vunguyen@gmail.com",
    address: "Hòa Bình",
    status: "Online",
  },
  {
    user_id: "user03",
    user_name: "NguyenVu2504",
    image:
      "https://vnn-imgs-a1.vgcloud.vn/photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/trucchinh2/2021_05_21/dai-gia-dang-le-nguyen-vu-con-bao-nhieu-tien-sau-khi-ly-hon.jpg",
    birth: "25/04/1998",
    email: "vunguyen@gmail.com",
    address: "Lạng Sơn",
    status: "Online",
  },
  {
    user_id: "user04",
    user_name: "DangLeNguyeVu",
    image:
      "https://image.thanhnien.vn/w660/Uploaded/2022/bqmvlcvo/2019_11_14/nguyenvu4ok_ndok.jpg",
    birth: "15/08/1995",
    email: "vunguyen@gmail.com",
    address: "Hà Nội",
    status: "Offine",
  },
  {
    user_id: "user05",
    user_name: "VuNguyen1990",
    image:
      "https://st.nhipcaudautu.vn/staticFile/Subject/2020/04/03/screen-shot-2020-04-03-at-17.35.03_31735354.png",
    birth: "04/05/1900",
    email: "VuNguyen1990@gmail.com",
    address: "Tp.Hồ Chí Minh",
    status: "Offine",
  },
  {
    user_id: "user06",
    user_name: "LeNguyen1508",
    image:
      "https://i-vnexpress.vnecdn.net/2019/12/03/dang-le-nguyen-vu-7516-1575367804_m_460x0.jpg",
    birth: "15/08/1995",
    email: "lenguyen1508@gmail.com",
    address: "Hải Phòng",
    status: "Offine",
  },
  {
    user_id: "user07",
    user_name: "DangLeVu0504",
    image:
      "https://www.pdiam.com/wp-content/uploads/2019/12/dang-le-nguyen-vu-la-ai-3-1000x570.jpg",
    birth: "15/06/1996",
    email: "vunguyen@gmail.com",
    address: "Cần Thơ",
    status: "Online",
  },
  {
    user_id: "user08",
    user_name: "LeDangVu1955",
    image:
      "https://baodautu.vn/files/2014/10/13/dang-le-nguyen-vu-tu-vo-danh-toi-anh-hung-1.jpg",
    birth: "04/05/1900",
    email: "LeDangVu1955@gmail.com",
    address: "Đà Nẵng",
    status: "Offine",
  },
  {
    user_id: "user09",
    user_name: "vuNgUyEn1506",
    image:
      "https://i.ex-cdn.com/nhadautu.vn/files/homai/2018/06/17/35415640_1684742668308860_8559126336319258624_n-0711.jpg",
    birth: "15/06/1996",
    email: "vunguyen@gmail.com",
    address: "Cao Bằng",
    status: "Offine",
  },
  {
    user_id: "user10",
    user_name: "dangVu0615",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPKNqGaiG0X-vHZ5D2HGZgEUi-6JKii1vMQ&usqp=CAU",
    birth: "15/06/1996",
    email: "dangVu0615@gmail.com",
    address: "Hà Nội",
    status: "Online",
  },
  {
    user_id: "user11",
    user_name: "leDang0504",
    image:
      "https://photo-cms-sggp.zadn.vn/w580/Uploaded/2022/dudrkxrrks/2021_05_24/thaovu_ekmv.jpg",
    birth: "04/05/1900",
    email: "leDang0504@gmail.com",
    address: "Thanh Hóa",
    status: "Online",
  },
  {
    user_id: "user12",
    user_name: "vuLe1998",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqhOUPFa6j1QKL1bH6AA0M7bW-HYFT6ho1Q&usqp=CAU",
    birth: "25/04/1998",
    email: "vunguyen@gmail.com",
    address: "Đà Nẵng",
    status: "Online",
  },
  {
    user_id: "user13",
    user_name: "dangNguyenLe1990",
    image: "https://static-znews.zadn.vn/static/topic/person/nguyen%20vu.jpg",
    birth: "04/05/1900",
    email: "vunguyen@gmail.com",
    address: "Quảng Ninh",
    status: "Offine",
  },
  {
    user_id: "user14",
    user_name: "leDangVu15081995",
    image:
      "https://ecoffeetrungnguyen.com/image/dau-la-vat-duoc-ong-dang-le-nguyen-vu-mang-theo-ben-minh-moi-luc-moi-noi-9n1nbd3.jpg",
    birth: "15/08/1995",
    email: "ledangVu15081995@gmail.com",
    address: "Hòa Bình",
    status: "Offine",
  },
  {
    user_id: "user15",
    user_name: "dangleVu2504",
    image:
      "https://tieusunguoinoitieng.com/wp-content/uploads/2019/02/tieu-su-dang-le-nguyen-vu-1917.jpg",
    birth: "25/04/1998",
    email: "danglevu2504@gmail.com",
    address: "Hà Nội",
    status: "Offine",
  },
];
export default {
  components: {
    Layout,
  },
  el: "#users_management",
  data() {
    return {
      users: users,
    };
  },
};
</script>
