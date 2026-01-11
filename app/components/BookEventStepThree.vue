<template>
  <div class="space-y-6">
    <div class="space-y-1">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
        Budget & Services
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        What's your budget and which services do you need?
      </p>
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-wallet" class="size-4 text-primary-500" />
        <span>Budget Range *</span>
      </div>

      <UInputMenu
        v-model="budgetRange"
        :items="priceRanges"
        size="lg"
        placeholder="Select your budget range"
      />
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <UCheckbox
        v-for="service in services"
        :key="service"
        :label="service"
        :model-value="isSelected(service)"
        color="primary"
        variant="card"
        @update:model-value="toggleService(service)"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()

const budgetRange = ref('')
const selectedServices = ref<string[]>([])

const priceRanges = [
  'Under KES 500,000',
  'KES 500,000 – 1,000,000',
  'KES 1,000,000 – 2,000,000',
  'Above KES 2,000,000'
]

const services = [
  'Venue Selection',
  'Decoration',
  'Catering',
  'Photography & Videography',
  'Entertainment',
  'Sound & Lighting',
  'Transportation',
  'Invitation Design'
]

const isSelected = (service: string) =>
  selectedServices.value.includes(service)

const toggleService = (service: string) => {
  const index = selectedServices.value.indexOf(service)

  if (index === -1) {
    selectedServices.value.push(service)
  } else {
    selectedServices.value.splice(index, 1)
  }
}

onMounted(() => {
  if (eventStore.event.requiredServices?.length) {
    selectedServices.value = [...eventStore.event.requiredServices]
  }

  if (eventStore.event.budgetRange) {
    budgetRange.value = eventStore.event.budgetRange
  }
})

watch([budgetRange, selectedServices], () => {
  eventStore.updateEventServices({
    budgetRange: budgetRange.value,
    requiredServices: selectedServices.value
  })
})
</script>
