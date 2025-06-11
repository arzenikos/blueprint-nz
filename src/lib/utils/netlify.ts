// Simple utility to check if uploads are disabled
export function uploadDisabled(): boolean {
  return true; // Disable uploads by default
}

// Get Netlify context
export function getNetlifyContext() {
  return {
    context: process.env.CONTEXT || 'development',
    url: process.env.URL || 'http://localhost:4321',
    branch: process.env.BRANCH || 'main',
  };
}
