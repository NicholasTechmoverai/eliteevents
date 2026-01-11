<template>
  <UPageSection 
    id="featured-events" 
    title="Featured Events"
    description="A glimpse into the exceptional events we've brought to life" 
    class="bg-gray-50 dark:bg-gray-900/50"
  >
    <div class="mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="100">
      <div class="flex flex-wrap gap-2 sm:gap-3 justify-center">
        <UButton 
          v-for="(category, index) in categories" 
          :key="category.value" 
          :label="category.label"
          :color="activeCategory === category.value ? 'primary' : 'neutral'"
          :variant="activeCategory === category.value ? 'solid' : 'outline'" 
          size="md"
          class="min-w-[100px] transition-all duration-300 hover:scale-105"
          :data-aos="'fade-up'"
          :data-aos-delay="100 + index * 100"
          @click="activeCategory = category.value" 
        />
      </div>
    </div>

    <div class="transition-all duration-500" data-aos="fade-up" data-aos-delay="500">
      <MasonryGallery 
        v-if="filteredPortfolio.length > 0" 
        :images="filteredPortfolio" 
        :columns="3" 
        :column-gap="20"
        :row-gap="20" 
        :categories="categoryOptions" 
      />
    </div>

    <div class="mt-8 sm:mt-12 text-center" data-aos="fade-up" data-aos-delay="700">
      <UButton 
        to="/portfolio/#" 
        size="lg" 
        color="neutral" 
        variant="outline" 
        trailing-icon="i-ph-arrow-right"
        class="group hover:scale-105 transition-all duration-300"
      >
        View All Events
        <template #trailing>
          <UIcon 
            name="i-ph-arrow-right"
            class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
          />
        </template>
      </UButton>
    </div>
  </UPageSection>
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue'

const categories = [
  { label: 'All Events', value: 'all' },
  { label: 'Weddings', value: 'wedding' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Traditional', value: 'traditional' },
  { label: 'Private', value: 'private' },
  { label: 'Music', value: 'music' },
  { label: 'Church', value: 'church' },
]

const categoryOptions = categories.filter(cat => cat.value !== 'all')

const activeCategory = ref('all')

const portfolioData = ref([
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1674970538959-e7475d8d376f?w=800&auto=format&fit=crop',
    title: 'Elegant Garden Wedding',
    category: 'wedding',
    alt: 'Wedding celebration',
    description: 'A beautiful outdoor wedding ceremony with floral arrangements',
    venue: 'Grand Paradise Resort',
    date: '2024-06-15',
    height: '550px'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1566735355837-2269c24e644e?w=800&auto=format&fit=crop',
    title: 'Annual Tech Conference',
    category: 'corporate',
    alt: 'Corporate event',
    description: 'Annual corporate celebration event with keynote speakers',
    venue: 'Convention Center',
    date: '2024-03-22',
    height: '280px'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1696238173596-554e92268051?w=800&auto=format&fit=crop',
    title: 'Church Anniversary',
    category: 'church',
    alt: 'Church event',
    description: 'Beautiful anniversary celebration service',
    venue: 'Nairobi Chapel',
    date: '2024-02-10',
    height: '520px'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1662261896058-af7f8cab43eb?w=800&auto=format&fit=crop',
    title: 'Business Conference',
    category: 'corporate',
    alt: 'Conference setup',
    description: 'Professional conference organization for industry leaders',
    venue: 'Innovation Hub',
    date: '2024-08-18',
    height: '300px'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1712971404080-87271ce2e473?w=800&auto=format&fit=crop',
    title: 'Product Launch',
    category: 'corporate',
    alt: 'Product launch',
    description: 'Exciting new product reveal with live demonstrations',
    venue: 'Tech Center',
    date: '2024-04-15',
    height: '380px'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop',
    title: 'Summer Music Festival',
    category: 'music',
    alt: 'Music festival',
    description: 'Large scale music festival with multiple stages',
    venue: 'Central Park',
    date: '2024-07-12',
    height: '320px'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&auto=format&fit=crop',
    title: 'Team Building',
    category: 'corporate',
    alt: 'Team building',
    description: 'Corporate team building activities and workshops',
    venue: 'Retreat Center',
    date: '2024-05-05',
    height: '260px'
  },
  {
    id: 8,
    src: 'https://plus.unsplash.com/premium_photo-1665949502498-b5250d637851?w=800&auto=format&fit=crop',
    title: 'Anniversary Party',
    category: 'private',
    alt: 'Anniversary celebration',
    description: 'Golden anniversary celebration with family and friends',
    venue: 'Oceanview Cliffs',
    date: '2024-05-20',
    height: '400px'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
    title: 'Graduation Ceremony',
    category: 'private',
    alt: 'Graduation party',
    description: 'Academic achievement celebration and award ceremony',
    venue: 'University Hall',
    date: '2024-06-30',
    height: '340px'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1678997638676-ed99f2e040a0?w=800&auto=format&fit=crop',
    title: 'Cultural Celebration',
    category: 'traditional',
    alt: 'Traditional event',
    description: 'Vibrant cultural celebration with traditional performances',
    venue: 'Community Hall',
    date: '2024-02-10',
    height: '420px'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1709731191876-899e32264420?w=800&auto=format&fit=crop',
    title: 'Music Festival Stage',
    category: 'music',
    alt: 'Music festival stage',
    description: 'Dynamic stage setup for live concert performance',
    venue: 'Carnivore Grounds',
    date: '2024-08-15',
    height: '420px'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1763231575952-98244918f99b?w=800&auto=format&fit=crop',
    title: 'Corporate Gala Dinner',
    category: 'corporate',
    alt: 'Gala dinner event',
    description: 'Formal corporate gala dinner with entertainment',
    venue: 'Grand Ballroom',
    date: '2024-09-20',
    height: '360px'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1766393195987-912865cbb81b?w=800&auto=format&fit=crop',
    title: '50th Birthday Celebration',
    category: 'private',
    alt: 'Birthday party',
    description: 'Milestone birthday celebration with special guests',
    venue: 'Private Estate',
    date: '2024-04-25',
    height: '480px'
  },
])

const filteredPortfolio = computed(() => {
  return activeCategory.value === 'all'
    ? portfolioData.value
    : portfolioData.value.filter(event => event.category === activeCategory.value)
})
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.5s ease;
}
</style>