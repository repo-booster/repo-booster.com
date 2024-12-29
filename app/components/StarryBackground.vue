<template>
  <div class="starry-bg">
    <!-- Star Layers -->
    <div class="stars">
      <div class="stars-layer1"></div>
      <div class="stars-layer2"></div>
      <div class="stars-layer3"></div>
    </div>
    <!-- Slot for Content -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup>
// No additional script is needed unless you want to pass props or customizations.
</script>

<style scoped>
/* Scoped styles can go here if necessary */
</style>
