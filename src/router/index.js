import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue";
import Sugestion from "../views/Sugestion.vue";

// Main section parts
import Componies from "../components/home/mainSectionParts/Componies.vue";
import Accepteds from "../components/home/mainSectionParts/Accepteds.vue";
import Articels from "../components/home/mainSectionParts/Articels.vue";
import Network from "../components/home/mainSectionParts/Network.vue";
import Questions from "../components/home/mainSectionParts/Questions.vue";
import Reports from "../components/home/mainSectionParts/Reports.vue";

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
    component: () => import("../views/About.vue"),
  },

  // Main section parts
  { path: "/componies", name: "componies", component: Componies },
  { path: "/reports", name: "reports", component: Reports },
  { path: "/network", name: "network", component: Network },
  { path: "/accepteds", name: "accepteds", component: Accepteds },
  { path: "/questions", name: "questions", component: Questions },
  { path: "/articels", name: "articels", component: Articels },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
