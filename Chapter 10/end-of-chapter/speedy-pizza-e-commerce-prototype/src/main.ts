import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes/index.ts'
import App from './App.vue'
import './assets/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router).mount('#app')
