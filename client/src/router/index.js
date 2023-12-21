import { createRouter, createWebHistory } from "vue-router"


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/HomeView.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/AboutView.vue')
            },
            {
                path: '/blog',
                name: 'Blog',
                component: () => import('../views/BlogView.vue')
            }
        ]
    }
)

export default router