// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
//Setting up Storyblok
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        hero: "storyblok/Hero",
        content_section: "storyblok/ContentSection",
        banner: "storyblok/Banner",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
