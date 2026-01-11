<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/logo.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
const config = useAppConfig()

const title = config.site.name
const description = config.site.description
const toaster = { position: 'top-center' }
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo.png',
  twitterImage: '/logo.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>

    <UApp :toaster="toaster">
      <AppHeader />
      <UMain>
        <NuxtPage />
      </UMain>

      <USeparator icon="i-simple-icons-nuxtdotjs" />

      <AppFooter />
      <FloatingW />
    </UApp>
</template>
