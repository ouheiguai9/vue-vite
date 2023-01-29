<template>
  <div class="page flex-c-center flex-jc-center">
    <div class="icon-view s-64 logo-bg"></div>
    <div class="f-c-black f-s-large mg-t-24">登录/注册</div>
    <div class="flex-r-st mg-t-48">
      <div class="icon-font f-s-extra-large f-c-extra-light">&#xe60f;</div>
      <div class="input-box mg-l-16"><input type="number" v-model="phone" placeholder="请输入手机号" /></div>
    </div>
    <div class="flex-r-st mg-t-24">
      <div class="icon-font f-s-extra-large f-c-extra-light">&#xe63f;</div>
      <div class="input-box flex-r-st mg-l-16">
        <input type="number" v-model="captcha" placeholder="请输入验证码" />
        <button class="btn-code f-c-main f-s-extra-small" :class="{ disabled: countDown > 0 }" @touchstart="sendCaptcha">
          {{ countDown > 0 ? `重新获取(${countDown})` : '获取验证码' }}
        </button>
      </div>
    </div>
    <div class="flex-r-st f-s-small mg-t-24" @touchstart="checked = !checked">
      <span class="icon-font f-s-large f-c-main mg-r-8" v-html="checkIcon"></span>我同意
      <span class="f-c-main mg-l-8" @touchstart.stop="showWord">《用户注册协议》</span>
    </div>
    <button class="btn-submit center-content f-c-white mg-t-24 mg-b-64" @touchstart="doLogin">登录/注册</button>
  </div>
</template>

<script setup>
import { computed, inject, onBeforeUnmount, ref } from 'vue'
import { apiSendCaptcha } from '@/api.js'
import { useRouter } from 'vue-router'
import useSystemStore from 'stores/system.js'

const systemStore = useSystemStore()
const router = useRouter()
const feedback = inject('feedback')
const phone = ref('')
const captcha = ref('')
const checked = ref(false)
const countDown = ref(0)
const checkIcon = computed(() => (checked.value ? '&#xe600;' : '&#xe72f;'))
const countDownInterval = setInterval(() => {
  if (countDown.value > 0) {
    countDown.value--
  }
}, 1000)

function showWord() {
  console.warn(111)
}

function sendCaptcha() {
  if (countDown.value > 0 || !testPhone()) {
    return
  }
  countDown.value = 60
  apiSendCaptcha(phone.value)
    .then(() => {
      feedback.showSuccessMessage('验证码已发送,请注意查收')
    })
    .catch((error) => {
      countDown.value = 0
      return new Promise((res, rej) => {
        rej(error)
      })
    })
}

function doLogin() {
  if (!checked.value) {
    feedback.showErrorMessage('请阅读并同意用户协议')
    return
  }
  if (!testPhone() || !testCaptcha()) {
    return
  }
  systemStore.login(phone.value, captcha.value).then(() => {
    router.replace(!systemStore.targetRoute ? { name: 'Home' } : systemStore.targetRoute)
  })
}

function testPhone() {
  if (/^1\d{10}$/.test(phone.value)) {
    return true
  }
  feedback.showErrorMessage('请输入11位手机号')
  return false
}

function testCaptcha() {
  if (/^\d{6}$/.test(captcha.value)) {
    return true
  }
  feedback.showErrorMessage('请输入6位短信验证码')
  return false
}

onBeforeUnmount(() => {
  clearInterval(countDownInterval)
})
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  overflow: hidden;
}

.input-box {
  width: 220px;
  height: 32px;
  border-bottom: 1px solid var(--font-color-black);

  input {
    width: 100%;
    height: 31px;
    line-height: 31px;
    margin: 0;
    padding: 0;
    border: none;
  }

  input::placeholder {
    font-size: var(--font-size-extra-small);
    color: var(--font-color-light);
  }

  .btn-code {
    flex: none;

    &.disabled {
      color: var(--font-color-light) !important;
    }
  }
}

input[type='checkbox'] {
  margin: 0;
  border: 1px solid var(--main-color);
}

.btn-submit {
  width: 180px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
}
</style>
