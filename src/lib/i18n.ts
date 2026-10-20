export type Locale = 'fr' | 'en';
export type I18n = { fr: string; en: string };

// Le site est en français ; les données contiennent déjà l'anglais (prêt pour une version EN).
export const locale: Locale = 'fr';
export const t = (value: I18n, l: Locale = locale): string => value[l];
