# 🌱 AgriFlash

**AgriFlash** est une plateforme web de gestion des surplus agricoles permettant aux producteurs togolais de publier rapidement leurs produits excédentaires et d'être mis en relation avec des acheteurs locaux (restaurants, cantines, revendeurs, coopératives, particuliers) avant perte ou gaspillage.

> Un producteur peut publier un surplus en moins de 60 secondes.

---

## Problématique & Track

**Problématique :** Chaque année, des milliers de producteurs agricoles togolais perdent des produits périssables faute d'acheteurs disponibles à temps ou de canaux de distribution rapides. Ces pertes post-récolte représentent un manque à gagner économique majeur et aggravent l'insécurité alimentaire.

**Track :** Agriculture & Sécurité Alimentaire — TCC Hack & Defend 2026  
**Thème :** *"Jeune togolais, code ta nation, défends ton avenir."*

---

## Prérequis

| Élément | Détail |
|---|---|
| Navigateur | Chrome, Firefox, Edge (version récente) |
| Connexion internet | Requise pour l'accès en ligne |
| Outils locaux | Aucun — projet 100% front-end (HTML/CSS/JS) |
| Serveur local (optionnel) | Live Server (VS Code) ou tout serveur HTTP statique |

> Aucune installation de Node.js, Python ou base de données n'est nécessaire.

---

## Installation

### Option 1 — Accès en ligne (recommandé)

Le projet est déployé sur GitHub Pages, accessible directement :

👉 **[https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)**

Aucune installation requise.

### Option 2 — Exécution en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash.git

# 2. Accéder au dossier
cd TCCHackDefend2026_AgriFlash
```

Puis ouvrir `index.html` directement dans le navigateur **ou** lancer un serveur local :

```bash
# Avec VS Code : clic droit sur index.html → "Open with Live Server"

# Avec Python (si installé)
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

---

## Lancement de l'application

1. Ouvrir `index.html` dans le navigateur (ou accéder à l'URL GitHub Pages)
2. La page d'accueil affiche les surplus disponibles avec filtres par région, urgence et catégorie
3. Cliquer sur **"Publier un surplus"** pour accéder au formulaire de publication
4. Cliquer sur **"Contacter"** sur une carte produit pour voir les détails et le lien WhatsApp

---

## Identifiants de test

L'application ne nécessite **aucune authentification**. Elle est accessible sans compte.

> **Note connue :** les surplus publiés via le formulaire sont stockés en `localStorage` (session navigateur). Ils disparaissent lors d'un rechargement complet. Les données de démonstration (8 produits togolais réalistes) sont permanentes et affichées par défaut. Cette limitation est documentée et sera adressée dans une version avec backend.

---

## Fonctionnalités principales

- 📋 **Consultation** des surplus disponibles avec badge d'urgence (Critique / Urgent / Normal)
- 🔍 **Filtres** par région, catégorie, niveau d'urgence et recherche textuelle
- ➕ **Publication** d'un nouveau surplus via formulaire (nom, quantité, prix, région, contact)
- 📞 **Mise en relation** directe par WhatsApp ou appel téléphonique
- 📱 Interface responsive (mobile et desktop)

---

## Stack technologique

| Technologie | Rôle |
|---|---|
| HTML5 | Structure de l'interface |
| CSS3 | Mise en forme et design responsive |
| JavaScript (Vanilla) | Logique métier, filtres, localStorage |
| GitHub Pages | Hébergement et déploiement |

---

## Membre de l'équipe

| Nom | Rôle | Filière |
|---|---|---|
| KODZO Yayra Gracia | Développeuse — conception, développement, déploiement | Développement Web & Mobile — iPNet Institute of Technology |

---

## Liens

- 🔗 **Dépôt GitHub :** [TCCHackDefend2026_AgriFlash](https://github.com/GraciaYayraKODZO/TCCHackDefend2026_AgriFlash)
- 🌐 **Application en ligne :** [graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash](https://graciayayrakodzo.github.io/TCCHackDefend2026_AgriFlash)

---

*TCC Hack & Defend 2026 — iPNet Institute of Technology, Lomé, Togo*
