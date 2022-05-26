<script setup>
import { ref } from "vue";
import "../font/fontawesome-free-6.1.1-web/css/all.min.css";
import "../theme/style.css";
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <hhh />
  <sss />
</template>

<script>
import hhh from "./header.vue";
import sss from "./slider.vue";
export default {
  name: "string",
  components: {
    hhh,
  },
  components: {
    sss,
  },
};
</script>
