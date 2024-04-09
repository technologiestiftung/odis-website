import { defineConfig } from "astro/config";

// Core plugins
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Comunity plugins
import icon from "astro-icon";

const hasMatomo = process.env.MATOMO_URL && process.env.MATOMO_SITE_ID;
if (!hasMatomo) {
  console.warn(
    "Matomo is not configured. Please set MATOMO_URL and MATOMO_SITE_ID in your .env file.",
  );
}

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV !== "development"
      ? "https://odis-berlin.de"
      : `http://localhost:${process.env.PORT || 4321}`,
  integrations: [
    icon({
      iconDir: "src/assets/images/icons",
    }),
    mdx(),
    prefetch(),
    sitemap(),
    tailwind(),
  ],
  redirects: {
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
    "/projekte/xml-validator/tool": "/xml-validator-tool",
    "/projekte/datenportal/": "/projekte/2024-01-daten-neuheiten/",
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
    "/ressourcen/einstiegopendata": "/ressourcen/open_data_in_verwaltung",
    "/ressourcen/dateninventurprozess": "/ressourcen/dateninventur_prozess",
    "/ressourcen/dateninformationsblatt": "/ressourcen/daten_informationsblatt",
    "/ressourcen/metadaten": "/ressourcen/0_metadaten_leitfaden",
    "/ressourcen/tag_analyse": "/ressourcen/0_metadaten_tags",
    "/ressourcen/checkliste": "/ressourcen/checkliste_veroeffentlichung",
    "/ressourcen/datenschutz": "/ressourcen/datenschutz_check",
    "/ressourcen/datenqualitaet": "/ressourcen/0_datenqualitaet_video_handout",
    "/ressourcen/geocodierung": "/ressourcen/0_geocodierung_video",
    "/ressourcen/datenregister": "/ressourcen/daten_portal_veroeffentlichung",
    "/ressourcen/lizenzen": "/ressourcen/lizenzwahl",
    "/ressourcen/datenvisualisierung": "/ressourcen/datenvisualisierung_videos",
    "/journey": "/module",
  },
});
