const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  buildDir: resolve(__dirname, '.nuxt'),
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    '../../lib/module.js'
  ],
  logRocket: {
    logRocketId: 'ENTER_YOUR_ID_HERE',
    devModeAllowed: true
  }
}
