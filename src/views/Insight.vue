<template>
    <section class="space-y-4 py-2 px-4 font-mono text-gray-800 dark:text-gray-100">
        <div class="text-center space-y-2">
            <p class="text-sm text-gray-500 dark:text-gray-400 select-none">&lt;insight&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {{ title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {{ subtitle }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 select-none">&lt;/insight&gt;</p>
        </div>

        <article 
            class="bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow p-6 max-w-5xl mx-auto space-y-4 text-justify" 
            v-for="article of articles" 
        >
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {{ article.title }}
            </h2>
            <p>
                {{ article.content }}
            </p>
            <blockquote class="border-l-4 pl-4 italic text-slate-600 dark:text-slate-400">
                {{ article.quote }}
            </blockquote>
        </article>

        <p class="text-center text-xs text-gray-400 dark:text-gray-600 select-none">&lt;/eof&gt;</p>
    </section>
</template>

<script setup>
const title = '💭 Insights & Thoughts'
const subtitle = 'Developer notes, observations, and tech philosophy.'
const articles = [
    {
        title: '🧬 The Power of Generic Programming',
        content: 'Generic programming is not child play. It is a double-edged sword. It gives you the abilities to not only write reusable functions, but also applying solutions accross domains, data types, and businesses. It can break things apart if you fail to capture the essence of problems.',
        quote: '"Don’t write the same code twice. Write code that never has to be written again." - Someone who embraced generics',
    },
    {
        title: '🏎️ We Do Not Compromise with Slow',
        content: 'Performance is not just a feature — it is a fundamental part of user experience. They will not wait for a sluggish application.',
        quote: '“Fast is better than slow. Always.” — Every sane person',
    },
    {
        title: '🎯 Good Enough Isn’t',
        content: 'Momentum dies where "good enough" lies. Settling for just-working logic creates a foundation of mediocrity — and mediocrity compounds.',
        quote: '“Truth can only be found in one place: the code.” — Robert C. Martin',
    },
]
</script>
