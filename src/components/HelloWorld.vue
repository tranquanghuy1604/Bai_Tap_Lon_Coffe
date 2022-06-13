<script setup>
import { ref } from "vue";
import "../font/fontawesome-free-6.1.1-web/css/all.min.css";
import "../theme/style.css";
import modal from "../component/modal.vue";
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <Login />
  <Header />
  <Slider />
  <More />
  <Info />
  <Replie />
  <Footer />
</template>

<script>
import Header from "./header.vue";
import Slider from "./slider.vue";
import More from "./more.vue";
import Info from "./info.vue";
import Replie from "./replie.vue";
import Footer from "./footer.vue";
import Login from "../component/login.vue";
export default {
  name: "string",
  components: {
    Header,
    Slider,
    More,
    Info,
    Replie,
    Footer,
    Login,
  },
};
</script>
