<template>
  <div class="page">
    <div class="banner"></div>
    <div class="top">
      <div class="call-box"></div>
      <div class="white-bg">
        <div class="news-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  width: 375px;
  height: 169px;
  background: url('assets/banner.jpg') no-repeat;
  background-size: cover;
}

.top {
  position: relative;
  width: 375px;
  height: 130px;
  padding-top: 40px;
  background-color: var(--main-color);

  .call-box {
    position: absolute;
    left: 17px;
    top: 0;
    width: 341px;
    height: 80px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 5px 20px 3px rgb(0 0 0 / 30%);
  }

  .white-bg {
    width: 375px;
    height: 90px;
    padding: 0 5px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #fff;

    .news-box {
      bottom: 0;
      height: 100%;
      border-bottom: 3px solid #e0e0e0;
    }
  }
}
</style>
