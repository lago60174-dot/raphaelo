import raw from '../data/content.json';
import { contentSchema } from './schemas';
import { t } from './i18n';

export const content = contentSchema.parse(raw);

// Une réponse manquante (a = null) n'est jamais affichée ni publiée : on n'invente rien.
export const answeredFaq = content.faq.flatMap((f) =>
  f.a ? [{ q: t(f.q), a: t(f.a) }] : [],
);
