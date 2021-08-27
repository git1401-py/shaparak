import axios from "axios";

const news = {
  namespaced: true,
  state: {
    news: [],
    recently: [],
    newestNews: [],
    threeRecently: [{},{},{}],
    leanth: 0,
  },
  getters: {
    allNews(state) {
      return state.news;
    },
    leanthNews(state) {
      return state.leanth;
    },
    recently(state) {
      return state.recently;
    },
    newestNews(state) {
      return state.newestNews;
    },
    threeRecently(state) {
      return state.threeRecently;
    },
  },
  mutations: {
    setnews(state, news) {
      state.news = news;
    },
    setleanth(state, news) {
      state.leanth = news.leanth;
    },
    setresentnews(state, news) {
      state.recently = news;
    },
    setnewestNews(state, news) {
      state.newestNews = news;
    },
    setthreeRecently(state, news) {
      state.threeRecently = news;
    },
  },
  actions: {
    async fetchAllNews({ commit }) {
      const response = await axios
        .get("./json/news.json", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",

            Accept: "application/json",
          },
        });

      commit("setnews", response.data);
      commit("setleanth", response.data);
    },
    async fetchNews({ commit }) {
      await axios
        .get("./json/news.json", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",

            Accept: "application/json",
          },
        })
        .then((response) => {
          const recently = [];
          response.data.forEach((element) => recently.push(element));
          recently.splice(15, recently.length);
          recently.splice(0, 4);
          commit("setresentnews", recently);

          const newestNews = [];
          response.data.forEach((element) => newestNews.push(element));
          newestNews.splice(1, newestNews.length);
          commit("setnewestNews", newestNews);

          const threeRecently = [];
          response.data.forEach((element) => threeRecently.push(element));
          threeRecently.shift(threeRecently[0]);
          threeRecently.splice(3, threeRecently.length);
          commit("setthreeRecently", threeRecently);
        });

      // commit("setnews", response.data);
    },
  },
};
export default news;
