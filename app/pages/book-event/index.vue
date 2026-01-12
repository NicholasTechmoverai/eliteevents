<template>
  <div class="flex flex-col">
    <UPageSection id="book-your-event" title="Book Your Event"
      description="Tell us about your event and we’ll create something extraordinary"
      class="bg-gray-50 dark:bg-gray-900/50">
      <div data-aos="fade-up" data-aos-delay="100"
        class="flex items-center gap-2 m-auto text-sm text-gray-600 dark:text-gray-300 mb-6">
        <UIcon name="i-lucide-lightbulb" class="size-5 text-primary-500" />
        <span>
          Questions? Call Steven:
          <a href="tel:0768216484" class="font-medium text-primary-600 hover:underline">
            {{ useAppConfig().site.tel }}
          </a>
        </span>
      </div>

      <UPageCard spotlight data-aos="fade-up" data-aos-delay="300">
        <div class="w-full max-w-4xl mx-auto">

          <UStepper ref="stepper" v-model="active" :items="items">
            <template #content="{ item }">
              <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
                <component :is="item.component" />
              </div>
            </template>
          </UStepper>

          <USeparator class="my-8" />

          <div class="flex justify-between mt-8" data-aos="fade-up" data-aos-delay="100">
            <UButton leading-icon="i-lucide-arrow-left" variant="outline" :disabled="!stepper?.hasPrev"
              @click="stepper?.prev()">
              Previous
            </UButton>

            <UButton trailing-icon="i-lucide-arrow-right" v-if="stepper?.hasNext" @click="handleNext(stepper)">
              Next
            </UButton>

            <UTooltip :delay-duration="0"
              :text="!eventStore.isEventComplete ? 'Complete filling all details' : 'Submit'">
              <UButton trailing-icon="i-lucide-arrow-right" v-if="!stepper?.hasNext"
                :disabled="!eventStore.isEventComplete" @click="handleSubmit">
                Submit Booking
              </UButton>
            </UTooltip>
          </div>
        </div>
      </UPageCard>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'
import BookEventStepOne from '~/components/BookEventStepOne.vue'
import BookEventStepTwo from '~/components/BookEventStepTwo.vue'
import BookEventStepThree from '~/components/BookEventStepThree.vue'
import BookEventStepFour from '~/components/BookEventStepFour.vue'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()
const stepper = useTemplateRef('stepper')
const toaster = useToast()

const items: StepperItem[] = [
  { title: '1', description: 'Event Type', icon: 'i-lucide-calendar', component: BookEventStepOne },
  { title: '2', description: 'Event Details', icon: 'i-lucide-clipboard-list', component: BookEventStepTwo },
  { title: '3', description: 'Services', icon: 'i-lucide-settings', component: BookEventStepThree },
  { title: '4', description: 'Contact', icon: 'i-lucide-phone', component: BookEventStepFour }
]
const active = ref(0)

const handleNext = (stepperRef: typeof stepper) => {
  if (!stepperRef) return

  const currentIndex = stepperRef.currentIndex ?? 0
  const nextStep = items[currentIndex + 1]

  if (nextStep) {
    toaster.add({
      title: 'Continue to next step',
      icon: 'i-lucide-arrow-big-right-dash',
      color: 'primary',
      duration: 3000
    })
  }

  stepperRef.next()
}

const handleSubmit = async () => {
  toaster.add({
    title: 'Booking underway!',
    icon: 'i-lucide-send',
    color: 'primary',
    duration: 3000
  })

  const adminRes = await eventStore.submitEmailToAdmin()

  if (adminRes.success) {
    toaster.add({
      title: adminRes.message || 'Booking submitted successfully!',
      icon: 'i-lucide-check-circle-2',
      color: 'success',
      duration: 5000
    })
  } else {
    toaster.add({
      title: adminRes.message || 'Error submitting booking! Please try again later.',
      icon: 'i-lucide-x-circle',
      color: 'error',
      duration: 5000
    })
    return
  }

  // Send confirmation email to user (if enabled)
  if (useAppConfig().site.sendConfirmEmailToUser) {
    const userRes = await eventStore.submitEmailToUser()
    if (!userRes.success) {
      toaster.add({
        title: userRes.message || 'Error sending confirmation email to user! Please try again later.',
        icon: 'i-lucide-x-circle',
        color: 'error',
        duration: 5000
      })
    }
  }

  eventStore.resetEvent()
  active.value = 0
}
</script>
