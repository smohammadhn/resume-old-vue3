import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/global.css',
  ],

  buildModules: ['@nuxtjs/device'],
})
