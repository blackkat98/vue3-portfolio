<template>
    <div
        :class="[
            'min-h-screen font-sans transition-colors duration-300',
            darkMode ? 'dark text-gray-100' : 'text-gray-800'
        ]"
    >
        <!-- NAVBAR -->
        <header
            :class="[
                'sticky top-0 z-50 backdrop-blur border-b shadow-sm transition-colors duration-300',
                isScrolled
                    ? (darkMode ? 'bg-gray-900 border-gray-700 shadow-md' : 'bg-indigo-500 border-indigo-500 shadow-md')
                    : (darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-indigo-500/80 border-indigo-300')
            ]"
        >
            <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 class="text-xl md:text-2xl font-bold text-white">Nam.dev</h1>
                <div class="flex items-center gap-4">
                    <nav class="hidden md:flex gap-6 text-sm font-medium">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                        <RouterLink to="/insight" class="nav-link">Insight</RouterLink>
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                        <RouterLink to="/experience" class="nav-link">Experience</RouterLink>
                        <RouterLink to="/demo" class="nav-link">Demo</RouterLink>
                    </nav>
                    <button
                        @click="darkMode = !darkMode"
                        class="text-white text-sm border border-white/40 px-3 py-1 rounded hover:bg-white/10 transition"
                        title="Toggle Dark Mode"
                    >
                        {{ darkMode ? '☀️ Light' : '🌙 Dark' }}
                    </button>
                </div>
            </div>
        </header>

        <!-- MAIN CONTENT -->
        <main
            class="mt-4 w-full px-6 md:px-12 pt-16 pb-32 lg:w-3/4 xl:w-2/3 mx-auto rounded-xl shadow-lg custom-scroll"
        >
            <RouterView />
        </main>

        <!-- FOOTER -->
        <footer class="text-center text-sm text-slate-100 dark:text-slate-400 border-t border-white/30 py-4 mt-12">
            &copy; {{ currentYear }} Nam. All rights reserved.
        </footer>

        <!-- BELOW-ALL BACKGROUND LAYER -->
        <!-- <div class="fixed inset-0 w-screen h-screen -z-10 bg-indigo-200 dark:bg-gray-900"></div> -->
        <div 
            class="fixed flex items-center justify-end pr-4 top-0 left-0 w-screen h-screen -z-10 bg-indigo-200 transition-transform duration-700" 
            :class="darkMode ? '-translate-x-[100vw]' : 'translate-x-0'" 
        >
            <SunIcon class="w-40 h-40" />
        </div>
        <div 
            class="fixed flex items-center justify-start pl-4 top-0 left-[100vw] w-screen h-screen -z-10 bg-gray-700 transition-transform duration-700" 
            :class="darkMode ? '-translate-x-[100vw]' : 'translate-x-0'" 
        >
            <MoonIcon class="w-40 h-40" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SunIcon from '@/components/SunIcon.vue'
import MoonIcon from '@/components/MoonIcon.vue'

const currentYear = new Date().getFullYear()
const isScrolled = ref(false)
const darkMode = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.nav-link {
    position: relative;
    color: #f1f5f9;
    transition: color 0.3s ease;
    text-decoration: none;
}
.nav-link:hover {
    color: #e0e7ff;
}
.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: #e0e7ff;
    transition: width 0.3s ease;
}
.nav-link:hover::after {
    width: 100%;
}

/* Custom Scrollbar */
.custom-scroll {
    scrollbar-width: thin;
    scrollbar-color: #a78bfa #f0f0f0;
}
.custom-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.custom-scroll::-webkit-scrollbar-track {
    background: #f0f0f0;
}
.custom-scroll::-webkit-scrollbar-thumb {
    background-color: #a78bfa;
    border-radius: 10px;
}
</style>
