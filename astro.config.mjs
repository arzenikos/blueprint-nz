import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import tailwindcss from '@tailwindcss/vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            // viteStaticCopy({
            //     targets: [{
            //         src:'./src/**/*', // copy all files under src
            //         dest: './' // place at root of dist/
            //     }]
            // })
        ]
    },
    integrations: [react(), icon(), tailwind()],
    devToolbar: {
        enabled: false
    },
    adapter: netlify(),
    publicDir: './public',
    outDir: './dist'
});