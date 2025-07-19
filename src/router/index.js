// src/router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Insight from '@/views/Insight.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Demo from '@/views/Demo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home | Nam.dev-blackkat98',
        },
    },
    {
        path: '/insight',
        name: 'Insight',
        component: Insight,
        meta: {
            title: 'Insight | Nam.dev-blackkat98',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About | Nam.dev-blackkat98',
        },
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience,
        meta: {
            title: 'Experience | Nam.dev-blackkat98',
        },
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
        meta: {
            title: ' | Nam.dev-blackkat98',
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
})

export default router
