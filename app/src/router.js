import Home from './components/Home.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'
import Error404 from './components/404.vue'

const routes = [
    { path: '/about', component: About},
    { path: '/home', component: Home},
    { path: '*', component: Error404},
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router