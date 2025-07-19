<template>
    <section class="space-y-4 py-2 px-4 font-mono">
        <!-- Hero -->
        <div class="space-y-2 text-center">
            <p class="text-sm text-gray-500 select-none">&lt;showcase&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {{ title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {{ subtitle }}
            </p>
            <p class="text-sm text-gray-500 select-none">&lt;/showcase&gt;</p>
        </div>

        <div class="space-y-2">
            <h2 class="text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                🌙 Try the Dark Mode
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
                Nothing special. Just a little animation.
            </p>
        </div>

        <div class="space-y-2">
            <h2 class="text-xl font-semibold text-indigo-600 dark:text-indigo-200">
                🧮 Turn your images into ASCII arts
            </h2>
            <ImageToAscii />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ImageToAscii from '@/components/ImageToAscii.vue'

const title = '🧪 Demo'
const subtitle = 'No actual project’s components. Just a little play around. And there’s no backend here.'
</script>
