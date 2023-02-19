<template>
  <div v-if="systemStore.isApproved">律师首页</div>
  <lawyer-view v-else></lawyer-view>
</template>

<script setup>
import useSystemStore from 'stores/system.js'
import LawyerView from 'views/LawyerView.vue'

const systemStore = useSystemStore()
</script>
