import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO_CONFIRMER : domaine de production. À définir avec SITE_URL au moment du build
// (canonical, Open Graph, sitemap et JSON-LD s'en servent).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  output: 'static',
  integrations: [sitemap()],
});
