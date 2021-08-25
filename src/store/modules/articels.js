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
    getArticel(state) {
      return state.articel;
    },
    
  },
  mutations: {
    setArticels(state, articels) {
      state.articels = articels;
    },
  },
  actions: {
    async fetchAllArticels({ commit } ) {
      await axios
        .get("./json/articels.json", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",

            Accept: "application/json",
          },
        }).then((res)=>{
          
          commit("setArticels", res.data);
        });      
    },
    async fetchGetArticels({ commit } , id) {
      await axios
        .get(`./json/articels.json/${id}`, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",

            Accept: "application/json",
          },
        }).then((res)=>{
         
          commit("getArticel", res.data);
        })
        // .then((art)=>{
        //   commit("getArticel", art);

        // })
      }
  },
};
export default articels;
