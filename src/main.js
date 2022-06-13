import { createApp } from "vue";
import App from "./App.vue";
import "./theme/index.css";
import "swiper/css";
import { router } from "./router";
import "swiper/css/pagination";
import "swiper/css/navigation";

const app = createApp(App);

app.use(router);

app.mount("#app");
