# Données manquantes ou à confirmer

Les fichiers fournis (`src/data/agences.json`, `menu.json`, `gallery.json`, `content.json`, `brand.json`) sont la source de vérité.
Un champ `null` signifie « information manquante » : le site affiche « Bientôt disponible » ou « Prix en agence », jamais une valeur inventée.
Pour `site.json` (livraison, contacts, légal), chaque fiche a un champ `toConfirm` qui liste ses champs provisoires.

## Par agence (7 agences, à Yaoundé)

| Agence                          | Champs à fournir                                    |
| ------------------------------- | --------------------------------------------------- |
| Raphaëlo Mimboman – Shakespeare | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Odza – Borne 10        | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Awae – Escalier        | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Simbock                | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Chapelle Ngousso       | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Kolbisson              | adresse, telephone, whatsapp, horaires, coordonnees |
| Raphaëlo Carrefour Tam-Tam      | adresse, telephone, whatsapp, horaires, coordonnees |

Adresse, téléphone, WhatsApp, horaires, coordonnées GPS : aucune agence n'en a. Les liens « Itinéraire » sont des recherches Google Maps, pas des fiches officielles.

## Carte et prix

- Grille de prix à retenir : prix de la carte imprimée, ou tableau Part / Grande / Familiale (6 pizzas en conflit). `prix.tailles` est conservé mais non affiché.
- Prix des glaces (affichés « Prix en agence »), prix de New York Cheese.
- Prix à confirmer (marqués `data-todo`) : Azzura, Savoyarde, Thaïlandaise, Mont Mandara, Mont Koupé, Eau minérale.
- Compositions manquantes : Mont Mandara, Mont Koupé.
- Photos des plats : 7 articles sur 35 affichés ont une photo (liens `probable`). Les autres ont un visuel de remplacement.
- Articles masqués (gardés en base) : Damboula, Tacos Formule B, Plateau Gourmand, boisson framboise, salade burrata, table pizzas/gratins.
- Allergènes : estimés, non affichés.

## Images

- Droits : accord du propriétaire pour toutes les images (`rights` dans `media.json` pour le logo et la photo de Douala).
- Origine à vérifier, non affichées : plat-09, plat-11, plat-12, plat-13 (`approvedUnverified` dans `settings.json` pour les autoriser).
- Personnes visibles (droit à l'image) : mimboman-02, mimboman-03, awae-02, kolbisson-01. Réglage `showPeoplePhotos` dans `settings.json` (actuellement `true`).
- Résolution : la plupart font moins de 700 px ; Kolbisson (206 et 225 px) ne sert qu'en vignette.
- Texte incrusté (donc exclues des covers et bannières) : mimboman-01, simbock-01, simbock-02, ngousso-01, ngousso-02, tam-tam-01, odza-02, plat-05. Résultat : Simbock, Chapelle Ngousso et Carrefour Tam-Tam n'ont pas de cover utilisable.
- Photos des plats et meilleure qualité : à fournir.

## Site (`site.json`) : provient de mes recherches, pas du dossier fourni

- WhatsApp +237 690 90 90 76 (TikTok officiel) : `brand.json` indique `null`. À confirmer.
- Livraison (Yaoundé : toute la ville ; Douala : zones proches de Total Nkolbong ; 7j/7 de 11 h à 21 h 30) : source TikTok. Le dossier fourni indique la livraison « inconnue ». À confirmer, ainsi que frais et délai.
- Photo et zone de Douala : le dossier fourni ne contient que des agences à Yaoundé.
- TikTok : `@raphaelo.pizza` (liens TikTok vus dans mes recherches) contre `@raphalo.pizza` dans `brand.json` (lu sur une capture, non vérifié).
- Facebook : lien trouvé dans des annuaires, page non ouverte. Instagram : non trouvé.
- Mentions légales (raison sociale, RCCM, NIU, siège, directeur de publication, hébergeur) : vides.
- Email, moyens de paiement, réservation et événements, délai de livraison : absents.
- Domaine de production : `https://raphaelo-five.vercel.app` par défaut (`astro.config.mjs`). Pour un domaine personnalisé, définir la variable `SITE_URL` au build (`SITE_URL=https://... npm run build`) ; canonical, Open Graph, sitemap et JSON-LD l'utilisent.
- JSON-LD : les agences n'ont ni adresse, ni téléphone, ni horaires, ni GPS dans le JSON-LD tant que ces données sont `null` (ils s'ajoutent automatiquement une fois fournis ; les horaires demandent en plus une conversion de format). Pas de `sameAs` (TikTok non confirmé).
- Image de partage `public/og-image.png` : composée avec le logo fourni (droits à confirmer). Elle est unique pour toutes les pages.
- Textes légaux rédigés sans avis juridique.

## Design (non modifié)

- `brand.json` propose d'autres couleurs (rouge `#E02029`) et polices (Pacifico, Lilita One, Poppins). Je garde le thème validé en I1 (rouge `#C71415` mesuré sur le logo, Fredoka, Nunito Sans). À trancher.
- Version anglaise : les données sont prêtes (`en`), les pages ne sont pas construites.

## Vérifications web complémentaires (19 octobre 2026)

- **Présence multi-agences :** Maligah présente Raphaëlo comme une chaîne de pizzerias à Yaoundé et mentionne pizzas, boissons, salades et tacos. Les fiches consultées ne renseignent pas le fondateur, l'année de création, le RCCM ou le NIU.
- **Téléphone et horaires publics, à confirmer avant publication :** Go Africa Online affiche le numéro `+237 690 90 90 76` et des horaires 10 h 30–23 h pour une fiche du centre-ville ; d'autres annuaires indiquent généralement 11 h–23 h et des numéros différents selon les agences. Ne pas fusionner ces coordonnées au niveau de toutes les agences sans validation directe.
- **Promoteur / fondateur :** aucune source publique suffisamment solide trouvée pour attribuer la création ou la direction actuelle à une personne précise. Une page LinkedIn liée à Raphaello Pizza existe, mais elle ne prouve pas le statut de fondateur ou de promoteur. La page À propos affiche donc une note de transparence plutôt qu'une biographie supposée.
- **Carte :** l'intégration affiche une recherche Google Maps sur Raphaëlo Pizza à Yaoundé. Les coordonnées exactes de plusieurs agences manquent encore ; les marqueurs affichés dépendent des résultats du fournisseur cartographique et ne constituent pas une carte propriétaire vérifiée des sept points de vente.
- **Images de remplacement :** les cartes de menu sans photo locale utilisent des images d'illustration hébergées par Unsplash (URLs `images.unsplash.com`), avec une mention visible « Photo d’illustration ». Remplacer par les visuels officiels avant publication.
- **Favicon :** `public/favicon.png` contient le logo fourni et est bien déclaré dans `BaseLayout.astro`. Le fichier SVG historique n’est pas utilisé par le layout.
- **Footer et Contact :** le bouton WhatsApp direct est masqué tant que le numéro est marqué comme à confirmer ; la page Contact invite alors à consulter les agences. Le lien Facebook est également masqué tant que son URL figure dans `toConfirm`.
- **Itinéraires :** chaque carte d’agence affiche un bouton « Itinéraire Google Maps » basé sur la requête de recherche propre à son quartier ; cela n’équivaut pas à des coordonnées GPS validées.

Sources web consultées :
- Go Africa Online, fiche Raphaëlo Pizza : https://www.goafricaonline.com/cm/631893-raphaelo-pizza
- Maligah, fiche Raphaëlo Pizza (Ngousso) : https://maligah.com/entreprises/details/Raphaelo-Pizza-%28Pizzarie-de-Ngousso%29?id=177104
- Maligah, fiche Raphaëlo Pizza (Awae) : https://maligah.com/entreprises/details/Raphaelo-Pizza-%28Pizzarie-de-Awae%29?id=177106
- QualityPro Consulting, publication mentionnant 8 points de vente à Douala et Yaoundé : https://fr.linkedin.com/posts/qualitypro-consulting_qualit%C3%A9-s%C3%A9curit%C3%A9alimentaire-conformit%C3%A9-activity-7366159250953355264-20Eu

## Mise à jour du 19 octobre 2026 — boutons de commande et livraison

- **WhatsApp de commande affiché dans la maquette :** `+237 690 90 90 76`. Ce numéro est repris par plusieurs annuaires publics pour Raphaëlo Pizza (notamment Awaé et Mimboman). Sources consultées : https://www.restaurants10.com/CM/Yaound%C3%A9/279980386181026/Raphaelo%2C-La-Meilleure-Pizza et https://www.africabizinfo.com/fr-CM/rapha%C3%ABlo-pizza-mimboman-6-95-36-88-90. Il reste recommandé de le faire confirmer par l’entreprise avant mise en production.
- **Page Facebook :** lien de page répertorié publiquement : https://web.facebook.com/RaphaeloPizza-279980386181026/ . Vérifier que l’entreprise contrôle bien cette page avant publication.
- **Mascotte :** aucun fichier autonome officiel de la mascotte n’a pu être confirmé dans les sources accessibles. L’accueil utilise donc en filigrane une photo réelle fournie dans le projet, montrant une fresque de chef dans l’agence Carrefour Tam-Tam ; ce n’est pas une illustration redessinée ni une mascotte détourée.
- **Livraison :** les frais et délais restent explicitement indiqués comme à confirmer. La page invite l’équipe à confirmer la disponibilité et le coût selon le quartier.


## Réservation (ajout du 20 octobre 2026)

- Le formulaire transmet une demande préremplie à WhatsApp ; il ne crée pas de réservation en base et ne confirme pas automatiquement la disponibilité.
- Confirmer avec Raphaëlo les agences réellement ouvertes à la réservation et le numéro WhatsApp avant publication.
