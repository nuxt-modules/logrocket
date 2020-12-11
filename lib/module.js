const { resolve } = require('path')
const merge = require('deepmerge')

module.exports = async function module (moduleOptions) {
  const options = merge(
    // default options
    {
      logRocketId: process.env.LOGROCKET_ID || '',
      devModeAllowed: process.env.LOGROCKET_DEV_MODE_ALLOWED || false,
      config: {
        release: process.env.LOGROCKET_RELEASE || null,
        console: {
          isEnabled: process.env.LOGROCKET_CONSOLE || true
        },
        network: {
          isEnabled: process.env.LOGROCKET_NETWORK || true
        },
        dom: {
          isEnabled: process.env.LOGROCKET_DOM_ENABLED || true,
          inputSanitizer: process.env.LOGROCKET_INPUT_SANITIZER || false,
          textSanitizer: process.env.LOGROCKET_TEXT_SANITIZER || false,
          baseHref: process.env.LOGROCKET_BASE_HREF || null
        },
        shouldCaptureIP: process.env.LOGROCKET_SHOULD_CAPTURE_IP || true,
        rootHostname: process.env.LOGROCKET_ROOT_HOSTNAME || null,
        shouldDebugLog: process.env.LOGROCKET_SHOULD_DEBUG_LOG || true,
        mergeIframes: process.env.LOGROCKET_MERGE_IFRAMES || false
      }
    },
    this.options.logRocket || {},
    moduleOptions
  )

  const pluginOpts = {
    src: resolve(__dirname, 'plugin.js'),
    // plugin filename
    fileName: 'log-rocket/plugin.js',
    options
  }
  // add the plugin
  this.addPlugin(pluginOpts)
}
