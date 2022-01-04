import { createApp } from "vue";
// import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
// import api from "./services/api";

createApp(App)
  // .use(VueAxios, api)
  .use(router)
  .mount("#app");
