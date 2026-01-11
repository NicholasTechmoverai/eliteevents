<script setup lang="ts">
import { h, resolveComponent, computed } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'
import { useEventStore } from '~/store/state'
import { useClipboard } from '@vueuse/core'

const eventStore = useEventStore()
eventStore.loadDashboardSampleData()

const dashboardData = computed(() => eventStore.dashboard)

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const { copy } = useClipboard()

type Booking = {
  id: string
  client: string
  category: string
  date: string
  status: 'confirmed' | 'pending' | 'in progress' | 'cancelled' // Added 'in progress'
  revenue: number
}

// Map dashboard bookings
const data = computed<Booking[]>(() =>
  dashboardData.value.recentBookings.map(b => ({
    id: b.id,
    client: b.client,
    category: b.category,
    date: b.date.toString(),
    status: b.status as 'confirmed' | 'pending' | 'in progress' | 'cancelled', // Added 'in progress'
    revenue: b.revenue
  }))
)

// Status badge configuration: color + icon - Added "in progress"
const statusConfig = {
  confirmed: { color: 'success', icon: 'i-lucide-check-circle' },
  pending: { color: 'warning', icon: 'i-lucide-clock' },
  'in progress': { color: 'info', icon: 'i-lucide-loader-circle' }, // Added this line
  cancelled: { color: 'error', icon: 'i-lucide-x-circle' }
}

const columns: TableColumn<Booking>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'client',
    header: 'Client'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) =>
      new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as keyof typeof statusConfig
      const { color, icon } = statusConfig[status] || { color: 'neutral', icon: '' }
      return h(
        UBadge,
        { class: 'capitalize flex items-center gap-1', variant: 'subtle', color },
        () => [
          icon ? h('i', { class: `${icon} w-4 h-4` }) : null,
          status
        ]
      )
    }
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    meta: {
      class: { th: 'text-right', td: 'text-right font-medium' }
    },
    cell: ({ row }) => {
      const amount = Number(row.getValue('revenue'))
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
    }
  },
  {
    id: 'actions',
    meta: { class: { td: 'text-right' } },
    cell: ({ row }) =>
      h(
        UDropdownMenu,
        { content: { align: 'end' }, items: getRowItems(row), 'aria-label': 'Actions dropdown' },
        () =>
          h(UButton, {
            icon: 'i-lucide-ellipsis-vertical',
            color: 'neutral',
            variant: 'ghost',
            'aria-label': 'Actions dropdown'
          })
      )
  }
]

function getRowItems(row: Row<Booking>) {
  return [
    { type: 'label', label: 'Actions' },
    {
      label: 'Copy Booking ID',
      onSelect() {
        copy(row.original.id)
      }
    },
    { type: 'separator' },
    { label: 'View Client' },
    { label: 'View Booking Details' }
  ]
}
</script>

<template>
  <UPageCard class="mt-8" spotlight spotlight-color="primary">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
      Recent Event Bookings
    </h3>
    <UTable :data="data" :columns="columns" class="flex-1" />
  </UPageCard>
</template>