<template>
  <div class="page">
    <div class="go-back f-s-extra-large f-c-white pd-12" @touchstart="goBack">&lt;</div>
    <header class="flex-c-center flex-jc-center f-c-white f-s-extra-small">
      <div class="icon-font center-content circle f-c-extra-light avatar">&#xe61e;</div>
      <div class="mg-t-8">我的</div>
      <div class="mg-t-12 f-s-large">{{ myPhone }}</div>
      <div class="mg-t-12">注册用户手机号</div>
    </header>
    <main class="mg-16">
      <div class="btn mg-t-8 flex-r-st pd-lr-16">
        <div class="flex-r-st"><span class="icon-font f-c-main f-s-extra-large mg-r-12">&#xe643;</span><span>我的订单</span></div>
        <div class="f-c-extra-light">&gt;</div>
      </div>
      <div class="btn mg-t-12 flex-r-st pd-lr-16" @touchstart="feedback.showConsultConfirm()">
        <div class="flex-r-st"><span class="icon-font f-c-main f-s-extra-large mg-r-12">&#xe611;</span><span>电话咨询</span></div>
        <div class="f-c-extra-light">&gt;</div>
      </div>
      <div class="center-content f-s-small f-c-sub mg-t-64">若有建议或疑惑</div>
      <div class="center-content f-s-small f-c-sub">请加微信***联系</div>
      <div class="center-content f-s-small f-c-sub mg-t-64">服务时间：9:00 - 18:00</div>
    </main>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import useSystemStore from 'stores/system.js'

const systemStore = useSystemStore()
const router = useRouter()
const myPhone = computed(() => {
  return systemStore.user.phone.replace(/^(\d{3})\d{4}(\d{4})$/, (rs, p1, p2) => `${p1}****${p2}`)
})
const feedback = inject('feedback')
function goBack() {
  router.back()
}
</script>

<style lang="css" scoped>
.page {
  height: 100vh;
  background-color: #efefef;
  overflow: hidden;
}

header {
  height: 35vh;
  background-color: var(--main-color);
}

.go-back {
  position: absolute;
  left: 0;
  top: 0;
}

.avatar {
  font-size: 56px;
  background-color: #fff;
}

.btn {
  height: 60px;
  border-radius: 16px;
  background-color: #fff;
}

.btn:active {
  background-color: #ddd;
}
</style>
