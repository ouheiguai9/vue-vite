<template>
  <div class="overlay flex-c-center flex-jc-center" :style="{ backgroundColor: background, color: iconColor }">
    <span class="icon-view s-32 spinner">
      <svg class="circular" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none"></circle></svg>
    </span>
  </div>
</template>

<script setup>
defineProps({
  background: {
    type: String,
    default: 'rgba(0,0,0,0.1)',
  },
  iconColor: {
    type: String,
    default: '#fff',
  },
})
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  z-index: 10000;
}

.spinner {
  animation: rotate 2s linear infinite;
}

.circular {
  display: block;
  width: 100%;
  height: 100%;

  circle {
    animation: circular 1.5s ease-in-out infinite;
    stroke: currentcolor;
    stroke-width: 3;
    stroke-linecap: round;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
