<template>
  <div class="container">
    <div class="row my-2 mx-4" style="position: relative">
      <div class="col-xl-8 col-12 pb-5">
        <img src="../../../public/img/slide.png" class="img-slide" />
      </div>
      <div
        class="col-xl-4 col-12"
        @mouseenter="divhover = true"
        @mouseleave="divhover = false"
      >
        <div class="row mb-3">
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar1 = true"
                @mouseleave="sidebar1 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar1 }"
              >
                <router-link to="/componies">
                  <img
                    v-if="sidebar1"
                    src="./img/sidebar1.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar1.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar1 }"
                >
                  شرکت ها و برنامک های مجاز
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar2 = true"
                @mouseleave="sidebar2 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar2 }"
              >
                <router-link to="/reports">
                  <img
                    v-if="sidebar2"
                    src="./img/sidebar2.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar2.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar2 }"
                >
                  گزارش اقتصادی شاپرک
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar3 = true"
                @mouseleave="sidebar3 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar3 }"
              >
                <router-link to="/network">
                  <img
                    v-if="sidebar3"
                    src="./img/sidebar3.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar3.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar3 }"
                >
                  معرفی شبکه پرداخت و مستندات
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar4 = true"
                @mouseleave="sidebar4 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar4 }"
              >
                <router-link to="/accepteds">
                  <img
                    v-if="sidebar4"
                    src="./img/sidebar4.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar4.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar4 }"
                >
                  ابزارهای پذیرش مجاز
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar5 = true"
                @mouseleave="sidebar5 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar5 }"
              >
                <router-link to="/questions">
                  <img
                    v-if="sidebar5"
                    src="./img/sidebar5.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar5.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar5 }"
                >
                  پرسش های متداول
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card bg-darkgray">
              <div
                @mouseenter="sidebar6 = true"
                @mouseleave="sidebar6 = false"
                style="position: relative; z-index: 2"
                :class="{ 'bg-gray': divhover, 'bg-lightgray': sidebar6 }"
              >
                <router-link to="/articels">
                  <img
                    v-if="sidebar6"
                    src="./img/sidebar6.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                  />
                  <img
                    v-else
                    src="./img/sidebar6.png"
                    style="width: 55px; margin: 0 auto"
                    class="py-4 card-img-top"
                    :class="{ imghover: divhover }"
                  />
                </router-link>
                <div
                  class="pb-4"
                  style="font-size: 13px"
                  :class="{ txthover: sidebar6 }"
                >
                  مقالات و پژوهش ها
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <router-link to="/" class="position-relative">
          <img src="../../../public/img/cartkhan.jpg" class="img-sid" alt="" />
          <div class="cartkhan">
            <h5 class="text-light txt-shadow">راهنمای کد رهگیری مالیاتی</h5>
          </div>
        </router-link>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <router-link to="/" class="text-decoration-none">
          <div
            class="position-relative"
            style="top: 0; height: 100%; width: 100%"
          >
            <div class="appchek"></div>
            <img
              src="../../../public/img/appchek.jpg"
              class="position:absolute;top:0;zindex:3 img-sid"
              alt=""
            />
            <h4 class="appchek-txt txt-shadow">برنامک های طرح چک</h4>
          </div>
        </router-link>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <router-link to="/employ">
          <div
            class="position-relative"
            style="top: 0; height: 100%; width: 100%"
          >
            <img
              src="../../../public/img/estekhdam.jpg"
              class="img-sid"
              alt=""
            />
            <div class="estekhdam">
              <h1 class="text-light text-center txt-shadow">دعوت به همکاری</h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const divhover = ref(false);
    const imghover = ref(false);
    const sidebar1 = ref(false);
    const sidebar2 = ref(false);
    const sidebar3 = ref(false);
    const sidebar4 = ref(false);
    const sidebar5 = ref(false);
    const sidebar6 = ref(false);
    return {
      divhover,
      imghover,
      sidebar1,
      sidebar2,
      sidebar3,
      sidebar4,
      sidebar5,
      sidebar6,
    };
  },
};
</script>

<style scoped>
.img-slide {
  width: 98%;
  height: 100%;
  border-radius: 5px;
}
.img-sid {
  width: 99%;
  height: 76%;
  border-radius: 5px;
}

.bg-darkgray {
  background: rgb(234, 238, 238);
  height: 100%;
  border: none;
}
.bg-gray {
  background-color: rgb(244, 244, 244);
  color: #444;
  height: 100%;
  border: none;
}
.bg-lightgray {
  background: rgb(246, 246, 246);
  color: #000;
  height: 100%;
  border: none;
}

.imgout {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  cursor: pointer;
  /* width: 30%; */
}
.imghover {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  cursor: pointer;
  /* width: 30%; */
}
.txthover {
  position: relative;
  z-index: 2;
  color: #000;
}
.cartkhan {
  position: absolute;
  top: 25%;
  left: 0;
  width: 70%;
  padding: 8px 3px;
  background: rgba(4, 4, 4, 0.3);
}
.appchek {
  position: absolute;
  top: 0;
  width: 99%;
  height: 76%;
  border-radius: 5px;
  z-index: 4;

  background: linear-gradient(
      310deg,
      rgb(19, 164, 248) 0%,
      rgba(19, 164, 248, 0.95) 50%,
      transparent 10%
    ),
    center center no-repeat;
  background-size: cover;
}
.appchek-txt {
  position: absolute;
  z-index: 4;
  right: 10px;
  top: 30%;
  width: 31.5%;
  height: 100%;
  color: #fff;
}
.estekhdam {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 76%;
  top: 0;
  left: 1%;
  background: rgba(4, 4, 4, 0.3);
}
@font-face {
  font-family: "Far.Tawfig Outline";
  font-weight: bold;
  src: local("Far.Tawfig Outline"),
    url("../../assets/fonts/Far.Tawfig Outline.ttf") format("truetype");
}

.txt-shadow {
  /* font-family: "Far.Tawfig Outline" !important; */

  text-shadow: -2px -2px rgb(52, 52, 109), 2px 2px rgb(51, 51, 112);
}
.sidebar > div:hover::before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 1%;
  top: 0;
  width: 31.5%;
  height: 100%;
  transition: all 0.4s ease;
}
@media screen and (max-width: 1200px) {
  .sidebar > div:hover::before {
    content: "";
    top: 60%;
    width: 100%;
  }
}
</style>
