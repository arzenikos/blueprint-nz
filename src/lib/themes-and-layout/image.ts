// Image size configurations for consistent image sizing throughout the application

export const imageSizes = {
  // Logo sizes
  logo: {
    default: {
      height: {
        mobile: '2.5rem',
        desktop: '3rem',
        large: '6.1rem',
      },
      width: 'auto',
    },
    small: {
      height: '2rem',
      width: 'auto',
    },
  },
  
  // Hero image sizes
  hero: {
    height: {
      mobile: '300px',
      tablet: '400px',
      desktop: '500px',
    },
    width: '100%',
  },
  
  // Card image sizes
  card: {
    thumbnail: {
      height: '200px',
      width: '100%',
      aspectRatio: '16/9',
    },
    icon: {
      height: '48px',
      width: '48px',
    },
  },
  
  // Avatar sizes
  avatar: {
    small: {
      height: '32px',
      width: '32px',
    },
    medium: {
      height: '48px',
      width: '48px',
    },
    large: {
      height: '64px',
      width: '64px',
    },
  },
  
  // Feature image sizes
  feature: {
    height: {
      mobile: '250px',
      tablet: '350px',
      desktop: '450px',
    },
    width: '100%',
  },
};

// Image aspect ratios
export const aspectRatios = {
  square: '1/1',
  portrait: '3/4',
  landscape: '4/3',
  widescreen: '16/9',
  ultrawide: '21/9',
  panoramic: '3/1',
};

// Image quality settings for optimization
export const imageQuality = {
  low: 60,
  medium: 75,
  high: 85,
  max: 100,
};
