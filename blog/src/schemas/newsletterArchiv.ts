import { z } from "astro:content"

export const newsletterArchivSchema = z.object({
  title: z.string(),
  description: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  headerImage: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(),
  newsletters: z.array(
    z.object({
      month: z.number().min(1).max(12),
      year: z.number().min(2018).max(new Date().getFullYear()),
      url: z.string(),
    })
  ),
})
export type NewsletterArchivType = z.infer<typeof newsletterArchivSchema>
