import { z, type SchemaContext } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const veranstaltungenSchema = (ctx: SchemaContext) =>
  collectionSchema(ctx).merge(
    z.object({
      tags: z.array(z.string()).default(["event"]),
      time: z.string(),
      web: z.string().url().optional().nullable(),
      mail: z.string().email().optional().nullable(),
      adresse: z.string(),
    }),
  );

export const veranstaltungenOverviewSchema = pageSchema;
