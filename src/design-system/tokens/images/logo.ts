/**
 * This file centralizes all image size configurations for the application organized by their usage context.
 */

// Unused
export const logoSizes = {
    default: {
      height: {
        mobile: '4.75rem',
        desktop: '5.3rem',
      },
      aspectRatio: 'auto',
    },
    small: {
      height: {
        mobile: '2rem',
        desktop: '2.5rem',
      },
      aspectRatio: 'auto',
    },
    mini: {
      height: {
        mobile: '1.5rem',
        desktop: '2rem',
      },
      aspectRatio: 'auto',
    },
  } as const;
  