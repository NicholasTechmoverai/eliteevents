<template>
  <div
    class="fixed z-99999 cursor-grab shadow-lg rounded-full transition-all border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900
           h-16 w-16 flex items-center justify-center"
    :style="{ top: `${position.y}px`, left: `${position.x}px` }"
    @mousedown.prevent="startDrag"
  >
    <UPopover  placement="top" arrow>
      <UButton
        icon="i-lucide-phone"
        color="primary"
        variant="link"
        class="h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
      />

      <template #content>
        <div class="p-4 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-md">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Contact Us
          </h4>

          <div class="flex flex-col gap-3 text-sm">
            <a
              :href="`tel:${config.site.tel}`"
              class="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
            
              <UIcon name="i-lucide-phone" class="w-8 h-8" />
               <p class="text-[12px]"> Call Stephen <br> {{ config.site.tel }}</p>
            </a>

            <a
              :href="`https://wa.me/${config.site.whatsapp}`"
              target="_blank"
              class="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
            >
              <UIcon name="i-lucide-message-circle" class="w-8 h-8 text-green-500"  />
              <p class="text-[12px]"> WhatsApp <br> Chat with us</p>
              
            </a>
          </div>
        </div>
      </template>
    </UPopover>
  </div>

<div class="fixed bottom-6 right-6 z-[9999]">
  <button
    @click="scrollToTop"
    class="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 text-white shadow-lg
           hover:bg-primary-700 dark:hover:bg-primary-400 hover:scale-110 transition-all duration-300"
    aria-label="Scroll to top"
  >
    <UIcon
      name="i-lucide-arrow-big-right-dash"
      class="-rotate-90"
      :size="25"
    />
  </button>
</div>

</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const config = useAppConfig()

const position = ref({ x: 50, y: 20 })
const dragging = ref(false)
const offset = ref({ x: 0, y: 0 })

const startDrag = (e: MouseEvent) => {
  dragging.value = true
  offset.value.x = e.clientX - position.value.x
  offset.value.y = e.clientY - position.value.y
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onMouseMove = (e: MouseEvent) => {
  if (!dragging.value) return
  let x = e.clientX - offset.value.x
  let y = e.clientY - offset.value.y

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
    position.value.x = window.innerWidth - 90
    position.value.y = window.innerHeight - 150

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
