import { defineNuxtConfig } from 'nuxt/config'
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
