import { z } from 'astro/zod';
import raw from '../data/agences.json';
import { agenceSchema } from './schemas';
import {
  getImage,
  isBannerEligible,
  isCoverEligible,
  isPublic,
  type GalleryImage,
} from './gallery';

export type Agence = z.infer<typeof agenceSchema>;

const agences = z
  .array(agenceSchema)
  .parse(raw.agences)
  .sort((a, b) => a.ordre - b.ordre);

export const getAgences = () => agences;

export function getAgence(slug: string): Agence {
  const agence = agences.find((a) => a.slug === slug);
  if (!agence) throw new Error(`Agence introuvable : ${slug}`);
  return agence;
}

export const agenceGallery = (a: Agence): GalleryImage[] =>
  a.images.galerie.map(getImage).filter(isPublic);

// Cover : la cover déclarée si elle est utilisable, sinon la première image de la galerie qui l'est.
export function pickCover(
  a: Agence,
  eligible = isCoverEligible,
): GalleryImage | null {
  const declared = getImage(a.images.cover);
  if (eligible(declared)) return declared;
  return agenceGallery(a).find(eligible) ?? null;
}

export const pickBanner = (a: Agence) => pickCover(a, isBannerEligible);

export function serviceLabels(a: Agence): string[] {
  const { surPlace, terrasse, emporter } = a.services;
  return [
    surPlace && 'Sur place',
    terrasse && 'Terrasse',
    emporter && 'À emporter',
  ].filter((label): label is string => typeof label === 'string');
}
