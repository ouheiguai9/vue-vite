<template>
  <div class="flex-r-center flex-r-st pd-lr-12 f-s-medium head-tool-bar">
    <slot name="left"><span class="icon-font">&#xe602;返回</span></slot>
    <slot></slot>
    <slot name="right"> </slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  iconColor: {
    type: String,
    default: '#fff',
  },
})
</script>

<style lang="scss" scoped>
.head-tool-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 40px;
  overflow: hidden;
  background-color: var(--main-color);
  color: var(--font-color-white);
}
</style>
