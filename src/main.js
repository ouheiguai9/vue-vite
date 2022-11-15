import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './main.scss'
import App from './App.vue'
import routes from './routes/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(createPinia()).use(router).mount('#app')
