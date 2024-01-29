import { z, type SchemaContext } from "astro:content";

export const pageSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    headerImage: z
      .object({
        src: image(),
        alt: z.string(),
      })
      .optional(),
  });

export const collectionSchema = ({ image }: SchemaContext) =>
  pageSchema({ image }).merge(
    z.object({
      visible: z.boolean().default(true),
      date: z.coerce.date(),
      tags: z.array(z.string()),
    }),
  );

export const buttonSchema = z.object({
  text: z.string(),
  link: z.string(),
  variant: z.enum(["pirmary", "secondary"]).default("pirmary"),
  inverted: z.boolean().default(false),
});
