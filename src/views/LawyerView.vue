<template>
  <div class="page flex-c-center flex-jc-center">
    <div class="f-c-black f-s-large mg-t-24">请先完善个人资料</div>
    <div class="form-item flex-r-st mg-t-48">
      <label>真实姓名</label>
      <div class="input-box mg-l-16"><input type="text" v-model="name" placeholder="请输入" /></div>
    </div>
    <div class="form-item flex-r-st mg-t-24">
      <label>身份证号</label>
      <div class="input-box mg-l-16"><input type="text" v-model="certificate" placeholder="请输入" /></div>
    </div>
    <div class="form-item flex-r-st mg-t-24">
      <label>执业证号</label>
      <div class="input-box mg-l-16"><input type="text" v-model="lawFirm" placeholder="请输入" /></div>
    </div>
    <div class="form-item flex-r-st mg-t-24">
      <label>执业律所</label>
      <div class="input-box mg-l-16"><input type="text" v-model="lawId" placeholder="请输入" /></div>
    </div>
    <div class="form-item mg-t-24">
      <div>请选择擅长领域</div>
      <div class="skill-group flex-r-st flex-wrap">
        <span class="nowrap center-content pd-tb-4 mg-t-8 f-s-small" v-for="item in skillItem" :key="item.value" @touchstart="onClickSkill(item)">
          {{ item.text }}<i class="icon-font" v-show="checkSkill(item.value)">&#xe600;</i>
        </span>
      </div>
    </div>
    <div class="flex-r-st f-s-small mg-t-24" @touchstart="checked = !checked">
      <span class="icon-font f-s-large f-c-main mg-r-8" v-html="checkIcon"></span>以上信息确认是本人填写，真实有效
    </div>
    <button class="btn-submit center-content f-c-white mg-t-24 mg-b-64" :class="{ disabled: !checked }" @touchstart="doApproved">
      申请成为接单律师
    </button>
  </div>
</template>

<script setup>
import { computed, ref, reactive, inject } from 'vue'
import { apiSubmitInfo } from '@/api.js'
import useSystemStore from 'stores/system.js'

const feedback = inject('feedback')
const systemStore = useSystemStore()
const skillItem = [
  {
    text: '婚姻财产',
    value: 'key1',
  },
  {
    text: '经济纠纷',
    value: 'key2',
  },
  {
    text: '交通事故',
    value: 'key3',
  },
  {
    text: '房产土地',
    value: 'key4',
  },
  {
    text: '合同纠纷',
    value: 'key5',
  },
  {
    text: '劳动就业',
    value: 'key6',
  },
  {
    text: '刑事案件',
    value: 'key7',
  },
  {
    text: '公司股权',
    value: 'key8',
  },
  {
    text: '其他咨询',
    value: 'key9',
  },
]
const copyUser = Object.assign({}, systemStore.user)
const name = ref(copyUser['name'])
const certificate = ref(copyUser['certificate'])
const lawId = ref(copyUser['lawId'])
const lawFirm = ref(copyUser['lawFirm'])
const form = reactive(copyUser)
const checked = ref(true)
const checkIcon = computed(() => (checked.value ? '&#xe600;' : '&#xe72f;'))

function checkSkill(skill) {
  return !!form[skill]
}

function onClickSkill(item) {
  form[item.value] = !!!form[item.value]
}

function doApproved() {
  if (validate(name, '真实姓名') || validate(certificate, '身份证号') || validate(lawId, '执业证号') || validate(lawFirm, '执业律所')) {
    return
  }
  if (skillItem.reduce((prev, item) => prev + (form[item.value] ? 1 : 0), 0) === 0) {
    feedback.showErrorMessage('请至少选择一个擅长领域')
    return
  }
  apiSubmitInfo(
    Object.assign(copyUser, {
      name: name.value,
      certificate: certificate.value,
      lawId: lawId.value,
      lawFirm: lawFirm.value,
    })
  ).then(({ data }) => (systemStore.user = data))
}

function validate(refValue, message) {
  if (refValue.value === '' || refValue.value === undefined || refValue.value === null) {
    feedback.showErrorMessage(`请填写${message}`)
    return true
  }
  return false
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  overflow: hidden;
}

.form-item {
  width: 300px;

  .input-box {
    height: 32px;
    flex: auto;
    border-bottom: 1px solid var(--font-color-black);

    input {
      width: 100%;
      height: 31px;
      line-height: 31px;
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;
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
}

.skill-group {
  span {
    display: inline-block;
    position: relative;
    width: 90px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #bbb;

    i {
      position: absolute;
      right: 0;
      top: 0;
      color: var(--main-color);
    }
  }
}

.btn-submit {
  width: 180px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);

  &.disabled {
    background-color: var(--main-color-7);
    border: 1px solid var(--main-color-7);
  }
}
</style>
