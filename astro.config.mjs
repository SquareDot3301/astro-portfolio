// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://test.quetzer.land",
  integrations: [react()],

  server: { allowedHosts: ["test.quetzer.land"] },

  vite: {
    plugins: [tailwindcss()],
  },
});
