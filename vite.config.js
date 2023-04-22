import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/React/app.tsx'],
            refresh: true,
        }),
       eslintPlugin(),
    ],
});
