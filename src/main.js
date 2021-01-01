import Vue from "vue";
import App from "./App.vue";
import "./plugins/clipboard";
import "./plugins/highlight";
import "./plugins/vSelect";

Vue.config.productionTip = false;

new Vue({
  render(h) {
    return h(App);
  }
}).$mount("#app");
