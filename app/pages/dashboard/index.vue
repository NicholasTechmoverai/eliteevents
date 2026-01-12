<template>
  <Transition name="page" appear>
    <div class="max-w-[1200px] mx-auto p-4 space-y-10">

      <!-- Header -->
      <div data-aos="fade-down" data-aos-delay="100" class="space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h3>
            <p class="text-gray-500 dark:text-gray-300">
              Welcome back! Here's your event overview.
            </p>
          </div>

          <div class="text-gray-600 dark:text-gray-400 text-sm">
            <p class="uppercase tracking-wide">Last Updated</p>
            <p class="font-medium">
              {{ dashboardData?.lastUpdated?.toLocaleString() }}
            </p>
          </div>
        </div>

        <USeparator />
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <UPageCard
          v-for="(card, index) in cards"
          :key="card.title"
          spotlight
          spotlight-color="primary"
          class="rounded-xl shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          data-aos="fade-up"
          :data-aos-delay="index * 100 + 200"
        >
          <div class="flex items-center justify-between mb-3">
            <UIcon
              :name="card.icon"
              class="w-6 h-6 text-primary-600 dark:text-primary-400"
            />

            <p
              class="text-sm font-semibold"
              :class="{
                'text-green-500': card.change > 0,
                'text-red-500': card.change < 0,
                'text-gray-900 dark:text-white': card.change === 0
              }"
            >
              {{ card.change > 0 ? '+' : '' }}{{ card.change }}{{ card.isPercentage ? '%' : '' }}
            </p>
          </div>

          <p class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ card.value }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {{ card.title }}
          </p>
        </UPageCard>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UPageCard
          key="revenue"
          spotlight
          spotlight-color="primary"
          class="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Revenue Trend
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Monthly performance overview
            </p>
          </div>

          <div class="h-72">
            <LineChart />
          </div>
        </UPageCard>

        <UPageCard
          key="types"
          spotlight
          spotlight-color="primary"
          class="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Event Types
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Booking distribution by category
            </p>
          </div>

          <div class="h-72 flex items-center justify-center">
            <PieChart />
          </div>
        </UPageCard>
      </div>

      <!-- Event List -->
      <div data-aos="zoom-in" data-aos-delay="100" class="w-full overflow-auto">
        <EventListing />
      </div>

    </div>
  </Transition>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()
eventStore.loadDashboardSampleData()

const dashboardData = computed(() => eventStore.dashboard)

const cards = computed(() => [
  {
    title: 'Total Events',
    icon: 'i-lucide-calendar',
    value: dashboardData.value?.totalEvents ?? 0,
    change: dashboardData.value?.totalEventsChangeRate ?? 0,
    isPercentage: true
  },
  {
    title: 'Upcoming Events',
    icon: 'i-lucide-book-plus',
    value: dashboardData.value?.upcomingEvents ?? 0,
    change: dashboardData.value?.upcomingEventsChangeRate ?? 0,
    isPercentage: true
  },
  {
    title: 'Revenue',
    icon: 'i-lucide-dollar-sign',
    value: `KES ${dashboardData.value?.revenue?.toLocaleString() ?? 0}`,
    change: dashboardData.value?.revenueChangeRate ?? 0,
    isPercentage: true
  },
  {
    title: 'Pending Bookings',
    icon: 'i-lucide-clock',
    value: dashboardData.value?.pendingBookings ?? 0,
    change: dashboardData.value?.pendingBookingChangeRate ?? 0,
    isPercentage: true
  }
])
</script>


<style scoped>
/* Page */
.page-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

/* Stagger cards */
.stagger-enter-active {
  transition: all 0.35s ease;
}
.stagger-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

/* Charts */
.fade-up-enter-active {
  transition: all 0.4s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

/* Simple fade */
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
