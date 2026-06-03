# 🌱 AgriFlash — Plateforme de lutte contre les pertes post-récolte au Togo

> **Track :** Agriculture & Sécurité Alimentaire — TCC Hack & Defend 2026
> **Thème :** _"Jeune togolais, code ta nation, défends ton avenir."_
> **Statut :** ![Statut](https://img.shields.io/badge/Statut-PoC%20fonctionnel-green)

**AgriFlash** est une plateforme web légère et ultra-rapide conçue pour lutter concrètement contre les pertes post-récolte au Togo. Elle connecte les producteurs agricoles togolais aux acheteurs locaux (restaurants, cantines, revendeurs, coopératives, particuliers) **en moins de 60 secondes**, avant que les produits ne se gâtent.

---

## 🎯 Problématique

Chaque année, des milliers de producteurs togolais voient leurs efforts réduits à néant, faute d'acheteurs disponibles au moment précis de la récolte. Ces pertes massives aggravent l'insécurité alimentaire et freinent l'économie nationale.

### 📊 Chiffres clés (sources officielles)

| Indicateur                                 | Valeur      | Source                                     |
| ------------------------------------------ | ----------- | ------------------------------------------ |
| Pertes de tomates en grande saison         | **42 %**    | Thèse HAL — _Solanum lycopersicum_ au Togo |
| Pics de pertes en petite saison            | **90 %**    | HAL / Université de Lomé                   |
| Togolais en insécurité alimentaire (2025)  | **625 000** | FAO — Rapport de Situation 2025            |
| Part de l'agriculture dans le PIB togolais | **40 %**    | Finances AO / Conseil National du Crédit   |

---

## 📋 Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge, Safari — version récente)
- Connexion internet pour charger les bibliothèques externes (Leaflet.js, Chart.js via CDN)
- Aucune installation de Node.js, Python ou base de données n'est nécessaire

## 🔐 Authentification

Aucune authentification requise. L'application est accessible directement sans création de compte.

---

## 🚀 Fonctionnalités principales

### 📊 Dashboard d'impact national (temps réel simulé)

- Surplus actifs, surplus critiques, kg sauvables, FCFA préservables, repas potentiels, régions couvertes
- Compteurs animés au chargement de la page

### 🗺️ Carte interactive du Togo (Leaflet.js)

- Visualisation géographique des surplus par région
- Marqueurs colorés selon le niveau d'urgence (rouge / orange / vert)
- Popup par région : nombre de surplus, kg disponibles, liste des produits

### 🤖 Analyse intelligente AgriFlash (IA métier)

- Bouton **🤖 IA** sur chaque carte surplus
- Calcul du risque de perte estimé (92 % / 68 % / 25 %)
- Recommandation d'action ciblée selon la région et le niveau d'urgence

### 📋 Consultation des surplus disponibles

- Badge d'urgence : 🔴 Critique (< 24h) / 🟠 Urgent (< 48h) / 🟢 Normal
- Filtres combinés : région, catégorie, urgence, recherche textuelle

### 🛒 Section Demandes en attente

- Acheteurs actifs recherchant des produits spécifiques
- Réponse directe par WhatsApp

### 🎉 Confirmation d'impact post-mise en relation

- Après clic sur WhatsApp : affichage de l'impact généré (kg sauvés, repas préservés, FCFA protégés)

### 📈 Graphiques d'impact (Chart.js)

- Pertes évitées vs pertes habituelles sur 6 mois
- Connexions producteur–acheteur par mois
- Kg sauvés sur 7 jours (cumulatif)
- Répartition des surplus par catégorie (donut)

### ➕ Publication d'un surplus

- Formulaire complet : nom, catégorie, quantité, prix, région, urgence, acheteur cible, contact
- Stockage en `localStorage`, visible immédiatement dans la liste

### 🔔 Notifications live simulées

- Bandeau défilant avec les surplus urgents
- Toast notifications toutes les 5 secondes (nouvelles publications, connexions réussies)

### 📱 Interface responsive

- Compatible mobile, tablette et desktop

---

## 🛠️ Stack technologique

Pour garantir une accessibilité maximale même en zone rurale sur des réseaux mobiles limités, l'architecture a été volontairement optimisée sans framework lourd.

| Technologie               | Rôle                                      |
| ------------------------- | ----------------------------------------- |
| HTML5                     | Structure sémantique de l'interface       |
| CSS3 Flexbox & Grid       | Mise en forme responsive et animations    |
| JavaScript Vanilla (ES6+) | Logique métier, filtres, IA, localStorage |
| Leaflet.js (CDN)          | Carte interactive du Togo                 |
| Chart.js v4 (CDN)         | Graphiques d'impact                       |
| GitHub Pages              | Hébergement et déploiement continu        |

---

## ⚙️ Installation & lancement

### Option 1 — Accès direct en ligne _(recommandé)_

👉 **[https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)**

Aucune installation requise.

### Option 2 — Exécution en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash.git

# 2. Accéder au dossier
cd TCCHackDefend2026_AgriFlash
```

Puis ouvrir `index.html` dans le navigateur, ou lancer un serveur local :

```bash
# VS Code : clic droit sur index.html → "Open with Live Server"

# Python (si installé)
python -m http.server 8000
# → http://localhost:8000
```

---

## 🔐 Données de test (pour le jury)

Le prototype charge automatiquement 5 lots de démonstration réalistes modélisant différentes régions du Togo :

- **Tomates** — Agoè, Lomé
- **Gombos** — Sokodé
- **Piments** — Atakpamé
- **Manioc** — Pagouda, Kara
- **Bananes Plantains** — Bè, Lomé

Pour tester la publication : onglet **"+ Publier un surplus"** → remplir les champs → valider. Le lot apparaît immédiatement sur la carte et dans le catalogue. Un bouton **↺ Réinitialiser** est disponible pour rétablir l'affichage d'origine.

---

## 🗂️ Structure du projet

```
TCCHackDefend2026_AgriFlash/
├── index.html          # Vue principale : dashboard, carte, surplus, demandes, graphiques
├── add-product.html    # Formulaire de publication d'un surplus
├── style.css           # Charte graphique unifiée (responsive, animations, modals)
└── app.js              # Logique JS : données, dashboard, carte, IA, graphiques, filtres
```

---

## ⚠️ Notes connues (limites du PoC)

- Les surplus publiés via le formulaire sont stockés en `localStorage` (persistance locale par navigateur). Cette limitation sera adressée dans une version avec backend (API REST + base de données relationnelle).
- Les données de démonstration (8 produits togolais réalistes) sont permanentes.
- Les statistiques du dashboard et les graphiques sont des projections basées sur des données simulées réalistes à des fins de démonstration.

---

## 👤 Membre de l'équipe

| Nom                    | Rôle                                                  | Filière                                                          |
| ---------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| **KODZO Yayra Gracia** | Développeuse — conception, développement, déploiement | Développement Web & Mobile — iPNet Institute of Technology, Lomé |

---

## 🔗 Liens

|                         |                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 📁 Dépôt GitHub         | [TCCHackDefend2026_AgriFlash](https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash)                           |
| 🌐 Application en ligne | [graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash) |

---

## 📄 Licence

Distribué sous licence MIT.

---

_TCC Hack & Defend 2026 — iPNet Institute of Technology, Lomé, Togo 🇹🇬_
