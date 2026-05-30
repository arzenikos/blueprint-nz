// Imported by: components/about/ImageComparison.astro, components/about/MainContent.astro, components/common/Logo.astro, components/home/FoundationSection.astro, components/home/HeroSection.astro, components/home/InfoSection.astro, components/home/ServicesSection.astro, components/layout/Header.astro
/**
 * BluePrintNZ Image Size System
 * 
 * This file centralizes all image size configurations for the application
 * organized by their usage context.
 */

// Image size configurations by group
export const imageSizes = {
  // Logo sizes
  logo: {
    default: {
      height: {
        mobile: '4.75rem', // Increased by 110% from 2.5rem
        desktop: '5.3rem',  // Increased by 110% from 3rem
      },
      aspectRatio: 'auto',
    },
    small: {
      height: {
        mobile: '1.6rem',
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
  },
  
  // Hero and banner images
  hero: {
    desktop: {
      width: 1920,
      height: 1080,
      aspectRatio: '16/9',
    },
    tablet: {
      width: 1024,
      height: 576,
      aspectRatio: '16/9',
    },
    mobile: {
      width: 640,
      height: 360,
      aspectRatio: '16/9',
    },
  },
  
  // Card and feature images
  card: {
    large: {
      width: 600,
      height: 400,
      aspectRatio: '3/2',
    },
    medium: {
      width: 400,
      height: 267,
      aspectRatio: '3/2',
    },
    small: {
      width: 300,
      height: 200,
      aspectRatio: '3/2',
    },
  },
  
  // Profile and avatar images
  avatar: {
    large: {
      width: 128,
      height: 128,
      aspectRatio: '1/1',
    },
    medium: {
      width: 64,
      height: 64,
      aspectRatio: '1/1',
    },
    small: {
      width: 32,
      height: 32,
      aspectRatio: '1/1',
    },
  },
  
  // Thumbnail images
  thumbnail: {
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
  },
  
  // Icon images
  icon: {
    large: {
      width: 48,
      height: 48,
      aspectRatio: '1/1',
    },
    medium: {
      width: 32,
      height: 32,
      aspectRatio: '1/1',
    },
    small: {
      width: 24,
      height: 24,
      aspectRatio: '1/1',
    },
    xsmall: {
      width: 16,
      height: 16,
      aspectRatio: '1/1',
    },
  },
  
  // Background images
  background: {
    fullscreen: {
      width: 1920,
      height: 1080,
      aspectRatio: '16/9',
    },
    section: {
      width: 1440,
      height: 600,
      aspectRatio: '12/5',
    },
  },
  
  // Gallery images
  gallery: {
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
  },
};

// Helper function to get image size by group and variant
export function getImageSize(group: keyof typeof imageSizes, variant: string) {
  if (imageSizes[group] && imageSizes[group][variant]) {
    return imageSizes[group][variant];
  }
  
  // Return default size if not found
  return {
    width: 300,
    height: 300,
    aspectRatio: '1/1',
  };
}

// Helper function to generate srcset for responsive images
export function generateSrcSet(basePath: string, extension: string, sizes: { width: number }[]) {
  return sizes
    .map(size => `${basePath}-${size.width}w.${extension} ${size.width}w`)
    .join(', ');
}
