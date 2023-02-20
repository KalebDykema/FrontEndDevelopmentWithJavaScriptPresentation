import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './scss/main.scss'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(Home)
app.mount('#root')
app.use(router)
