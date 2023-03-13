module.exports = {
    env: {
        brwoser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'puglin:@typescript-eslint/eslint-recommended',
        'puglin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
};
