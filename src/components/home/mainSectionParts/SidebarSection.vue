<template>
  <div class="container text-end">
    <div class="row p-4">
      <h4>
        {{ section.title }}
      </h4>
      {{ section.caption }}
    </div>
    <div class="row">
      <div class="col-sm-6 col-lg-3" v-if="routes.route1">
        <router-link :to="routes.route1">
          <img :src="section.img[0]" alt="" />
          <h6>{{ section.img_title[0] }}</h6>
        </router-link>
      </div>
      <div class="col-md-6 col-lg-3" v-if="routes.route2">
        <router-link :to="routes.route2">
          <img :src="section.img[1]" :alt="section.img[1]" />
          <h6>{{ section.img_title[1] }}</h6>
        </router-link>
      </div>
      <div class="col-md-6 col-lg-3" v-if="routes.route3">
        <router-link :to="routes.route3">
          <img :src="section.img[2]" alt="" />
          <h6>{{ section.img_title[2] }}</h6>
        </router-link>
      </div>
      <div class="col-md-6 col-lg-3" v-if="routes.route4">
        <router-link :to="routes.route4">
          <img :src="section.img[3]" alt="" />
          <h6>{{ section.img_title[3] }}</h6>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["section", "items", "routes"],
  setup() {
    const collapseid = ref("");
    const strid = ref("");
    return {
      strid,
      collapseid,
    };
  },
};
</script>

<style scoped>
.accordion-header button::after,
.accordion-header button::before {
  content: "";
}
</style>
