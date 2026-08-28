# Handoff : site de présentation Lecolso

## Vue d'ensemble
Site vitrine de **Lecolso**, logiciel desktop offline-first de gestion scolaire édité par Teiik SARL (Abidjan).
Objectif : présenter le produit aux écoles privées et faire télécharger l'installateur Windows.

Trois pages :
1. `Lecolso Landing.dc.html` — page produit (hero, chiffres, hors-ligne, 12 modules, notes/bulletins, caisse & paie, sauvegarde, licence, FAQ, CTA)
2. `Lecolso Informations.dc.html` — mentions légales + protection des données
3. `Lecolso Contact.dc.html` — coordonnées + formulaire de contact

## À propos des fichiers de design
Les fichiers HTML de ce dossier sont des **références de design** : des prototypes qui montrent l'apparence et le comportement voulus, pas du code de production à copier tel quel. Ils utilisent un runtime de composants propre à l'outil de design (`support.js`, balises `<x-dc>`, trous `{{ }}`) qui n'a pas sa place dans le produit final.

La tâche est de **recréer ces pages dans l'environnement cible**. Cible recommandée, cohérente avec la stack maison décrite dans le CLAUDE.md de l'app Lecolso : **Next.js 15 (App Router) + TypeScript strict + Tailwind CSS 4**, déployé sur le VPS Hetzner via Dokploy, comme academy.teiik.com. Composants shadcn/ui pour le formulaire, lucide-react pour les icônes, Resend pour l'envoi du formulaire de contact.

## Fidélité
**Hi-fi.** Couleurs, typographie, échelles d'espacement et copie sont définitifs. À recréer au pixel près avec les libs du codebase.

## Système visuel

### Couleurs
| Rôle | Valeur | Usage |
|---|---|---|
| Fond de page | `#F3F2F2` | fond général |
| Blanc | `#FFFFFF` | fond des cartes / surfaces |
| Encre | `#201E1D` | tout le texte, les titres |
| Encre 78–82 % | `color-mix(in srgb, #201E1D 78%, transparent)` | paragraphes secondaires |
| Encre 70 % | `color-mix(in srgb, #201E1D 70%, transparent)` | légendes, pied de page |
| Accent | `#D95300` | filets d'accent, numérotation, fond des boutons primaires |
| Accent foncé | `#B34400` | petits libellés en capitales, liens |
| Bande de clôture | `#A33F00` | fond des sections rouges (texte blanc, contraste AA) |
| Filets / séparateurs | `#DDD9D7` (token `--color-divider`) | traits 2px |
| Orange vif | `#FF6B00` | uniquement le logo (jamais comme fond de texte) |

Contraste : le blanc sur `#D95300` échoue AA en petit texte — c'est pourquoi les bandes utilisent `#A33F00`, et les libellés de boutons primaires sont en encre foncée `#201E1D`.

### Typographie
Famille unique : **Archivo** (Google Fonts), titres en poids 800, corps en 400.
| Élément | Taille | Interlignage | Autres |
|---|---|---|---|
| H1 | `clamp(40px, 5.6vw, 78px)` | 1.05 | `letter-spacing: -0.02em`, `margin-left: -0.058em` (alignement optique) |
| H1 pages secondaires | `clamp(36px, 4.6vw, 64px)` | 1.06 | idem |
| H2 section | `clamp(28px, 3.2vw, 42px)` | 1.1 | `letter-spacing: -0.015em`, `margin-left: -0.03em` |
| H2 bande de clôture | `clamp(32px, 4.2vw, 56px)` | 1.05 | blanc |
| H3 | 20–24px | 28px | poids 800 |
| H4 / titre de colonne | 17–19px | 26–28px | poids 800 |
| Chapeau (paragraphe hero) | 17px | 29px | max-width 56ch |
| Corps | 15–15.5px | 27–28px | max-width 52–64ch |
| Sur-titre (kicker) | 13px | 14px | `letter-spacing: .08em`, `text-transform: uppercase`, couleur `#B34400` |
| Chiffres clés | `clamp(30px, 3.4vw, 46px)` | 54px | couleur `#D95300` |
| Légende d'image | 13px | 20px | capitales, `letter-spacing: .08em` |

### Règles de style (design system « Modernist »)
- **Rayon de bordure : 0 partout.** Aucun coin arrondi.
- **Filets 2px** `#DDD9D7` entre les sections et en haut de chaque cellule de grille — jamais de traits fins ni de séparation par le vide seul.
- **Tout est aligné à gauche**, y compris les libellés à l'intérieur des boutons (`text-align: left`, même sur `<button>` natif qui centre par défaut).
- Pas d'ombre portée, pas de dégradé, pas d'emoji.
- Photographies éventuelles en noir et blanc ; **les captures d'interface restent en couleur**, encadrées d'un filet 2px.
- Focus clavier : `outline: 2px solid #D95300; outline-offset: 2px`.

### Espacement
Conteneur : `max-width: 1200px`, `padding-inline: clamp(20px, 5vw, 72px)`, centré.
Sections : `padding: 84px 0` (hero 92px, bandes de chiffres 60px). Grilles : `gap: 0 clamp(24px, 4vw, 64px)` quand les filets font la séparation ; `gap: 32px clamp(24px, 5vw, 96px)` pour les blocs deux colonnes.

## Pages

### 1. Landing (`Lecolso Landing.dc.html`)
Barre de navigation collée en haut : logo + mot « Lecolso » (21px/800) à gauche ; liens Modules, Hors ligne, Sauvegarde, Licence, Contact ; bouton primaire « Télécharger » poussé à droite (`margin-left: auto`). Sous 820px les liens texte disparaissent, logo et bouton restent.

Sections dans l'ordre :
1. **Hero** — kicker « Logiciel de gestion scolaire — Windows » ; H1 sur 3 lignes (« Toute votre école / dans un seul logiciel, / même sans internet. ») ; grille 7fr/5fr : chapeau + deux CTA (« Télécharger pour Windows » primaire, « Voir les 12 modules » fantôme) + note plateforme en capitales, et à droite un encadré à filet d'accent gauche 3px. Puis capture pleine largeur du tableau de bord (`assets/lecolso-dashboard.png`, ratio 1888/941) encadrée 2px + légende.
2. **Chiffres** — 4 colonnes : 12 modules / 0 connexion requise / 1 fichier de base / 4 destinations de sauvegarde.
3. **Hors ligne** — grille 5fr/8fr, 3 points numérotés séparés par des filets (tout est local ; internet seulement pour l'activation ; mises à jour dès qu'une connexion apparaît).
4. **Les 12 modules** — grille 3 colonnes, chaque cellule : numéro accent 13px, titre 20px, description 15px, filet 2px en haut.
5. **Notes et bulletins** — 2 cartes (`.card` blanche, sans rayon) primaire/secondaire, puis 3 colonnes à filets (détection du niveau, moyennes figées, préréglages d'épreuves).
6. **Caisse et paie** — grille 6fr/6fr : texte + 4 tags contour à gauche, capture du journal de caisse (`assets/lecolso-caisse.png`, ratio 1780/883) + légende à droite.
7. **Sauvegarde** — grille 5fr/7fr, sous-grille 2×2 des destinations (disque, USB, Google Drive, SFTP).
8. **Licence et installation** — grille 6fr/6fr, 4 étapes numérotées.
9. **FAQ** — `<details>/<summary>` à filets, 5 questions, max-width 880px.
10. **Bande de clôture** — fond `#A33F00`, texte blanc, H2 2 lignes, paragraphe, 2 boutons fantômes blancs, note plateforme.
11. **Pied de page** — logo 22px + baseline à gauche, liens Mentions légales / Confidentialité / Contact à droite.

### 2. Informations (`Lecolso Informations.dc.html`)
Deux sections numérotées 01/02 en grille 4fr/8fr.
- **Mentions légales** : tableau `.table` (dénomination Teiik SARL, forme juridique, siège Cité Laurier 15 Faya Cocody Abidjan, RCCM CI-ABJ-03-2023-B12-03741, CC 2303061 H, directeur de la publication Emmanuel Koné, contact, site web) puis Hébergement (Hetzner Online GmbH via Dokploy, e-mails via Resend), Propriété intellectuelle (Accord de Bangui annexe VII + droit ivoirien), Licence d'utilisation, Responsabilité, Droit applicable (tribunaux d'Abidjan).
- **Confidentialité** : responsabilités respectives (loi ivoirienne n°2013-450, ARTCI), 4 cellules « ce qui reste sur votre poste », 3 points numérotés « seules connexions sortantes » (activation, mises à jour, sauvegarde cloud opt-in), cookies, conservation et droits des personnes.

### 3. Contact (`Lecolso Contact.dc.html`)
- 4 colonnes à filets : e-mail (contact@teiik.com) + site teiik.com ; téléphone +225 25 22 01 06 64 et WhatsApp +225 05 75 21 42 75 ; adresse ; horaires lundi–vendredi 8h–18h.
- Formulaire (grille 4fr/8fr) : établissement, nom du responsable, e-mail, téléphone (grille 2 colonnes), objet en contrôle segmenté (Démonstration / Devis-licences / Support technique), message (textarea 5 lignes), bouton « Envoyer la demande » + note de confidentialité.
- Bande `#A33F00` : appel téléphonique / WhatsApp.

## Interactions et comportement
- Navigation par ancres avec défilement fluide vers les sections de la landing ; liens inter-pages classiques.
- Liens `tel:` (numéro sans espaces) et `https://wa.me/<numéro sans indicatif formaté>` générés depuis le numéro affiché.
- FAQ : `<details>` natif, un marqueur masqué (`summary::-webkit-details-marker { display: none }`), curseur pointeur.
- Formulaire de contact : à implémenter côté serveur (Server Action + Zod, envoi Resend vers contact@teiik.com). Dans le prototype, la soumission est interceptée et remplace la note par un message de confirmation — reproduire : validation par champ, bouton désactivé pendant l'envoi, toast de succès (sonner), message d'erreur en français.
- Aucune animation dans le design : pas de parallaxe, pas d'apparition au défilement.
- Responsive : les grilles 3–4 colonnes doivent passer à 2 puis 1 colonne ; les blocs 5fr/7fr passent en pile. Les captures gardent leur ratio.
- Les deux boutons « Télécharger » pointent vers l'installateur Windows (`href` à brancher) ; prévoir une variante « bientôt disponible » (le prototype la porte comme option : CTA « Demander un accès anticipé » + note « Version Windows en préparation »).

## État
Très peu d'état : ouverture des `<details>` (natif), état du formulaire (valeurs, envoi en cours, succès/erreur). Rien d'autre n'est dynamique — le contenu peut être statique/SSG.

## Assets
- `assets/lecolso-logo.png` — logo « L » orange (500×500, fond transparent). Fourni par le client.
- `assets/lecolso-dashboard.png` — capture du tableau de bord de l'app (1888×941).
- `assets/lecolso-caisse.png` — capture du journal de caisse (1780×883).
- Police Archivo (Google Fonts, poids 400 et 800).
- Icônes : lucide-react si des icônes sont ajoutées (aucune dans le design actuel hors logo).
- Les zones d'image sont des emplacements `<image-slot>` dans le prototype : à remplacer par des `<Image>` Next.js.

## Fichiers de ce dossier
- `Lecolso Landing.dc.html`, `Lecolso Informations.dc.html`, `Lecolso Contact.dc.html` — les trois pages (références de design)
- `support.js`, `image-slot.js` — runtime du prototype, **à ne pas porter**
- `assets/` — logo et captures à réutiliser telles quelles
- `_ds/` — feuille de style du design system Modernist : source des tokens (couleurs, échelles, classes `.btn`, `.card`, `.tag`, `.table`, `.field`, `.input`, `.seg`, `.nav`, `.hr`)

## Points de vigilance
- Le contenu légal a été rédigé à partir de academy.teiik.com et adapté à Lecolso : **à faire relire** avant mise en ligne.
- Vérifier l'adresse e-mail de contact retenue pour Lecolso (contact@teiik.com dans le design).
- Ne pas remplacer `#A33F00` par l'orange vif sur les bandes : le contraste AA du texte blanc en dépend.
