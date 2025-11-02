// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

import robots from "astro-robots";

import metaTags from "astro-meta-tags";

import matomo from "astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "https://richalguemei.fr",
  integrations: [
    react(),
    sitemap(),
    robots(),
    metaTags(),
    matomo({
      enabled: import.meta.env.PROD,
      host: "https://richalguemei.fr:8080",
      setCookieDomain: "*.richalguemei.fr",
      trackerUrl: "/matomo.php", // Matomo sur ton port
      srcUrl: "/matomo.js", // Matomo sur ton port
      siteId: 1, // correspond à ton installation Matomo
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
      viewTransition: {
        contentElement: "main",
      },
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
