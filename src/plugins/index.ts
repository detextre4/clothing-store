/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import Vue3Storage from './vue3-storage-secure'
import polyfills from './polyfills'
import injects from './injects'
import axiosConfig from './axios'
import directives from './directives'
import vueDebounce from './vue-debounce'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import vueI18n from './vue-i18n'
// import { loadFonts } from './webfontloader'
import vueToastification from './vue-toastification'
import googleMaps from './google-maps'

import mixins from './mixins-import'

// Services
// import firebaseApi from '@/services/firebase-api'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  // Use principals
  Vue3Storage(app)
  polyfills()
  injects(app)
  axiosConfig(app)
  directives(app)
  vueDebounce(app)

  // Use plugins
  app
    .use(vuetify)
    .use(router)
    .use(store)

  // Use services
  // firebaseApi(app)

  // Use custom plugins
  // loadFonts()
  vueI18n(app)
  vueToastification(app)
  googleMaps(app)

  mixins(app) // this should be the last one
}
