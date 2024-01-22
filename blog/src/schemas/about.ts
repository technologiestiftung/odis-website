import { pageSchema } from "./common";
import { z, type SchemaContext } from "astro:content";

export const aboutSchema = (ctx: SchemaContext) =>
  pageSchema(ctx).merge(
    z.object({
      mission: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: ctx.image(),
        imageAlt: z.string(),
        expertiseTitle: z.string(),
        expertiseFields: z.array(
          z.object({
            iconPath: ctx.image(),
            iconAlt: z.string(),
            text: z.string(),
          }),
        ),
      }),
      team: z.object({
        title: z.string(),
        members: z.array(
          z.object({
            name: z.string(),
            imagePath: ctx.image(),
            imageAlt: z.string(),
            role: z.string().max(50),
            email: z.string().email().optional(),
            phoneNumber: z
              .string()
              .regex(/^\+49 \(0\)30 \d{3} \d{2} \d{2} \d{2}$/)
              .optional(),
          }),
        ),
        disclaimer: z.string(),
      }),
    }),
  );
export type AboutPageType = z.infer<ReturnType<typeof aboutSchema>>;
