<template>
  <div class="max-w-7xl mx-auto mt-16 px-5">
    <h3
      class="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10"
      data-aos="fade-up"
    >
      Experience the difference of working with true event planning professionals
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="group border border-gray-200 dark:border-gray-800/70 rounded-2xl p-6 bg-white dark:bg-gray-900/50
               shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-primary-500/30"
        data-aos="zoom-in"
      >
        <p
          class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center"
        >
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = ref([
  {
    description: 'Every detail is executed to perfection with the highest standards'
  },
  {
    description: 'Experienced professionals dedicated to bringing your vision to life'
  },
  {
    description: 'Custom-designed events that reflect your unique style and preferences'
  },
  {
    description: 'Reliable execution ensuring your event runs smoothly from start to finish'
  }
])
</script>
