import { defineCollection, z } from "astro:content";
import { projekteSchema } from "../schemas/projekte";
import { aktuellesSchema } from "../schemas/aktuelles";

const aktuelles = defineCollection({
  type: "content",
  schema: aktuellesSchema,
});

const projekte = defineCollection({
  type: "content",
  schema: projekteSchema,
});

export const collections = { aktuelles, projekte };
