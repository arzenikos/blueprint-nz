// Imported by: components/shared/PixelRibbon.astro,
// components/ui/ColorPalette.astro,
// pages/design-system.astro
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
