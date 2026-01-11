<script setup lang="ts">
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

import { useEventStore } from '~/store/state'

const eventStore = useEventStore()
eventStore.loadDashboardSampleData()

const chartData = computed(() => {
  const revenueTrend = eventStore.dashboard.revenueTrend ?? []

  return {
    labels: revenueTrend.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: revenueTrend.map(item => item.val),
        borderColor: 'gold',
        tension: 0.4,
        fill: false
      }
    ]
  }
})

const chartOptions = {
  responsive: true
}
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
