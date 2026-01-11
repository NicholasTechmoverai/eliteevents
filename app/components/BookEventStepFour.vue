<template>
  <div class="space-y-6">
    <div class="space-y-1">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
        Contact Information
      </h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        How can we reach you?
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <UIcon name="i-lucide-user" class="size-4 text-primary-500" />
          <span>First Name *</span>
        </div>
        <UInput v-model="firstName" size="lg" required placeholder="Enter your first name" />
      </div>

      <div class="space-y-2">
        <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <UIcon name="i-lucide-user" class="size-4 text-primary-500" />
          <span>Last Name *</span>
        </div>
        <UInput v-model="lastName" size="lg" required placeholder="Enter your last name" />
      </div>
    </div>

    <div class="space-y-2 w-full">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-mail" class="size-4 text-primary-500" />
        <span>Email Address *</span>
      </div>
      <UInput
        v-model="emailAddress"
        type="email"
        size="lg"
        required
        placeholder="you@example.com"
        class="w-full"
      />
    </div>

    <div class="space-y-2 w-full">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-phone" class="size-4 text-primary-500" />
        <span>Phone Number *</span>
      </div>
      <UInput
        v-model="phoneNumber"
        type="tel"
        size="lg"
        required
        placeholder="+254 700 000 000"
        class="w-full"
      />
    </div>

    <div class="space-y-2 w-full">
      <div class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UIcon name="i-lucide-message-square" class="size-4 text-primary-500" />
        <span>Additional Information (optional)</span>
      </div>
      <UTextarea
        v-model="additionalInfo"
        :rows="5"
        class="w-full"
        placeholder="Any extra details we should know?"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useEventStore } from '~/store/state'

const eventStore = useEventStore()

const firstName = ref('')
const lastName = ref('')
const emailAddress = ref('')
const phoneNumber = ref('')
const additionalInfo = ref('')

onMounted(() => {
  const requester = eventStore.event.requester

  firstName.value = requester.firstName
  lastName.value = requester.lastName
  emailAddress.value = requester.emailAddress
  phoneNumber.value = requester.phoneNumber
  additionalInfo.value = requester.additionalInfo
})

watch([firstName, lastName, emailAddress, phoneNumber, additionalInfo], () => {
  eventStore.updateRequesterInfo({
    firstName: firstName.value,
    lastName: lastName.value,
    emailAddress: emailAddress.value,
    phoneNumber: phoneNumber.value,
    additionalInfo: additionalInfo.value
  })
})
</script>
