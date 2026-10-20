import { z } from 'astro/zod';
import raw from '../data/menu.json';
import { menuItemSchema, menuSchema } from './schemas';

export type MenuItem = z.infer<typeof menuItemSchema>;

const menu = menuSchema.parse(raw);

// Les articles à visibleSurSite = false restent en base mais ne sont jamais affichés.
export function getMenu() {
  const categories = [...menu.categories]
    .sort((a, b) => a.ordre - b.ordre)
    .map((c) => ({
      ...c,
      items: menu.items.filter((i) => i.categorie === c.id && i.visibleSurSite),
    }))
    .filter((c) => c.items.length > 0);
  return {
    categories,
    supplements: menu.supplements,
    avertissement: menu.avertissement,
    sloganGlaces: menu.sloganGlaces,
  };
}

export const featuredItems = () =>
  menu.items.filter((i) => i.vedette && i.visibleSurSite);

// Montant absent : on n'invente rien. Le flag aConfirmer reste lisible dans le HTML (data-todo).
export const priceLabel = (item: MenuItem): string =>
  item.prix.affichage ?? 'Prix en agence';
