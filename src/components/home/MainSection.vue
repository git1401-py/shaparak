<template>
  <div class="container">
    <div class="row my-2" style="position: relative">
      <div class="col-xl-8 col-12 pb-5">
        <img src="../../../public/img/slide.png" class="img-slide" />
      </div>
      <div
        class="col-xl-4 col-12 sidebar"
        @mouseenter="divhover = true"
        @mouseleave="divhover = false"
      >
        <div class="row" style="height: 33.3%">
          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  src="./img/sidebar1.png"
                  srcdark="./img/sidebar1dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar1.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">
                شرکت ها و برنامک های مجاز
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  src="./img/sidebar2.png"
                  srcdark="./img/sidebar2dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar2.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">گزارش اقتصادی شاپرک</div>
            </div>
          </div>
        </div>
        <div class="row" style="height: 33.3%">
          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  src="./img/sidebar3.png"
                  srcdark="./img/sidebar3dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar3.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">
                معرفی شبکه پرداخت و مستندات
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  src="./img/sidebar4.png"
                  srcdark="./img/sidebar4dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar4.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">ابزارهای پذیرش مجاز</div>
            </div>
          </div>
        </div>
        <div class="row" style="height: 33.4%">
          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  divhover="divhover"
                  src="./img/sidebar5.png"
                  srcdark="./img/sidebar5dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar5.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">پرسش های متداول</div>
            </div>
          </div>
          <div class="col-6">
            <div class="card pb-2 bg-lightgray">
              <template v-if="divhover">
                <sidebars
                  src="./img/sidebar6.png"
                  srcdark="./img/sidebar6dark.png"
                />
              </template>
              <template v-if="!divhover">
                <img
                  src="./img/sidebar6.png"
                  style="width: 55px; margin: 0 auto"
                  class="py-4 card-img-top"
                />
              </template>
              <div class="" style="font-size: 13px">مقالات و پژوهش ها</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <a href="">
        <img src="../../../public/img/cartkhan.jpg" class="img-sid" alt="" />
        </a>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <a href="">
        <img src="../../../public/img/appchek.jpg" class="img-sid" alt="" />
        </a>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <a href="">
        <img src="../../../public/img/estekhdam.jpg" class="img-sid" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Sidebars from "./Sidebars.vue";
export default {
  components: { Sidebars },
  setup() {
    const divhover = ref(false);
    const txt = ref("");
    return {
      divhover,
      txt,
    };
  },
};
</script>

<style scoped>
.img-slide {
  width: 98%;
  height: 98%;
  margin: 25px 0;
  border-radius: 5px;
}
.img-sid {
  width: 99%;
  height: 70%;
  margin: 25px 0;
  border-radius: 5px;
}
.bg-lightgray {
  background: #eee;
  height: 95%;
  border: none;
}
.sidebar > div:hover::before {
  content: "";
  position: absolute;
  z-index: 2;
  left: 0%;
  top: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.2);
  transition: all 0.4s ease;
}
.sidebar:hover::before {
  width: 50%;
}
</style>
