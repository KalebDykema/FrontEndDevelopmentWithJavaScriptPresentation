import { createApp } from 'vue'
import createRouter from './routes/router'
import App from './App.vue'
import './scss/main.scss'

const app = createApp(App)
app.use(createRouter)
app.mount('#root')
