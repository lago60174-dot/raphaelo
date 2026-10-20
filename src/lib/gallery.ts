import { z } from 'astro/zod';
import raw from '../data/gallery.json';
import collectionsRaw from '../data/collections.json';
import settingsRaw from '../data/settings.json';
import { galleryImageSchema, settingsSchema } from './schemas';

export type GalleryImage = z.infer<typeof galleryImageSchema>;

export const settings = settingsSchema.parse(settingsRaw);
const images = z.array(galleryImageSchema).parse(raw.images);
const collections = z
  .record(z.string(), z.array(z.string()))
  .parse(collectionsRaw.collections);

export function getImage(id: string): GalleryImage {
  const image = images.find((i) => i.id === id);
  if (!image) throw new Error(`Image introuvable dans gallery.json : ${id}`);
  return image;
}

// Publiable : photo Raphaëlo (ou approuvée par le propriétaire), et personnes masquables d'un coup.
export const isPublic = (i: GalleryImage) =>
  (i.origine === 'raphaelo' || settings.approvedUnverified.includes(i.id)) &&
  (settings.showPeoplePhotos || !i.peopleVisible);

// Texte ou interface incrustés : jamais en cover ni en bannière.
export const isCoverEligible = (i: GalleryImage) => isPublic(i) && !i.overlay;

// Très basse résolution : vignettes et galerie uniquement.
export const isBannerEligible = (i: GalleryImage) =>
  isCoverEligible(i) && i.quality !== 'tres_basse_resolution';

export const getPublicImage = (id: string) => {
  const image = getImage(id);
  return isPublic(image) ? image : null;
};

export const publicImages = () => images.filter(isPublic);

export const collectionImages = (collectionId: string) =>
  (collections[collectionId] ?? []).map(getImage).filter(isPublic);

export const collectionIdsOf = (imageId: string): string[] =>
  Object.entries(collections)
    .filter(([, ids]) => ids.includes(imageId))
    .map(([id]) => id);
