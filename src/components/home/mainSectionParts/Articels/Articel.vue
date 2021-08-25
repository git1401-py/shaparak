<template>
  <div class="container-fluid p-5" style="background: #eee">
    <div class="row">
      <div class="col-12 text-end">
        <h4>
          {{ articel.title }}
        </h4>
        
        <p class="text-muted">
          کد خبر:{{ articel.code }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ساعت انتشار:
          {{ articel.time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تاریخ انتشار:{{
            articel.date
          }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row p-5 align-items-center justify-content-center">
      <img :src="articel.img_url" style="width: 80%" />
    </div>
    <div class="row my-5 text-secondary fs-5 text-end">
      {{ articel.description }}
    </div>
    <hr />
    <div class="row py-2 align-items-center justify-content-center">
      <button class="btn btn-primary w-25">دریافت پرونده پیوست</button>
    </div>
    <div class="row text-end">
      <span class="fs-4"
        >دسته بندی:&nbsp;&nbsp;<span
          class="px-2 text-muted small fs-6"
          style="background: #ddd; width: 50px; border-radius: 5px"
          >مقالات و پژوهش های حوزه پرداخت الکترونیک</span
        ></span
      >
    </div>
    <hr />
    <div class="row">
      <div class="fs-4 text-end">اخبار مرتبط:</div>
      <swiper
        :width="300"
        navigation
        autoplay
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @mouseenter="slidehover = true"
        @mouseleave="slidehover = false"
      >
        <swiper-slide
          v-for="item in articels"
          :key="item.id"
          :class="{ 'non-gray-fiter': slidehover }"
          class="mx-4 my-3"
        >
          <a href="" class="text-center text-decoration-none text-dark">
            <div>
              <img
                :src="item.img_url"
                style="
                  width: 180px;
                  height: 130px;
                  margin-right: -10px;
                  border-radius: 5px;
                "
              />
            </div>

            <h6 class="mt-3 fw-bold">{{ item.title }}</h6>
          </a>
          <div></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import {  ref } from "@vue/reactivity";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted(){

  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  
  setup() {
    const store = useStore();
    const route = useRoute();

    fetchArticels();
    fetchArticel();
    const articels = computed(() => store.getters["articels/allArticels"]);
    const articel = computed(() => store.getters["articels/getArticel"]);
    async function fetchArticels() {
      // loading.value = true;
      await store.dispatch("articels/fetchAllArticels");
      // loading.value = false;
    }
    async function fetchArticel() {
      // loading.value = true;
      await store.dispatch("articels/fetchGetArticels",Number(route.params.id));
      // loading.value = false;
    }
    // const articels = ref([]);
    // articels.value = route.params.articels;
    console.log("route.params.id",Number(route.params.id));
    
    const slidehover = ref(false);
    return {
      articels,
      articel,
      slidehover,
      route
    };
  },
};
</script>
<style scoped>
.non-gray-fiter {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
.non-gray-fiter:hover {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
</style>
