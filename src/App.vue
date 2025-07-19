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
                        aria-label="Toggle dark mode"
                        @click="modeChange"
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
            <div class="text-xs text-slate-500 dark:text-slate-500">
                Powered by <a href="https://vuejs.org/" target="_blank" class="underline hover:text-indigo-400">Vue.js</a>
                &#44;
                <a href="https://tailwindcss.com/" target="_blank" class="underline hover:text-indigo-400">Tailwind CSS</a>
                &amp;
                <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="underline hover:text-indigo-400">Vite</a>.
            </div>
        </footer>

        <ModeBackground :darkMode="darkMode" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ModeBackground from '@/components/ModeBackground.vue'

const modeKey = 'dark-mode'
const storedMode = localStorage.getItem(modeKey)

const currentYear = new Date().getFullYear()
const isScrolled = ref(false)
const darkMode = ref(storedMode === '1')

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

function modeChange() {
    darkMode.value = !darkMode.value
    localStorage.setItem(modeKey, darkMode.value ? '1' : '0')
}
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
