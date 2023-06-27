import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// jquery
import jQuery from "jquery";
window.$ = jQuery;

createApp(App).use(router).mount("#app");
