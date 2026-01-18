<template>
  <component
    :is="as"
    class="inline-flex items-center select-none bg-primary-500/90 rounded"
    :class="wrapperClass"
  >
    <img
      :src="logoImage"
      alt="App logo"
      class="block object-contain transition-transform duration-300"
      :class="imgClass"
    />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import logoImage from '~/assets/images/logo.png'

type LogoSize = 'xs' | 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    size?: LogoSize
    as?: string
  }>(),
  {
    size: 'md',
    as: 'div'
  }
)

const sizeMap: Record<LogoSize, string> = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14'
}

const imgClass = computed(() => sizeMap[props.size])

const wrapperClass = computed(() => [
  'hover:scale-105',
  'focus:outline-none'
])
</script>
