<template>
  <div
    @mouseenter="imghover = true"
    @mouseleave="imghover = false"
    style="position: relative; z-index: 2"
  >
    <a href="">
      <img
        v-if="imghover"
        :src="src"
        style="width: 55px; margin: 0 auto"
        class="py-4 card-img-top"
      />
      <img
        v-else
        :src="srcdark"
        style="width: 55px; margin: 0 auto"
        class="py-4 card-img-top"
      />
    </a>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: [ "src", "srcdark"],
  setup() {
    const imghover = ref(false);
    return {
      imghover,
    };
  },
};
</script>

<style scoped>
.img-slide {
  width: 98%;
  height: 98%;
  margin: 25px 0;
  border-radius: 5px;
}
.bg-lightgray {
  background: #eee;
  height: 90%;
  border: none;
}
</style>
