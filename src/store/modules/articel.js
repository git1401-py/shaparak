import axios from "axios";

const articel = {
  namespaced: true,
  state: {
    articel: {},
  },
  getters: {
    articel(state) {
      return state.articel;
    },
  },
  mutations: {
    setArticel(state, articel) {
      state.articel = articel;
    },
  },
  actions: {
    async fetchArticel({ commit }, id) {
      console.log("id", id);
      const res = await axios.get("./json/articels.json/2", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("res");
      commit("setArticel", res.data);
    },
  },
};
export default articel;
