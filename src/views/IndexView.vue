<template>
  <template v-if="systemStore.isApproved">
    <component :is="tab.view"></component>
    <div class="bottom-tabs flex-r-center">
      <div
        class="tab flex-c-center f-c-light"
        :class="{ 'f-c-main': tab.key === item.key }"
        v-for="item in tabs"
        :key="item.key"
        @touchstart="tab = item"
      >
        <i class="icon-font f-s-extra-large" v-html="item.icon"></i>
        <span class="f-s-extra-small">{{ item.text }}</span>
      </div>
    </div>
  </template>
  <lawyer-view v-else></lawyer-view>
</template>

<script setup>
import useSystemStore from 'stores/system.js'
import LawyerView from 'views/LawyerView.vue'
import { ref } from 'vue'
import HomeView from 'views/HomeView.vue'
import MyView from 'views/MyView.vue'

const systemStore = useSystemStore()
const tabs = [
  { icon: '&#xe6cb;', key: 'Home', text: '首页', view: HomeView },
  { icon: '&#xe61a;', key: 'My', text: '我的', view: MyView },
]
const tab = ref(tabs[0])
</script>
<style lang="scss" scoped>
.bottom-tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  border-top: 1px solid #eee;

  .tab {
    flex: 1;
  }
}
</style>
