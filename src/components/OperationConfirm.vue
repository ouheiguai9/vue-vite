<template>
  <main>
    <div class="dialog center-content">
      <div class="pd-16 f-s-small"><slot></slot></div>
      <div class="group-btn">
        <div class="btn f-c-main pd-8" @touchstart="$emit('onOk')">确定</div>
        <div class="btn f-c-light pd-8" @touchstart="$emit('onCancel')">取消</div>
      </div>
    </div>
  </main>
</template>
<script setup>
defineEmits(['onCancel', 'onOk'])
</script>
<style lang="scss" scoped>
main {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0 0 0 / 10%);
  z-index: 1000;
}

.dialog {
  width: 280px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0 0 0 / 20%);
}

.group-btn {
  display: flex;
  border-top: 1px solid #aaa;

  .btn {
    width: 50%;
    flex: auto;

    &:first-child {
      border-right: 1px solid #aaa;
    }
  }
}
</style>
