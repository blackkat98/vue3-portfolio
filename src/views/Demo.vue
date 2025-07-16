<template>
    <section class="space-y-4 py-2 px-4 text-center font-mono">
        <!-- Hero -->
        <div class="space-y-4">
            <p class="text-sm text-gray-500 select-none">&lt;showcase&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {{ title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {{ bio }}
            </p>
            <p class="text-sm text-gray-500 select-none">&lt;/showcase&gt;</p>
        </div>

        
    </section>
</template>

<script setup>
// import { ref } from 'vue'

const title = '🧪 Demo'
const subtitle = 'Fullstack developer writing backend and frontend magic.'

</script>
