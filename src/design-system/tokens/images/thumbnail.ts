/**
 * This file centralizes all thumbnail size configurations for the application organized by their usage context.
 */

// Unused
export const thumbnailSizes = {
    large: {
      width: 240,
      height: 135,
      aspectRatio: '16/9',
    },
    medium: {
      width: 160,
      height: 90,
      aspectRatio: '16/9',
    },
    small: {
      width: 80,
      height: 45,
      aspectRatio: '16/9',
    },
  } as const;
  