import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/main.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'

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
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#root')
