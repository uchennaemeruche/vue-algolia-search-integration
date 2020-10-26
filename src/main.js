import Vue from "vue";
import App from "./App.vue";
import InstantSearch from "vue-instantsearch";
import router from "./router";

Vue.use(InstantSearch);

new Vue({
  router,
  el: "#app",
  render: (h) => h(App)
});
