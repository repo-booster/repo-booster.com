<script setup lang="ts">
import { ref, inject, type Ref } from 'vue'
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

function mapContentNavigation(navItems: Ref<NavItem[]>): NavItem[] {
  return navItems.value.map(item => ({
    label: item.title,
    to: item.path,
    icon: item.icon || 'i-simple-icons-link',
  }))
}

const links: Array<{ label: string; to: string; icon: string }> = [
  {
    label: 'Docs',
    to: '/docs',
    icon: 'i-simple-icons-book',
  },
  {
    label: 'Pricing',
    to: '/pricing',
    icon: 'i-simple-icons-dollar',
  },
  {
    label: 'Download',
    to: '/pricing',
    icon: 'i-simple-icons-dollar',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-simple-icons-blogger',
  },
]
</script>

<template>
  <!-- Header Component -->
  <UHeader :links="links">
    <!-- Logo slot -->
    <template #logo>
      Repo-Booster
      <UBadge label="Pro" variant="subtle" class="mb-0.5" />
    </template>

    <!-- Right action buttons -->
    <template #right>
      <UButton
        label="Sign in"
        color="gray"
        to="/login"
      />
      <UButton
        label="Sign up"
        icon="i-simple-icons-arrowright"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
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
