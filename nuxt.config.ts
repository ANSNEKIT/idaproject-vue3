import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/styles/global.scss'],
    buildModules: [
        '@nuxtjs/eslint-module',

        [
            '@nuxtjs/eslint-module',
            {
                /* module options */
            },
        ],
    ],
    build: {
        loaders: {
            scss: {
                implementation: require('sass'),
            },
        },
    },
    head: {
        link: [
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'stylesheet',
                href: 'fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap',
            },
        ],
    },
});
