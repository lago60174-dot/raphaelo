// Format wa.me : indicatif sans "+", sans espaces.
export function whatsappUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

// Messages pré-remplis pour les commandes (une seule source de vérité).
export const ORDER_MESSAGE = [
  'Bonjour Raphaëlo Pizza 👋',
  'Je souhaite passer une commande :',
  '',
  '🍕 Ma commande : (plats, quantités, tailles)',
  '🛵 Mode : livraison / à emporter / sur place',
  '📍 Agence ou quartier : ',
  '🕒 Heure souhaitée : ',
  '👤 Nom : ',
  '',
  'Merci !',
].join('\n');

export const DELIVERY_ORDER_MESSAGE = [
  'Bonjour Raphaëlo Pizza 👋',
  'Je souhaite commander en livraison :',
  '',
  '🍕 Ma commande : (plats, quantités, tailles)',
  '📍 Quartier : ',
  '🏠 Adresse / point de repère : ',
  '📞 Numéro à joindre : ',
  '👤 Nom : ',
  '',
  'Merci !',
].join('\n');
