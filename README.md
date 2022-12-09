<p align="center">
<img src="./.assets/nuxt_LogRocket.png" width="300px" alt="nuxt-logrocket">
</p>

# nuxt-logrocket

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-logrocket/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-logrocket)
[![npm](https://img.shields.io/npm/dt/nuxt-logrocket.svg?style=flat-square)](https://npmjs.com/package/nuxt-logrocket)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/nuxt-logrocket.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/nuxt-logrocket)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/nuxt-logrocket.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/nuxt-logrocket)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> LogRocket module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Nuxt 3 & Nuxt Bridge
- Supports [Pinia](https://pinia.vuejs.org) integration
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

- Add `nuxt-logrocket` to the `modules` section of your `nuxt.config.ts` file

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-logrocket'],

  logRocket: {
    id: '',
    dev: false,
    config: {
      //
    }
  }
})
```

## Options

Options can be passed using either [Runtime Config](https://v3.nuxtjs.org/guide/features/runtime-config/#environment-variables) or the `logRocket` section in `nuxt.config.ts`.
Setting a value for the required `id` option is enough in most cases.

Below is the complete list of options:

| Option | Type | Default | Required |
| :-- | :-- | :-- | :-- |
| id | `String` | `''` | True |
| dev | `Boolean` | `true` | False |
| enablePinia | `Boolean` | `true` | False |
| release | `String` | `null` | False |
| consoleEnabled | `Boolean` | `true` | False |
| networkEnabled | `Boolean` | `true` | False |
| networkRequestSanitizer | `Function` | - | False |
| networkResponseSanitizer | `Function` | - | False |
| domEnabled | `Boolean` | `true` | False |
| inputSanitizer | `Boolean` | `false` | False |
| textSanitizer | `Boolean` | `false` | False |
| baseHref | `String` | `null` | False |
| shouldCaptureIP | `Boolean` | `true` | False |
| rootHostname | `String` | `null` | False |
| shouldDebugLog | `Boolean` | `true` | False |
| mergeIframes | `Boolean` | `false` | False |

This is an example containing the default values for the options:

```ts
{
  id: '',
  dev: true,
  enablePinia: true,
  config: {
    release: null,
    console: {
      isEnabled: true
    },
    network: {
      isEnabled: true,
      networkRequestSanitizer: () => {},
      networkResponseSanitizer: () => {}
    },
    dom: {
      isEnabled: true,
      inputSanitizer: false,
      textSanitizer: false,
      baseHref: null
    },
    shouldCaptureIP: true,
    rootHostname: null,
    shouldDebugLog: true,
    mergeIframes: false
  }
}
```

## Usage

LogRocket gets automatically injected into your application when it is setup correctly. By default this module works only in `production` and on client-side events.

In order to use LogRocket's injected functionality in your application, you can use :

```ts
const { $logRocket } = useNuxtApp()
```

Visit LogRocket's website for a full list of features : [Docs](https://docs.logrocket.com/docs)

### Pinia

This module automatically detects [Pinia](https://pinia.vuejs.org) store mutations and attaches them to the LogRocket session.

This functionality is enabled by **default**, and can be disabled by setting the `enablePinia` options to `false`.

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-logrocket'],

  logRocket: {
    id: '',
    enablePinia: false
  }
})
```

## Development

- Clone this repository
- Install dependencies using `yarn install`
- Start development server using `yarn run dev`
- Point your browser to `http://localhost:3000`

## License

[MIT License](./LICENSE) - Alibaba Travels Co
