import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './main.scss'
import App from './App.vue'
import routes from './routes/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
