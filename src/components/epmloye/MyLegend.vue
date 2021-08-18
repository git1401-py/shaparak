<template>
  <div class="legend-body">
    <div class="legend-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.legend-body {
  position: relative;
  border: 2px solid rgb(13, 66, 146);
  border-radius:5px;
  padding: 20px;
  margin-bottom: 20px;
}
.legend-title {
  position: absolute;
  top: -18px;
  right: 10px;
  padding: 5px;
  background: rgb(245, 245, 245);
  color:rgb(14, 73, 161);
}
</style>
