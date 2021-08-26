import axios from "axios";

const articels = {
  namespaced: true,
  state: {
    articels: [],
    articel: {},
    },
  getters: {
    allArticels(state) {
      return state.articels;
    },
    allArticel(state) {
      return state.articel;
    },
  },
  mutations: {
    setArticels(state, articels) {
      state.articels = articels;
    },
    setArticel(state, articels) {
      state.articel = articels[3];
    },
  },
  actions: {
    async fetchAllArticels({ commit }) {
      const response = await axios.get("./json/articels.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      console.log("There is Arts");
      commit("setArticels", response.data);
    },
  },
};
export default articels;
