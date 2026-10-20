import { defineConfig } from 'astro/config';

// Domaine de production (canonical, Open Graph, sitemap et JSON-LD s'en servent).
// SITE_URL, si défini au build, prend le dessus (ex. futur nom de domaine personnalisé).
// Sitemap retiré tant que le site n'est pas indexé : pour le remettre, réinstaller
// `import sitemap from '@astrojs/sitemap';` et ajouter `integrations: [sitemap()]`.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://raphaelo-five.vercel.app',
  output: 'static',
});
