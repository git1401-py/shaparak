<template>
  <div class="home">
    <MainSection />
    <NewsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import MainSection from "@/components/home/MainSection.vue";
import NewsSection from "@/components/home/NewsSection.vue";

export default {
  name: "Home",
  components: {
    MainSection,
    NewsSection,
  },
};
</script>
