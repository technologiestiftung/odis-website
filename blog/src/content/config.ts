import { defineCollection, z } from "astro:content";
import { projekteSchema } from "../schemas/projekte";
import { aktuellesSchema } from "../schemas/aktuelles";
import { moduleSchema } from "../schemas/module";

const aktuelles = defineCollection({
  type: "content",
  schema: aktuellesSchema,
});

const projekte = defineCollection({
  type: "content",
  schema: projekteSchema,
});

const module = defineCollection({
  type: "content",
  schema: moduleSchema,
});

export const collections = { module, aktuelles, projekte };
