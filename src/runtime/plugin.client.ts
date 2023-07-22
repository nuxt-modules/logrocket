import { logRocket } from 'logrocket'

// type inference required to prevent TS4082 error for 'LR.LogRocket'
interface NuxtLR { logRocket: Omit<typeof logRocket, 'init' | 'reduxMiddleware'>}
export default defineNuxtPlugin<NuxtLR>(({ pinia }) => {
  const opts = useRuntimeConfig()?.public?.logRocket

  if (!opts?.id || (!opts?.dev && !(process.env.NODE_ENV === 'production'))) { return }

  logRocket.init(opts?.id, opts?.config)

  if (pinia && opts?.enablePinia) {
    pinia.use(({ store }) => store.$subscribe(m => logRocket.log('mutation', m)))
  }

  return { provide: { logRocket } }
})
