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
      route1: "/cart",
      route2: "/store",
      route3: "/net",
      route4: "",
    });
    const section = reactive({
      title: "پرسش و پاسخ های متداول",
      caption:
        "با کلیک بر روی هر گروه می توانید فهرست مرتبط با آن را مشاهده نمایید.",
      img: [
          "../img/sidebar5c.png",
        "../img/sidebar5a.png",
        "../img/sidebar5b.png",
        "",
      ],
      img_title: [
          "پرسش و پاسخ های دارندگان کارت",
        "پرسش و پاسخ های پذیرندگان فروشگاهی",
        "پرسش و پاسخ های پذیرندگان اینترنتی",
        "",
      ],
    });
    return {
      section,
      routes,
    };
  },
};
</script>

<style></style>
