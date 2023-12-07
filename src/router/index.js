import { createRouter, createWebHistory } from "vue-router";

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
            }
        ]
    }
)

export default router