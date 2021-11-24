import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './scss/main.scss'
import router from './router'
createApp(App).use(router).mount('#app')
