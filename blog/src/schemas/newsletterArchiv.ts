import { z } from "astro:content"
import { pageSchema } from "./common"

export const newsletterArchivSchema = pageSchema.merge(z.object({
  newsletters: z.array(
    z.object({
      month: z.number().min(1).max(12),
      year: z.number().min(2018).max(new Date().getFullYear()),
      url: z.string(),
    })
  ),
}))
export type NewsletterArchivType = z.infer<typeof newsletterArchivSchema>
