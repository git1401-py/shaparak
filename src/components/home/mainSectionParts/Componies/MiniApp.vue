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
                  <span style="font-weight: bold">لینک دریافت برنامک : </span>
                <span style="font-weight: 200">{{ item.link }}</span>
                
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
      await store.dispatch("componyApp/fetchItems");
      // loading.value = false;
    }
    const items = computed(() => store.getters["componyApp/allItems"]);
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion-item {
  padding: 5px 0px !important;
  border: none !important;
}
.accordion-button {
  padding: 10px;
   background: lightgray !important;
  color: rgb(105, 103, 103) !important;
  font-weight: bolder !important;
  padding-right: 30px;
}
.accordion-button::after {
  content: "";
  width: 0px;
  height: 0px;
}
.accordion-button::before {
  content: "";
  position: absolute;
  right: 10px;
  top: 12px;
  width: 10px;
  height: 10px;
  background: #000;
}
.accordion-button:hover::before {
  background: green !important;
}

</style>
