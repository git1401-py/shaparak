<template>
  <div class="container-fluid p-0" style="background: #eee">
    <div class="row p-4">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mt-md-3">
        <div class="card h-100">
          <div class="card-body position-relative">
            <router-link
              v-for="newe in newestNews"
              :key="newe.id"
              :to="{
                name: 'newsItem',
                params: { id: newe.id },
              }"
            >
              <img
                class="card-img-top mt-3"
                :src="newe.img_url"
                style="width: 90%"
                alt=""
              />
              <span
                class="bg-danger text-light px-1"
                style="
                  position: absolute;
                  top: 35px;
                  right: 35px;
                  border-radius: 5px;
                "
                >جدید</span
              >
              <div class="card-body text-end mt-3">
                <p class="text-muted small mb-0" style="text-align: justify">
                  {{ newe.txt }}
                </p>
                <p href="" class="breifNewsItem fs-6 mt-0">
                  {{ newe.title }}
                </p>
                <p class="text-muted m-0 p-0 pt-3 small">{{ newe.date }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 mb-sm-3 mt-md-3">
        <div class="card h-100">
          <div
            class="card-body"
            @mousemove="hover = true"
            @mouseout="hover = false"
          >
            <ul class="p-0 m-0 list-unstyled">
              <li
                @mousemove="sidebar1 = true"
                @mouseout="sidebar1 = false"
                class="mt-4 link_hover"
              >
                <router-link
                  :to="{
                    name: 'newsItem',
                    params: { id: threeRecently[0].id },
                  }"
                  class="row a_hover"
                  :class="{ bg_hover: hover & !sidebar1 }"
                >
                  <div class="col-4">
                    <img
                      :src="threeRecently[0].img_url"
                      style="width: 80px"
                      alt=""
                    />
                  </div>
                  <div class="col-8 px-4 text-end">
                    <h6>{{ threeRecently[0].title }}</h6>
                    <p class="text-muted">
                      {{ threeRecently[0].date }}
                    </p>
                  </div>
                </router-link>
              </li>
              <li
                @mousemove="sidebar2 = true"
                @mouseout="sidebar2 = false"
                class="mt-4 link_hover"
              >
                <router-link
                  :to="{
                    name: 'newsItem',
                    params: { id: threeRecently[1].id },
                  }"
                  class="row a_hover"
                  :class="{ bg_hover: hover & !sidebar2 }"
                >
                  <div class="col-4">
                    <img
                      :src="threeRecently[1].img_url"
                      style="width: 80px"
                      alt=""
                    />
                  </div>
                  <div class="col-8 px-4 text-end">
                    <h6>{{ threeRecently[1].title }}</h6>
                    <p class="text-muted">
                      {{ threeRecently[1].date }}
                    </p>
                  </div>
                </router-link>
              </li>
              <li
                @mousemove="sidebar3 = true"
                @mouseout="sidebar3 = false"
                class="mt-4 link_hover"
              >
                <router-link
                  :to="{
                    name: 'newsItem',
                    params: { id: threeRecently[2].id },
                  }"
                  class="row a_hover"
                  :class="{ bg_hover: hover & !sidebar3 }"
                >
                  <div class="col-4">
                    <img
                      :src="threeRecently[2].img_url"
                      style="width: 80px"
                      alt=""
                    />
                  </div>
                  <div class="col-8 px-4 text-end">
                    <h6>{{ threeRecently[2].title }}</h6>
                    <p class="text-muted">
                      {{ threeRecently[2].date }}
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mb-sm-3 mt-md-3">
        <div class="card h-100">
          <div class="card-body position-relative pb-0">
            <ul class="breifNews p-3 m-0 pb-0">
              <li class="p-0 m-0 w-100" v-for="newe in recently" :key="newe.id">
                <router-link
                  :to="{
                    name: 'newsItem',
                    params: { id: newe.id },
                  }"
                  class="breifNewsItem"
                >
                  {{ newe.title }}
                </router-link>
              </li>
              <li class="pt-3 m-0 w-100">
                <router-link
                  to="/arshiv"
                  class="d-flex align-items-center justify-content-end"
                >
                  <div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>

                  <span class="px-1 pb-0 m-0 arshiv">آرشیو اخبار</span>
                </router-link>
              </li>
            </ul>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const hover = ref(false);
    const sidebar1 = ref(false);
    const sidebar2 = ref(false);
    const sidebar3 = ref(false);

    const store = useStore();

    fetchNews();
    const recently = computed(() => store.getters["news/recently"]);
    const newestNews = computed(() => store.getters["news/newestNews"]);
    const threeRecently = computed(() => store.getters["news/threeRecently"]);
    // const news = computed(() => store.getters["news/allNews"]);
    // const recently = ref([]);
    // news.value.forEach((element) => recently.value.push(element));
    // recently.value.splice(15, recently.value.length);
    // recently.value.splice(0, 4);

    // const newestNews = ref([]);
    // news.value.forEach((element) => newestNews.value.push(element));
    // newestNews.value.splice(1, newestNews.value.length);

    // const threeRecently = ref([{},{},{}]);
    // news.value.forEach((element) => threeRecently.value.push(element));
    // threeRecently.value.shift(recently.value[0]);
    // threeRecently.value.splice(3, threeRecently.value.length);

    async function fetchNews() {
      // loading.value = true;
      await store.dispatch("news/fetchNews");
      // loading.value = false;
    }
    return {
      hover,
      sidebar1,
      sidebar2,
      sidebar3,
      recently,
      threeRecently,
      newestNews,
    };
  },
};
</script>

<style scoped>
.breifNews {
  list-style: none;
  color: #000;
}
.breifNews:hover > li > a {
  color: rgb(107, 105, 105);
}
.breifNews:hover > li > a::before {
  background: rgb(107, 105, 105);
}
.breifNewsItem {
  display: flex;
  align-items: flex-start;
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-right: 20px;
  color: #000;
}
.breifNewsItem::before {
  content: "";
  position: absolute;
  right: 0px;
  top: 12px;
  width: 10px;
  height: 10px;
  background: #000;
}
.breifNewsItem:hover::before {
  background: green !important;
}
.breifNewsItem:hover {
  color: #000 !important;
}
.arshiv:hover {
  color: #000 !important;
}
.line {
  width: 4px;
  height: 2px;
  background: #000;
  margin-bottom: 1px;
}

.bg_hover {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  color: rgb(160, 154, 154);
}
img {
  border-radius: 6px;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #000;
}
</style>
