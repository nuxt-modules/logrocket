<p align="center">
<img src="./.assets/nuxt_LogRocket.png" width="300px" alt="nuxt-logrocket">
</p>

# nuxt-logrocket

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-logrocket/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-logrocket)
[![npm](https://img.shields.io/npm/dt/nuxt-logrocket.svg?style=flat-square)](https://npmjs.com/package/nuxt-logrocket)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/nuxt-logrocket.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/nuxt-logrocket)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/nuxt-logrocket.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/nuxt-logrocket)
[![Dependencies](https://david-dm.org/nuxt-community/nuxt-logrocket/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/nuxt-logrocket)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> LogRocket module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Supports `logrocket-vuex` plugin integration by default
- Ability to run in development mode

## Setup

- Add `nuxt-logrocket` dependency using yarn or npm to your project

```sh
yarn add nuxt-logrocket
```

OR

```sh
npm install nuxt-logrocket --save
```

- Add `nuxt-logrocket` to the `modules` section of your `nuxt.config.js` file

```js
{
  modules: [
    'nuxt-logrocket',
  ],

  logRocket: {
    logRocketId: '',
    devModeAllowed: false,
  }
}
```

## Options

Options can be passed using either environment variables or `logRocket` section in `nuxt.config.js`.
Setting a value for the required `logRocketId` option is enough in most cases.

### logRocketId

- Type: `String`
  - Default: `process.env.LOGROCKET_ID || ''`

### devModeAllowed

- Type: `Boolean`
  - Default: `process.env.LOGROCKET_DEV_MODE_ALLOWED || false`


## Usage

LogRocket gets automatically injected into your application when it is setup correctly. By default this module works only in `production` and on client-side events.

In order to use LogRocket's injected functionality in your application, you can use :

```js
this.$logRocket
```

in your components or :

```js
app.$logRocket
```

in plugins.

If Vuex store is initialized, LogRocket Vuex plugin will be automatically registered.

Visit LogRocket's website for a full list of features : [Docs](https://docs.logrocket.com/docs)

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `yarn run dev` or `npm run dev`
- Point your browser to `http://localhost:3000`

## License

[MIT License](./LICENSE) - Alibaba Travels Co
