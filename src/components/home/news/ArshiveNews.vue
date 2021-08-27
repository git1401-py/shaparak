<template>
  <div class="container-fluid text-end">
    <div class="row p-5">
      <h4>اخبار</h4>
     آرشیو محتوای دسته بندی
    </div>
    <div class="row" style="font-size: 12px">
      

      <div class="col-sm-12 col-md-6">
        <div class="row p-4 mb-3" style="background: lightgray">
          <div class="card">
            <div
              class="card-body"
              @mouseenter="slidehover = true"
              @mouseleave="slidehover = false"
            >
              <ul class="p-0 m-0 list-unstyled">
                <template v-for="item in news" :key="item.id">
                  <li
                    :class="{ 'non-gray-fiter': slidehover }"
                    v-if="
                      (currentPage - 1) * (perPage/3) <= item.id &&
                      item.id <= currentPage * (perPage/3) - 1
                    "
                  >
                    <router-link
                      :to="{
                        name: 'newsItem',
                        params: { id: item.id },
                      }"
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
                <template v-for="item in news" :key="item.id">
                  <li
                    :class="{ 'non-gray-fiter': slidehover }"
                    v-if="
                      currentPage * (perPage/3)  <= item.id &&
                      item.id <= currentPage * (perPage/2) - 1
                    "
                  >
                  >
                    <router-link
                      :to="{
                        name: 'newsItem',
                        params: { id: item.id },
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
      <div class="col-sm-12 col-md-6">
        <div class="row p-4 mb-3 h-100" style="background: lightgray">
          <div class="card">
            <div
              class="card-body"
              @mouseenter="slidehover = true"
              @mouseleave="slidehover = false"
            >
              <ul class="p-0 m-0 list-unstyled">
                <template v-for="item in news" :key="item.id">
                  <li
                    :class="{ 'non-gray-fiter': slidehover }"
                    v-if="
                      currentPage * (perPage/2)  <= item.id &&
                      item.id <= currentPage * (perPage) - 1
                    "
                  >
                  >
                    <router-link
                      :to="{
                        name: 'newsItem',
                        params: { id: item.id },
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
      <div class="col-12" style="direction: ltr; font-size:10px;">
        <VueTailwindPagination
          :current="currentPage"
          :total="total"
          :per-page="perPage"
          @page-changed="pageChange($event)"
        >
        </VueTailwindPagination>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { watch } from "@vue/runtime-core";
export default {
  components: { VueTailwindPagination },
  setup() {
    const store = useStore();
    const currentPage = ref(1);
    const perPage = ref(12);

    fetchnews();
    const news = computed(() => store.getters["news/allNews"]);
    const total = ref(0);

    watch(news, () => {
      news.value.forEach(() => {
        total.value++;
      });
    });
    async function fetchnews() {
      // loading.value = true;
      await store.dispatch("news/fetchAllNews");
      // loading.value = false;
    }
    function pageChange(pageNumber) {
      currentPage.value = pageNumber;
      console.log("cur", currentPage.value);
    }

    const slidehover = ref(false);
    return {
      news,
      slidehover,
      currentPage,
      total,
      perPage,
      pageChange,
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
