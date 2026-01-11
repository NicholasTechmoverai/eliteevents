<template>
  <div class="masonry-gallery w-full max-w-7xl mx-auto p-4 md:p-6">
    <div v-if="title" class="text-3xl md:text-4xl font-bold text-center mb-4" :style="titleStyle" data-aos="fade-up">
      {{ title }}
    </div>

    <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
      {{ subtitle }}
    </p>

    <div class="masonry-grid flex justify-center" :style="{ gap: `${columnGap}px` }">
      <div
        v-for="(column, colIndex) in columns"
        :key="colIndex"
        class="masonry-column flex flex-col"
        :style="columnStyle(column)"
      >
        <div
          v-for="(image, index) in column"
          :key="image.id"
          class="masonry-item group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          :data-aos-delay="index * 80"
          @click="handleImageClick(image)"
        >
          <div class="relative w-full overflow-hidden rounded-xl">
            <img
              :src="image.src"
              :alt="image.alt"
              :style="imageStyle(image)"
              class="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-2">
                <h4 v-if="image.title" class="text-white text-lg md:text-xl font-semibold">
                  {{ image.title }}
                </h4>
                
                <div v-if="image.category" class="flex flex-wrap gap-1">
                  <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">
                    {{ getCategoryLabel(image.category) }}
                  </span>
                </div>
                
                <div v-if="image.venue" class="flex items-center text-gray-100 text-sm">
                  <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="truncate">{{ image.venue }}</span>
                </div>
                
                <div v-if="image.date" class="flex items-center text-gray-100 text-sm">
                  <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ formatDate(image.date) }}</span>
                </div>
                
                <p v-if="image.description" class="text-gray-200 text-sm line-clamp-2 pt-2">
                  {{ image.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="selectedImage" class="lightbox-modal fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" @click="closeLightbox">
      <div class="lightbox-content relative max-w-6xl max-h-[90vh] w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden" @click.stop>
        <button class="close-btn absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200 backdrop-blur-sm" @click="closeLightbox" aria-label="Close lightbox">
          <svg class="close-icon w-6 h-6" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        
        <div class="lightbox-image-container relative w-full h-[60vh] md:h-[70vh]">
          <img :src="selectedImage.src" :alt="selectedImage.alt" class="lightbox-image w-full h-full object-contain" />
        </div>
        
        <div class="lightbox-info p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-2 mb-3">
            <span v-if="selectedImage.category" class="lightbox-category inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-600 text-white">
              {{ getCategoryLabel(selectedImage.category) }}
            </span>
          </div>
          <h3 class="lightbox-title text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ selectedImage.title }}</h3>
          <div class="lightbox-meta space-y-2 mb-4">
            <div v-if="selectedImage.venue" class="flex items-center text-gray-600 dark:text-gray-300">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ selectedImage.venue }}
            </div>
            <div v-if="selectedImage.date" class="flex items-center text-gray-600 dark:text-gray-300">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ formatDate(selectedImage.date) }}
            </div>
          </div>
          <p class="lightbox-description text-gray-600 dark:text-gray-300">{{ selectedImage.description }}</p>
        </div>
        
        <div v-if="images.length > 1" class="lightbox-navigation absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
          <button class="nav-btn p-2 text-white hover:text-gray-300 transition-colors duration-200" @click="showPrevImage" aria-label="Previous image">
            <svg class="nav-icon w-6 h-6" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div class="image-counter text-white font-medium">{{ currentImageIndex + 1 }} / {{ images.length }}</div>
          <button class="nav-btn p-2 text-white hover:text-gray-300 transition-colors duration-200" @click="showNextImage" aria-label="Next image">
            <svg class="nav-icon w-6 h-6" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface MasonryImage {
  id: string | number
  src: string
  alt?: string
  title?: string
  description?: string
  height?: string
  category?: string
  venue?: string
  date?: string
}

interface Props {
  images: MasonryImage[]
  title?: string
  subtitle?: string
  columns?: number
  columnGap?: number
  rowGap?: number
  minImageHeight?: number
  maxImageHeight?: number
  categories?: Array<{label: string, value: string}>
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  columnGap: 16,
  rowGap: 16,
  minImageHeight: 200,
  maxImageHeight: 500,
  categories: () => [
    { label: 'Weddings', value: 'wedding' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Traditional', value: 'traditional' },
    { label: 'Private', value: 'private' },
    { label: 'Music', value: 'music' },
    { label: 'Church', value: 'church' },
  ]
})

const selectedImage = ref<MasonryImage | null>(null)
const currentImageIndex = ref(0)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const titleStyle = { 
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
  WebkitBackgroundClip: 'text', 
  backgroundClip: 'text', 
  color: 'transparent' 
}

const numberOfColumns = computed(() => {
  if (windowWidth.value < 768) return 2
  if (windowWidth.value < 1024) return 3
  return props.columns
})

const columns = computed(() => {
  const cols: MasonryImage[][] = Array.from({ length: numberOfColumns.value }, () => [])
  props.images.forEach((image, index) => {
    const colIndex = index % numberOfColumns.value
    const height = image.height || `${Math.floor(Math.random() * (props.maxImageHeight - props.minImageHeight + 1)) + props.minImageHeight}px`
    cols[colIndex].push({ ...image, height })
  })
  return cols
})

const columnStyle = (column: MasonryImage[]) => ({
  width: `calc(${100 / numberOfColumns.value}% - ${props.columnGap}px)`,
  gap: `${props.rowGap}px`
})

const imageStyle = (image: MasonryImage) => ({
  height: image.height,
  minHeight: `${props.minImageHeight}px`
})

const getCategoryLabel = (value: string) => {
  const category = props.categories.find(cat => cat.value === value)
  return category ? category.label : value
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

const handleImageClick = (image: MasonryImage) => {
  selectedImage.value = image
  currentImageIndex.value = props.images.findIndex(img => img.id === image.id)
}

const showPrevImage = () => {
  currentImageIndex.value = currentImageIndex.value > 0 ? currentImageIndex.value - 1 : props.images.length - 1
  selectedImage.value = props.images[currentImageIndex.value]
}

const showNextImage = () => {
  currentImageIndex.value = currentImageIndex.value < props.images.length - 1 ? currentImageIndex.value + 1 : 0
  selectedImage.value = props.images[currentImageIndex.value]
}

const closeLightbox = () => {
  selectedImage.value = null
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!selectedImage.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') showPrevImage()
  if (e.key === 'ArrowRight') showNextImage()
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<style scoped>
.animate-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
}

.lightbox-modal {
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  animation: slideUp 0.3s ease;
}

@media (max-width: 768px) {
  .masonry-grid {
    gap: 12px !important;
  }
  
  .lightbox-image-container {
    height: 50vh !important;
  }
  
  .lightbox-navigation {
    bottom: 4rem !important;
  }
}

@media (max-width: 480px) {
  .masonry-gallery {
    padding: 1rem !important;
  }
  
  .lightbox-content {
    max-height: 95vh !important;
  }
  
  .lightbox-image-container {
    height: 40vh !important;
  }
  
  .masonry-column {
    width: calc(50% - 8px) !important;
  }
}

@media (max-width: 320px) {
  .masonry-column {
    width: 100% !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-in,
  .lightbox-modal,
  .lightbox-content {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .masonry-item,
  img,
  .image-overlay,
  .close-btn,
  .nav-btn {
    transition: none !important;
  }
  
  .masonry-item:hover {
    transform: none !important;
  }
  
  img:hover {
    transform: none !important;
  }
}

@media (prefers-color-scheme: dark) {
  .masonry-item {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2) !important;
  }
  
  .masonry-item:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3) !important;
  }
}
</style>