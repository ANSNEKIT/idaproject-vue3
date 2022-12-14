module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'vue/no-v-html': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'vue/multi-word-component-names': 0,
        quotes: ['error', 'single'],
    },
};
