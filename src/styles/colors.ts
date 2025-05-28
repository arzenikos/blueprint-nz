/**
 * Central color palette for BluePrintNZ website
 * All colors used throughout the site should reference this file
 */

export const colors = {
  // Primary brand colors
  primary: {
    DEFAULT: '#b9d6f2',
    light: '#d4e5f7',
    dark: '#8fb8e6',
    content: '#000f2e',
  },
  
  // Secondary/complementary colors
  complementary: {
    DEFAULT: '#000f2e',
    light: '#001a52',
    dark: '#00071a',
    content: '#ffffff',
  },
  
  // UI colors
  ui: {
    background: '#ffffff',
    foreground: '#333333',
    border: '#e2e8f0',
    focus: '#b9d6f2',
    muted: '#f1f5f9',
  },
  
  // Feedback colors
  feedback: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Grayscale
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
  
  // Special colors for the pixel ribbon
  ribbon: ['#b9d6f2', '#000f2e', '#b9d6f2', '#000f2e', '#b9d6f2'],
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
  // Primary colors
  '--color-primary': colors.primary.DEFAULT,
  '--color-primary-light': colors.primary.light,
  '--color-primary-dark': colors.primary.dark,
  '--color-primary-content': colors.primary.content,
  
  // Complementary colors
  '--color-complementary': colors.complementary.DEFAULT,
  '--color-complementary-light': colors.complementary.light,
  '--color-complementary-dark': colors.complementary.dark,
  '--color-complementary-content': colors.complementary.content,
  
  // UI colors
  '--color-background': colors.ui.background,
  '--color-foreground': colors.ui.foreground,
  '--color-border': colors.ui.border,
  '--color-focus': colors.ui.focus,
  '--color-muted': colors.ui.muted,
  
  // Feedback colors
  '--color-success': colors.feedback.success,
  '--color-warning': colors.feedback.warning,
  '--color-error': colors.feedback.error,
  '--color-info': colors.feedback.info,
  
  // Font settings
  '--font-sans': "'Inter Variable', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
};
