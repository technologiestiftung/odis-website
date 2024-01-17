import { z } from "astro:content";

export const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  headerImage: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(),
});

export const collectionSchema = pageSchema.merge(z.object({
  visible: z.boolean().default(true),
  date: z.coerce.date(),
  tags: z.array(z.string()),
}));

