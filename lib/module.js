const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  const options = Object.assign(
    // default options
    {
      logRocketId: process.env.LOGROCKET_ID || '',
      devModeAllowed: process.env.LOGROCKET_DEV_MODE_ALLOWED || false
    },
    this.options.logRocket,
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
