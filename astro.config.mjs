// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind(), icon()],

  output: "static",
  adapter: vercelStatic({}),
});
