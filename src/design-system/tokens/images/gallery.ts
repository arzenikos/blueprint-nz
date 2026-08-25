/**
 * This file centralizes all gallery grid size configurations for the application organized by their usage context.
 */

// Unused
export const gallerySizes = {
    landscape: {
      width: 800,
      height: 600,
      aspectRatio: '4/3',
    },
    portrait: {
      width: 600,
      height: 800,
      aspectRatio: '3/4',
    },
    square: {
      width: 600,
      height: 600,
      aspectRatio: '1/1',
    },
  } as const;
  