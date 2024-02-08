import { defineConfig } from "astro/config";

// Core plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// Comunity plugins
import icon from "astro-icon";
import purgecss from "astro-purgecss";
import AstroPWA from "@vite-pwa/astro";

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
      safelist: ["dark"],
    }),
    AstroPWA({
      workbox: { navigateFallback: "/404" },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      manifest: {
        theme_color: "#ffffff",
        background_color: "#273a91",
        display: "minimal-ui",
        scope: "/",
        start_url: "/",
        name: "Open Data Informationsstelle Berlin",
        short_name: "ODIS",
        description:
          "Wir begleiten die Stadt auf dem Weg zu einer partizipativen, nachhaltigen und datengetriebenen Gesellschaft mit dem Schwerpunkt auf die Bereitstellung und Nutzung offener Daten.",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  redirects: {
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
    "/projekte/xml-validator/tool": "/xml-validator-tool",
    "/projekte/organigramme/guide": "/aktuelles/2022-02-18-organigramm-guide",
  },
});
