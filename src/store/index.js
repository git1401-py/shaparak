import { createStore } from "vuex";
import news from "./modules/news.js";
import employ from "./modules/employ.js";
import componies from "./modules/componies.js";
import componiesBank from "./modules/componiesBank.js";
import componyYar from "./modules/componiesYar.js";
import componyApp from "./modules/componiesMiniapp";
import networkAlphabet from "./modules/NetworkAlphabet";
import networkBooks from "./modules/NetworkBooks";
import reports from "./modules/reports";
import articels from "./modules/articels";

export default createStore({
  modules: {
    news,
    employ,
    componies,
    componiesBank,
    componyYar,
    componyApp,
    networkAlphabet,
    networkBooks,
    reports,
    articels
  },
});
