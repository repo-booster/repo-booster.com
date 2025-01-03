<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <UContainer>
    <!-- Embedded Arcade Application as Hero -->
    <section class="hero-section">
      <div
        style="
          position: relative;
          padding-bottom: calc(50.520833333333336% + 41px);
          height: 0;
          width: 100%;
        "
      >
        <iframe
          src="https://demo.arcade.software/MLKlmdtVFAPa5s52JVRN?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
          title="Repo-Booster - Dashboard"
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            color-scheme: light;
          "
          loading="lazy"
          allow="clipboard-write"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
.hero-section {
  margin-bottom: 2rem;
}
</style>
