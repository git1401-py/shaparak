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
      route1: "/Psp",
      route2: "/Yar",
      route3: "/Bank",
      route4: "/MiniApp",
    });
    const section = reactive({
      title: "شرکت‌ها و برنامک‌های مجاز",
      caption:
        "با کلیک بر روی هر گروه می توانید فهرست مرتبط با آن را مشاهده نمایید.",
      img: [
        "../img/sidebar1a.png",
        "../img/sidebar1b.png",
        "../img/sidebar1c.png",
        "../img/sidebar1d.png",
      ],
      img_title: [
        "شرکت های PSP",
        "شرکت های پرداخت یار",
        "بانک های فعال در فرآیند پرداخت یاری",
        "برنامک های طرح چک",
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
