import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { App } from './app'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')
