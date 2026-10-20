import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Un champ inconnu vaut null et sera affiché avec le repère TODO_CONFIRMER.
const confirmable = <T extends z.ZodType>(schema: T) => schema.nullable();

const phone = z.string().regex(/^\+237 6\d{2} \d{2} \d{2} \d{2}$/);

// Traçabilité (R1) : d'où vient la donnée, et quels champs restent à confirmer.
const provenance = {
  source: z.string(),
  toConfirm: z.array(z.string()),
};

const site = defineCollection({
  loader: file('src/data/site.json'),
  schema: z.object({
    name: z.string(),
    slogan: confirmable(z.string()),
    whatsapp: confirmable(phone),
    deliveryZones: z.array(
      z.object({
        city: z.string(),
        area: z.string(),
        phone: confirmable(phone),
        image: confirmable(z.string()),
      }),
    ),
    deliveryDelay: confirmable(z.string()),
    legal: z.object({
      companyName: confirmable(z.string()),
      rccm: confirmable(z.string()),
      niu: confirmable(z.string()),
      address: confirmable(z.string()),
      publisher: confirmable(z.string()),
      host: confirmable(z.string()),
    }),
    deliveryHours: confirmable(z.string()),
    deliveryFeeFcfa: confirmable(z.number().int()),
    facebookUrl: confirmable(z.url()),
    tiktokUrl: confirmable(z.url()),
    ...provenance,
  }),
});

export const collections = { site };
