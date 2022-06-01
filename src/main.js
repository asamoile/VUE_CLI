import {
  createApp
} from 'vue'
import App from './App.vue'
// import router from './router'
import routers from './routes'

import '@/assets/scss/main.scss'

// createApp(App).use(router).mount('#app')
const app = createApp(App)

app.use(routers)

app.mount('#app')
