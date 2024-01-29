import { z, type SchemaContext } from "astro:content";
import { buttonSchema } from "./common";

export const homepageSchema = (ctx: SchemaContext) =>
  z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    intro: z.object({
      title: z.string(),
      text: z.string(),
      buttons: z.array(buttonSchema),
    }),
  });

export type HomepageType = z.infer<ReturnType<typeof homepageSchema>>;
