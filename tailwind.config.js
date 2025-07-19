/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                jiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(25deg)' },
                    '50%': { transform: 'rotate(-25deg)' },
                    '75%': { transform: 'rotate(15deg)' },
                },
                'spin-then-shrink': {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '77%': { transform: 'rotate(360deg) scale(1)' }, // ≈1000ms
                    '100%': { transform: 'rotate(720deg) scale(0)' }, // ≈300ms
                },
                'jiggle-then-shrink': {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '19%': { transform: 'rotate(25deg) scale(1)' },    // ~250ms
                    '38%': { transform: 'rotate(-25deg) scale(1)' },   // ~500ms
                    '58%': { transform: 'rotate(15deg) scale(1)' },    // ~750ms
                    '77%': { transform: 'rotate(0deg) scale(1)' },     // ~1000ms (end of jiggle)
                    '100%': { transform: 'rotate(360deg) scale(0)' },   // ~1300ms (end of spin+shrink)
                },
            },
            animation: {
                jiggle: 'jiggle 0.6s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
                'spin-then-shrink': 'spin-then-shrink 1.3s ease forwards',
                'jiggle-then-shrink': 'jiggle-then-shrink 1.3s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}
