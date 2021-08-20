<template>
  <div v-if="$route.path === '/employ'"></div>
  <div v-else>
    <top-header />

    <div class="container-fluid bg-primary">
      <div id="nav" class="text-end">
        <router-link class="mynav-item" to="/">برگ نخست</router-link>
        <router-link class="mynav-item" to="/about">درباره ما</router-link>
        <router-link class="mynav-item" to="/contactus">تماس با ما</router-link>
        <router-link class="mynav-item" to="/sugestion">
          انتقادات و پیشنهادات
        </router-link>
      </div>
    </div>
  </div>

  <router-view />
  <div v-if="$route.path !== '/employ'"><footer-section /></div>
</template>

<script>
import FooterSection from "./components/footer/FooterSection.vue";
import TopHeader from "./components/header/TopHeader.vue";
export default {
  components: { TopHeader, FooterSection },
  setup() {},
};
</script>

<style lang="scss">
@font-face {
  font-family: "BYekanBold";
  font-weight: bold;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  // src: url("./assets/fonts/Sahel.eot");
  /* IE9 Compat Modes */
  src: local("BYekanBold"),
    // url("./assets/fonts/Sahel.eot?#iefix") format("embedded-opentype"),
    // url("./assets/fonts/Sahel.woff2") format("woff2"),
    // url("./assets/fonts/Sahel.woff") format("woff"),
    url("./assets/fonts/BYekanBold.ttf") format("truetype");
  //   /* Safari, Android, iOS */
}
@font-face {
  font-family: "Far.Yagut Bold";
  font-weight: bold;
  src: local("Far.Yagut Bold"),
    url("./assets/fonts/Far.Yagut Bold.ttf") format("truetype");
  //   /* Safari, Android, iOS */
}
.bg-lightgray {
  background: #ccc;
}
#app {
  font-family: "BYekanBold" !important;

  font-weight: bold;
  // font-size: 1.3rem !important;;

  text-align: center;
  color: #2c3e50;
}
.num-font {
  font-family: "Far.Yagut Bold" !important;
}
#nav {
  padding: 10px 0;

  a {
    color: #f0f3f5;
    padding: 11px 3%;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      font-weight: bold;
    }
  }
  a:hover {
    background: rgb(10, 84, 243);
  }
}
</style>
