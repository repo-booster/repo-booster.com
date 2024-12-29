<script setup lang="ts">

const links = [
  {
    label: 'Continue with GitHub',
    to: 'https://github.com/apps/repo-booster',
    icon: 'i-simple-icons-github',
    color: 'gray',
    size: 'lg',
  },
];

</script>

<template>
  <ULandingHero
    title="Boost Your GitHub Experience"
    description="Achieve 90% faster growth for your projects with our guaranteed our repository enhancement tools."
    orientation="vertical"
    :links="links"
  >
    <template #headline>
      <UButton
        color="gray"
        to="https://repo-booster.com/changelog"
        label="See what's new in v1.0"
        trailing-icon="i-heroicons-arrow-right"
        size="xs"
        class="rounded-full"
      />
    </template>
    <template #default>
      <img
        src="/landing.webp"
        alt="An engaging visual representation of the landing page"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 floating-image"
        loading="lazy"
      />
    </template>
  </ULandingHero>
</template>

<style>
.floating-image {
  animation: float 8s ease-in-out infinite, rotate 20s linear infinite;
  border: 4px solid #160077;
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.8), 0 0 60px rgba(0, 191, 255, 0.5);
  border-radius: 16px;
  transform-origin: center;
  will-change: transform;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10px, -10px) scale(1.02);
  }
  50% {
    transform: translate(0, -20px) scale(1.05);
  }
  75% {
    transform: translate(-10px, -10px) scale(1.02);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
