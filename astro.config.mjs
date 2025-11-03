// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

import robots from "astro-robots";

import metaTags from "astro-meta-tags";

import jopSoftwarematomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "https://richalguemei.fr",
  integrations: [
    react(),
    sitemap(),
    robots(),
    metaTags(),
    jopSoftwarematomo({
      baseUrl: "https://richalguemei.fr/matomo/",
      siteId: 1,
    }),
  ],
  server: { allowedHosts: ["richalguemei.fr"] },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
});
