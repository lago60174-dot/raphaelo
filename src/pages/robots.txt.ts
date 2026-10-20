import type { APIRoute } from 'astro';

// Site non indexé pour le moment (balise « noindex » + en-tête X-Robots-Tag).
// Le crawl reste autorisé exprès : Google doit pouvoir lire le « noindex ».
// Pas de Sitemap tant que le site n'est pas indexé.
export const GET: APIRoute = () =>
  new Response('User-agent: *\nAllow: /\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
