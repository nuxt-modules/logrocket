import { defu } from 'defu'
import { isNuxt3, addPlugin, useLogger, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name, version } from '../package.json'

const logger = useLogger('nuxt-logrocket')

const { resolve } = createResolver(import.meta.url)

type ModuleOptions = {
  /**
   * LogRocket ID
   * @type {string}
   */
  id?: string;
  /**
   * Specify if LogRocket should be enabled in development mode.
   * @type {boolean}
   * @default true
   * */
  dev?: boolean;
  /**
   * Specify if LogRocket should attach pinia mutations to the LogRocket sessions.
   * @type {boolean}
   * @default true
   * */
  enablePinia?: boolean;
  /**
   * LogRocket Configuration
   * @type {object}
   * */
  config?: {
    release?: string,
    console?: {
      isEnabled?: boolean | {
        log?: boolean,
        info?: boolean,
        debug?: boolean,
        warn?: boolean,
        error?: boolean
      },
      shouldAggregateConsoleErrors?: boolean,
    },
    network?: {
      isEnabled?: boolean,
    },
    dom?: {
      isEnabled?: boolean,
      baseHref?: string,
      textSanitizer?: boolean | string,
      inputSanitizer?: boolean | string,
      privateAttributeBlocklist?: string[],
    },

    /** Controls collection of IP addresses and related features, such as GeoIP */
    shouldCaptureIP?: boolean,

    /**
      * Enable sharing sessions across subdomains by setting this to the top-level hostname.
      * */
    rootHostname?: string,

    /**
     * Convenience option for configuring the SDK for an on-prem install.
     * Include the protocol (eg. https://ingest.example.com)
     * */
    ingestServer?: string,

    /**
     * Convenience option for configuring
     * where the full SDK should be loaded from for on-prem installs
     * */
    sdkServer?: string,

    uploadTimeInterval?: number,

    shouldDebugLog?: boolean,

    mergeIframes?: boolean,

    /**
     * Controls domains to which a parent window can post messages
     * in order to merge recording with cross-domain iframes
     * */
    childDomains?: string[] | null,

    /**
     * Controls domain to which an iframe window can post messages
     * in order to merge recording with a cross-domain parent window
     * */
    parentDomain?: string | null,

    shouldAugmentNPS?: boolean,

    shouldParseXHRBlob?: boolean,
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'logRocket',
    compatibility: {
      bridge: true
    }
  },
  defaults: nuxt => ({
    dev: nuxt.options.dev,
    enablePinia: nuxt.options.modules.includes('@pinia/nuxt'),
    config: {
      console: {
        isEnabled: true
      },
      network: {
        isEnabled: true
      },
      dom: {
        isEnabled: true,
        inputSanitizer: false,
        textSanitizer: false
      },
      shouldCaptureIP: true,
      shouldDebugLog: true,
      mergeIframes: false
    }
  }),
  setup (opts, nuxt) {
    const options = defu<ModuleOptions, any>(isNuxt3()
      ? nuxt.options.runtimeConfig.public?.logRocket
      : nuxt.options.publicRuntimeConfig.logRocket || {},
    opts)

    if (isNuxt3()) {
      // @ts-ignore
      nuxt.options.runtimeConfig.public.logRocket = options
    } else {
      // @ts-ignore
      nuxt.options.publicRuntimeConfig.logRocket = options
    }

    if (!options?.id) {
      logger.warn('LogRocket ID not found.')
    }

    if (options?.enablePinia) {
      logger.info('LogRocket pinia mode enabled.')
    }

    addPlugin(resolve('runtime/plugin.client.ts'))
  }
})

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    // @ts-ignore
    public: {
      logRocket: ModuleOptions;
    };
  }
}
