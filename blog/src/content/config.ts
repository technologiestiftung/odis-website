import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const tagsSchema = z.union([z.string(), z.array(z.string())]);
const commonSchema = z.object({
  title: z.string(),
  metaDescription: z.string(),
  visible: z.boolean().default(true),
  date: z.coerce.date(),
  tags: tagsSchema,
});

const aktuelles = defineCollection({
  type: "content",
  schema: commonSchema.merge(
    z.object({
      tags: tagsSchema.default(["news"]),
      urlText: z.string().default("Zum Blogbeitrag"),
      author: z.string().optional(),
      heroImagePath: z.string().optional(),
      heroImageAltText: z.string().optional(),
      readingTime: z.union([z.string(), z.number()]).optional(),
      link: z.string().optional(),
    }),
  ),
});

const projekte = defineCollection({
  type: "content",
  schema: commonSchema.merge(
    z.object({
      tags: tagsSchema.default(["projekte"]),
      blogLinkTitle: z.string().optional().nullable(),
      blogLink: z.string().optional().nullable(),
      finishDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      mobileImage: z.string().optional(),
      indexImage: z.string().optional(),
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
            logoPath: z.string().optional(),
          }),
        )
        .optional(),
    }),
  ),
});

export const collections = { blog, aktuelles, projekte };
