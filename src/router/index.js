import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue";
import Sugestion from "../views/Sugestion.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus,
  },
  {
    path: "/sugestion",
    name: "Sugestion",
    component: Sugestion,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
