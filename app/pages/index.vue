<template>
  <div>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="~/assets/images/photo-1674970538959-e7475d8d376f.jpeg" alt="Event planning hero"
          class="w-full h-full object-cover scale-105" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 data-aos="fade-up" data-aos-delay="300"
          class="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Stress-Free Weddings & Unforgettable Events
        </h1>

        <p data-aos="fade-up" data-aos-delay="600"
          class="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Let us handle every detail while you enjoy your special day
        </p>

        <div data-aos="fade-up" data-aos-delay="900"
          class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/book-event"
            class="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl transition-all duration-500 ease-out active:scale-[0.98] transform hover:-translate-y-1">
            Plan Your Event
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="/portfolio"
            class="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl border border-white text-white hover:bg-white/10 hover:shadow-lg transition-all duration-500 ease-out active:scale-[0.98] transform hover:-translate-y-1">
            View Our Work
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <div>
      <Packages />
    </div>



    <UPageSection id="expertise" title="Our Expertise"
      description="Specialized event planning services tailored to your unique needs.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(exp, index) in expertise" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100"
          class="group rounded-2xl border border-gray-400/30 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
          <div class="relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>
            <img :src="exp.image" :alt="exp.title"
              class="w-full h-48 object-cover transform transition-all duration-1000 group-hover:scale-110" />
          </div>

          <div class="p-6 space-y-4">
            <div class="flex items-center gap-3 transform transition-all duration-500 group-hover:translate-x-2">
              <div
                class="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <UIcon :name="exp.icon"
                  class="w-6 h-6 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-125" />
              </div>
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
                {{ exp.title }}</h4>
            </div>
            <p
              class="text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              {{ exp.description }}</p>
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection id="featured-events" title="Featured Events"
      description="A glimpse into the exceptional events we've brought to life" class="bg-gray-50 dark:bg-gray-900/50">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(event, index) in featured_events" :key="index" data-aos="fade-up"
          :data-aos-delay="index * 100 + 300"
          class="group relative overflow-hidden cursor-pointer transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
          <div class="relative aspect-[4/5] overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>
            <img :src="event.image" :alt="event.title"
              class="w-full h-full object-cover rounded-lg transform transition-all duration-1000 group-hover:scale-110" />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <div
                class="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span
                  class="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white mb-2 transform transition-all duration-300 delay-100 group-hover:translate-y-0">
                  {{ event.category }}
                </span>
                <h4
                  class="text-xl font-bold text-white mb-1 transform transition-all duration-300 delay-150 group-hover:translate-y-0">
                  {{ event.title }}</h4>
                <p
                  class="text-sm text-white/80 transform transition-all duration-300 delay-200 group-hover:translate-y-0">
                  {{ event.date }}</p>
              </div>
            </div>

            <div
              class="absolute top-4 left-4 transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:opacity-0">
              <span
                class="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-900 dark:text-white transition-all duration-300">
                {{ event.category }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <div>
      <ConfusedPart />
    </div>

    <div>
      <ClientStories />
    </div>

    <UPageCTA data-aos="fade-up" data-aos-delay="300" title="Ready to Create Something Extraordinary?"
      description="Contact us today and let's start planning your unforgettable event" variant="subtle" :links="[
        {
          label: 'Start Planning Now',
          to: '/book-event',
          trailingIcon: 'i-ph-calendar-plus',
          size: 'xl',
          class: 'dark:bg-white dark:text-gray-900 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl'
        },
        {
          label: 'Browse Portfolio',
          to: '/portfolio',
          icon: 'i-ph-images',
          size: 'xl',
          color: 'neutral',
          variant: 'outline',
          class: 'dark:border-gray-700 dark:text-white transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg'
        }
      ]" title-class="dark:text-white" description-class="dark:text-gray-300" :style="{ animationDelay: '200ms' }" />
  </div>
</template>

<script setup lang="ts">
import landing_image from "~/assets/images/photo-1674970538959-e7475d8d376f.jpeg"
import event_planning from "~/assets/images/photo-1674970538959-e7475d8d376f.jpeg"
import design_decor from "~/assets/images/photo-1674970538959-e7475d8d376f.jpeg"
import logistics from "~/assets/images/photo-1674970538959-e7475d8d376f.jpeg"
import { ref } from "vue"

const expertise = ref([
  {
    image: event_planning,
    icon: "i-ph-calendar-check",
    title: "Event Production",
    description: "From concept to execution, we handle every detail to make your event unforgettable."
  },
  {
    image: "https://images.unsplash.com/photo-1759906760182-8cd4a4fdcc66",
    icon: "i-ph-palette",
    title: "Design & Decor",
    description: "Crafting visually stunning experiences tailored to your style and theme."
  },
  {
    image: "https://images.unsplash.com/photo-1696238173596-554e92268051?w=800&auto=format&fit=crop",
    icon: "i-ph-gear",
    title: "Logistics & Coordination",
    description: "Seamless planning and management to ensure everything runs smoothly."
  },
  {
    image: "https://images.unsplash.com/photo-1766393195987-912865cbb81b?w=800&auto=format&fit=crop",
    icon: "i-ph-video-camera",
    title: "Event Streaming",
    description: "Professional live streaming and recording for hybrid and virtual events."
  },
  {
    image: "https://images.unsplash.com/photo-1709731191876-899e32264420?w=800&auto=format&fit=crop",
    icon: "i-ph-megaphone",
    title: "Entertainment",
    description: "Curating exceptional entertainment that elevates your event experience."
  },
  {
    image: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?w=800&auto=format&fit=crop",
    icon: "i-ph-users",
    title: "Guest Management",
    description: "Comprehensive RSVP tracking, seating arrangements, and guest services."
  }
])

const featured_events = ref([
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    title: 'Wedding Celebration',
    category: 'Wedding',
    date: '2024'
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1683121104182-9024ce96baad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'Corporate Gala',
    category: 'Corporate',
    date: '2024'
  },
  {
    image: "https://media.istockphoto.com/id/2245612798/photo/bright-red-hearts-crowd-around-a-colorful-super-sale-sign-on-a-textured-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5MJzj4TeHg6ZpgKYV44rulIAfQE91ugupS4zso3X1w=",
    title: 'Product Launch',
    category: 'Corporate',
    date: '2023'
  },
  {
    image: "https://images.unsplash.com/photo-1672744230736-777fc61e2062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJpcnRoZGF5JTIwY2VsZWJyYXRpb258ZW58MHx8MHx8fDA%3D",
    title: 'Birthday Extravaganza',
    category: 'Private',
    date: '2023'
  }
])
</script>

<style scoped>
.animate-hero-title {
  animation: heroTitle 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

.animate-hero-desc {
  animation: heroDesc 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
}

.animate-hero-actions {
  animation: heroActions 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.9s forwards;
}

.animate-bg-fade-in {
  animation: bgFadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-bg-zoom {
  animation: bgZoom 20s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

.animate-card-fade {
  animation: cardFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-up {
  animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes heroTitle {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroDesc {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroActions {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bgFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes bgZoom {
  from {
    transform: scale(1.05);
  }

  to {
    transform: scale(1.1);
  }
}

@keyframes cardFade {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {

  .animate-hero-title,
  .animate-hero-desc,
  .animate-hero-actions,
  .animate-bg-fade-in,
  .animate-bg-zoom,
  .animate-card-fade,
  .animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .transform,
  .transition-all,
  .transition-opacity,
  .transition-colors,
  .transition-transform {
    transition: none !important;
  }

  .group:hover {
    transform: none !important;
  }

  img {
    filter: none !important;
  }
}

:deep(.text-white),
:deep(.dark\\:text-white) {
  color: white !important;
}

.dark img {
  filter: brightness(0.9) contrast(1.1);
}

img {
  transition: transform 0.5s ease, filter 0.3s ease;
}
</style>