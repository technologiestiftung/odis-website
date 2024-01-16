import { z } from "astro:content";
import { collectionSchema } from "./common";

export const moduleSchema = collectionSchema.merge(
  z.object({
    tags: z.array(z.string()).default(["module"]),
    date: z.coerce.date().optional(),
    number: z.number(),
    description: z.string(),
    icon: z.string(),
    methods: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        icon: z.string(),
      }),
    ),
    furtherLinksTitle: z.string().default("Weiterführende Links"),
    furtherLinksText: z
      .string()
      .default(
        "Wir haben für Sie eine Linksammlung zusammengestellt. Die Links beziehen sich sowohl auf unsere ODIS-eigenen Inhalte als auch auf externe Angebote. Viel Erfolg beim Stöbern!",
      ),
    furtherLinks: z.array(
      z.object({
        title: z.string(),
        link: z.string().url(),
      }),
    ),
  }),
);

export const moduleOverviewSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  introTitle: z.string(),
  introText: z.string(),
});
