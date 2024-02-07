// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    pages: true,
    modules: [
        '@nuxt/image',
        [
            '@nuxtjs/eslint-module',
            {
                lintOnStart: false,
            },
        ],
    ],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/styles/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
