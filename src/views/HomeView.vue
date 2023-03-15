<template>
  <div class="page">
    <header class="banner"></header>
    <section class="pd-lr-16 mg-t-16">
      <div class="flex-r-st">
        <div class="white-box pd-16">
          <div :class="`f-s-large f-w-bold ${statusText.color}`">{{ statusText.main }}</div>
          <div class="f-s-extra-small f-c-light">{{ statusText.sub }}<br />{{ statusText.detail }}</div>
          <i class="icon-font">&#xe953;</i>
        </div>
        <div class="white-box pd-16 mg-l-4 f-w-bold">
          <div class="f-s-large">本月收入</div>
          <div class="f-c-main">￥0</div>
          <i class="icon-font f-c-main">&#xe640;</i>
        </div>
      </div>
      <div class="flex-c-center" v-if="systemStore.user.state === 'NOT_APPROVED'">
        <div class="mg-t-48 pd-24 center-content" style="background: #eee">您的入驻信息已提交<br />请等待审核，审核后方可接单赚钱</div>
        <div class="f-s-small mg-t-24">如需快速审核，请联系工作人员</div>
        <div class="icon-view stuff-qr s-64 mg-t-24"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useSystemStore from 'stores/system.js'

const systemStore = useSystemStore()
const statusText = computed(() => {
  if (systemStore.user.state === 'NOT_APPROVED') {
    return {
      main: '审核中',
      sub: '审核通过',
      detail: '方可接单',
      color: 'f-c-orange',
    }
  } else if (systemStore.user.state === 'OFF_DUTY') {
    return {
      main: '下班中',
      sub: '点击按钮',
      detail: '开始接单',
      color: 'f-c-sub',
    }
  } else if (systemStore.user.state === 'ON_DUTY') {
    return {
      main: '上班中中',
      sub: '点击按钮',
      detail: '停止接单',
      color: 'f-c-main',
    }
  }
  return {}
})
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding-bottom: 50px;
}

header {
  height: 25vh;
  background: var(--main-color);
}

.white-box {
  display: flex;
  position: relative;
  height: 15vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  border-radius: 8px;
  background: #fff;

  i.icon-font {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-size: 48px;
    color: orange;
    opacity: 0.2;
    z-index: 0;
  }
}

.f-c-orange {
  color: #ffa500 !important;
}
</style>
