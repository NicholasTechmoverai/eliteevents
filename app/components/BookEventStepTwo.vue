<template>
  <div class="space-y-6">
    <div class="space-y-1">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
        Event Details
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        When and where will your event take place?
      </p>
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-calendar" class="size-4 text-primary-500" />
        <span>Event Date *</span>
      </div>
      <UInputDate v-model="eventDate" size="lg" />
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-map-pin" class="size-4 text-primary-500" />
        <span>Event Location *</span>
      </div>
      <UInput
        v-model="eventLocation"
        size="lg"
        placeholder="Enter event location"
      />
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-users" class="size-4 text-primary-500" />
        <span>Expected Number of Guests *</span>
      </div>
      <UInput
        v-model.number="expectedGuests"
        type="number"
        size="lg"
        min="1"
        placeholder="e.g. 150"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { CalendarDate } from '@internationalized/date'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()

const eventDate = ref<CalendarDate | null>(null)
const eventLocation = ref('')
const expectedGuests = ref<number | null>(null)

onMounted(() => {
  if (eventStore.event.eventDate) {
    const d = new Date(eventStore.event.eventDate)
    eventDate.value = new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
  }

  if (eventStore.event.eventLocation) {
    eventLocation.value = eventStore.event.eventLocation
  }

  if (eventStore.event.expectedGuests) {
    expectedGuests.value = eventStore.event.expectedGuests
  }
})

watch([eventDate, eventLocation, expectedGuests], () => {
  if (!eventDate.value) return

  eventStore.updateEventDetails({
    eventDate: eventDate.value.toString(),
    eventLocation: eventLocation.value,
    expectedGuests: expectedGuests.value ?? 0
  })
})
</script>
