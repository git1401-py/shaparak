<template>
  <div class="row p-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="item in items" :key="item.id">
        <span v-show="false">{{ (collapseid = "collapse" + item.id) }}</span>
        <span v-show="false">{{ (strid = "#" + collapseid) }}</span>

        <h2 class="accordion-header" :id="item.id">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="strid"
            aria-expanded="true"
            :aria-controls="collapseid"
          >
            {{ item.name }}
          </button>
        </h2>
        <div
          :id="collapseid"
          class="accordion-collapse collapse"
          :aria-labelledby="item.id"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="col-12">
                <span style="font-weight: bold">نشانی: </span>
                <span style="font-weight: 200">{{ item.address }}</span>
              </div>
              <div class="col-9">
                <span style="font-weight: bold">تلفن: </span>
                <span style="font-weight: 200">{{ item.tell }}</span>
                <br />
                <span style="font-weight: bold">وب سایت: </span>
                <span style="font-weight: 200">{{ item.web }}</span>
                <br />
              </div>
              <div class="col-3">
                <img :src="item.img_url" style="width: 100%; height: 100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();
    fetchItems();
    async function fetchItems() {
      // loading.value = true;
      await store.dispatch("componies/fetchItems");
      // loading.value = false;
    }
    const items = computed(() => store.getters["componies/allItems"]);
    return {
      items,
    };
  },
};
</script>

<style></style>
