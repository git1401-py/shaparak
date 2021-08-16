import axios from "axios";

const news = {
  namespaced: true,
  state: {
    news: [],
    recentnews: [],
  },
  getters: {
    allNews(state) {
      return state.news;
    },
    lengthArray(state) {
      return state.news.length;
    },
    recently(state) {
      return state.recentnews;
    },
  },
  mutations: {
    setnews(state, news) {
      state.news = news;
    },
    setresentnews(state, news) {
      state.recentnews = news;
    },
  },
  actions: {
    async fetchNews({ commit }) {
      const response = await axios.get("./json/news.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setnews", response.data);
    },
    recentNews({ commit }, news) {
      const response = news.concat(news);
      commit("setresentnews", response);
    },
  },
};
export default news;
