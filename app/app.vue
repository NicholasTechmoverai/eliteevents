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

const title = config.site.name || 'Elite Events'
const description = config.site.description || 'Elite Events - Your Premier Event Planning Partner'
const toaster = { position: 'top-center' }
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://eliteevents.tera-in.top/_nuxt/photo-1674970538959-e7475d8d376f.Q9JvQUEU.jpeg',
  twitterImage: 'https://eliteevents.tera-in.top/_nuxt/photo-1674970538959-e7475d8d376f.Q9JvQUEU.jpeg',
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
