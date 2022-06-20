import { defineNuxtConfig } from 'nuxt'
import NuxtLogRocket from '..'

export default defineNuxtConfig({
  modules: [NuxtLogRocket],
  logRocket: {
    id: ''
  },

  typescript: {
    shim: false
  }
})
