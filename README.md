# AgriFlash — Plateforme agricole commerciale du Togo

**Connecter producteurs et acheteurs. Sauver les recoltes. Zero perte post-recolte.**

[Voir la demo en ligne](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)

---

## Le probleme que nous resolvons

Chaque jour au Togo, des tonnes de produits agricoles sont perdues faute d'acheteurs disponibles au moment critique de la recolte.

| Indicateur | Valeur | Source |
|---|---|---|
| Tomates perdues en grande saison | 42% | These HAL, Universite de Lome |
| Pertes en petite saison | 90% | Ministere de l'Agriculture du Togo |
| Togolais en insecurite alimentaire | 625 000 | FAO 2025 |
| Part de l'agriculture dans le PIB | 40% | INSEED / PNDES |

---

## Notre solution

AgriFlash est une plateforme web legere qui permet :

- La **publication d'un surplus en moins de 60 secondes** depuis un telephone
- La **mise en relation directe** producteur–acheteur via WhatsApp, sans intermediaire
- La **visualisation cartographique** des surplus actifs par region du Togo
- Un **acces sans compte utilisateur** — zero barriere d'entree

---

## Demarrage rapide

### Option 1 — Acces direct (recommande)

```
https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash
```

### Option 2 — En local avec VS Code

```bash
git clone https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash.git
cd TCCHackDefend2026_AgriFlash
# Ouvrir index.html avec l'extension Live Server
```

### Option 3 — Serveur Python

```bash
python -m http.server 8000
# Ouvrir http://localhost:8000
```

> La carte Leaflet.js necessite un serveur HTTP (options 1, 2 ou 3). Le double-clic sur index.html peut alterer la carte.

---

## Structure du projet

```
AgriFlash_V2/
├── index.html              # Page principale
├── add-product.html        # Formulaire de publication
├── style.css               # Feuille de styles unifiee
├── app.js                  # Logique JS : donnees, carte, filtres, carousel
├── logo_Agriflash.png      # Logo officiel
├── favicon_agriflash.png   # Favicon
└── README.md               # Documentation
```

---

## Fonctionnalites V2

### Page d'accueil (`index.html`)

**Section 1 — Hero**
Visuel humain-centric avec overlay vert profond (#042f21). Carte d'impact en direct avec 6 compteurs animes.

**Section 2 — Probleme**
Layout split : photo de marche a gauche, stats officielles chiffrees a droite sur fond #042f21.

**Section 3 — Comment ca marche**
4 etapes en grille sur fond #042f21 avec photos illustratives et numerotation 01/02/03/04.

**Section 4 — Qui peut acheter ?**
Carousel 12 cartes responsive avec navigation boutons + points. Profils : commercantes, restaurateurs, hotels, cantines, transformateurs, exportateurs, supermarches, revendeuses, grossistes, particuliers, hopitaux, cafeterias.

**Section 5 — Carte Leaflet.js**
Carte interactive haute definition du Togo (520px hauteur), marqueurs colores par urgence (rouge/orange/vert), popups avec contact direct.

**Section 6 — Marketplace**
Barre de recherche + filtres directement au-dessus de la grille produits. 21 surplus de demonstration avec badges de priorite.

**Section 7 — CTA Final**
Fond paysage aerien avec overlay #042f21. Appel a l'action double.

### Formulaire (`add-product.html`)

- Validation stricte : quantite **obligatoirement > 0** — blocage total si 0 ou vide
- Bloc d'alerte visible si tentative de publication a 0 kg
- Validation temps reel sur tous les champs obligatoires
- Barre de progression dynamique
- Upload photo avec drag & drop et apercu
- Persistance localStorage (PoC — a remplacer par backend en V2)

---

## Base de donnees produits (21 annonces)

| Priorite | Produit | Badge |
|---|---|---|
| Critique | Tomates, Piment rouge, Piment vert, Ademe, Gboma, Oignons, Gombo, Aubergines | Rouge |
| Urgent | Mangues, Ananas, Oeufs de poule, Oeufs de caille | Orange |
| Normal | Mais, Niebe, Igname, Manioc, Banane plantain | Vert |
| Normal | Puree de tomate, Piment en poudre, Jus de fruits, Miel | Vert |

> Gboma : **une seule entree** dans la base de donnees.

---

## Stack technologique

| Technologie | Role |
|---|---|
| HTML5 | Structure semantique |
| CSS3 (Flexbox + Grid) | Mise en forme responsive, animations |
| JavaScript Vanilla ES6+ | Logique metier, filtres, carousel, localStorage |
| Leaflet.js (CDN) | Carte interactive du Togo |
| Google Fonts (Inter) | Typographie |
| GitHub Pages | Hebergement et deploiement continu |

**Aucun framework, aucun Node.js, aucune base de donnees requise.**
Fonctionne sur mobile avec une connexion 3G.

---

## Perspectives V2 (backend)

| Domaine | Fonctionnalites prevues |
|---|---|
| Backend | API REST (Node.js / Laravel), MySQL/PostgreSQL, JWT |
| Notifications | WhatsApp automatique (Twilio / 360dialog) |
| Mobile | PWA ou React Native, mode hors ligne |
| Multilinguisme | Interface en Ewe / Kabiye / SMS fallback |
| IA | Prediction des surplus par zone et saison |

---

## Couleurs officielles

| Variable | Valeur | Usage |
|---|---|---|
| `--green-900` | `#042f21` | Navbar, hero, footer, sections sombres |
| `--orange-600` | `#e47302` | CTA principaux, badges urgents, accents |
| `--red-600` | `#dc2626` | Badges critiques |

---

## Equipe

| Nom | Role |
|---|---|
| KODZO Yayra Gracia | Conceptrice, developpeure et deployeuse — Developpement Web & Mobile |

---

## Licence

MIT — Libre d'utilisation avec attribution.
