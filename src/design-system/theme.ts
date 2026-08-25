/**
 * BluePrintNZ Theme System
 * 
 * This file centralizes all design tokens for the application including:
 * - Color palette (limited to 5 core colors)
 * - Typography
 * - Spacing
 * - Breakpoints
 * - Shadows
 */

// Core color palette - Limited to 5 colors
export const palette = {
  // Primary brand color (light blue)
  primary: '#ffffff',
  
  // Secondary brand color (dark blue)
  secondary: '#ffffff',
  
  // Accent color for highlights and CTAs
  accent: '#ffffff',
  
  // Neutral color for backgrounds, text, and borders
  neutral: '#ffffff',
  
  // Semantic color for feedback states
  semantic: '#ffffff',
};

// Extended color variations based on the 5 core colors
export const colors = {
  // Primary color variations
  primary: {
    DEFAULT: palette.primary,
    light: lightenColor(palette.primary, 15),
    dark: darkenColor(palette.primary, 15),
  },
  
  // Secondary color variations
  secondary: {
    DEFAULT: palette.secondary,
    light: lightenColor(palette.secondary, 15),
    dark: darkenColor(palette.secondary, 15),
  },
  
  // Accent color variations
  accent: {
    DEFAULT: palette.accent,
    light: lightenColor(palette.accent, 15),
    dark: darkenColor(palette.accent, 15),
  },
  
  // Neutral color variations (grayscale)
  neutral: {
    100: palette.neutral,
    200: darkenColor(palette.neutral, 2),
    300: darkenColor(palette.neutral, 5),
    400: darkenColor(palette.neutral, 10),
    500: darkenColor(palette.neutral, 30),
    600: darkenColor(palette.neutral, 50),
    700: darkenColor(palette.neutral, 70),
    800: darkenColor(palette.neutral, 85),
    900: darkenColor(palette.neutral, 95),
  },
  
  // Semantic color variations
  semantic: {
    success: palette.semantic,
    warning: adjustHue(palette.semantic, 35),  // Amber/orange derived from semantic
    error: adjustHue(palette.semantic, 75),    // Red derived from semantic
    info: adjustHue(palette.semantic, -35),    // Blue derived from semantic
  },
};

// Typography scale
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, serif',
    mono: 'Menlo, Monaco, Consolas, monospace',
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Spacing system
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Shadow styles
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Z-index scale
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
};

// Helper functions for color manipulation
// These are simplified versions - in production you might use a library like chroma.js

// Lighten a hex color by percentage
function lightenColor(hex: string, percent: number): string {
  // This is a simplified implementation
  // In production, use a proper color manipulation library
  return hex;
}

// Darken a hex color by percentage
function darkenColor(hex: string, percent: number): string {
  // This is a simplified implementation
  // In production, use a proper color manipulation library
  return hex;
}

// Adjust the hue of a color (shift by degrees)
function adjustHue(hex: string, degrees: number): string {
  // This is a simplified implementation
  // In production, use a proper color manipulation library
  return hex;
}

// import { themeColors } from './xcolor';

// // Theme configuration
// export const themeConfig = {
//   // Default theme
//   defaultTheme: 'light',
  
//   // Theme colors
//   colors: themeColors,
  
//   // Font configuration
//   fonts: {
//     sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//     serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
//     mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
//   },
  
//   // Font sizes
//   fontSizes: {
//     xs: '0.75rem',
//     sm: '0.875rem',
//     base: '1rem',
//     lg: '1.125rem',
//     xl: '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '3.75rem',
//     '7xl': '4.5rem',
//     '8xl': '6rem',
//     '9xl': '8rem',
//   },
  
//   // Font weights
//   fontWeights: {
//     thin: '100',
//     extralight: '200',
//     light: '300',
//     normal: '400',
//     medium: '500',
//     semibold: '600',
//     bold: '700',
//     extrabold: '800',
//     black: '900',
//   },
  
//   // Line heights
//   lineHeights: {
//     none: '1',
//     tight: '1.25',
//     snug: '1.375',
//     normal: '1.5',
//     relaxed: '1.625',
//     loose: '2',
//   },
  
//   // Border radius
//   borderRadius: {
//     none: '0',
//     sm: '0.125rem',
//     DEFAULT: '0.25rem',
//     md: '0.375rem',
//     lg: '0.5rem',
//     xl: '0.75rem',
//     '2xl': '1rem',
//     '3xl': '1.5rem',
//     full: '9999px',
//   },
  
//   // Shadows
//   shadows: {
//     sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
//     DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//     md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//     lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//     xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//     '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//     inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
//     none: 'none',
//   },
  
//   // Transitions
//   transitions: {
//     DEFAULT: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
//     fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
//     slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
//   },
// };

// // Function to get theme value
// export const getThemeValue = (path: string, defaultValue: any = null): any => {
//   const keys = path.split('.');
//   let value = themeConfig;
  
//   for (const key of keys) {
//     if (value && typeof value === 'object' && key in value) {
//       value = value[key];
//     } else {
//       return defaultValue;
//     }
//   }
  
//   return value;
// };

//  ---------------------------

/**
 * This file centralizes all image size configurations for the application
 * organized by their usage context.
 */

// Image size configurations by group
// export const imageSizes = {
//   // Logo sizes
//   logo: {
//     default: {
//       height: {
//         mobile: '4.75rem', // Increased by 110% from 2.5rem
//         desktop: '5.3rem',  // Increased by 110% from 3rem
//       },
//       aspectRatio: 'auto',
//     },
//     small: {
//       height: {
//         mobile: '2rem',
//         desktop: '2.5rem',
//       },
//       aspectRatio: 'auto',
//     },
//     mini: {
//       height: {
//         mobile: '1.5rem',
//         desktop: '2rem',
//       },
//       aspectRatio: 'auto',
//     },
//   },
  
//   // Hero and banner images
//   hero: {
//     desktop: {
//       width: 1920,
//       height: 1080,
//       aspectRatio: '16/9',
//     },
//     tablet: {
//       width: 1024,
//       height: 576,
//       aspectRatio: '16/9',
//     },
//     mobile: {
//       width: 640,
//       height: 360,
//       aspectRatio: '16/9',
//     },
//   },
  
//   // Card and feature images
//   card: {
//     large: {
//       width: 600,
//       height: 400,
//       aspectRatio: '3/2',
//     },
//     medium: {
//       width: 400,
//       height: 267,
//       aspectRatio: '3/2',
//     },
//     small: {
//       width: 300,
//       height: 200,
//       aspectRatio: '3/2',
//     },
//   },
  
//   // Profile and avatar images
//   avatar: {
//     large: {
//       width: 128,
//       height: 128,
//       aspectRatio: '1/1',
//     },
//     medium: {
//       width: 64,
//       height: 64,
//       aspectRatio: '1/1',
//     },
//     small: {
//       width: 32,
//       height: 32,
//       aspectRatio: '1/1',
//     },
//   },
  
//   // Thumbnail images
//   thumbnail: {
//     large: {
//       width: 240,
//       height: 135,
//       aspectRatio: '16/9',
//     },
//     medium: {
//       width: 160,
//       height: 90,
//       aspectRatio: '16/9',
//     },
//     small: {
//       width: 80,
//       height: 45,
//       aspectRatio: '16/9',
//     },
//   },
  
//   // Icon images
//   icon: {
//     large: {
//       width: 48,
//       height: 48,
//       aspectRatio: '1/1',
//     },
//     medium: {
//       width: 32,
//       height: 32,
//       aspectRatio: '1/1',
//     },
//     small: {
//       width: 24,
//       height: 24,
//       aspectRatio: '1/1',
//     },
//     xsmall: {
//       width: 16,
//       height: 16,
//       aspectRatio: '1/1',
//     },
//   },
  
//   // Background images
//   background: {
//     fullscreen: {
//       width: 1920,
//       height: 1080,
//       aspectRatio: '16/9',
//     },
//     section: {
//       width: 1440,
//       height: 600,
//       aspectRatio: '12/5',
//     },
//   },
  
//   // Gallery images
//   gallery: {
//     landscape: {
//       width: 800,
//       height: 600,
//       aspectRatio: '4/3',
//     },
//     portrait: {
//       width: 600,
//       height: 800,
//       aspectRatio: '3/4',
//     },
//     square: {
//       width: 600,
//       height: 600,
//       aspectRatio: '1/1',
//     },
//   },
// };

// // Helper function to get image size by group and variant
// export function getImageSize(group: keyof typeof imageSizes, variant: string) {
//   if (imageSizes[group] && imageSizes[group][variant]) {
//     return imageSizes[group][variant];
//   }
  
//   // Return default size if not found
//   return {
//     width: 300,
//     height: 300,
//     aspectRatio: '1/1',
//   };
// }

// // Helper function to generate srcset for responsive images
// export function generateSrcSet(basePath: string, extension: string, sizes: { width: number }[]) {
//   return sizes
//     .map(size => `${basePath}-${size.width}w.${extension} ${size.width}w`)
//     .join(', ');
// }