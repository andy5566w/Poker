import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './scss/main.scss'
import router from './router'
import 'sweetalert2/src/sweetalert2.scss'
import store from "./store";
createApp(App).use(store).use(router).mount('#app')
