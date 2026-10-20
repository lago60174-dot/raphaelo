import { getEntry } from 'astro:content';

export async function getSite() {
  const entry = await getEntry('site', 'main');
  if (!entry) throw new Error('src/data/site.json : fiche "main" introuvable');
  return entry.data;
}
