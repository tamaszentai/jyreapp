import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";
import linkResolver from "./link-resolver"; // Update this path if necessary
import router from "./router";

Vue.config.productionTip = false;

const accessToken = process.env.VUE_APP_ACCESSTOKEN; // Leave empty if your repo is public
const endpoint = process.env.VUE_APP_ENDPOINT; // Use your repo name

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver,
});

// Create a Vue instance
new Vue({ router, render: (h) => h(App) }).$mount("#app");
