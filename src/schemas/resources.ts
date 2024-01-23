import { z, type ImageFunction } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const resourcesSchema = ({ image }: { image: ImageFunction }) =>
  collectionSchema({ image }).merge(
    z.object({
      date: z.date().default(new Date()),
      tags: z.array(z.string()).default(["resource"]),
      question: z.string().optional().nullable(),
      media: z.object({
        thumbnail: image(),
        type: z.enum(["video", "pdf", "blog", "table", "project", "other"]).default("other"),
        readingOrPlayingTime: z.string().optional().nullable(),
        size: z.string().optional().nullable(),
        link: z.string().optional().nullable(),
      })
    }),
  );

export const resourcesOverviewSchema = pageSchema;
