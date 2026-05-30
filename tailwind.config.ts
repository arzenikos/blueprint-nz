import type { Config } from 'tailwindcss';
// Update the import path below if your theme file is located elsewhere
import { colors, typography, spacing, borderRadius, shadows } from './src/styles/theme';
// If the file does not exist, create 'theme.ts' in 'src/styles' with the necessary exports.

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    spacing,
    borderRadius,
    boxShadow: shadows,
    extend: {},
  },
  plugins: [],
} satisfies Config;
