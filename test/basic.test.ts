import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('basic', async () => {
  await setup({
    server: true,
    rootDir: fileURLToPath(new URL('../playground', import.meta.url))
  })

  it('render', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Nuxt LogRocket')
  }, 60000)
})
