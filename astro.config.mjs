import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://keystatic-test.pages.dev',
  integrations: [react(), keystatic()],
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    define: {
      'process.env': process.env
    }
  },
  experimental: {
    contentCollectionCache: true
  }
})
