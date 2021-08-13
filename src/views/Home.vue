<template>
  <div class="home">
    <MainSection />
  </div>
</template>

<script>
// @ is an alias to /src
import MainSection from "@/components/home/MainSection.vue";

export default {
  name: "Home",
  components: {
    MainSection,
  },
};
</script>
