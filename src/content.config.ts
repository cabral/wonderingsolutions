import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
    // Long notes: show a contents list of the note's sections.
    toc: z.boolean().default(false),
    // Share card: a 1200x630 PNG under public/og/, and its alt text.
    // Without one, the note uses the site's default card.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { notes };
