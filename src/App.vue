<template>
  <top-header />
  <navbar />
  <div id="nav">
    <router-link to="/">kkk</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import TopHeader from './components/header/TopHeader.vue'
import Navbar from './components/header/Navbar.vue'
export default{
  components:{TopHeader,Navbar},
  setup() {
    
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text&family=Rajdhani:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Molengo&display=swap");

// colors
// $primary: #00adb5;
$success:rgb(7, 150, 7);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
