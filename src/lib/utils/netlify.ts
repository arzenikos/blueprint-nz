/**
 * Determine the current Netlify context
 * @returns 'dev' | 'preview' | 'prod' | 'unknown'
 */
export function getNetlifyContext(): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'dev';
    } else if (hostname.includes('netlify.app')) {
      return 'preview';
    } else {
      return 'prod';
    }
  }
  
  // Server-side detection
  const context = process.env.CONTEXT || '';
  
  if (context === 'production') {
    return 'prod';
  } else if (context === 'deploy-preview' || context === 'branch-deploy') {
    return 'preview';
  } else if (context === 'dev' || process.env.NETLIFY_LOCAL === 'true') {
    return 'dev';
  }
  
  return 'unknown';
}

/**
 * Check if uploads are disabled
 * @returns boolean
 */
export function uploadDisabled(): boolean {
  return import.meta.env.PUBLIC_DISABLE_UPLOADS?.toLowerCase() === 'true';
}

/**
 * Generate cache headers for Netlify Edge Functions
 * @param maxAgeDays Max age in days
 * @param cacheTags Optional cache tags
 * @returns Cache-Control header
 */
export function cacheHeaders(maxAgeDays = 365, cacheTags?: string[]): Record<string, string> {
  // As far as the browser is concerned, it must revalidate on every request.
  // However, Netlify CDN is told to keep the content cached for up to maxAgeDays (note: new deployment bust the cache by default).
  // We're also setting cache tags to be able to later purge via API
  const headers = {
    'Cache-Control': 'public, max-age=0, must-revalidate', // Tell browsers to always revalidate
    'Netlify-CDN-Cache-Control': `public, max-age=${maxAgeDays * 86_400}, must-revalidate` // Tells Netlify CDN the max allowed cache duration
  };
  if (cacheTags?.length > 0) headers['Cache-Tag'] = cacheTags.join(',');
  return headers;
}
