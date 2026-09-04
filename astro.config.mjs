import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
// import tailwind from "@astrojs/tailwind";
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
    integrations: [react(),
        icon(),
        // tailwind()
    ],
    devToolbar: {
        enabled: false
    },
    adapter: netlify(),
    publicDir: './public',
    outDir: './dist',
    redirects: {
        '/stage-0/what-you-need-to-know-early': '/patient/stage-0/what-you-need-to-know-early',
        '/stage-0/small-choices-big-impact': '/patient/stage-0/small-choices-big-impact',
        '/stage-0/should-i-get-screened': '/patient/stage-0/should-i-get-screened',
        '/stage-1/understanding-your-diagnosis': '/patient/stage-1/understanding-your-diagnosis',
        '/stage-1/doctor-time-making-every-visit-count': '/patient/stage-1/doctor-time-making-every-visit-count',
        '/stage-1/navigating-your-options': '/patient/stage-1/navigating-your-options',
        '/stage-2/staying-grounded-through-it-all': '/patient/stage-2/staying-grounded-through-it-all',
        '/stage-2/body-care-that-builds-you-up': '/patient/stage-2/body-care-that-builds-you-up',
        '/stage-2/your-body-your-needs': '/patient/stage-2/your-body-your-needs',
        '/stage-3/what-to-expect-now': '/patient/stage-3/what-to-expect-now',
        '/stage-3/caring-for-a-tired-body': '/patient/stage-3/caring-for-a-tired-body',
        '/stage-3/finding-your-ground': '/patient/stage-3/finding-your-ground',
        '/stage-4/the-care-that-fits-you': '/patient/stage-4/the-care-that-fits-you',
        '/stage-4/support-for-the-day-to-day': '/patient/stage-4/support-for-the-day-to-day',
        '/stage-4/honouring-your-life': '/patient/stage-4/honouring-your-life',
    }
});