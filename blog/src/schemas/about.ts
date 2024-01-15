import { z } from "astro:content";

export const aboutSchema = z.object({
  title: z.string(),
  metaDescription: z.string(),
  description: z.string(),
  headerImagePath: z.string(),
  headerImageAlt: z.string(),
  mission: z.object({
    title: z.string(),
    description: z.string(),
    imagePath: z.string(),
    imageAlt: z.string(),
    expertiseTitle: z.string(),
    expertiseFields: z.array(
      z.object({
        iconPath: z.string(),
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
        imagePath: z.string(),
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
});
export type AboutPageType = z.infer<typeof aboutSchema>;
