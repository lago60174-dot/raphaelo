import type { ImageMetadata } from 'astro';
import { z } from 'astro/zod';
import manifest from '../data/media.json';

const mediaSchema = z.array(
  z.object({
    id: z.string(),
    file: z.string(),
    alt: z.string().min(10), // texte alternatif réel, jamais vide
    origin: z.string(),
    rights: z.string(),
    usedOn: z.array(z.string()),
  }),
);

const entries = mediaSchema.parse(manifest);
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
  },
);

// Toute image de src/assets doit être déclarée dans le manifeste (origine et droits).
const declared = new Set(entries.map((e) => `../assets/${e.file}`));
for (const path of Object.keys(files)) {
  if (!declared.has(path))
    throw new Error(`Image non déclarée dans src/data/media.json : ${path}`);
}

export function getMedia(id: string) {
  const entry = entries.find((e) => e.id === id);
  const file = entry && files[`../assets/${entry.file}`];
  if (!entry || !file) throw new Error(`Média introuvable : ${id}`);
  return { src: file.default, alt: entry.alt };
}
