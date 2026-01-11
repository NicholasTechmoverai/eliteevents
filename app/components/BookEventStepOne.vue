<template>
  <div class="space-y-6">
    <div class="space-y-1">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
        What type of event are you planning?
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Select the category that best fits your event
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <UButton
        v-for="cat in categories"
        :key="cat.name"
        :label="cat.name"
        :color="eventStore.event.category === cat.name ? 'primary' : 'neutral'"
        :active="eventStore.event.category === cat.name"
        active-variant="solid"
        variant="outline"
        size="lg"
        :class="[
          'justify-start px-4 py-3 transition-all rounded-lg text-left',
          eventStore.event.category === cat.name
            ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20'
            : 'hover:border-primary-300 dark:hover:border-primary-700'
        ]"
        @click="setCategory(cat.name)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()

const categories = ref([
  { name: 'Wedding' },
  { name: 'Ruracio' },
  { name: 'Church Event' },
  { name: 'Corporate Event' },
  { name: 'Music Performance' },
  { name: 'Private Party' }
])

const setCategory = (name: string) => {
  eventStore.updateEventType(name)
}
</script>
