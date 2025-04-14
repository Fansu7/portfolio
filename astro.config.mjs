// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel/serverless';
import { fileURLToPath } from 'url';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({  integrations: [icon()],
  output: 'server',
  adapter: vercel({}),
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [tailwindcss()],
  },});
