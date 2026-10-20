import { theme } from './tokens';

const kebab = (s: string) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// Transforme tokens.ts en variables CSS : le thème reste dans un seul fichier.
export const themeCss = `:root{${[
  ...Object.entries(theme.colors).map(([k, v]) => `--color-${kebab(k)}:${v}`),
  ...Object.entries(theme.fonts).map(([k, v]) => `--font-${k}:${v}`),
  ...Object.entries(theme.radius).map(([k, v]) => `--radius-${k}:${v}`),
].join(';')}}`;
