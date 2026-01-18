<script setup lang="ts">
const config = useAppConfig()

const cards = ref([
  {
    title: 'WhatsApp',
    description: 'Chat with our team instantly for quick questions, recommendations, or real-time support.',
    icon: 'i-simple-icons-whatsapp',
    to: `https://wa.me/${config.site.tel}`,
    class: 'lg:col-span-2',
    image: {
      path: 'https://plus.unsplash.com/premium_photo-1684761949804-fd8eb9a5b6cc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0',
      width: 363,
      height: 152
    },
    orientation: 'horizontal' as const
  },
  {
    title: 'Email Us',
    description: 'Send us detailed inquiries and we’ll respond with thoughtful, personalized solutions.',
    icon: 'i-lucide-mail',
    to: `mailto:${config.site.email}`,
    variant: 'soft' as const
  },
  {
    title: 'Book an Event',
    description: 'Schedule your event effortlessly and let our experts handle every detail from start to finish.',
    icon: 'i-lucide-calendar-plus',
    to: '/book-event',
    variant: 'soft' as const
  },
  {
    title: 'Call Us',
    description: 'Speak directly with our team for immediate assistance and professional guidance.',
    icon: 'i-lucide-phone',
    to: `tel:${config.site.tel}`,
    class: 'lg:col-span-2',
    image: {
      path: 'https://images.unsplash.com/photo-1516055619834-586f8c75d1de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      width: 362,
      height: 184
    },
    orientation: 'horizontal' as const,
    reverse: true
  }
])
</script>

<template>
  <div class="max-w-5xl mx-auto mt-16">
    <UPageSection
      class="px-4 sm:px-6 lg:px-8"
      title="Let’s Plan Something Exceptional"
      description="Whether you have a question, a vision, or a date in mind, our team is ready to connect and bring your event to life."
      data-aos="fade-up"
    >
      <UPageGrid data-aos="fade-up">
        <UPageCard
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
          spotlight
        >
          <UColorModeImage
            v-if="card.image"
            :light="`${card.image.path}`"
            :dark="`${card.image.path}`"
            :width="card.image.width"
            :height="card.image.height"
            :alt="card.title"
            loading="lazy"
            class="w-full rounded-lg"
          />
        </UPageCard>
      </UPageGrid>
    </UPageSection>
  </div>
</template>
