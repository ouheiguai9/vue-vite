<template>
  <div class="pure-rate">
    <span
      class="icon-font mg-r-2"
      v-for="item in starList"
      :key="item.key"
      v-html="item.icon"
      :style="{ color: item.color }"
      @touchstart="onTouchStar(item.key + 1)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  max: {
    type: Number,
    default: 5,
    validator(value) {
      return value > 0 && value < 100
    },
  },
  color: {
    type: String,
    default: '#ffd21e',
  },
  readOnly: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
})

const starList = computed(() => {
  const list = new Array(props.max)
  for (let i = 0; i < props.max; i++) {
    list[i] = i < props.modelValue ? { icon: '&#xe635;', color: props.color, key: i } : { icon: '&#xe65e;', key: i }
  }
  return list
})

function onTouchStar(value) {
  if (!props.readOnly) {
    emit('update:modelValue', value)
  }
}
</script>

<style scoped>
.pure-rate {
  display: inline-block;
}
</style>
