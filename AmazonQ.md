# Project Conflict Resolution

This document outlines the changes made to resolve package and module conflicts in the Astro project.

## Issues Identified and Fixed

1. **Tailwind Integration Conflict**
   - Replaced `@tailwindcss/vite` with the official `@astrojs/tailwind` integration
   - Updated Tailwind from v4.0.14 (beta) to stable v3.4.1
   - Fixed the Tailwind configuration file to properly satisfy TypeScript types

2. **Angular/Astro Conflict**
   - Removed `angular.json` as it was causing confusion with the Astro project structure
   - Ensured all configurations are Astro-specific

3. **Configuration Updates**
   - Updated `astro.config.mjs` to use the proper Tailwind integration
   - Removed Windows-specific path in package.json scripts

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   
   Or with Netlify CLI:
   ```bash
   netlify dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```
