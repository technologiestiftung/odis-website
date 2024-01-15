import { z } from "astro:content";

export const collectionSchema = z.object({
  title: z.string(),
  metaDescription: z.string(),
  visible: z.boolean().default(true),
  date: z.coerce.date(),
  tags: z.array(z.string()),
});
