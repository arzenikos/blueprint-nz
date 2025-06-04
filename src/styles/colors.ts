// Color palette system for BluePrintNZ
export const palette = {
  primary: '#b9d6f2',    // Main brand color (light blue)
  secondary: '#000f2e',  // Secondary brand color (dark blue)
  accent: '#3b82f6',     // Accent color for highlights and CTAs
  neutral: '#ffffff',    // For backgrounds, text, and borders
  semantic: '#10b981',   // Base for feedback states
};

// Extended color variations
export const colorVariants = {
  primary: {
    light: '#dbeafe',
    DEFAULT: palette.primary,
    dark: '#93c5fd',
  },
  secondary: {
    light: '#1e3a8a',
    DEFAULT: palette.secondary,
    dark: '#000c24',
  },
  accent: {
    light: '#60a5fa',
    DEFAULT: palette.accent,
    dark: '#2563eb',
  },
  neutral: {
    100: '#ffffff',
    200: '#f9fafb',
    300: '#f3f4f6',
    400: '#e5e7eb',
    500: '#d1d5db',
    600: '#9ca3af',
    700: '#6b7280',
    800: '#374151',
    900: '#1f2937',
  },
  semantic: {
    success: palette.semantic,
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#0ea5e9',
  },
};
