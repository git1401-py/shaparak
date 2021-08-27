import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contactus from "../views/Contactus.vue";
import Sugestion from "../views/Sugestion.vue";
import login from "../views/login.vue";

// ************Main section parts*******
// Componies
import Componies from "../components/home/mainSectionParts/Componies.vue";
import Psp from "../components/home/mainSectionParts/Componies/Psp.vue";
import Bank from "../components/home/mainSectionParts/Componies/Bank.vue";
import MiniApp from "../components/home/mainSectionParts/Componies/MiniApp.vue";
import Yar from "../components/home/mainSectionParts/Componies/Yar.vue";

import Accepteds from "../components/home/mainSectionParts/Accepteds.vue";
import Articels from "../components/home/mainSectionParts/Articels.vue";
import articel from "../components/home/mainSectionParts/Articels/Articel.vue";

// Network
import Network from "../components/home/mainSectionParts/Network.vue";
import Alphabet from "../components/home/mainSectionParts/network/Alphabet.vue";
import Books from "../components/home/mainSectionParts/network/Books.vue";

import Questions from "../components/home/mainSectionParts/Questions.vue";
import cart from "../components/home/mainSectionParts/question/cart.vue";
import net from "../components/home/mainSectionParts/question/net.vue";
import store from "../components/home/mainSectionParts/question/store.vue";

import Reports from "../components/home/mainSectionParts/Reports.vue";

import Employ from "../components/epmloye/Employ.vue";
import CodeGuid from "../components/home/mainSectionParts/RegistrationCodeGuid.vue";

import arshiv from "../components/home/news/ArshiveNews.vue";
import newsItem from "../components/home/news/newsItem.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  { path: "/", name: "Home", component: Home },
  { path: "/contactus", name: "Contactus", component: Contactus },
  { path: "/sugestion", name: "Sugestion", component: Sugestion },
  { path: "/login", name: "login", component: login },
  { path: "/arshiv", name: "arshiv", component: arshiv },
  { path: "/newsItem", name: "newsItem", component: newsItem },

  // *******Main section parts********
  {
    path: "/componies",
    name: "componies",
    component: Componies,
    children: [
      { path: "/Psp", name: "Psp", component: Psp },
      { path: "/Bank", name: "Bank", component: Bank },
      { path: "/MiniApp", name: "MiniApp", component: MiniApp },
      { path: "/Yar", name: "Yar", component: Yar },
    ],
  },
  { path: "/reports", name: "reports", component: Reports },
  {
    path: "/network",
    name: "network",
    component: Network,
    children: [
      { path: "/alphabet", name: "Alphabet", component: Alphabet },
      { path: "/books", name: "Books", component: Books },
    ],
  },
  { path: "/accepteds", name: "accepteds", component: Accepteds },
  { path: "/questions", name: "questions", component: Questions,
  children: [
    { path: "/cart", name: "Psp", component: cart },
    { path: "/net", name: "Bank", component: net },
    { path: "/store", name: "store", component: store },
  ], },
  { path: "/articels", name: "articels", component: Articels },
  { path: "/articel", name: "articel", component: articel },

  // Employ Page
  { path: "/employ", name: "employ", component: Employ },
  { path: "/codeGuid", name: "codeGuid", component: CodeGuid },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
