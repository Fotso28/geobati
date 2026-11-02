# GéoBati — site vitrine du cabinet de géomètre

Site Next.js d'un cabinet de géomètre au Cameroun (nom provisoire : **GéoBati**).
Son objectif : conduire chaque visiteur, depuis une publicité, Google ou un réseau social, vers une conversation WhatsApp avec le cabinet.

**Parcours :** publicité ou recherche → page adaptée au besoin → explications rassurantes → formulaire court → message WhatsApp prérempli, que le visiteur relit et envoie lui-même.

## Démarrage

```bash
npm install
cp .env.example .env.local   # facultatif : URL du site, autre numéro WhatsApp
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm start   # version de production
npm run lint
```

Technologies : Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4, GSAP 3 (ScrollTrigger, SplitText, DrawSVG), lucide-react.
Toutes les pages sont générées en statique au moment du build.

## À compléter avant la mise en ligne

| Quoi | Où |
|---|---|
| Numéro WhatsApp : **+237 655 03 08 15**, déjà configuré | `src/content/site.ts` (ou `NEXT_PUBLIC_WHATSAPP_NUMBER` pour le remplacer) |
| Adresse publique du site | `.env.local` → `NEXT_PUBLIC_SITE_URL` |
| Téléphone, e-mail, adresse, horaires, zones d'intervention, réseaux | `src/content/site.ts` |
| Photos | `public/images/` (voir plus bas) |
| Présentation, mot du responsable, équipe, matériel, qualifications | `src/content/about.ts` |
| Liste des prestations réellement proposées | `src/content/services.ts` |
| Vraies réalisations (avec l'accord des clients) | `src/content/realisations.ts` |
| Mentions légales et politique de confidentialité | `src/app/mentions-legales`, `src/app/confidentialite` |

Rien n'est inventé sur le site : tant qu'une information vaut `null`, elle est affichée comme « communiquée prochainement » ou masquée.
Les qualifications, agréments et années d'expérience n'apparaissent qu'une fois ajoutés dans `about.ts`, après vérification.

### Notes « À valider »

Les textes proposés qui doivent être validés par le cabinet portent un encadré pointillé **« À valider »**.
Ces encadrés s'affichent en développement (`npm run dev`) et sont masqués en production.
Pour les montrer sur une préversion envoyée au cabinet : `NEXT_PUBLIC_SHOW_DRAFT_NOTES=true`.

## Photos

Les photos du site viennent de la banque d'images du cabinet (envoyée sur GitHub le 2 novembre 2026).
33 photos ont été sélectionnées, recadrées si besoin et converties en WebP (5,6 Mo au total, contre 129 Mo pour les originaux).
Elles se trouvent dans `public/images/`.

Chaque emplacement est déclaré dans `src/content/images.ts`, avec :
- le nom du fichier ;
- le texte alternatif, qui décrit la photo pour les lecteurs d'écran et les moteurs de recherche ;
- le cadrage (`position`) quand la photo est recadrée ;
- l'indicateur `illustration`.

Pour remplacer une photo, déposez un fichier du même nom dans `public/images/`, avec l'extension `.webp`, `.avif`, `.jpg`, `.jpeg` ou `.png`, en supprimant l'ancien.
Si un fichier manque, un visuel « plan » (quadrillage et courbes de niveau) le remplace automatiquement.

| Emplacements | Où ils apparaissent |
|---|---|
| `hero`, `equipe`, `intervention-1` à `3` | Accueil |
| `service-*` | Pages services |
| `cabinet`, `responsable`, `equipement`, `materiel-*` | À propos |
| `realisation-*` | Réalisations |
| `conseil-*` | Conseils fonciers |
| `contact` | Contact |

Les images d'illustration (banque d'images, images générées) portent la mention **« Illustration »** sur l'accueil et les réalisations.
Passez `illustration: false` uniquement pour une vraie photo du cabinet, publiée avec l'accord des personnes concernées.

## Le tunnel vers WhatsApp

| Point d'entrée | Ce qui se passe |
|---|---|
| Bouton WhatsApp flottant (toutes les pages sauf le formulaire) | Message général |
| Page d'un service, bouton principal | Formulaire avec la prestation présélectionnée |
| Page d'un service, « Continuer sur WhatsApp » | Message direct sur la prestation |
| Fiche réalisation, « J'ai un projet similaire » | Formulaire avec la prestation et la référence du projet |
| Article de conseil, « Poser une question » | Message direct qui cite l'article |
| Page Contact | Formulaire court vers WhatsApp |

Le formulaire `/demande-de-devis` accepte deux paramètres, utiles pour les publicités :

- `?service=` : `bornage`, `topographie`, `lotissement`, `implantation`, `drone-cartographie`, `conseil-foncier` ou `a-definir` ;
- `&ref=` : identifiant d'une réalisation (ex. `implantation-batiment-residentiel`).

Pour une publicité ciblée, faites pointer l'annonce directement vers la page du service (ex. `/services/bornage`), ou vers `/demande-de-devis?service=bornage`.

Aucune donnée n'est stockée par le site : le message part de l'application WhatsApp du visiteur.
Chaque clic vers WhatsApp déclenche un événement `whatsapp_click` (et `Contact` pour Meta Pixel) si Google Analytics, Google Tag Manager ou Meta Pixel sont installés plus tard (`src/components/layout/Analytics.tsx`).

## Référencement et visibilité dans les assistants IA

- Titres et descriptions propres à chaque page, URL canoniques, image de partage générée (`src/app/opengraph-image.tsx`).
- Données structurées schema.org : `ProfessionalService` (uniquement les faits renseignés dans `site.ts`), `Service`, `FAQPage`, `Article`, `BreadcrumbList`.
- `sitemap.xml` et `robots.txt` générés automatiquement. Le robots.txt autorise explicitement les robots des assistants IA (GPTBot, ClaudeBot, PerplexityBot…), pour qu'ils lisent correctement les informations du cabinet.
- `/llms.txt` : résumé en texte clair des prestations et des contacts, généré à partir des contenus.
- Pages rendues côté serveur : tout le texte est présent dans le HTML, sans dépendre de JavaScript.

Prochaines étapes conseillées une fois le site en ligne : créer la fiche Google Business Profile avec les mêmes coordonnées que le site, et déclarer le sitemap dans Google Search Console.

## Direction artistique

Les couleurs viennent du logo du cabinet (`public/brand/`) :

- **bleu marine** `#043b58` pour l'en-tête des sections fortes, la bannière et le pied de page ;
- **turquoise** `#30b0b4` pour les boutons d'action et les repères, avec un texte marine pour rester lisible ;
- un turquoise plus foncé `#0b7479` pour le texte turquoise sur fond clair ;
- un fond blanc cassé froid, une teinte turquoise très claire pour les sections d'alternance et du gris ardoise pour le texte secondaire.

Toutes les couleurs sont définies une seule fois dans `src/app/globals.css`. Les contrastes respectent le niveau AA des règles d'accessibilité (WCAG).

Le logo existe en deux versions, extraites de l'image fournie :
- `logo-couleur.png` pour les fonds clairs ;
- `logo-clair.png`, où le marine passe en blanc, pour les fonds marine.

L'icône du navigateur reprend le géomètre dans son cercle (`src/app/icon.png`).
Pour un rendu plus net, remplacez ces fichiers par le logo d'origine en SVG ou en PNG haute définition, s'il est disponible.

Le langage graphique reste celui du plan de géomètre : courbes de niveau (avec une courbe maîtresse plus épaisse toutes les cinq), règle graduée, repères de bornes, stations de cheminement pour les étapes, lignes de cote, annotations en mono.
Typographies : Archivo (titres en largeur réduite, texte courant) et IBM Plex Mono (annotations).

## Animations (GSAP)

Les animations sont pilotées par des attributs posés dans le HTML et exécutées par `src/components/motion/PageMotion.tsx` :

| Attribut | Effet |
|---|---|
| `data-intro="headline"` | Titre de bannière qui apparaît ligne par ligne (SplitText) |
| `data-intro="fade"` / `data-intro="image"` | Séquence d'ouverture de la bannière |
| `data-reveal` | Apparition douce à l'entrée dans l'écran (ScrollTrigger) |
| `data-draw` | Courbes de niveau qui se tracent (DrawSVG) |
| `data-traverse` | Ligne de cheminement qui suit le défilement |
| `data-parallax` | Léger effet de profondeur sur les photos |

Les animations sont désactivées si le visiteur a demandé à réduire les mouvements.
Si JavaScript ne s'exécute pas, tout le contenu reste visible.

## Organisation

```text
src/
  app/                     Pages (App Router)
    page.tsx               Accueil
    services/              Liste + détail de chaque service
    realisations/          Liste filtrable + fiches
    conseils/              Articles
    a-propos/, contact/, demande-de-devis/
    llms.txt/, topo.svg/   Fichiers générés
  content/                 Tous les textes et données éditables
  components/              Interface (layout, sections, formulaires, animations)
  lib/                     WhatsApp, images, données structurées, courbes de niveau
public/images/             Photos à déposer
```

## Déploiement

Le site est hébergé sur Vercel, relié au dépôt GitHub : chaque envoi sur la branche de production déclenche un nouveau déploiement.

- Adresse publique : celle du projet Vercel, utilisée automatiquement pour le sitemap et les balises SEO.
- Nom de domaine du cabinet : ajoutez-le dans Vercel (Settings → Domains), puis définissez `NEXT_PUBLIC_SITE_URL` avec cette adresse et relancez un déploiement.
- Le numéro WhatsApp est inclus dans le code ; aucune variable n'est obligatoire.
