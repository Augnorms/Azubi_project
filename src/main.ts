import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { GDialog, plugin as GDialogPlugin } from 'gitart-vue-dialog'
import 'gitart-vue-dialog/dist/style.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) 

app
  .use(pinia)
  .use(router)
  .use(GDialogPlugin)            
  .component('GDialog', GDialog)
  .mount('#app')
