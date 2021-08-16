<template>
  <top-header />

  <div class="container-fluid bg-primary">
    <div id="nav" class="text-end">
      <router-link class="mynav-item" to="/">برگ نخست</router-link>
      <router-link class="mynav-item" to="/about">درباره ما</router-link>
      <router-link class="mynav-item" to="/contactus">تماس با ما</router-link>
      <router-link class="mynav-item" to="/sugestion"
        >انتقادات و پیشنهادات</router-link
      >
    </div>
  </div>

  <router-view />
  <footer-section />
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
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text&family=Rajdhani:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Molengo&display=swap");

// colors
// $primary: #00adb5;
$success: rgb(7, 150, 7);
$secondary: #ccc;
// $body-bg: #eef1f7;
$text-body: rgb(24, 19, 19);
$body-color: $text-body;
$border-radius: 8px;

//overrides

$font-family-brand: "Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
$font-family-base: "Markazi Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";

$headings-font-family: $font-family-brand;
$headings-font-weight: 400;
$line-height-headings: 1.4;

$base-font-family: $font-family-base;
$base-font-weight: 400;
$line-height-base: 1.4;

$list-group-active-bg: #222;
$list-group-bg: transparent;
$list-group-border-radius: 0;
$list-group-hover-bg: #444;
$list-group-action-color: #bbb;

@import "node_modules/bootstrap/scss/bootstrap";

.bg-lightgray {
  background: #ccc;
}
#app {
  text-align: center;
  color: #2c3e50;
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
