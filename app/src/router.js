import Home from './components/Home.vue'
import Show from './components/Show.vue'
import VueRouter from 'vue-router'


const routes = [
    { path: '/home', component: Home},
    {
        path: '/show/:Pid',
        name: 'details',
        component: Show
    }

]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router