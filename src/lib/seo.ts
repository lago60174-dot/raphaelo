import { z } from 'astro/zod';
import brandRaw from '../data/brand.json';
import { answeredFaq } from './content';
import { t } from './i18n';
import type { Agence } from './agences';

const brand = z
  .object({
    nom: z.string(),
    slogan: z.object({ fr: z.string(), en: z.string() }),
    codePays: z.string(),
  })
  .parse(brandRaw);

const CONTEXT = 'https://schema.org';
const CUISINE = { pizza: 'Pizza', glacier: 'Glaces', grill: 'Grill' } as const;

// Accueil : marque, site et FAQ. Aucun réseau social (sameAs) tant que le handle TikTok n'est pas confirmé.
export function homeLd(site: URL, logoUrl: string) {
  return [
    {
      '@context': CONTEXT,
      '@type': 'Organization',
      '@id': new URL('/#organization', site).href,
      name: brand.nom,
      slogan: t(brand.slogan),
      url: site.href,
      logo: new URL(logoUrl, site).href,
    },
    {
      '@context': CONTEXT,
      '@type': 'WebSite',
      name: brand.nom,
      url: site.href,
      inLanguage: 'fr',
    },
    {
      '@context': CONTEXT,
      '@type': 'FAQPage',
      mainEntity: answeredFaq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}

// Agence : seuls les champs renseignés sont publiés. Adresse, téléphone, GPS et horaires
// s'ajoutent d'eux-mêmes quand ils seront fournis (jamais de valeur inventée).
// TODO_CONFIRMER : convertir `horaires` en openingHoursSpecification quand leur format sera connu.
export function agenceLd(agence: Agence, site: URL, imageUrl: string | null) {
  const url = new URL(`/agences/${agence.slug}/`, site).href;
  return {
    '@context': CONTEXT,
    '@type': 'Restaurant',
    '@id': `${url}#restaurant`,
    name: agence.nom,
    url,
    description: t(agence.description),
    servesCuisine: agence.offreEnseigne.map((o) => CUISINE[o]),
    hasMenu: new URL('/menu/', site).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: agence.ville,
      addressCountry: brand.codePays,
      ...(agence.adresse && { streetAddress: agence.adresse }),
    },
    ...(imageUrl && { image: new URL(imageUrl, site).href }),
    ...(agence.telephone && { telephone: agence.telephone }),
    ...(agence.coordonnees && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: agence.coordonnees.lat,
        longitude: agence.coordonnees.lng,
      },
    }),
    parentOrganization: {
      '@type': 'Organization',
      '@id': new URL('/#organization', site).href,
      name: brand.nom,
    },
  };
}
