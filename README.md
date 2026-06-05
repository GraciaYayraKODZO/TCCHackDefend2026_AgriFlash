# 🌱 AgriFlash

<p align="center">
  <img src="logo_Agriflash.png" alt="Logo AgriFlash" width="250">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Statut-PoC_fonctionnel-green" alt="Statut">
  <img src="https://img.shields.io/badge/Track-Agriculture_%26_Sécurité_Alimentaire-brightgreen" alt="Track">
  <img src="https://img.shields.io/badge/Licence-MIT-blue" alt="Licence">
  <img src="https://img.shields.io/badge/Déploiement-GitHub_Pages-orange" alt="Déploiement">
</p>

> **TCC Hack & Defend 2026** — Thème : _"Jeune togolais, code ta nation, défends ton avenir."_

AgriFlash est une plateforme web légère et ultra-rapide conçue pour lutter concrètement contre les pertes post-récolte au Togo. Elle connecte les producteurs agricoles togolais aux acheteurs locaux (restaurants, cantines, revendeurs, coopératives, particuliers) en moins de 60 secondes, avant que les produits ne se gâtent. Aucune installation, aucun compte requis — accessible directement depuis un navigateur, y compris sur mobile avec une connexion limitée.

---

## 🚀 Démo en ligne

👉 **[graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)**

Aucune installation requise. L'application charge automatiquement 20 surplus de démonstration couvrant les 5 régions du Togo.

---

## 📋 Table des matières

- [Problématique & Track](#-problématique--track)
- [Innovation](#-innovation)
- [Fonctionnalités principales](#-fonctionnalités-principales)
- [Prérequis](#-prérequis)
- [Installation & lancement](#-installation--lancement)
- [Données de démonstration](#-données-de-démonstration)
- [Identifiants de test](#-identifiants-de-test)
- [Stack technologique](#%EF%B8%8F-stack-technologique)
- [Structure du projet](#%EF%B8%8F-structure-du-projet)
- [Limitations actuelles](#%EF%B8%8F-limitations-actuelles)
- [Perspectives — Version future](#-perspectives--version-future)
- [Équipe](#-équipe)
- [Liens](#-liens)
- [Licence](#-licence)

---

## 🎯 Problématique & Track

**Track :** Agriculture & Sécurité Alimentaire

Chaque jour, des producteurs togolais voient leurs efforts réduits à néant faute d'acheteurs disponibles au moment précis de la récolte. Ces pertes massives aggravent l'insécurité alimentaire et freinent l'économie nationale.

> Le problème principal n'est pas l'absence d'acheteurs — c'est le **manque de mise en relation rapide** entre vendeurs et acheteurs au moment critique.

**Chiffres clés (sources officielles)**

| Indicateur                                 | Valeur  | Source                                     |
| ------------------------------------------ | ------- | ------------------------------------------ |
| Pertes de tomates en grande saison         | 42 %    | Thèse HAL — _Solanum lycopersicum_ au Togo |
| Pics de pertes en petite saison            | 90 %    | HAL / Université de Lomé                   |
| Togolais en insécurité alimentaire (2025)  | 625 000 | FAO — Rapport de Situation 2025            |
| Part de l'agriculture dans le PIB togolais | 40 %    | Finances AO / Conseil National du Crédit   |

---

## 💡 Innovation

AgriFlash apporte une réponse directe et immédiate à la perte post-récolte :

- **Publication en moins de 60 secondes** d'un surplus agricole géolocalisé
- **Analyse automatique du risque de perte** selon le niveau d'urgence (critique / urgent / normal)
- **Mise en relation directe** producteur–acheteur via WhatsApp, sans intermédiaire
- **Carte interactive** des surplus agrégés par région officielle du Togo
- **Zéro barrière d'entrée** — pas de compte, pas d'installation, fonctionne sur mobile avec connexion limitée

---

## 🎯 Pourquoi AgriFlash est différent ?

Contrairement aux plateformes agricoles classiques qui nécessitent une inscription, une application mobile ou un intermédiaire, AgriFlash permet :

- une publication immédiate en moins de 60 secondes ;
- une mise en relation directe via WhatsApp ;
- une utilisation sans compte utilisateur ;
- un fonctionnement sur smartphone même avec une connexion limitée ;
- une visualisation nationale des surplus agricoles.

L'objectif est de sauver les produits avant leur détérioration, et non simplement de publier des annonces.

---

## 🚀 Fonctionnalités principales

### 📊 Dashboard d'impact national

- 6 compteurs animés : surplus actifs, critiques, kg sauvables, FCFA préservables, repas potentiels, régions couvertes
- 3 indicateurs bonus : Indice AgriFlash, temps moyen de sauvetage, top 3 produits menacés

### 🗺️ Carte interactive du Togo (Leaflet.js)

- Visualisation géographique agrégée par région officielle (Maritime, Plateaux, Centrale, Kara, Savanes)
- Marqueurs colorés selon l'urgence, taille proportionnelle aux kg disponibles
- Popup par région : nombre de surplus, kg disponibles, liste des produits avec leur ville

### 🤖 Analyse intelligente AgriFlash (IA métier)

- Calcul du risque de perte estimé : 92 % (critique) / 68 % (urgent) / 25 % (normal)
- Recommandation d'action ciblée selon la région et le niveau d'urgence

### 📋 Catalogue des surplus (20 annonces de démonstration)

- Badge d'urgence : 🔴 Critique (< 24h) / 🟠 Urgent (< 48h) / 🟢 Normal
- Filtres combinés : région, catégorie, urgence, recherche textuelle
- Tri automatique par urgence décroissante — couverture nationale : 5 régions

### 🔔 Ticker dynamique

- Généré automatiquement depuis les surplus critiques et urgents réels
- Déduplication par produit/région — aucune répétition artificielle

### ➕ Publication d'un surplus

- Région et ville stockées séparément (cohérence totale avec les filtres et la carte)
- Sélection de ville dépendante de la région
- Coordonnées GPS automatiques selon la ville sélectionnée
- Validation inline explicite sur chaque champ obligatoire

### 📈 Graphiques d'impact (Chart.js)

- Pertes évitées vs pertes habituelles sur 6 mois
- Connexions producteur–acheteur par mois
- Kg sauvés sur 7 jours (calculé depuis les données réelles)
- Répartition des surplus par catégorie

> ⚠️ Les graphiques de projection affichent explicitement la mention _"Données simulées à des fins de démonstration"_.

---

## 📋 Prérequis

**Système d'exploitation :** Windows, macOS ou Linux (toute version récente)

**Navigateur web (obligatoire) :**

| Navigateur      | Version minimale recommandée |
| --------------- | ---------------------------- |
| Google Chrome   | 90+                          |
| Mozilla Firefox | 88+                          |
| Microsoft Edge  | 90+                          |
| Safari          | 14+                          |

**Connexion internet :** requise pour charger les bibliothèques externes via CDN (Leaflet.js, Chart.js). Une connexion 3G suffit.

**Outils optionnels (pour lancement local) :**

| Outil                 | Usage                                         | Version               |
| --------------------- | --------------------------------------------- | --------------------- |
| VS Code               | Éditeur + extension Live Server               | Toute version récente |
| Extension Live Server | Lancement local avec rechargement automatique | 5.7+                  |
| Python                | Alternative pour serveur local                | 3.x                   |
| Git                   | Cloner le dépôt                               | 2.x                   |

> Aucun Node.js, aucune base de données, aucun framework n'est requis.

---

## ⚙️ Installation & lancement

### Option 1 — Accès direct en ligne _(recommandé)_

👉 **[https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)**

Aucune installation. Accessible immédiatement depuis tout navigateur.

---

### Option 2 — Exécution en local

**Étape 1 : Cloner le dépôt**

```bash
git clone https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash.git
```

**Étape 2 : Accéder au dossier**

```bash
cd TCCHackDefend2026_AgriFlash
```

**Étape 3 : Lancer l'application**

**Option A — Avec VS Code :**

1. Ouvrir le dossier dans VS Code
2. Installer l'extension **Live Server** (si ce n'est pas déjà fait)
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. L'application s'ouvre sur `http://localhost:5500`

**Option B — Avec Python :**

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

**Option C — Directement :**

Double-cliquer sur `index.html`

> ⚠️ Avec le protocole `file://`, certaines fonctionnalités (carte Leaflet.js) peuvent ne pas fonctionner correctement. Les options A ou B sont recommandées.

---

## 🔐 Données de démonstration

### Identifiants de test

**Aucune authentification requise.** L'application est accessible directement, sans création de compte.

L'application charge automatiquement **20 surplus réalistes** couvrant les 5 régions officielles du Togo :

| Région   | Villes couvertes                      | Produits représentés                                     |
| -------- | ------------------------------------- | -------------------------------------------------------- |
| Maritime | Lomé, Agoè-Nyivé, Tsévié              | Tomates, laitues, épinards, bananes plantain, concombres |
| Plateaux | Atakpamé, Agou Nyogbo, Kpalimé, Danyi | Tomates, piments, choux, mangues                         |
| Centrale | Sokodé, Blitta                        | Tomates, gombos, aubergines                              |
| Kara     | Kara, Pagouda, Kozah                  | Piments rouges, carottes, manioc                         |
| Savanes  | Dapaong, Cinkassé                     | Tomates, ananas, oignons                                 |

Répartition : ~75 % de produits très périssables (critique/urgent), ~25 % de produits à durée de vie plus longue.

**Pour tester la publication :**

1. Aller sur l'onglet **"+ Publier un surplus"**
2. Sélectionner une région → choisir la ville dans la liste déroulante
3. Remplir les champs et valider

Le surplus apparaît immédiatement dans le catalogue, sur la carte, dans les graphiques et dans le ticker.

---

## ⚠️ Limitations actuelles

Cette version est un **Proof of Concept (PoC) fonctionnel**. Aucun backend ni base de données n'est utilisé dans cette démonstration.

- Les surplus publiés via le formulaire sont stockés en **localStorage** (persistance locale par navigateur uniquement). Cette limitation sera adressée dans une version avec backend.
- Les 20 surplus de démonstration sont des données statiques embarquées dans `app.js`.
- Les graphiques de projection sont basés sur des données simulées réalistes — mention explicite dans chaque graphique.
- Pas de notification push réelle — les toasts sont simulés côté client.
- L'analyse IA repose sur des règles métier (niveau d'urgence) — un vrai modèle prédictif est prévu en V2.

---

## 🛠️ Stack technologique

Architecture volontairement allégée pour garantir une accessibilité maximale, y compris sur réseaux mobiles limités en zone rurale.

| Technologie               | Rôle                                      |
| ------------------------- | ----------------------------------------- |
| HTML5                     | Structure sémantique de l'interface       |
| CSS3 Flexbox & Grid       | Mise en forme responsive et animations    |
| JavaScript Vanilla (ES6+) | Logique métier, filtres, IA, localStorage |
| Leaflet.js (CDN)          | Carte interactive du Togo                 |
| Chart.js v4 (CDN)         | Graphiques d'impact                       |
| GitHub Pages              | Hébergement et déploiement continu        |

---

## 🗂️ Structure du projet

```
TCCHackDefend2026_AgriFlash/
├── logo_Agriflash.png  # Logo officiel du projet
├── index.html          # Vue principale : dashboard, carte, surplus, statistiques et mise en relation
├── add-product.html    # Formulaire de publication (région + ville séparés, validation inline)
├── style.css           # Charte graphique unifiée (responsive, animations, modals)
├── app.js              # Logique JS : données, dashboard, indicateurs, carte, IA, graphiques, filtres
└── README.md           # Documentation du projet

```

---

## 🔭 Perspectives — Version future

| Domaine                    | Fonctionnalités prévues                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Backend & Données**      | API REST (Node.js / Laravel), MySQL/PostgreSQL, authentification JWT, tableau de bord admin                |
| **Fonctionnalités métier** | Notifications WhatsApp automatiques (Twilio / 360dialog), géolocalisation GPS réelle, réservation en ligne |
| **Mobile & Accessibilité** | PWA ou React Native, mode hors ligne, interface en Éwé / Kabiyè, SMS fallback                              |
| **Analytics & IA**         | Prédiction des surplus par zone et saison, recommandations personnalisées, intégration données météo       |

---

## 👤 Équipe

| Nom                    | Rôle                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **KODZO Yayra Gracia** | Conceptrice, développeuse et déployeuse du projet AgriFlash — Développement Web & Mobile, iPNet Institute of Technology, Lomé |

---

## 🔗 Liens

|                         |                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 📁 Dépôt GitHub         | [TCCHackDefend2026_AgriFlash](https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash)                           |
| 🌐 Application en ligne | [graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash) |

---

## 🏆 Impact attendu

| Dimension                | Bénéfice concret                                                  |
| ------------------------ | ----------------------------------------------------------------- |
| **Producteurs**          | Réduction des pertes post-récolte, augmentation des revenus       |
| **Acheteurs**            | Accès immédiat aux surplus locaux à prix réduit                   |
| **Sécurité alimentaire** | Meilleure disponibilité des denrées au niveau local               |
| **Numérique**            | Valorisation des outils web au service de l'agriculture togolaise |

## 📄 Licence

Distribué sous licence MIT.

---

<p align="center">
  TCC Hack & Defend 2026 — iPNet Institute of Technology, Lomé, Togo 🇹🇬
</p>
