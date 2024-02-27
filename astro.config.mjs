import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  experimental: {
    clientPrerender: true,
  },
  integrations: [icon(), preact(), mdx()]
});