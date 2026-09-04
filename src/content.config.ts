import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const patientArticles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles/patient' }),
  schema: z.object({
    title: z.string(),
    heading: z.string().optional(),
    description: z.string().optional(),
    illustration: z.string().optional(),
  }),
});

export const collections = {
  patientArticles,
};
