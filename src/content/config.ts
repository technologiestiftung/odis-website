import { newsletterArchivSchema } from "@/schemas/newsletterArchiv"
import { kontaktSchema } from "@/schemas/kontakt"
import { defineCollection } from "astro:content";
import { projekteSchema, projectsOverviewSchema } from "@/schemas/projekte";
import { aktuellesSchema, aktuellesOverviewSchema } from "@/schemas/aktuelles";
import { moduleSchema, moduleOverviewSchema } from "@/schemas/module";
import { veranstaltungenSchema, veranstaltungenOverviewSchema } from "@/schemas/veranstaltungen";
import { aboutSchema } from "@/schemas/about";
import { resourcesSchema, resourcesOverviewSchema } from "@/schemas/resources"

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

const about = defineCollection({
  type: "content",
  schema: aboutSchema,
});

const aktuellesOverview = defineCollection({
  type: "content",
  schema: aktuellesOverviewSchema,
});

const kontakt = defineCollection({
  type: "content",
  schema: kontaktSchema,
});

const moduleOverview = defineCollection({
  type: "content",
  schema: moduleOverviewSchema,
});

const newsletterArchiv = defineCollection({
  type: "content",
  schema: newsletterArchivSchema,
});

const projectsOverview = defineCollection({
  type: "content",
  schema: projectsOverviewSchema,
});

const veranstaltungenOverview = defineCollection({
  type: "content",
  schema: veranstaltungenOverviewSchema,
});

const resources = defineCollection({
  type: "content",
  schema: resourcesSchema,
});

const resourcesOverview = defineCollection({
  type: "content",
  schema: resourcesOverviewSchema,
});

export const collections = {
  veranstaltungen,
  module,
  aktuelles,
  projekte,
  about,
  kontakt,
  aktuellesOverview,
  moduleOverview,
  newsletterArchiv,
  projectsOverview,
  veranstaltungenOverview,
  resources,
  resourcesOverview,
};
