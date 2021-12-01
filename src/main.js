import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";
import linkResolver from "./link-resolver"; // Update this path if necessary
import router from "./router";

Vue.config.productionTip = false;

const accessToken =
  "MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70"; // Leave empty if your repo is public
const endpoint = "https://jyre-engineering-recruitment.prismic.io/api/v2"; // Use your repo name

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver,
});

// Create a Vue instance
new Vue({ router, render: (h) => h(App) }).$mount("#app");
