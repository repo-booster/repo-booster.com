<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => (colorMode.value === 'dark' ? '#77A1D3' : 'white'))

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    { property: 'og:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'og:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement with premium SEO, analytics, and AI automation tools.' },
    { property: 'og:image', content: 'https://repo-booster.com/social-card.png' },
    { property: 'og:site_name', content: 'Repo-Booster' },
    { property: 'og:url', content: 'https://repo-booster.com' },
    { property: 'twitter:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'twitter:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement with premium SEO, analytics, and AI automation tools.' },
    { property: 'twitter:image', content: 'https://repo-booster.com/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
    class: colorMode.value === 'dark' ? 'dark' : 'light'
  }
})

useSeoMeta({
  titleTemplate: '%s - Repo-Booster - Enhance GitHub Repository Visibility & SEO for Growth',
  meta: [
    { name: 'description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement with premium SEO, analytics, and AI automation tools.' },
    { property: 'og:site_name', content: 'Repo-Booster' },
    { property: 'og:image', content: 'https://repo-booster.com/social-card.png' },
    { property: 'og:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'og:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement with premium SEO, analytics, and AI automation tools.' },
    { property: 'og:url', content: 'https://repo-booster.com' },
    { property: 'twitter:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'twitter:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement with premium SEO, analytics, and AI automation tools.' },
    { property: 'twitter:image', content: 'https://repo-booster.com/social-card.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div class="min-h-screen w-full bg-custom-dark bg-cover bg-center">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
