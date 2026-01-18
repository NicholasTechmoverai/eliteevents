<script setup lang="ts">
import { de } from '@nuxt/ui/runtime/locale/index.js';

const items = [
    {
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
        name: 'Amina Diallo',
        message: 'Absolutely stunning wedding planner! She made our day perfect.',
        rating: 5
    },
    {
        url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
        name: 'Kwame Mensah',
        message: 'Professional and attentive. Our corporate event was flawless.',
        rating: 4
    },
    {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        name: 'Zahara Nkosi',
        message: 'Her floral arrangements transformed our wedding venue beautifully.',
        rating: 5
    },
    {
        url: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
        name: 'Chidi Okonkwo',
        message: 'Great DJ who kept everyone dancing all night!',
        rating: 4
    },
    {
        url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
        name: 'Nala Kamau',
        message: 'Captured every precious moment of our wedding beautifully.',
        rating: 5
    },
    {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        name: 'Jabari Adebayo',
        message: 'Excellent catering service with authentic African cuisine.',
        rating: 4
    }
];

</script>

<template>
    <div class="mx-4 my-50">
        <div class="text-center mb-6" data-aos="fade-up" data-aos-duration="400">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                What Our Clients Say
            </h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Hear from those who've experienced our exceptional service.
            </p>
        </div>
        <div class="my-30" data-aos="fade-up" data-aos-delay="10" data-aos-duration="200">
            <UCarousel v-slot="{ item }" class-names arrows loop dots :autoplay="{ delay: 4000 }" :items="items" :ui="{
                item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-10',
                dot: 'mt-6 w-4 h-2  [&.is-active]:bg-primary-600',
            }" class="mx-auto max-w-sm">
                <div data-aos="zoom-in" data-aos-delay="200" class="space-y-4">
                    <UUser target="_blank" :name="item.name" :message="item.message"
                        :description="`${'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}`" :avatar="{
                            src: item.url
                        }" />
                    <div>
                        <UIcon name="i-lucide-quote" class="w-4 h-4 text-primary-600/50 mb-0" />    
                        <p class="text-gray-700 dark:text-gray-300 text-md font-sans">{{ item.message }}</p>
                        <UIcon name="i-lucide-quote" class="w-4 h-4 text-primary-600/50 mt-0 rotate-180" />

                    </div>
                </div>

            </UCarousel>
        </div>
    </div>
</template>