<template>
    <section class="space-y-4 py-2 px-4 max-w-5xl mx-auto">
        <div ref="timelineHeaderRef" class="text-center mb-16">
            <p class="text-sm text-gray-500 select-none">&lt;exp&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300 font-mono">
                {{ title }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400 mt-2 font-mono">
                {{ subtitle }}
            </p>
            <p class="text-sm text-gray-500 select-none">&lt;/exp&gt;</p>
        </div>

        <div class="relative border-l border-indigo-300 dark:border-indigo-600 ml-6 text-justify">
            <div
                v-for="(item, index) in timeline"
                :key="item.id"
                :ref="el => timelineRefs[index] = el"
                class="relative mb-12 pl-8"
                @mouseenter="hoverItem(item.id)"
                @mouseleave="leaveItem(item.id)"
            >
                <!-- Dot + Icon -->
                <div class="absolute -left-4 top-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
                     :style="{ backgroundColor: item.color }">
                    {{ item.icon }}
                </div>

                <!-- Card -->
                <div
                    class="bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg p-6 transition-all duration-300"
                    :class="{ 'opacity-100 translate-y-0': visibleItems.has(item.id), 'opacity-0 translate-y-8': !visibleItems.has(item.id) }"
                >
                    <h3 class="text-xl font-semibold text-indigo-700 dark:text-indigo-300">{{ item.title }}</h3>
                    <span class="block text-sm text-gray-500 dark:text-gray-400 font-mono mb-2">{{ item.period }}</span>
                    <p class="text-gray-700 dark:text-gray-300">{{ item.description }}</p>
                </div>
            </div>
        </div>

        <!-- Footer Tag -->
        <p class="text-center text-xs text-gray-400 dark:text-gray-600 select-none">&lt;/eof&gt;</p>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const title = '💼 Experience'
const subtitle = 'Where I’ve worked and what I’ve shipped.'
const timeline = [
    {
        id: 1,
        period: 'Jan 2024 – Present',
        title: 'NodeJS Fullstack Engineer @ Viettel Networks',
        description: 'Played a major role in the development and operation of ITBrain, a network procedure management system built upon NestJS and Vue 2.',
        icon: '🧠',
        color: '#6366F1'
    },
    {
        id: 2,
        period: 'Sep 2020 – Feb 2025',
        title: 'Laravel Fullstack Engineer @ Viettel Networks',
        description: 'Delivered multiple impactful modules for nBox (formerly i-BPMS), a process management platform.',
        icon: '🧭',
        color: '#10B981'
    },
    {
        id: 3,
        period: 'Aug 2016 – Jun 2020',
        title: 'Information Technology Student @ Hanoi University of Science and Technology',
        description: 'Studied Information System Engineering and earned a Bachelor’s degree.',
        icon: '💻',
        color: '#F59E0B'
    },
    {
        id: 4,
        period: 'Aug 2013 – Jun 2016',
        title: 'Math Student @ Nguyen Hue High School for Gifted Student',
        description: 'Studied Advanced Mathematics.',
        icon: '📐',
        color: '#F97316',
    },
]

const visibleItems = ref(new Set())
const timelineRefs = ref([])

let observer = null

const handleIntersect = (entries) => {
    entries.forEach(entry => {
        const index = Number(entry.target.dataset.index)
        const id = timeline[index]?.id
        if (entry.isIntersecting && id) {
            visibleItems.value.add(id)
        } else if (id) {
            visibleItems.value.delete(id)
        }
    })
}

onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.2,
    })
    timelineRefs.value.forEach((el, index) => {
        if (el) {
            el.dataset.index = index
            observer.observe(el)
        }
    })
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})

const hoverItem = (id) => {}
const leaveItem = (id) => {}
</script>
