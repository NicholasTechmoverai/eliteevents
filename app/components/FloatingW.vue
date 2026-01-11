<template>
  <UPageCard
    spotlight
    class="fixed z-999999 cursor-pointer shadow-lg rounded-full transition-all"
    :style="{ top: `${position.y}px`, left: `${position.x}px` }"
    @mousedown.prevent="startDrag"
  >
    <a :href="`tel:${config.site.tel}`" target="_blank" rel="noopener noreferrer">
      <UIcon name="i-lucide-phone" class="w-8 h-8 text-primary-500/80 dark:text-primary-500/50" />
    </a>
  </UPageCard>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const config = useAppConfig()

const position = ref({ x: 20, y: 20 })
const dragging = ref(false)
const offset = ref({ x: 0, y: 0 })

const startDrag = (e: MouseEvent) => {
  dragging.value = true
  offset.value.x = e.clientX - position.value.x
  offset.value.y = e.clientY - position.value.y
}

const onMouseMove = (e: MouseEvent) => {
  if (!dragging.value) return
  let x = e.clientX - offset.value.x
  let y = e.clientY - offset.value.y

  // Clamp to viewport
  x = Math.max(0, Math.min(window.innerWidth - 60, x))
  y = Math.max(0, Math.min(window.innerHeight - 60, y))

  position.value.x = x
  position.value.y = y
}

const onMouseUp = () => {
  dragging.value = false
}

onMounted(() => {
  if (process.client) {
    // Initialize position after window is available
    position.value.x = window.innerWidth - 80
    position.value.y = window.innerHeight - 80

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }
})
</script>

<style scoped>
.UPageCard:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>
