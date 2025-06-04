/**
 * Central color palette for BluePrintNZ website
 * All colors used throughout the site should reference this file
 * 
 * 5-Color Palette System:
 * 1. primary - Main brand color
 * 2. secondary - Secondary brand color
 * 3. accent - Accent color for highlights and CTAs
 * 4. neutral - For backgrounds, text, and borders
 * 5. semantic - For feedback states (success, error, etc.)
 */

// Theme definitions
export const themes = {
  light: {
    primary: '#b9d6f2',    // Light blue - main brand color
    secondary: '#000f2e',  // Dark blue - secondary brand color
    accent: '#3b82f6',     // Bright blue - for highlights and CTAs
    neutral: '#ffffff',    // White - for backgrounds
    semantic: '#10b981',   // Green - base for semantic colors
    background: '#ffffff', // White background
    foreground: '#333333', // Dark text
    border: '#e2e8f0',     // Light border
    muted: '#f1f5f9',      // Light muted background
    card: '#ffffff',       // White card background
    cardBorder: '#e2e8f0', // Light card border
  },
  dark: {
    primary: '#3b82f6',    // Bright blue - main brand color in dark mode
    secondary: '#c0c8d8',  // Light blue-gray - secondary color in dark mode
    accent: '#60a5fa',     // Lighter blue - accent in dark mode
    neutral: '#1f2937',    // Dark gray - neutral in dark mode
    semantic: '#10b981',   // Green - semantic stays the same
    background: '#111827', // Dark background
    foreground: '#e5e7eb', // Light text
    border: '#374151',     // Dark border
    muted: '#1f2937',      // Dark muted background
    card: '#1f2937',       // Dark card background
    cardBorder: '#374151', // Dark card border
  }
};

// Default theme (light)
const palette = themes.light;

// Extended color system based on the 5-color palette
export const colors = {
  // Primary color and variations
  primary: {
    DEFAULT: palette.primary,
    light: '#d4e5f7',   // Lightened primary
    dark: '#8fb8e6',    // Darkened primary
    content: palette.secondary, // Text on primary background
  },
  
  // Secondary color and variations
  secondary: {
    DEFAULT: palette.secondary,
    light: '#001a52',   // Lightened secondary
    dark: '#00071a',    // Darkened secondary
    content: '#ffffff', // Text on secondary background
  },
  
  // Accent color and variations
  accent: {
    DEFAULT: palette.accent,
    light: '#60a5fa',   // Lightened accent
    dark: '#2563eb',    // Darkened accent
    content: '#ffffff', // Text on accent background
  },
  
  // UI colors based on neutral
  ui: {
    background: palette.background,
    foreground: palette.foreground,
    border: palette.border,
    focus: palette.primary,
    muted: palette.muted,
  },
  
  // Semantic/feedback colors
  feedback: {
    success: palette.semantic,  // Green
    warning: '#f59e0b',         // Amber
    error: '#ef4444',           // Red
    info: palette.accent,       // Blue
  },
  
  // Grayscale derived from neutral
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Special colors for the pixel ribbon - using primary and secondary
  ribbon: [palette.primary, palette.secondary, palette.primary, palette.secondary, palette.primary],
};

/**
 * Helper function to get a color from the palette
 * @param path Dot notation path to the color (e.g., "primary.light")
 * @returns The color value or undefined if not found
 */
export function getColor(path: string): string | undefined {
  const parts = path.split('.');
  let result: any = colors;
  
  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = result[part];
    } else {
      return undefined;
    }
  }
  
  return typeof result === 'string' ? result : undefined;
}

/**
 * CSS variables for the theme
 * These will be injected into the :root element
 */
export const cssVariables = {
  // Core palette
  '--color-primary': palette.primary,
  '--color-secondary': palette.secondary,
  '--color-accent': palette.accent,
  '--color-neutral': palette.neutral,
  '--color-semantic': palette.semantic,
  
  // Primary colors
  '--color-primary-light': colors.primary.light,
  '--color-primary-dark': colors.primary.dark,
  '--color-primary-content': colors.primary.content,
  
  // Secondary colors
  '--color-secondary-light': colors.secondary.light,
  '--color-secondary-dark': colors.secondary.dark,
  '--color-secondary-content': colors.secondary.content,
  
  // Accent colors
  '--color-accent-light': colors.accent.light,
  '--color-accent-dark': colors.accent.dark,
  '--color-accent-content': colors.accent.content,
  
  // UI colors
  '--color-background': palette.background,
  '--color-foreground': palette.foreground,
  '--color-border': palette.border,
  '--color-focus': palette.primary,
  '--color-muted': palette.muted,
  '--color-card': palette.card,
  '--color-card-border': palette.cardBorder,
  
  // Feedback colors
  '--color-success': colors.feedback.success,
  '--color-warning': colors.feedback.warning,
  '--color-error': colors.feedback.error,
  '--color-info': colors.feedback.info,
  
  // Font settings
  '--font-sans': "'Inter Variable', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
};
