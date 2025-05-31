/**
 * Theme utility functions for working with the color system
 */

import { colors } from './colors';

/**
 * Get a theme color by its path
 * @param path Path to the color (e.g., "primary.light")
 * @returns The color value or a fallback
 */
export function getThemeColor(path: string, fallback: string = '#000000'): string {
  const parts = path.split('.');
  let result: any = colors;
  
  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = result[part];
    } else {
      return fallback;
    }
  }
  
  return typeof result === 'string' ? result : fallback;
}

/**
 * Generate CSS variables for the theme
 * @returns Object with CSS variable definitions
 */
export function generateThemeVariables(): Record<string, string> {
  return {
    // Core palette
    '--color-primary': colors.primary.DEFAULT,
    '--color-secondary': colors.secondary.DEFAULT,
    '--color-accent': colors.accent.DEFAULT,
    '--color-neutral': colors.ui.background,
    '--color-semantic': colors.feedback.success,
    
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
  };
}

/**
 * Apply a theme to the document
 * @param theme Theme name or object with color overrides
 */
export function applyTheme(theme: string | Record<string, string>): void {
  const variables = generateThemeVariables();
  
  // Apply theme variables to :root
  Object.entries(variables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

/**
 * Create a custom theme by overriding specific colors
 * @param overrides Object with color overrides
 * @returns Complete theme object
 */
export function createTheme(overrides: Record<string, string>): Record<string, string> {
  const baseTheme = generateThemeVariables();
  return { ...baseTheme, ...overrides };
}
