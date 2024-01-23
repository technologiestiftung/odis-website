import { z, type ImageFunction } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const aktuellesSchema = ({ image }: { image: ImageFunction }) =>
  collectionSchema({ image }).merge(
    z.object({
      tags: z.array(z.string()).default(["news"]),
      urlText: z.string().default("Zum Blogbeitrag"),
      author: z.string().optional(),
      readingTime: z.union([z.string(), z.number()]).optional(),
      link: z.string().optional(),
    }),
  );

export const aktuellesOverviewSchema = pageSchema;
