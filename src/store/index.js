import { createStore } from "vuex";
import news from "./modules/news.js";
import employ from "./modules/employ.js";

export default createStore({
  modules: {
    news,
    employ,
  },
});
