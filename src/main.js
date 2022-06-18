// import Vue from "vue";
// import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
// import { createPinia, PiniaVuePlugin } from "pinia";

// import App from "./App.vue";
import router from "./router";

// Vue.use(VueCompositionAPI);

// const app = createApp({
//   router,
//   pinia: createPinia(),
//   render: () => h(App),
// });
// app.use(PiniaVuePlugin);

// app.mount("#app");

import Vue from "vue";
import App from "./App.vue";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
