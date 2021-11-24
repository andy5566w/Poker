import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Layout.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../components/NotFound.vue'),
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
