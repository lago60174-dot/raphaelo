# Revue UI et vérification — Raphaëlo Pizza

Date : 19 octobre 2026

## Changements intégrés dans cette version

- Accueil retravaillé : hero en deux colonnes, hiérarchie typographique plus forte, preuve de marque, image principale avec cadrage large, cartes flottantes et appels à l’action.
- Intégration de la mascotte officielle fournie par l’utilisateur en image détourée, dans le hero de l’accueil.
- Image de livraison remplacée par l’illustration du livreur à scooter extraite du concept visuel de page d’accueil généré précédemment.
- Boutons WhatsApp réactivés dans l’en-tête, le hero, le footer, Contact et Livraison. Le numéro utilisé est le `+237 690 90 90 76`, trouvé dans plusieurs annuaires publics ; il doit être confirmé par Raphaëlo avant publication.
- Page Livraison repensée : illustration du livreur à scooter, étapes, zones, horaires, frais/délais explicitement à confirmer et CTA final.
- Bouton WhatsApp visible ajouté au hero d’accueil en plus du bouton de l’en-tête.
- Styles globaux renforcés pour harmoniser titres, liens, boutons, formulaires et contenu des pages secondaires avec la charte crème/rouge existante.
- Lien Facebook public réintégré ; vérifier qu’il s’agit bien de la page contrôlée par l’entreprise.

- Pages À propos et Réservation retirées (demande du 20 octobre 2026) ; bouton « Commander » court remis dans l’en-tête.

## Contrôles statiques effectués

- Archive source extraite et arborescence Astro inspectée.
- Fichiers JSON parcourus pour détecter les erreurs de syntaxe.
- Présence des pages principales et secondaires vérifiée.
- JSON du site et du projet contrôlé après modification.
- Archive finale vérifiée avec `unzip -t`.
- Les références d’images locales du projet et la déclaration de favicon ont été conservées.

## Limite importante

Le build Astro et `astro check` ne sont pas validés. L’environnement utilise Node.js `22.16.0`, alors que `package.json` exige `>=22.22.0`; l’installation des dépendances a expiré et la commande `astro check` échoue car Astro n’est pas installé localement. La compilation, le rendu navigateur et les interactions doivent être testés sur le PC de développement.

## Vérifications à effectuer avant présentation / production

1. Installer Node.js `>=22.22.0`.
2. Exécuter `npm ci`, puis `npm run check` et `npm run build`.
3. Lancer `npm run dev` et vérifier toutes les pages sur mobile et ordinateur.
4. Tester les boutons WhatsApp sur un appareil avec WhatsApp Web/mobile et confirmer le numéro avec le restaurant.
5. Confirmer la page Facebook, les horaires, les prix, les frais et délais de livraison, les adresses et coordonnées GPS. La carte Google actuelle est une recherche de lieux et ne garantit pas sept marqueurs GPS certifiés.
