/**
 * BluePrintNZ Spacing System
 * 
 * This file centralizes all spacing configurations for the application
 * including margins, paddings, and gaps.
 */

// Base spacing unit (in rem)
const baseUnit = 0.25;

// Spacing scale
export const spacing = {
  // Named spacing values
  none: '0',
  xs: `${baseUnit}rem`,       // 0.25rem (4px)
  sm: `${baseUnit * 2}rem`,   // 0.5rem (8px)
  md: `${baseUnit * 4}rem`,   // 1rem (16px)
  lg: `${baseUnit * 6}rem`,   // 1.5rem (24px)
  xl: `${baseUnit * 8}rem`,   // 2rem (32px)
  '2xl': `${baseUnit * 12}rem`, // 3rem (48px)
  '3xl': `${baseUnit * 16}rem`, // 4rem (64px)
  '4xl': `${baseUnit * 20}rem`, // 5rem (80px)
  '5xl': `${baseUnit * 24}rem`, // 6rem (96px)
  
  // Numeric scale (matches Tailwind's default spacing scale)
  0: '0',
  0.5: `${baseUnit / 2}rem`,  // 0.125rem (2px)
  1: `${baseUnit}rem`,        // 0.25rem (4px)
  1.5: `${baseUnit * 1.5}rem`, // 0.375rem (6px)
  2: `${baseUnit * 2}rem`,    // 0.5rem (8px)
  2.5: `${baseUnit * 2.5}rem`, // 0.625rem (10px)
  3: `${baseUnit * 3}rem`,    // 0.75rem (12px)
  3.5: `${baseUnit * 3.5}rem`, // 0.875rem (14px)
  4: `${baseUnit * 4}rem`,    // 1rem (16px)
  5: `${baseUnit * 5}rem`,    // 1.25rem (20px)
  6: `${baseUnit * 6}rem`,    // 1.5rem (24px)
  7: `${baseUnit * 7}rem`,    // 1.75rem (28px)
  8: `${baseUnit * 8}rem`,    // 2rem (32px)
  9: `${baseUnit * 9}rem`,    // 2.25rem (36px)
  10: `${baseUnit * 10}rem`,  // 2.5rem (40px)
  11: `${baseUnit * 11}rem`,  // 2.75rem (44px)
  12: `${baseUnit * 12}rem`,  // 3rem (48px)
  14: `${baseUnit * 14}rem`,  // 3.5rem (56px)
  16: `${baseUnit * 16}rem`,  // 4rem (64px)
  20: `${baseUnit * 20}rem`,  // 5rem (80px)
  24: `${baseUnit * 24}rem`,  // 6rem (96px)
  28: `${baseUnit * 28}rem`,  // 7rem (112px)
  32: `${baseUnit * 32}rem`,  // 8rem (128px)
  36: `${baseUnit * 36}rem`,  // 9rem (144px)
  40: `${baseUnit * 40}rem`,  // 10rem (160px)
  44: `${baseUnit * 44}rem`,  // 11rem (176px)
  48: `${baseUnit * 48}rem`,  // 12rem (192px)
  52: `${baseUnit * 52}rem`,  // 13rem (208px)
  56: `${baseUnit * 56}rem`,  // 14rem (224px)
  60: `${baseUnit * 60}rem`,  // 15rem (240px)
  64: `${baseUnit * 64}rem`,  // 16rem (256px)
  72: `${baseUnit * 72}rem`,  // 18rem (288px)
  80: `${baseUnit * 80}rem`,  // 20rem (320px)
  96: `${baseUnit * 96}rem`,  // 24rem (384px)
};

// Component-specific spacing
export const componentSpacing = {
  // Header component
  header: {
    height: spacing[16],
    padding: {
      x: {
        mobile: spacing[4],
        tablet: spacing[6],
        desktop: spacing[8],
      },
      y: spacing[4],
    },
    logo: {
      margin: {
        right: spacing[4],
      }
    },
    nav: {
      margin: {
        left: spacing[8],
      },
      item: {
        margin: {
          right: spacing[4],
        }
      }
    }
  },
  
  // Footer component
  footer: {
    padding: {
      x: {
        mobile: spacing[4],
        tablet: spacing[6],
        desktop: spacing[8],
      },
      y: spacing[8],
    },
    margin: {
      top: spacing[16],
    },
    section: {
      margin: {
        bottom: spacing[8],
      }
    },
    divider: {
      margin: {
        y: spacing[5],
      }
    }
  },
  
  // Card component
  card: {
    padding: {
      mobile: spacing[4],
      desktop: spacing[6],
    },
    margin: {
      bottom: spacing[6],
    },
    gap: spacing[4],
  },
  
  // Section component
  section: {
    padding: {
      y: {
        mobile: spacing[8],
        desktop: spacing[12],
      },
      x: {
        mobile: spacing[4],
        desktop: spacing[6],
      }
    },
    margin: {
      bottom: {
        mobile: spacing[8],
        desktop: spacing[12],
      }
    }
  },
  
  // Form elements
  form: {
    gap: spacing[4],
    field: {
      margin: {
        bottom: spacing[4],
      }
    },
    label: {
      margin: {
        bottom: spacing[1],
      }
    }
  },
  
  // Button component
  button: {
    padding: {
      small: `${spacing[1]} ${spacing[2]}`,
      medium: `${spacing[2]} ${spacing[4]}`,
      large: `${spacing[3]} ${spacing[6]}`,
    },
    margin: {
      right: spacing[2],
    }
  },
  
  // Chat component
  chat: {
    margin: {
      bottom: spacing[2],
    },
    padding: {
      container: spacing[4],
      message: spacing[3],
    },
    gap: spacing[3],
  }
};

// Helper function to get spacing value
export function getSpacing(key: keyof typeof spacing | number): string {
  if (typeof key === 'number' && key in spacing) {
    return spacing[key];
  } else if (typeof key === 'string' && key in spacing) {
    return spacing[key as keyof typeof spacing];
  }
  
  // Return default spacing if not found
  return spacing.md;
}

// Helper function to get component-specific spacing
export function getComponentSpacing(
  component: keyof typeof componentSpacing,
  property: string,
  variant?: string
): string {
  const componentConfig = componentSpacing[component];
  
  if (!componentConfig) {
    return spacing.md;
  }
  
  // Navigate through the nested properties
  const properties = property.split('.');
  let value = componentConfig;
  
  for (const prop of properties) {
    if (value && prop in value) {
      value = value[prop];
    } else {
      return spacing.md;
    }
  }
  
  // Handle variant if provided
  if (variant && typeof value === 'object' && variant in value) {
    return value[variant];
  }
  
  return typeof value === 'string' ? value : spacing.md;
}
