import { colors } from './src/lib/theme/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Add our color palette to Tailwind
        primary: {
          DEFAULT: colors.primary.DEFAULT,
          light: colors.primary.light,
          dark: colors.primary.dark,
          content: colors.primary.content,
        },
        secondary: {
          DEFAULT: colors.secondary.DEFAULT,
          light: colors.secondary.light,
          dark: colors.secondary.dark,
          content: colors.secondary.content,
        },
        accent: {
          DEFAULT: colors.accent.DEFAULT,
          light: colors.accent.light,
          dark: colors.accent.dark,
          content: colors.accent.content,
        },
        success: colors.feedback.success,
        warning: colors.feedback.warning,
        error: colors.feedback.error,
        info: colors.feedback.info,
      },
      fontFamily: {
        sans: ['Inter Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
