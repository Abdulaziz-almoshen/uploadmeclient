import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

store.dispatch('auth/me').then(res=>{
    createApp(App).use(store).use(router).mount('#app')
}).catch(err=>{
    createApp(App).use(store).use(router).mount('#app')

})
import './assets/CSS/index.css'


// createApp(App).mount('#app')