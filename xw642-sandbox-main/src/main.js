import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
