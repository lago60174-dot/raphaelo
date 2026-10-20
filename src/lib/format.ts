// Format imposé par le cahier des charges : "8 000 FCFA", espaces insécables.
export function formatFcfa(amount: number): string {
  const n = new Intl.NumberFormat('fr-FR')
    .format(amount)
    .replace(/\u202f/g, '\u00a0');
  return `${n}\u00a0FCFA`;
}

export function telUrl(phone: string): string {
  return `tel:+${phone.replace(/\D/g, '')}`;
}
