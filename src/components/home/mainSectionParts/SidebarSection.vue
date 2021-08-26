<template>
  <div class="container text-end">
    <div class="row p-4">
      <h4>
        {{ section.title }}
      </h4>
      {{ section.caption }}
    </div>
    <div
      class="row"
      @mouseenter="slidehover = true"
      @mouseleave="slidehover = false"
    >
      <div
        class="
          col-sm-6 col-md-3
          mb-3
        "
        v-if="routes.route1"
        :class="{ 'non-gray-fiter': slidehover }"
      >
        <router-link
          :to="routes.route1"
          class="text-decoration-none text-dark links"
        >
          <div>
            <img :src="section.img[0]" alt="" />
            <h6 class="mt-3">{{ section.img_title[0] }}</h6>
          </div>
        </router-link>
        <div></div>
      </div>
      <div
        class="
          col-sm-6 col-md-3
          mb-3
        "
        v-if="routes.route2"
        :class="{ 'non-gray-fiter': slidehover }"
      >
        <router-link
          :to="routes.route2"
          class="text-decoration-none text-dark links"
        >
          <div>
            <img :src="section.img[1]" :alt="section.img[1]" />
            <h6 class="mt-3">{{ section.img_title[1] }}</h6>
          </div>
        </router-link>
        <div></div>
      </div>
      <div
        class="
          col-sm-6 col-md-3
          mb-3
        "
        v-if="routes.route3"
        :class="{ 'non-gray-fiter': slidehover }"
      >
        <router-link
          :to="routes.route3"
          class="text-decoration-none text-dark links"
        >
          <div>
            <img :src="section.img[2]" alt="" style="padding-right:40px"/>
            <h6 class="mt-3">{{ section.img_title[2] }}</h6>
          </div>
        </router-link>
        <div></div>
      </div>
      <div
        class="
          col-sm-6 col-md-3
          mb-3
        "
        v-if="routes.route4"
        :class="{ 'non-gray-fiter': slidehover }"
      >
        <router-link
          :to="routes.route4"
          class="text-decoration-none text-dark links"
        >
          <div>
            <img :src="section.img[3]" alt="" style="padding-right:40px"/>
            <h6 class="mt-3">{{ section.img_title[3] }}</h6>
          </div>
        </router-link>
        <div></div>
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
    const slidehover = ref(false);

    return {
      strid,
      collapseid,
      slidehover,
    };
  },
};
</script>

<style scoped>
.accordion-header button::after,
.accordion-header button::before {
  content: "";
}
.non-gray-fiter {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
.non-gray-fiter:hover {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.links {
  background: lightgray;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.router-link-exact-active {
      background:rgb(130, 130, 245);
      color:#fff !important;
    }
</style>
