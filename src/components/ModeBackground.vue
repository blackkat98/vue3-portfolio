<template>
    <div
        class="fixed pr-4 top-0 left-0 w-screen h-screen -z-10 bg-indigo-200 transition-transform duration-1000"
        :class="darkMode ? '-translate-x-[100vw]' : 'translate-x-0'"
    >
        <SunIcon 
            class="absolute right-5 w-40 h-40 top-[calc(50vh-50px)]"
            :class="darkMode ? 'opacity-0' : 'animate-spin-then-shrink'"
        />
    </div>
    <div
        class="fixed pl-4 top-0 left-[100vw] w-screen h-screen -z-10 bg-gray-700 transition-transform duration-1000"
        :class="darkMode ? '-translate-x-[100vw]' : 'translate-x-0'"
    >
        <MoonIcon
            class="absolute left-5 w-40 h-40 top-[calc(50vh-50px)]"
            :class="darkMode ? 'animate-jiggle-then-shrink' : 'opacity-0'"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import SunIcon from '@/components/SunIcon.vue'
import MoonIcon from '@/components/MoonIcon.vue'
defineProps({
    darkMode: {
        type: Boolean,
        default: false,
    },
})
</script>
