import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/React/Dashboard/app.tsx'],
            refresh: true,
        }),
       eslintPlugin({
           include: 'resources/React/**/*.+(js|jsx|ts|tsx)',
           failOnError : false,
           failOnWarning : false
       }),
    ],
});
