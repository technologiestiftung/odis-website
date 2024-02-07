import { defineConfig } from "astro/config";

// Core plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// Comunity plugins
import icon from "astro-icon";
import purgecss from "astro-purgecss";
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
      ? process.env.DEPLOY_PRIME_URL || "https://odis-berlin.de"
      : `http://localhost:${process.env.PORT || 4321}`,
  integrations: [
    icon({
      iconDir: "src/assets/images/icons",
    }),
    tailwind(),
    mdx(),
    prefetch(),
    sitemap(),
    purgecss({
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["astro", "html"],
        },
      ],
    }),
  ],
  redirects: {
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
    "/projekte/xml-validator/tool": "/xml-validator-tool",
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
  },
});
