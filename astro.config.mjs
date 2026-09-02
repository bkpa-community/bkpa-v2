// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bkpa-community.github.io",
  base: "/bkpa-v2",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
