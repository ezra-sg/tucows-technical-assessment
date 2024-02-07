/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        colors: {
            stormPurple: '#605DEC',
            stormLightPurple: '#EDEDFE',
            stormGreen: '#31AA27',
            stormLightGreen: '#EBF6EB',
            stormRed: '#F93232',
            stormLightRed: '#FFF0F0',
            stormOrange: '#E99518',
            stormLightOrange: '#FFF4E4',
            stormTableGray: '#E4E4EF',
            stormInputGray: '#DCDFE3',
            stormTextGray: '#808080',
            white: '#FFFFFF',
            black: '#000000',
        },
    },
    plugins: [],
};
