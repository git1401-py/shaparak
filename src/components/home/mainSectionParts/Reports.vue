<template>
  <div class="container-fluid text-end">
    <div class="row p-5">
      <h4>گزارش اقتصادی شاپرک</h4>
      آرشیو الکترونیکی
    </div>
    <div class="row p-4" style="background: lightgray">
      <div class="col-sm-2 col-lg-1"></div>
      <div class="col-sm-8 col-lg-10">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" v-for="item in items" :key="item.id">
            <span v-show="false">{{
              (collapseid = "collapse" + item.id)
            }}</span>
            <span v-show="false">{{ (strid = "#" + collapseid) }}</span>

            <h2
              class="accordion-header position-relative"
              :id="item.id"
              style="z-index: 1"
            >
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="strid"
                aria-expanded="true"
                :aria-controls="collapseid"
              >
                <span class="accordion-span position-relative z-index:4">{{
                  item.name
                }}</span>
              </button>
              <img
                src="../img/sidebar2a.png"
                style="position: absolute; right: -10px; top: -25px; z-index: 3"
              />
              <img
                src="../../../../public/img/sidebar2b.png"
                style="position: absolute; left: 10px; top: 0; z-index: 3"
                alt=""
              />
            </h2>
            <div
              :id="collapseid"
              class="accordion-collapse collapse"
              :aria-labelledby="item.id"
            >
              <div class="accordion-body">
                <div class="row">
                  <div class="col-12">
                    <swiper
                      :slides-per-view="3"
                      :space-between="50"
                      :width="550"
                      :navigation="{ hideOnClick: true }"
                      :scrollbar="{ draggable: true }"
                      @swiper="onSwiper"
                      @slideChange="onSlideChange"
                    >
                      <swiper-slide
                        v-for="report in item.numbers"
                        :key="report"
                        class="non-gray-fiter m-5"
                      >
                        <a
                          :href="report.link"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="برای دریافت این گزارش کلیک کنید"
                          class="text-center text-decoration-none"
                        >
                          <div>
                            <img src="../../../../public/img/sidebar2c.png" />
                          </div>
                          <div class="text-center w-100">
                            <h5>{{ report.name }}</h5>
                            <h6>{{ report.date }}</h6>
                          </div>
                        </a>
                        <div></div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-2 col-lg-1"></div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  data() {
    return {
      // breakpoints: {
      //   1024: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      // },
    };
  },
  setup() {
    const store = useStore();
    const report_title = ref("");
    fetchItems();
    async function fetchItems() {
      // loading.value = true;
      await store.dispatch("reports/fetchItems");
      // loading.value = false;
    }
    const items = computed(() => store.getters["reports/allItems"]);

    return {
      items,
      report_title,
    };
  },
};
</script>

<style lang="scss" scoped>
// @import './base.scss';
.accordion {
}
.accordion-item {
  padding: 35px 20px !important;
  // padding-right: 100px !important;
  background: lightgray !important;
  border: none !important;
}
.accordion-header {
}
.accordion-button {
  padding: 15px;
  background: rgb(170, 170, 168) !important;
  color: rgb(105, 103, 103) !important;
  font-weight: bolder !important;
  padding-right: 130px;
}
.accordion-body {
  padding: 50px 0 30px 0;
}
.accordion-span::before {
  content: "";
  width: 30px;
  height: 30px;
  background: rgb(170, 170, 168);
  position: absolute;
  top: 0;
  left: -32px;
  z-index: 4;
}

.non-gray-fiter {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
.non-gray-fiter:hover {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.swiper-button-prev,
.swiper-button-next {
  color: #000;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  &:after {
    content: "prev";
  }
  left: -8px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  &:after {
    content: "next";
  }
  right: -8px;
  left: auto;
}
</style>
