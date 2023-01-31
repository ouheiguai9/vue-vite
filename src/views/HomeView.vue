<template>
  <div class="page">
    <header>
      <div class="call shadow-box flex-r-st f-c-white mg-lr-16 pd-lr-16" @touchstart="showConsult = true">
        <div class="call-phone circle icon-font center-content">&#xe94f;</div>
        <div class="call-fee"></div>
        <div class="call-btn pd-lr-8 pd-tb-4">去咨询 ></div>
      </div>
    </header>
    <main class="pd-lr-16 mg-tb-12">
      <div class="btn-profile circle f-c-white center-content mg-r-16" @touchstart="onClickProfile">
        <div class="icon-font f-s-extra-large pd-t-8">&#xe61e;</div>
        <div class="f-s-extra-small f-w-light pd-t-2">我的</div>
      </div>
      <div class="flex-r-st f-c-black f-s-small pd-b-12" style="border-bottom: 2px solid #ddd">
        <div>服务动态<i class="icon-font f-c-light mg-l-8">&#xe607;</i></div>
        <div class="text-overflow">{{ phone }} 刚刚完成了一次电话咨询</div>
      </div>
      <div class="mg-t-12">
        <div class="flex-r-st">
          <div class="flex-r-st f-c-black f-w-bold"><span class="title-dot mg-r-8"></span><span>按分类去咨询</span></div>
        </div>
        <div class="flex-r-st flex-wrap">
          <div
            class="service-item center-content mg-t-12 pd-4"
            v-for="item in serviceTypeList"
            :key="item.text"
            @touchstart="onClickServiceType(item.text)"
          >
            <i class="icon-font" v-html="item.icon"></i>
            <div class="mg-t-8 f-s-small">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="quality-box flex-r-st f-s-extra-small mg-t-12 gold-text pd-8">
        <div class="flex-r-st"><i class="icon-font f-s-base mg-r-4">&#xe63f;</i> 实名认证</div>
        <div class="flex-r-st"><i class="icon-font f-s-base mg-r-4">&#xeacc;</i> 真实律师</div>
        <div class="flex-r-st"><i class="icon-font f-s-base mg-r-4">&#xe608;</i> 执业职格</div>
        <div class="flex-r-st"><i class="icon-font f-s-base mg-r-4">&#xe629;</i> 平台担保</div>
      </div>
      <div class="mg-t-12">
        <div class="flex-r-st">
          <div class="flex-r-st f-c-black f-w-bold"><span class="title-dot mg-r-8"></span><span>用户评价</span></div>
          <span class="f-s-small f-c-light">更多&nbsp; ></span>
        </div>
        <div class="flex-r-center flex-wrap">
          <div class="tag-item pd-4 mg-t-12 mg-r-8 f-s-extra-small nowrap" v-for="item in tags" :key="item.text">
            {{ item.text }}<span class="f-c-black mg-l-4">({{ item.count }})</span>
          </div>
        </div>
        <div class="comment-item f-c-light f-s-small pd-b-12" v-for="item in list" :key="item">
          <div class="flex-r-st mg-t-12">
            <div class="flex-r-st"><i class="icon-font f-s-large mg-r-8 gold-text">&#xe61e;</i>用户189****3030评价</div>
            <div>服务律师：张律师</div>
          </div>
          <div class="text-overflow f-s-extra-small f-c-black mg-t-12">{{ desc }}</div>
          <div class="flex-r-st mg-t-12">
            <van-rate v-model="rateValue" :size="16" color="#ffd21e" readonly allow-half />
            <div>2022-10-11 13:14</div>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
    <consult-confirm v-if="showConsult" @on-cancel="onCancelCallConfirm" @on-ok="onOkCallConfirm"></consult-confirm>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppFooter from 'components/AppFooter.vue'
import ConsultConfirm from 'components/ConsultConfirm.vue'
import useSystemStore from 'stores/system'
import { useRouter } from 'vue-router'

const systemStore = useSystemStore()
const showConsult = ref(false)
const serviceTypeList = [
  {
    text: '婚姻财产',
    icon: '&#xe605;',
  },
  {
    text: '经济纠纷',
    icon: '&#xe601;',
  },
  {
    text: '交通事故',
    icon: '&#xe60a;',
  },
  {
    text: '房产土地',
    icon: '&#xe620;',
  },
  {
    text: '合同纠纷',
    icon: '&#xe639;',
  },
  {
    text: '劳动就业',
    icon: '&#xe811;',
  },
  {
    text: '刑事案件',
    icon: '&#xe694;',
  },
  {
    text: '其他咨询',
    icon: '&#xe610;',
  },
]
const tags = [
  {
    text: '服务态度好',
    count: 123,
  },
  {
    text: '律师专业',
    count: 542,
  },
  {
    text: '分析透彻',
    count: 213,
  },
]
const router = useRouter()
const phone = ref(randomPhone())
const list = ['a', 'b', 'c']
const rateValue = ref(4.3)
const desc = ref('这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略')

onMounted(() => {
  if (systemStore.showConsult) {
    setTimeout(() => {
      showConsult.value = systemStore.showConsult
    }, 5000)
  }
  intervalRefreshPhone()
})

function onClickServiceType(text) {
  systemStore.serviceType = text
  showConsult.value = true
}

function onCancelCallConfirm() {
  systemStore.dontShowConsult()
  showConsult.value = false
}

function onOkCallConfirm() {
  onCancelCallConfirm()
  if (systemStore.isAuthenticated) {
    router.push({ name: 'Service' })
  } else {
    router.push({ name: 'Login' })
  }
}

function onClickProfile() {
  router.push({ name: 'My' })
}

function intervalRefreshPhone() {
  setTimeout(function () {
    phone.value = randomPhone()
    intervalRefreshPhone()
  }, (5 + Math.floor(Math.random() * 15)) * 1000)
}

function randomPhone() {
  const prefix = [
    130, 131, 133, 135, 136, 137, 138, 150, 151, 152, 153, 155, 156, 157, 158, 159, 177, 178, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  ]
  const index = Math.floor(Math.random() * prefix.length) % prefix.length
  return prefix[index] + '****' + (1111 + Math.random() * 8888).toFixed(0)
}
</script>

<style lang="scss" scoped>
.gold-text {
  color: var(--sub-color) !important;
}

header {
  position: relative;
  height: 312px;
  padding-top: 205px;
  background: url('assets/banner.png') no-repeat;
  background-size: contain;

  .call {
    height: 100px;
    border-radius: 16px;
    background-color: #fff;

    .call-phone {
      width: 64px;
      height: 64px;
      line-height: 64px;
      font-size: 40px;
      background-color: var(--main-color);
    }

    .call-fee {
      flex: 1;
      height: 100%;
      background: url('assets/call.png') no-repeat center;
      background-size: contain;
    }

    .call-btn {
      background-color: var(--main-color);
      border-radius: 8px;
    }
  }
}

main {
  line-height: 1;

  .btn-profile {
    position: fixed;
    right: 0;
    top: 50vh;
    width: 48px;
    height: 48px;
    background-color: var(--sub-color);
    box-shadow: 0 0 10px 2px rgb(0 0 0 / 50%);
    cursor: pointer;
    z-index: 1;
  }

  .title-dot {
    display: inline-block;
    width: 4px;
    height: 14px;
    background-color: var(--main-color);
  }

  .service-item {
    width: 70px;
    cursor: pointer;

    i {
      font-size: 24px;
      color: var(--main-color);
    }
  }

  .service-item:active {
    background-color: #efefef;
  }

  .quality-box {
    background-color: #f2f2f2;
    border-radius: 8px;
  }

  .comment-item {
    border-bottom: 1px solid #aaa;
  }

  .tag-item {
    border-radius: 8px;
    color: var(--font-color-light);
    border: 1px solid var(--font-color-sub);
  }
}
</style>
