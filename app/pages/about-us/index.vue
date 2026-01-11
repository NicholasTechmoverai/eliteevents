<template>
  <UPageSection
    id="about-us"
    title="About Elite Events"
    description="We are a premier event planning company based in Kenya, dedicated to transforming your special moments into unforgettable experiences. With a passion for perfection and an eye for detail, we bring dreams to life."
  >
    <div class="flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-between md:items-start mt-16 text-gray-600 dark:text-gray-300">
      <div data-aos="fade-right" class="flex flex-col gap-6 max-w-xl">
        <h4 data-aos="fade-right" data-aos-delay="100" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Our Story
        </h4>

        <div class="space-y-6">
          <p data-aos="fade-up" data-aos-delay="200" class="text-base sm:text-md leading-relaxed">
            Founded in 2015, Elite Events began with a simple vision: to create
            extraordinary celebrations that leave lasting impressions. What
            started as a small team of passionate event enthusiasts has grown into
            one of Kenya's most trusted event planning companies.
          </p>
          <p data-aos="fade-up" data-aos-delay="400" class="text-base sm:text-md leading-relaxed">
            Over the years, we've had the privilege of planning hundreds of events,
            from intimate family gatherings to grand corporate galas. Each event
            has taught us something new, and we've continuously refined our
            approach to deliver excellence.
          </p>
          <p data-aos="fade-up" data-aos-delay="600" class="text-base sm:text-md leading-relaxed">
            Today, we're proud to serve clients across Kenya and East Africa,
            bringing together the perfect blend of creativity, professionalism,
            and cultural sensitivity to every celebration we touch.
          </p>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="300" class="w-full m-auto max-w-lg">
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1759532338598-679140538775"
            alt="Elite Events celebration"
            class="w-full transform transition-all duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
          />
          <div class="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl"></div>
        </div>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 dark:text-gray-300">
      <div data-aos="fade-up" data-aos-delay="500">
        <p
          class="text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20"
        >
          To deliver exceptional event planning services that exceed expectations,
          creating memorable experiences that celebrate life's most important
          moments with elegance, creativity, and professionalism.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="700">
        <p
          class="text-base sm:text-md leading-relaxed p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20"
        >
          To be East Africa's most sought-after event planning company, recognized
          for our innovative approach, cultural sensitivity, and unwavering
          commitment to turning dreams into reality.
        </p>
      </div>
    </div>
  </UPageSection>

  <UPageSection
    id="meet-our-team"
    title="Meet Our Team"
    description="The passionate professionals behind every exceptional event."
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      <div
        v-for="(member, index) in teamMembers"
        :key="member.name"
        data-aos="fade-up"
        :data-aos-delay="index * 150 + 300"
        class="group rounded-2xl overflow-hidden border border-gray-300/50 bg-white dark:bg-gray-900 transition-all duration-700"
      >
        <div class="relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full h-60 object-cover transform transition-all duration-1000 group-hover:scale-110"
          />
          <div class="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
            <div class="bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <h3 class="text-white font-semibold text-sm">{{ member.name }}</h3>
              <h6 class="text-gray-300 text-xs">{{ member.position }}</h6>
            </div>
          </div>
        </div>
        <div class="p-5 flex flex-col space-y-3 transform transition-all duration-500 group-hover:translate-y-[-4px]">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
            {{ member.name }}
          </h3>
          <h6 class="text-sm font-medium text-gray-500 transform transition-all duration-500 group-hover:translate-x-2">
            {{ member.position }}
          </h6>
          <p class="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-200">
            {{ member.description }}
          </p>
          <a
            v-if="member.tel"
            :href="`tel:${member.tel}`"
            class="inline-flex items-center gap-2 text-sm font-medium text-primary transform transition-all duration-500 hover:translate-x-2 hover:text-primary/80"
          >
            <UIcon name="i-lucide-phone" class="transition-transform duration-300 group-hover:scale-125" />
            {{ member.tel }}
          </a>
        </div>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        data-aos="fade-up"
        :data-aos-delay="index * 100 + 900"
        class="transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
      >
        <p class="text-3xl font-bold text-gray-900 dark:text-white transform transition-all duration-500 hover:scale-110">
          {{ stat.value }}
        </p>
        <p class="text-sm text-gray-500 mt-2 transform transition-all duration-500 hover:translate-y-1">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </UPageSection>
</template>

<script lang="ts" setup>
const teamMembers = ref([
  {
    name: 'Steven Muiruri',
    position: 'Chief Executive Officer',
    tel: '0768216484',
    description:
      "With over 15 years of experience in event management, Steven leads our team with vision and passion. His expertise in corporate events has transformed countless organizations' celebrations.",
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f'
  },
  {
    name: 'Anna Wambui',
    position: 'Creative Director',
    tel: '',
    description:
      "Anna brings artistic flair to every event she touches. Specializing in wedding design and traditional ceremonies, she ensures every detail reflects the client's unique story.",
    image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6'
  },
  {
    name: 'Eddie Ngigi',
    position: 'Operations Manager',
    tel: '',
    description:
      "Eddie's meticulous attention to logistics ensures flawless event execution. His background in hospitality management makes him the backbone of our operational excellence.",
    image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a'
  },
  {
    name: 'Timmothy Kirimi',
    position: 'Client Relations Director',
    tel: '',
    description:
      "Timmothy's warm personality and exceptional communication skills make every client feel valued. He ensures that your vision is understood and beautifully brought to life.",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
  }
])

const stats = ref([
  { value: '500+', label: 'Events Planned' },
  { value: '10', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Team Members' }
])
</script>

<style scoped>
.animate-fade-slide-left {
  animation: fadeSlideLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-slide-right {
  animation: fadeSlideRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-up {
  animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-text-fade-up {
  animation: textFadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes textFadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-slide-left,
  .animate-fade-slide-right,
  .animate-fade-up,
  .animate-text-fade-up {
    animation: fadeIn 0.5s ease forwards;
  }
  
  .group,
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
}
</style>