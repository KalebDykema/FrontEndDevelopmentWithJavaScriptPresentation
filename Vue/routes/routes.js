import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

export default [
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
