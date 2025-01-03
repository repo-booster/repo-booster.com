// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxtjs/html-validator',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    preference: 'dark'
  },

  alias: {
    // Explicit alias to handle #build issue
    '#build': './.nuxt'
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  nitro: {
    prerender: {
      routes: ['/', '/docs'],
      crawlLinks: true
    },
    externals: {
      inline: ['@nuxt/*'] // Inline Nuxt modules to avoid server runtime issues
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  typescript: {
    strict: false
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md`
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName));

      globals.forEach(c => c.global = true);
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
});
