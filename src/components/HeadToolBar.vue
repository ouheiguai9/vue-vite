<template>
  <div class="flex-r-center flex-r-st pd-lr-12 f-s-medium head-tool-bar" :style="{ backgroundColor: background, color: fontColor }">
    <div class="icon-font" @click="router.back()">&#xe602;返回</div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="right"> </slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  background: {
    type: String,
    default: 'var(--main-color)',
  },
  fontColor: {
    type: String,
    default: 'var(--font-color-white)',
  },
})
const router = useRouter()
</script>

<style lang="scss" scoped>
.head-tool-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 40px;
  overflow: hidden;
}
</style>
