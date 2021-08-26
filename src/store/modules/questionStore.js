import axios from "axios";

const questionStore = {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    allItems(state) {
      return state.items;
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await axios.get("./json/QuestionStore.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      //   commit("setTitles", response.data);

      commit("setItems", response.data);
    },
  },
};
export default questionStore;
