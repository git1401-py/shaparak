import axios from "axios";

const employ = {
  namespaced: true,
  state: {
    titles: [],
  },
  getters: {
    allTitles(state) {
      return state.titles;
    }
  },
  mutations: {
    setTitles(state, titles) {
      state.titles = titles;
    }
  },
  actions: {
    async fetchTitles({ commit }) {
      const response = await axios
        .get("./json/employJobs.json", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",

            Accept: "application/json",
          },
        })
        //   commit("setTitles", response.data);

      commit("setTitles", response.data);
    },
  },
};
export default employ;
