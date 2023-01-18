import { defineConfig } from "astro/config";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/variables.scss";'
        }
      }
    }
  },
  output: "server",
  adapter: netlify()
});