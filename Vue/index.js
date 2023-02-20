import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/main.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory('/Vue'),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#root')
