// // Referenced by: components/ui/ColorPalette.astro, lib/themes-and-layout/theme.ts, pages/design-system.astro
// // Color system for the application

// // Main color palette
// export const palette = {
//   // Primary colors
//   primary: {
//     50: '#f0f9ff',
//     100: '#e0f2fe',
//     200: '#b9d6f2',
//     300: '#7dd3fc',
//     400: '#38bdf8',
//     500: '#0ea5e9',
//     600: '#0284c7',
//     700: '#0369a1',
//     800: '#075985',
//     900: '#0c4a6e',
//     950: '#082f49',
//   },
  
//   // Secondary colors
//   secondary: {
//     50: '#f8fafc',
//     100: '#f1f5f9',
//     200: '#e2e8f0',
//     300: '#cbd5e1',
//     400: '#94a3b8',
//     500: '#64748b',
//     600: '#475569',
//     700: '#334155',
//     800: '#1e293b',
//     900: '#0f172a',
//     950: '#000f2e',
//   },
  
//   // Accent colors
//   accent: {
//     50: '#eff6ff',
//     100: '#dbeafe',
//     200: '#bfdbfe',
//     300: '#93c5fd',
//     400: '#60a5fa',
//     500: '#3b82f6',
//     600: '#2563eb',
//     700: '#1d4ed8',
//     800: '#1e40af',
//     900: '#1e3a8a',
//     950: '#172554',
//   },
  
//   // Neutral colors
//   neutral: {
//     50: '#fafafa',
//     100: '#f5f5f5',
//     200: '#e5e5e5',
//     300: '#d4d4d4',
//     400: '#a3a3a3',
//     500: '#737373',
//     600: '#525252',
//     700: '#404040',
//     800: '#262626',
//     900: '#171717',
//     950: '#0a0a0a',
//   },
  
//   // Semantic colors
//   success: {
//     50: '#ecfdf5',
//     100: '#d1fae5',
//     200: '#a7f3d0',
//     300: '#6ee7b7',
//     400: '#34d399',
//     500: '#10b981',
//     600: '#059669',
//     700: '#047857',
//     800: '#065f46',
//     900: '#064e3b',
//     950: '#022c22',
//   },
  
//   warning: {
//     50: '#fffbeb',
//     100: '#fef3c7',
//     200: '#fde68a',
//     300: '#fcd34d',
//     400: '#fbbf24',
//     500: '#f59e0b',
//     600: '#d97706',
//     700: '#b45309',
//     800: '#92400e',
//     900: '#78350f',
//     950: '#451a03',
//   },
  
//   error: {
//     50: '#fef2f2',
//     100: '#fee2e2',
//     200: '#fecaca',
//     300: '#fca5a5',
//     400: '#f87171',
//     500: '#ef4444',
//     600: '#dc2626',
//     700: '#b91c1c',
//     800: '#991b1b',
//     900: '#7f1d1d',
//     950: '#450a0a',
//   },
  
//   info: {
//     50: '#f0f9ff',
//     100: '#e0f2fe',
//     200: '#bae6fd',
//     300: '#7dd3fc',
//     400: '#38bdf8',
//     500: '#0ea5e9',
//     600: '#0284c7',
//     700: '#0369a1',
//     800: '#075985',
//     900: '#0c4a6e',
//     950: '#082f49',
//   },
// };

// // Theme colors (used in the application)
// export const themeColors = {
//   light: {
//     background: '#ffffff',
//     foreground: palette.secondary[900],
//     primary: palette.primary[200],
//     secondary: palette.secondary[950],
//     accent: palette.accent[500],
//     muted: palette.neutral[200],
//     border: palette.neutral[300],
//   },
//   dark: {
//     background: palette.secondary[900],
//     foreground: '#ffffff',
//     primary: palette.primary[200],
//     secondary: palette.secondary[100],
//     accent: palette.accent[400],
//     muted: palette.neutral[800],
//     border: palette.neutral[700],
//   },
// };

// // Function to get a color from the palette
// export const getColor = (color: string, shade: number = 500): string => {
//   const [colorName, shadeValue] = color.split('-');
//   const shadeToUse = shadeValue ? parseInt(shadeValue) : shade;
  
//   if (colorName in palette && shadeToUse in palette[colorName]) {
//     return palette[colorName][shadeToUse];
//   }
  
//   return '#000000'; // Default to black if color not found
// };
