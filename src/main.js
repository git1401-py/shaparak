import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faPlay,
  faPause,
  faTrash,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faPlay,
  faPause,
  faTrash,
  faTwitter,
  faInstagram,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
  faSearchengin,
  faSearch,
  faUserFriends
);
// import VueMoment from "vue-moment";
// import moment from "moment-timezone";

createApp(App)
  .use(require("vue3-jalali-moment"))
  
  .use(store)
  .use(router)
  .mount("#app");
