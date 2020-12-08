import LogRocket from 'logrocket'

declare module '@nuxt/vue-app' {
  interface Context {
    $logRocket: typeof LogRocket
  }
  interface NuxtAppOptions {
    $logRocket: typeof LogRocket
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $logRocket: typeof LogRocket
  }
  interface NuxtAppOptions {
    $logRocket: typeof LogRocket
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $logRocket: typeof LogRocket
  }
}
