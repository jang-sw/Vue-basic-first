import { createWebHistory, createRouter } from 'vue-router';
import MainView from '../views/Main.vue';
import InfoView from '../views/Info.vue';
import AboutView from '../views/About.vue';


const routes = [
    {
        path: '/',
        component: MainView,
        name: 'Home',
    },
    {
        path: '/info',
        component: InfoView,
        name: 'Info',
    },
    {
        path: '/about',
        component: AboutView,
        name: 'About',
    },
]; 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;