// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your views/components
import Home from '@/views/Home.vue'
import Insight from '@/views/Insight.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Demo from '@/views/Demo.vue'
// You can add more pages like About.vue, Projects.vue, etc.

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/insight', name: 'Insight', component: Insight },
    { path: '/about', name: 'About', component: About },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/demo', name: 'Demo', component: Demo },
    // Example:
    // { path: '/about', name: 'About', component: () => import('@/views/About.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
