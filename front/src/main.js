import { createApp } from "vue";
// import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
// import api from "./services/api";

createApp(App)
  // .use(VueAxios, api)
  .use(VueToast, {
    position: "bottom-left",
  })
  .use(router)
  .mount("#app");
