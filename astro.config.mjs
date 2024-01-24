import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? "https://odis-berlin.de"
    : "https://deploy-preview-296--odis-website.netlify.app",
  integrations: [
    icon({ iconDir: "src/assets/images/icons" }),
    tailwind(),
    mdx(),
    prefetch(),
    sitemap(),
  ],
  redirects: {
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
    "/projekte/xml-validator/tool": "/xml-validator-tool",
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
  },
});
