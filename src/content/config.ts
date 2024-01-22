import { veranstaltungenOverviewSchema } from "../schemas/veranstaltungen"
import { projectsOverviewSchema } from "../schemas/projekte"
import { newsletterArchivSchema } from "../schemas/newsletterArchiv"
import { moduleOverviewSchema } from "../schemas/module"
import { kontaktSchema } from "../schemas/kontakt"
import { aktuellesOverviewSchema } from "../schemas/aktuelles"
import { defineCollection } from "astro:content";
import { projekteSchema } from "@/schemas/projekte";
import { aktuellesSchema } from "@/schemas/aktuelles";
import { moduleSchema } from "@/schemas/module";
import { veranstaltungenSchema } from "@/schemas/veranstaltungen";
import { aboutSchema } from "@/schemas/about";

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
};
