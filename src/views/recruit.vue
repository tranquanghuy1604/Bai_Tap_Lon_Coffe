<template>
  <Header />
  <Banner />
  <Info />
  <Introduct />
  <Footer />
</template>
<script>
import Banner from "../components/recruit/banner.vue";
import Header from "../components/header.vue";
import Info from "../components/recruit/info.vue";
import Introduct from "../components/recruit/introduct.vue";
import Footer from "../components/footer.vue";
export default {
  name: "string",
  components: {
    Banner,
    Header,
    Info,
    Introduct,
    Footer,
  },
};
</script>
