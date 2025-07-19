// src/router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Insight from '@/views/Insight.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Demo from '@/views/Demo.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/insight', name: 'Insight', component: Insight },
    { path: '/about', name: 'About', component: About },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/demo', name: 'Demo', component: Demo },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
