import { colors } from './src/styles/colors';

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
        complementary: {
          DEFAULT: colors.complementary.DEFAULT,
          light: colors.complementary.light,
          dark: colors.complementary.dark,
          content: colors.complementary.content,
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
