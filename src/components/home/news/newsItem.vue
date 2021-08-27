<template>
  <div class="container-fluid p-5" style="background: #eee">
    <div class="row">
      <div class="col-12 text-end">
        <h4>
          {{ newsItem.title }}
        </h4>

        <p class="text-muted">
          کد خبر:{{ newsItem.code }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ساعت انتشار:
          {{ newsItem.time }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تاریخ انتشار:{{
            newsItem.date
          }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row p-5 align-items-center justify-content-center">
      <img :src="newsItem.img_url" style="width: 80%" />
    </div>
    <div class="row my-5 text-secondary fs-5 text-end">
      {{ newsItem.description }}
    </div>
    <hr />
    
    <div class="row text-end">
      <span class="fs-4"
        >دسته بندی:&nbsp;&nbsp;<span
          class="px-2 text-muted small fs-6"
          style="background: #ddd; width: 50px; border-radius: 5px"
          >اخبار</span
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
          v-for="item in news"
          :key="item.id"
          :class="{ 'non-gray-fiter': slidehover }"
          class="mx-4 my-3"
        >
          <router-link
            :to="{
              name: 'newsItem',
              params: { id: item.id },
            }"
            class="text-center text-decoration-none text-dark"
          >
            <div>
              <img
                :src="item.img_url"
                style="width: 180px; height: 130px; border-radius: 5px"
              />
            </div>

            <h6 class="mt-3 fw-bold">{{ item.title }}</h6>
          </router-link>
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
import { ref } from "@vue/reactivity";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
// import axios from "axios";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },

  setup() {
    // const store = useStore();
    const route = useRoute();
    const store = useStore();

    fetchnews();
    const news = computed(() => store.getters["news/allNews"]);
    const newsItem = ref({});

    watch(news, () => {
      newsItem.value = news.value[route.params.id];
    });
    async function fetchnews() {
      // loading.value = true;
      await store.dispatch("news/fetchAllNews");
      // loading.value = false;
    }

    const slidehover = ref(false);
    return {
      news,
      newsItem,
      slidehover,
      route,
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
