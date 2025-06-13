// Not referenced by any file
import { defineCollection, z } from 'astro:content';

// Define a schema for each collection
const aboutCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    // Define your schema here
    title: z.string(),
    description: z.string().optional(),
  }),
});

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Define your schema here
    title: z.string(),
    description: z.string().optional(),
  }),
});

const sharedCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Define your schema here
    site: z.object({
      title: z.string(),
      description: z.string().optional(),
    }).optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'about': aboutCollection,
  'home': homeCollection,
  'shared': sharedCollection,
};
