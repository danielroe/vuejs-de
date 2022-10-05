import { addComponent } from '@nuxt/kit'
import * as troisjs from 'troisjs'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@picocss/pico'],
  runtimeConfig: {
    catApiToken: ''
  },
  // Coming soon ... !
  routes: {
    '/cat/**': { static: true },
    '/api/**': { cors: true }
  },
  modules: [
    function () {
      for (const name of Object.keys(troisjs)) {
        // Skip non-component imports
        if (!name.match(/^[A-Z]/)) continue

        addComponent({
          name,
          export: name,
          filePath: 'troisjs',
        })
      }
    }
  ]
})
