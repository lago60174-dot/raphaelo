import { z } from 'astro/zod';

const i18n = z.object({ fr: z.string(), en: z.string() });
const nullable = <T extends z.ZodType>(s: T) => s.nullable();

export const galleryImageSchema = z.object({
  id: z.string(),
  kind: z.enum(['agence', 'plat']),
  group: nullable(z.string()),
  shot: z.enum(['facade', 'interieur', 'enseigne', 'equipe', 'visuel', 'plat']),
  cover: z.boolean(),
  src: z.string(),
  thumb: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  origine: z.enum(['raphaelo', 'a_verifier']),
  blurDataURL: z.string(),
  objectPosition: z.string(),
  alt: z.string().min(10),
  caption: z.string(),
  quality: z.enum(['ok', 'basse_resolution', 'tres_basse_resolution']),
  overlay: nullable(z.string()),
  peopleVisible: z.boolean(),
});

export const agenceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  ordre: z.number(),
  nom: z.string(),
  quartier: z.string(),
  repere: z.string(),
  ville: z.string(),
  adresse: nullable(z.string()),
  telephone: nullable(z.string()),
  whatsapp: nullable(z.string()),
  horaires: nullable(z.record(z.string(), z.string())),
  coordonnees: nullable(z.object({ lat: z.number(), lng: z.number() })),
  mapsUrl: z.url(),
  offreEnseigne: z.array(z.enum(['pizza', 'glacier', 'grill'])),
  services: z.object({
    surPlace: z.boolean(),
    terrasse: nullable(z.boolean()),
    emporter: nullable(z.boolean()),
    livraison: nullable(z.boolean()),
  }),
  description: i18n,
  pointsForts: z.array(i18n),
  images: z.object({ cover: z.string(), galerie: z.array(z.string()) }),
  seo: z.object({ title: i18n, description: i18n }),
  aCompleter: z.array(z.string()),
});

const priceSchema = z.object({
  montant: nullable(z.number()),
  affichage: nullable(z.string()),
  aConfirmer: z.boolean(),
});

export const menuItemSchema = z.object({
  id: z.string(),
  categorie: z.string(),
  nom: i18n,
  description: i18n,
  image: nullable(z.string()), // jamais imagesCandidates
  tags: z.array(z.string()),
  prix: priceSchema, // prix.tailles ignoré : grille en attente de confirmation
  alcool: z.boolean(),
  vedette: z.boolean(),
  visibleSurSite: z.boolean(),
});

export const menuSchema = z.object({
  avertissement: i18n,
  sloganGlaces: i18n,
  categories: z.array(
    z.object({ id: z.string(), ordre: z.number(), label: i18n }),
  ),
  items: z.array(menuItemSchema),
  supplements: z.array(
    z.object({
      id: z.string(),
      nom: i18n,
      montant: nullable(z.number()),
      affichage: nullable(z.string()),
    }),
  ),
});

export const contentSchema = z.object({
  seo: z.object({ siteTitle: i18n, siteDescription: i18n }),
  hero: z.object({
    titre: i18n,
    sousTitre: i18n,
    cta: z.object({ primaire: i18n, secondaire: i18n }),
    image: z.string(),
  }),
  sections: z.object({
    agences: z.object({ titre: i18n, intro: i18n }),
    menu: z.object({ titre: i18n, intro: i18n }),
    univers: z.object({ titre: i18n, texte: i18n }),
    galerie: z.object({
      titre: i18n,
      filtres: z.array(z.object({ id: z.string(), label: i18n })),
    }),
    equipe: z.object({ titre: i18n, texte: i18n }),
  }),
  cta: z.object({
    itineraire: i18n,
    appeler: i18n,
    commander: i18n,
    voirAgence: i18n,
    voirCarte: i18n,
    bientot: i18n,
  }),
  faq: z.array(z.object({ q: i18n, a: nullable(i18n) })),
});

export const settingsSchema = z.object({
  showPeoplePhotos: z.boolean(),
  approvedUnverified: z.array(z.string()),
  alcoholWarning: i18n,
});
