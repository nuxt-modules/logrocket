import { defineNuxtConfig } from 'nuxt/config'
import NuxtLogRocket from '../src/module'

export default defineNuxtConfig({
  modules: [NuxtLogRocket],
  logRocket: {
    id: ''
  },

  typescript: {
    shim: false
  }
})
