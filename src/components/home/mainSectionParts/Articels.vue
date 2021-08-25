<template>
  <div class="container-fluid text-end">
    <div class="row p-5">
      <h4>مقالات</h4>
      مقالات و پژوهش های حوزه پرداخت الکترونیک
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="row p-4 mb-3" style="background: lightgray">
          <div class="card">
            <div
              class="card-body"
              @mouseenter="slidehover = true"
              @mouseleave="slidehover = false"
            >
              <ul class="p-0 m-0 list-unstyled">
                <template v-for="item in articels" :key="item.id">
                  <li
                    :class="{ 'non-gray-fiter': slidehover }"
                    v-if="item.id < 5"
                  >
                    <router-link
                      :to="{ name: 'articel', params: { id: item.id } }"
                      :articel="item"
                      class="row text-dark text-decoration-none"
                    >
                      <div class="col-4">
                        <img :src="item.img_url" style="width: 80px" alt="" />
                      </div>
                      <div class="col-8 px-4 text-end">
                        <h6>{{ item.title }}</h6>
                        <p class="text-muted small fw-lighter">
                          {{ item.date }}/{{ item.code }}/{{ item.txt }}
                        </p>
                      </div>
                    </router-link>
                    <div></div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row p-4 mb-3 h-100" style="background: lightgray">
          <div class="card">
            <div
              class="card-body"
              @mouseenter="slidehover = true"
              @mouseleave="slidehover = false"
            >
              <ul class="p-0 m-0 list-unstyled">
                <template v-for="item in articels" :key="item.id">
                  <li
                    :class="{ 'non-gray-fiter': slidehover }"
                    v-if="item.id > 4"
                  >
                    <router-link
                      :to="{
                        name: 'articel',
                        params: {
                          id: item.id,
                        },
                      }"
                      class="row text-dark text-decoration-none"
                    >
                      <div class="col-4">
                        <img :src="item.img_url" style="width: 80px" alt="" />
                      </div>
                      <div class="col-8 px-4 text-end">
                        <h6>{{ item.title }}</h6>
                        <p class="text-muted small fw-lighter">
                          {{ item.date }}/{{ item.code }}/{{ item.txt }}
                        </p>
                      </div>
                    </router-link>
                    <div></div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    fetchArticels();
    const articels = computed(() => store.getters["articels/allArticels"]);
    async function fetchArticels() {
      // loading.value = true;
      await store.dispatch("articels/fetchAllArticels");
      // loading.value = false;
    }

    const slidehover = ref(false);
    return {
      articels,
      slidehover,
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
