import { defineCollection, z } from "astro:content";
import { projekteSchema } from "../schemas/projekte";
import { aktuellesSchema } from "../schemas/aktuelles";
import { moduleSchema } from "../schemas/module";
import { veranstaltungenSchema } from "../schemas/veranstaltungen";

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

const veranstaltungen = defineCollection({
  type: "content",
  schema: veranstaltungenSchema,
});

export const collections = { veranstaltungen, module, aktuelles, projekte };
