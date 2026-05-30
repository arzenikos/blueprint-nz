// Not imported by any file
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { tags } = await request.json();
        
        if (!tags || !Array.isArray(tags)) {
            return new Response(
                JSON.stringify({
                    error: 'Invalid tags parameter'
                }),
                { status: 400 }
            );
        }
        
        // In a real application, this would call the Netlify Purge API
        // https://docs.netlify.com/api/get-started/#purge-cache
        
        console.log(`Purging tags: ${tags.join(', ')}`);
        
        return new Response(
            JSON.stringify({
                message: `Purged tags: ${tags.join(', ')}`
            })
        );
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                error: 'Failed to process request'
            }),
            { status: 500 }
        );
    }
};
