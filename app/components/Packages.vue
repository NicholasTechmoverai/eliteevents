<template>
    <div class="max-w-6xl m-auto">
        <UPageSection id="book-your-event" title="Our Packages"
            description="Choose the level of support that fits your needs" class="mb-12" data-aos="fade-up">
            <UPageColumns cols="1" md="2" lg="3" class="gap-6 m-auto" data-aos="fade-up">
                <UPageCard v-for="(packageItem, index) in packages" :key="index" spotlight spotlight-color="primary"
                    data-aos="zoom-in" :highlight="packageItem.isPopular" :rounded="!packageItem.isPopular"
                    class="mb-6 max-w-[400px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                    :class="packageItem.isPopular
                        ? 'scale-[1.02] ring-2 ring-primary rounded-xl'
                        : 'rounded-3xl'">
                    <div class="mb-6">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {{ packageItem.name }}
                        </h2>

                        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            {{ packageItem.head }}
                        </h3>

                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            {{ packageItem.description }}
                        </p>

                        <div v-if="packageItem.isPopular" class="mb-4">
                            <UBadge color="primary" variant="solid" class="px-3 py-1 text-sm font-medium tracking-wide">
                                Most Popular
                            </UBadge>
                        </div>
                    </div>

                    <div>
                        <div v-for="(feature, fIndex) in packageItem.features" :key="fIndex"
                            class="mb-3 flex items-center gap-3" data-aos="fade-up">
                            <UIcon name="i-lucide-check" class="w-5 h-5 text-primary-500" />
                            <span class="text-gray-700 dark:text-gray-300">
                                {{ feature }}
                            </span>
                        </div>
                    </div>
                </UPageCard>

            </UPageColumns>

            <div class="text-center space-y-4 mt-12" data-aos="fade-up">
                <p class="text-gray-700 dark:text-gray-300">
                    Not sure which package is right for you?
                    <br />
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        Talk to our team and we’ll help you decide.
                    </span>
                </p>

                <UPopover mode="hover">
                    <UButton :label="config.site.tel" icon="i-lucide-phone" color="primary" variant="solid"
                        class="mx-auto" data-aos="zoom-in" />

                    <template #content>
                        <div class="p-4 w-56">
                            <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                Contact Us
                            </h4>

                            <div class="flex flex-col gap-2 text-sm">
                                <a :href="`tel:${config.site.tel}`"
                                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
                                    <UIcon name="i-lucide-phone" />
                                    {{ config.site.tel }}
                                </a>

                                <a :href="`https://wa.me/${config.site.tel}`" target="_blank"
                                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600">
                                    <UIcon name="i-lucide-message-circle" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </template>
                </UPopover>
            </div>
        </UPageSection>
    </div>
</template>


<script lang="ts" setup>
import { badge } from '#build/ui';
const config = useAppConfig();


const packages = [
    {
        name: 'Basic ',
        head: 'Coordination only',
        description: 'Perfect for couples who have already planned their event and need expert day-of coordination',
        price: '$99',
        features: [
            "Day-of event coordination",
            "Timeline management",
            "Vendor liaison",
            "Setup supervision",
            "Guest assistance",
            "Emergency kit provided"
        ]
    },
    {
        name: 'Standard',
        head: "Partial Planning",
        description: "Ideal for those who want professional guidance without full planning services",
        price: '$199',
        isPopular: true,
        features: [
            "Everything in Basic",
            "3 months planning support",
            "Vendor recommendations",
            "Budget management",
            "Design consultation",
            "Rehearsal coordination",
            "2 planning meetings"
        ]
    },
    {
        name: 'Premium',
        head: "Full Planning",
        description: "Complete stress-free experience from concept to execution",
        price: '$299',
        features: [
            "Everything in Standard",
            "Full planning from start to finish",
            "Unlimited planning meetings",
            "Complete vendor sourcing",
            "Design & décor planning",
            "RSVP management",
            "Guest accommodation assistance",
            "Post-event breakdown"
        ]
    }
]

</script>

<style></style>