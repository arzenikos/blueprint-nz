import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(), 
        tailwind(),
        icon()
    ],
    devToolbar: {
        enabled: false
    },
    adapter: netlify()
});