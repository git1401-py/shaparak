<template>
  <sidebar-section :section="section" :routes="routes" />
</template>

<script>
import SidebarSection from "./SidebarSection.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { SidebarSection },
  setup() {
    const routes = reactive({
      route1: "/alphabet",
      route2: "/books",
      route3: "",
      route4: "",
    });
    const section = reactive({
      title: "معرفی شبکه پرداخت و مستندات",
      caption:
        "با کلیک بر روی هر گروه می توانید فهرست مرتبط با آن را مشاهده نمایید.",
      img: ["../img/sidebar3a.png", "../img/sidebar2.png", "", ""],
      img_title: ["تعریف واژگان", "مستندات", "", ""],
    });
    return {
      section,
      routes,
    };
  },
};
</script>

<style></style>
