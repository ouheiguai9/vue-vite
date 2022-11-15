<template>
  <main>
    <div class="dialog shadow-box">
      <div class="logo-box circle icon-view logo-bg"></div>
      <div class="icon-font close-box f-c-white center-content" @touchstart="$emit('onCancel')">&#xe622;</div>
      <div class="content pd-t-12">
        <div class="row-bg img-2"></div>
        <div class="row-bg img-3 mg-t-4"></div>
        <div class="row-bg img-4 mg-t-16"></div>
        <div class="row-bg img-5 mg-t-4"></div>
        <div class="row-bg img-6" @touchstart="$emit('onOk')"></div>
      </div>
    </div>
  </main>
</template>
<script setup>
defineEmits(['onCancel', 'onOk'])
</script>
<style lang="scss" scoped>
$content-width: 280px;
$content-height: $content-width * 1.4;
$border-radius: 16px;

main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255 255 255 / 70%);
  z-index: 1000;
}

.dialog {
  position: absolute;
  width: $content-width;
  height: $content-height;
  left: calc((100vw - $content-width) / 2);
  top: calc((100vh - $content-height) / 2);
  padding-top: $content-height * 0.28;
  background-color: var(--main-color);
  background-image: url('assets/consult_confirm_1.png');
  background-position-x: center;
  background-position-y: $content-height * 0.12;
  background-repeat: no-repeat;
  background-size: 240px;
  border-radius: $border-radius $border-radius $border-radius * 2 $border-radius * 2;
}

.logo-box {
  position: absolute;
  width: 64px;
  height: 64px;
  top: -32px;
  left: calc(($content-width - 64px) / 2);
  background-color: #fff;
  background-size: 48px;
}

.close-box {
  position: absolute;
  width: 48px;
  height: 48px;
  top: -24px;
  right: -20px;
  line-height: 48px;
  font-size: 42px;
}

.content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: $border-radius * 2;
}

.row-bg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.img-2 {
  height: 30px;
  background-image: url('assets/consult_confirm_2.png');
}

.img-3 {
  height: 35px;
  background-image: url('assets/consult_confirm_3.png');
}

.img-4 {
  height: 31px;
  background-image: url('assets/consult_confirm_4.png');
}

.img-5 {
  height: 67px;
  background-image: url('assets/consult_confirm_5.png');
}

.img-6 {
  height: 67px;
  background-image: url('assets/consult_confirm_6.png');
}
</style>
