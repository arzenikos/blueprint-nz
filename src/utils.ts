import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import type { BlobProps } from './types';

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
  return false;
}

/**
 * Generate a random integer between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random blob
 * @returns BlobProps
 */
export function generateBlob(): BlobProps {
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: '-',
    style: 'lowerCase',
  });

  return {
    parameters: {
      name,
      seed: randomInt(1, 1000),
      extraPoints: randomInt(3, 8),
      randomness: Math.random() * 10,
      size: randomInt(100, 400),
    },
  };
}

/**
 * Generate cache headers for Netlify Edge Functions
 * @param maxAge Max age in seconds
 * @returns Cache-Control header
 */
export function cacheHeaders(maxAge: number = 60): Record<string, string> {
  return {
    'Cache-Control': `public, max-age=${maxAge}, s-maxage=${maxAge * 2}, stale-while-revalidate=${maxAge * 4}`
  };
}
