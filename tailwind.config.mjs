/** @type {import('tailwindcss').Config} */
import { colors, typography, spacing, borderRadius, shadows } from './src/styles/theme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    spacing,
    borderRadius,
    boxShadow: shadows,
    extend: {},
  },
  plugins: [],
};
