import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), icon()],
    devToolbar: {
        enabled: false
    },
    adapter: netlify(),
    publicDir: './public',
    outDir: './dist'
});
