// Unused
import type { APIRoute } from 'astro';
import { getStore } from '@netlify/blobs';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
    try {
        const key = params.key;
        if (!key) {
            return new Response(
                JSON.stringify({
                    error: 'Missing key parameter'
                }),
                { status: 400 }
            );
        }

        const blobStore = getStore({ name: 'shapes', consistency: 'strong' });
        const data = await blobStore.getJSON(key);
        
        return new Response(
            JSON.stringify(data)
        );
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                error: 'Failed fetching blob'
            }),
            { status: 404 }
        );
    }
};
