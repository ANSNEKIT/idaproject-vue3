import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [  
        "@nuxtjs/eslint-module",

        ["@nuxtjs/eslint-module", { /* module options */ }],
    ],
});
