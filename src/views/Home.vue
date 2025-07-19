<template>
    <section class="space-y-4 py-2 px-4 text-center font-mono">
        <div class="space-y-4">
            <p class="text-sm text-gray-500 select-none">&lt;intro&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {{ greeting }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {{ bio }}
            </p>
            <p class="text-sm text-gray-500 select-none">&lt;/intro&gt;</p>
        </div>

        <!-- <div>
            <a
                href="#projects"
                class="inline-block px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
                {{ ctaText }}
            </a>
        </div> -->

        <!-- Skills Section -->
        <div class="mt-24 text-left mx-auto space-y-6">
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-200">
                {{ techTitle }}
            </h2>
            <div class="bg-gray-900/70 text-green-400 text-sm p-4 rounded-md overflow-auto whitespace-pre-wrap leading-relaxed max-h-64">
                {{ techCode }}
            </div>
        </div>
    </section>
</template>

<script setup>
// import { ref } from 'vue'

const greeting = '👋 Hello, world. I’m Nam.'
const bio = 'Fullstack developer writing backend and frontend magic.'
const ctaText = 'View Projects'
const techTitle = '🧰 Technologies'
const techCode = `const technologies = {
    backend: [ 'PHP', 'Laravel', 'NodeJS', 'NestJS', 'ExpressJS' ],
    frontend: [ 'jQuery', 'VueJS 2', 'VueJS 3', 'NuxtJS' ],
    database: [ 'MySQL', 'MariaDB', 'PostgreSQL' ],
    cache: [ 'Redis' ],
    dev_tools: [ 'Composer', 'NPM', 'Vite', 'Webpack', 'ElasticSearch', 'Airflow' ],
    mgmt_tools: [ 'Git', 'Docker', 'Jenkins', 'Jira' ],
    and_more: [ '...' ],
}`
</script>
