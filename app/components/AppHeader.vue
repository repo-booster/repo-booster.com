<script setup lang="ts">
import { ref, inject, type Ref } from 'vue'
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]> | undefined>('navigation', ref([]))

function mapContentNavigation(navItems: Ref<NavItem[]> | undefined): NavItem[] {
  return (navItems?.value || []).map(item => ({
    label: item.title,
    to: item.path,
    icon: item.icon || 'i-simple-icons-link',
  }))
}

const links: Array<{ label: string; to: string; icon: string }> = [
  {
    label: 'Docs',
    to: '/docs',
    icon: 'i-heroicons-book-open',
  },
  {
    label: 'Pricing',
    to: '/pricing',
    icon: 'i-heroicons-credit-card',
  },
  {
    label: 'Download',
    to: '/pricing',
    icon: 'i-heroicons-arrow-down-on-square',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-heroicons-chat-bubble-left',
  },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Repo-Booster
      <UBadge label="Pro" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="gray"
        to="https://app.repo-booster.com/login"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
        :ui="{ wrapper: 'space-y-2' }"
      />
    </template>
  </UHeader>
</template>

<style scoped>
</style>
