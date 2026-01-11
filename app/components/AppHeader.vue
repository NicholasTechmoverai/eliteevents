<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/#',
    active: route.path.startsWith('/') && route.path.endsWith('/')
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
    badge: 'New',
    active: route.path.startsWith('/portfolio')
  },

  // Information
  {
    label: 'About',
    to: '/about-us',
    active: route.path.startsWith('/about-us')
  },

  {
    label: 'Dashboard',
    to: '/dashboard',
    active: route.path.startsWith('/dashboard')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/">
        <AppLogo class="w-auto shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UTooltip text="Book Event" :kbds="['meta', 'B']">

        <NuxtLink to="/book-event" :class="{
          'text-primary-600 font-semibold': route.path.startsWith('/book'),
          'text-gray-700 dark:text-gray-300': !route.path.startsWith('/book')
        }">
          Book Event
        </NuxtLink>
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
