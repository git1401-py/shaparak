import { createStore } from "vuex";
import news from "./modules/news.js";

export default createStore({
  modules: {
    news
  }
});
