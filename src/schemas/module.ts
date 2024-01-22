import { z, type ImageFunction } from "astro:content";
import { collectionSchema, pageSchema } from "./common";

export const moduleSchema = ({ image }: { image: ImageFunction }) =>
  collectionSchema({ image }).merge(
    z.object({
      tags: z.array(z.string()).default(["module"]),
      date: z.coerce.date().optional(),
      number: z.number(),
      description: z.string(),
      icon: image(),
      methods: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          link: z.string(),
          icon: image(),
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

export const moduleOverviewSchema = pageSchema;
