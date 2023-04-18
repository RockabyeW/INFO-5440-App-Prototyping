import { createApp } from 'vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

const app = createApp(App)
import fixtures from './fixtures.json'
app.config.globalProperties.fixtures = fixtures;

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;
app.use(router)
app.use(BootstrapVue3)
// app.use(Antd)
app.mount('#app')




