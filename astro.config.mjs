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

        cards_section: "storyblok/CardsSection",
        galeria: "storyblok/Galeria",
        content_with_image: "storyblok/ContentWithImage",
        stats: "storyblok/Stats",
        stat: "storyblok/Stat",
        hero_stats: "storyblok/HeroStats",
        hero_stat: "storyblok/HeroStat",
        full_image_with_text: "storyblok/FullImageWithText",
        amenities: "storyblok/Amenities",
        amenity: "storyblok/Amenity",
        layout_1: "storyblok/Layout1",

        section_heading: "storyblok/SectionHeading",
        feature_section: "storyblok/FeatureSection",
        body_text: "storyblok/BodyText",
        item_list: "storyblok/ItemList",

        feature_amenidades: "storyblok/FeaturesAmenidades",
        feature_uso_suelo: "storyblok/FeatureUsoSuelo",
        callout_text: "storyblok/CalloutText",
        feature_fraccionamientos: "storyblok/FeatureFraccionamientos",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["a.storyblok.com"],
  },
});
