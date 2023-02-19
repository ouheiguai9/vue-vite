<template>
  <div :class="`notify-box ${notify.typeClass} pd-8`" v-show="notify.show">{{ notify.content }}</div>
  <app-loading v-if="loadingCounter > 0"></app-loading>
  <index-view v-if="systemStore.isAuthenticated"></index-view>
  <login-view v-else></login-view>
</template>
<script setup>
import { bindTokenGetter, isHttpError, isNetworkError } from '@/api.js'
import useSystemStore from 'stores/system.js'
import { onBeforeMount, onBeforeUnmount, reactive, provide, ref } from 'vue'
import AppLoading from 'components/AppLoading.vue'
import LoginView from 'views/LoginView.vue'
import IndexView from 'views/IndexView.vue'
const systemStore = useSystemStore()
const loadingCounter = ref(0)
const showConsult = ref(false)
const notify = reactive({
  typeClass: 'success',
  content: 'abc',
  show: 0,
})

const notifyInterval = setInterval(() => {
  if (notify.show > 0) {
    notify.show--
  }
}, 1000)

function showNotify(message, type, time = 3) {
  notify.content = message
  notify.typeClass = type
  notify.show = time
}

const feedback = {
  showAppLoading() {
    loadingCounter.value++
  },
  closeAppLoading() {
    loadingCounter.value--
  },
  showSuccessMessage(message) {
    if (!message) {
      message = '操作成功'
    }
    showNotify(message, 'success')
  },
  showErrorMessage(message) {
    if (!message) {
      message = '未知错误'
    }
    showNotify(message, 'error')
  },
  showConsultConfirm() {
    showConsult.value = true
  },
}

const rejectionHandler = (event) => {
  const { reason } = event
  let message = ''
  if (isHttpError(reason)) {
    if (isNetworkError(reason)) {
      message = '网络异常'
    } else {
      message = reason.response.data.message
    }
  }
  feedback.showErrorMessage(message)
  event.preventDefault()
}

provide('feedback', feedback)

onBeforeMount(() => {
  bindTokenGetter(() => systemStore.token)
  systemStore.loadMyInfo()
  window.addEventListener('unhandledrejection', rejectionHandler)
})

onBeforeUnmount(() => {
  clearInterval(notifyInterval)
  window.removeEventListener('unhandledrejection', rejectionHandler)
})
</script>
<style lang="scss" scoped>
.notify-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  color: var(--font-color-white);
  z-index: 1000;

  &.success {
    background-color: #07c160;
  }

  &.error {
    background-color: #ee0a24;
  }
}
</style>
