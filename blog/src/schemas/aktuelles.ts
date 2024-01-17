import { z } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const aktuellesSchema = collectionSchema.merge(
  z.object({
    tags: z.array(z.string()).default(["news"]),
    urlText: z.string().default("Zum Blogbeitrag"),
    author: z.string().optional(),
    heroImagePath: z.string().optional(),
    heroImageAltText: z.string().optional(),
    readingTime: z.union([z.string(), z.number()]).optional(),
    link: z.string().optional(),
  }),
);

export const aktuellesOverviewSchema = pageSchema
