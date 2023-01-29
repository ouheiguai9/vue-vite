<template>
  <div class="page flex-c-center flex-jc-center">
    <template v-if="status === 1">
      <div class="f-c-black f-s-extra-large f-w-bold">请耐心等待</div>
      <div class="f-c-black f-s-extra-large f-w-bold mg-tb-24">您的律师正在连线中...</div>
      <div class="time-down-box mg-tb-64 circle center-content">
        <span class="icon-font second-1" v-html="second.t"></span>
        <span class="icon-font second-2" v-html="second.o"></span>
        <span class="icon-font f-s-large f-c-black">秒</span>
      </div>
    </template>
    <div v-else-if="status === 2">已接单</div>
    <div v-else>咨询完成</div>
    <div class="cover"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const fi = ['&#xe625;', '&#xe614;', '&#xe616;', '&#xe617;', '&#xe619;', '&#xe61b;', '&#xe61c;', '&#xe61f;', '&#xe623;', '&#xe624;']
const status = ref(1)
const timeDown = ref(60)
const timeDownInterval = ref(null)
const second = computed(() => {
  const time = timeDown.value
  return {
    t: fi[Math.floor(time / 10)],
    o: fi[time % 10],
  }
})
onMounted(() => {
  timeDownInterval.value = setInterval(function () {
    const next = timeDown.value - 1
    timeDown.value = next < 0 ? 60 : next
  }, 1000)
})
</script>
<style scoped>
.page {
  height: 100vh;
  overflow: hidden;
}

.time-down-box {
  width: 120px;
  height: 120px;
  line-height: 112px;
  font-size: 36px;
  border: 4px solid var(--sub-color);
}

.second-1 {
  margin-left: 8px;
  margin-right: -7px;
}

.second-2 {
  margin: 0 -7px;
}
</style>
