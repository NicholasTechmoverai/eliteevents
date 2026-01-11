<script setup lang="ts">
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

import { useEventStore } from '~/store/state'

const eventStore = useEventStore()
eventStore.loadDashboardSampleData()

const chartData = computed(() => {
  const eventTypes = eventStore.dashboard.eventTypes ?? []

  return {
    labels: eventTypes.map(item => item.category),
    datasets: [
      {
        data: eventTypes.map(item => item.percentage),
        backgroundColor: eventTypes.map(item => item.color)
      }
    ]
  }
})

const chartOptions = {
  responsive: true
}
</script>

<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>
