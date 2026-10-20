// Fichier unique du thème : changer ces valeurs change tout l'habillage.
// Valeurs de la direction artistique validée (I1). Branchées en CSS à l'itération I4.
export const theme = {
  colors: {
    primary: '#C71415', // mesuré sur le logo
    primaryDark: '#9E0F10',
    text: '#1C1917',
    textMuted: '#5C4B45',
    background: '#FFF7F0',
    accent: '#F6B21B', // TODO_CONFIRMER : à vérifier sur l'enseigne
    success: '#1E7A3E',
  },
  fonts: {
    display: "'Fredoka', ui-rounded, system-ui, sans-serif",
    body: "'Nunito Sans', system-ui, sans-serif",
  },
  radius: { card: '12px', pill: '999px' },
} as const;
