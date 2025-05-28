// src/content.config.ts
import { defineCollection, z } from 'astro:content';

// Define schemas for each collection
const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      title: z.string(),
      slogan: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
    }),
    infoSection: z.object({
      title: z.string(),
      description: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
    }),
    servicesSection: z.object({
      title: z.string(),
      services: z.array(z.object({
        title: z.string(),
        image: z.string(),
        alt: z.string(),
        link: z.string().optional(),
      })),
    }),
  }),
});

const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    mainContent: z.string(),
    imageComparison: z.object({
      title: z.string(),
      description: z.string(),
      devModeWarning: z.string(),
    }),
  }),
});

const sharedCollection = defineCollection({
  type: 'data',
  schema: z.object({
    site: z.object({
      title: z.string(),
      description: z.string(),
    }),
    navigation: z.object({
      items: z.array(z.object({
        text: z.string(),
        href: z.string(),
      })),
    }),
    footer: z.object({
      newsletterSection: z.object({
        title: z.string(),
        description: z.string(),
        placeholder: z.string(),
        buttonText: z.string(),
      }),
      sections: z.array(z.object({
        title: z.string(),
        links: z.array(z.object({
          text: z.string(),
          url: z.string(),
        })),
      })),
      copyright: z.string(),
      socialLinks: z.array(z.object({
        platform: z.string(),
        url: z.string(),
        ariaLabel: z.string(),
      })),
    }),
  }),
});

// Export collections
export const collections = {
  'home': homeCollection,
  'about': aboutCollection,
  'shared': sharedCollection,
};
