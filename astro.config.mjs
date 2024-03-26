import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://divinecrnx.github.io',
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [svelte(), tailwind()]
});
