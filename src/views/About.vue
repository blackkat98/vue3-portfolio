<template>
    <section class="space-y-4 py-2 px-4 font-mono text-gray-800 dark:text-gray-100 max-w-4xl mx-auto">
        <div class="space-y-2 text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400 select-none">&lt;about&gt;</p>
            <h1 class="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {{ titleAbout }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {{ subtitleAbout }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 select-none">&lt;/about&gt;</p>
        </div>

        <div class="space-y-2 text-justify">
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {{ titleOrigin }}
            </h2>
            <p>
                {{ contentOrigin }}
            </p>
        </div>

        <div class="space-y-2 text-justify">
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {{ titleThough }}
            </h2>
            <p>
                {{ contentThough }}
            </p>
        </div>

        <div class="space-y-2">
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {{ titleStack }}
            </h2>
            <ul class="text-gray-700 dark:text-gray-300">
                <li v-for="(value, key) in contentStack">
                    <b>{{ key }}</b>: [ {{ value.join(', ') }} ]
                </li>
            </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-2">
            <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {{ titleContact }}
            </h2>
            <ul class="text-gray-700 dark:text-gray-300">
                <li v-for="(value, key) in contentContact">
                    <b>{{ key }}</b>: {{ value }}
                </li>
            </ul>
        </div>

        <!-- Final tag -->
        <p class="text-center text-xs text-gray-400 dark:text-gray-600 select-none">&lt;/eof&gt;</p>
    </section>
</template>

<script setup>
const titleAbout = '👨‍💻 About Me'
const subtitleAbout = `
    I’m Nam, a fullstack web engineer who is fond of reusable and high-performance codes.
    From backend flexibility and efficency to frontend reactivity, I build with intention and deliver with heart.
`

const titleOrigin = '🧭 Where I Come From'
const contentOrigin = `
    I’ve worked on enterprise-grade softwares under strict security guidelines and with indispensable network services.
    Data can be life and death!
`

const titleThough = '🧠 How I Think'
const contentThough = `
    I love generic programming. In my view, every aspect of a thing can be modeled - as long as it does not compromise the system’s integrity.
    With configurable controls, dynamic settings, and user-defined processes, systems become far more powerful, adaptable, and truly personal.
`

const titleStack = '🛠️ My Stack'
const contentStack = {
    'Laravel with Vue': [ 'Laravel', 'VueJS' ],
    'LAMP': [ 'Laravel', 'Apache', 'MySQL', 'PHP' ],
    'PEVN': [ 'PostgreSQL / MySQL / MariaDB', 'ExpressJS / NestJS', 'VueJS', 'NodeJS' ],
    'Others': [ 'Redis', 'Docker', 'Tailwind CSS', 'Webpack', 'Vite', 'Browserify', 'jQuery', '...' ],
}

const titleContact = '📬 How to reach me'
const contentContact = {
    'Email📧': 'nam.th.200698@gmail.com',
    'Linkedin🌐': 'https://www.linkedin.com/in/namth200698/',
}
</script>
