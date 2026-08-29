// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bkpa-community.github.io",
  base: "/bkpa-v2",
  vite: {
    plugins: [tailwindcss()],
  },
});
