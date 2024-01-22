import { z, type SchemaContext } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const projekteSchema = (ctx: SchemaContext) =>
  collectionSchema(ctx).merge(
    z.object({
      tags: z.array(z.string()).default(["projekte"]),
      blogLinkTitle: z.string().optional().nullable(),
      blogLink: z.string().optional().nullable(),
      finishDate: z.coerce.date().optional(),
      heroImage: ctx.image().optional(),
      mobileImage: ctx.image().optional(),
      indexImage: ctx.image().optional(),
      showImageInMockup: z.boolean().default(true),
      projectUrlWithoutProtocol: z.string().optional(),
      datasetDescription: z.string().optional(),
      datasetLinkText: z.string().optional(),
      datasetLink: z.string().optional(),
      gitHubLink: z.string().optional(),
      status: z.string().optional(),
      period: z.string().optional(),
      datasets: z
        .array(
          z.object({
            linkText: z.string(),
            link: z.string().url(),
          }),
        )
        .optional(),
      partners: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
            logoPath: z
              .union([ctx.image(), z.string().startsWith("https://")])
              .optional(),
          }),
        )
        .optional(),
    }),
  );

export const projectsOverviewSchema = pageSchema;
