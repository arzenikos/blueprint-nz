/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
          content: 'var(--color-primary-content)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
          content: 'var(--color-secondary-content)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
          content: 'var(--color-accent-content)',
        },
        neutral: 'var(--color-neutral)',
        semantic: 'var(--color-semantic)',
      },
      backgroundColor: {
        base: 'var(--color-background)',
        card: 'var(--color-card)',
      },
      textColor: {
        base: 'var(--color-foreground)',
      },
      borderColor: {
        base: 'var(--color-border)',
        card: 'var(--color-card-border)',
      },
    },
  },
  plugins: [],
};
