/* =========================================
   AgriFlash — app.js
   TCC Hack & Defend 2026
   ========================================= */

/* ---- CONVERSION UNITÉS → KG ----
   Valeurs estimées moyennes — à affiner selon le type de produit dans une version future.
   kg        : 1 (référence)
   tonnes    : 1 000 kg (exact)
   sacs      : ~50 kg (sac standard agricole au Togo)
   caisses   : ~20 kg (caisse en bois ou plastique standard)
   régimes   : ~15 kg (régime de plantain ou banane moyen)
   unités    : ~0.3 kg (estimation générique, variable selon produit)
   ---------------------------------------- */
const CONVERSION = {
  kg: 1,
  tonnes: 1000,
  sacs: 50,
  caisses: 20,
  régimes: 15,
  unités: 0.3,
};

/* ---- COORDONNÉES PAR RÉGION OFFICIELLE ---- */
const REGION_COORDS = {
  Maritime: [6.1319, 1.2228],
  Plateaux: [7.5333, 1.1333],
  Centrale: [8.9833, 1.1333],
  Kara: [9.5511, 1.1861],
  Savanes: [10.8623, 0.2056],
};

/* ---- VILLES PAR RÉGION avec coordonnées ---- */
const VILLES_PAR_REGION = {
  Maritime: [
    { nom: "Lomé", lat: 6.1319, lng: 1.2228 },
    { nom: "Agoè-Nyivé", lat: 6.1552, lng: 1.205 },
    { nom: "Tsévié", lat: 6.4253, lng: 1.2133 },
    { nom: "Vogan", lat: 6.318, lng: 1.535 },
    { nom: "Tabligbo", lat: 6.5856, lng: 1.5019 },
    { nom: "Aneho", lat: 6.2289, lng: 1.5967 },
  ],
  Plateaux: [
    { nom: "Atakpamé", lat: 7.5311, lng: 1.1239 },
    { nom: "Kpalimé", lat: 6.9, lng: 0.63 },
    { nom: "Badou", lat: 7.5833, lng: 0.6 },
    { nom: "Agou Nyogbo", lat: 6.9, lng: 0.72 },
    { nom: "Danyi", lat: 7.2, lng: 0.8 },
    { nom: "Notsé", lat: 6.9569, lng: 1.1697 },
  ],
  Centrale: [
    { nom: "Sokodé", lat: 8.9833, lng: 1.1333 },
    { nom: "Blitta", lat: 8.3167, lng: 0.9833 },
    { nom: "Sotouboua", lat: 8.5667, lng: 0.9833 },
    { nom: "Tchamba", lat: 9.0333, lng: 1.4167 },
  ],
  Kara: [
    { nom: "Kara", lat: 9.5511, lng: 1.1861 },
    { nom: "Niamtougou", lat: 9.7667, lng: 1.1 },
    { nom: "Pagouda", lat: 9.75, lng: 1.35 },
    { nom: "Kozah", lat: 9.57, lng: 1.2 },
    { nom: "Bassar", lat: 9.25, lng: 0.7833 },
  ],
  Savanes: [
    { nom: "Dapaong", lat: 10.8623, lng: 0.2056 },
    { nom: "Cinkassé", lat: 11.002, lng: 0.003 },
    { nom: "Mango", lat: 10.3667, lng: 0.4667 },
    { nom: "Tandjouaré", lat: 10.6667, lng: 0.3 },
  ],
};

/* ---- MAPPING VILLE → RÉGION (compatibilité ascendante) ---- */
const VILLE_REGION = {
  Lomé: "Maritime",
  "Agoè-Nyivé": "Maritime",
  Tsévié: "Maritime",
  Vogan: "Maritime",
  Tabligbo: "Maritime",
  Aneho: "Maritime",
  Atakpamé: "Plateaux",
  Kpalimé: "Plateaux",
  Badou: "Plateaux",
  "Agou Nyogbo": "Plateaux",
  Danyi: "Plateaux",
  Notsé: "Plateaux",
  Sokodé: "Centrale",
  Blitta: "Centrale",
  Sotouboua: "Centrale",
  Tchamba: "Centrale",
  Kara: "Kara",
  Niamtougou: "Kara",
  Pagouda: "Kara",
  Kozah: "Kara",
  Bassar: "Kara",
  Dapaong: "Savanes",
  Cinkassé: "Savanes",
  Mango: "Savanes",
  Tandjouaré: "Savanes",
  Agoè: "Maritime",
  Maritime: "Maritime",
  Plateaux: "Plateaux",
  Centrale: "Centrale",
  Savanes: "Savanes",
};

function getRegionOfficielle(r) {
  return VILLE_REGION[r] || r;
}
function getCoordsRegion(region) {
  const off = getRegionOfficielle(region);
  return REGION_COORDS[off] || null;
}
function getCoordsVille(ville, region) {
  const regionOff = getRegionOfficielle(region);
  const villes = VILLES_PAR_REGION[regionOff] || [];
  const match = villes.find((v) => v.nom === ville);
  if (match) return [match.lat, match.lng];
  return getCoordsRegion(region);
}

/* ---- DONNÉES SURPLUS ---- */
const surplusData = [
  {
    id: 1,
    emoji: "🍅",
    produit: "Tomates mûres",
    categorie: "legumes",
    quantite: "850 kg",
    prixBrut: 382500,
    prix: "450 FCFA/kg",
    region: "Maritime",
    ville: "Agoè-Nyivé",
    urgence: "critique",
    idealPour: "Restaurants / Cantines",
    description:
      "Tomates bien mûres récoltées ce matin. À écouler sous 24h — prix négociable pour grosse quantité.",
    vendeur: "Koffi Amégah",
    telephone: "+228 90 00 11 22",
    contact: "WhatsApp",
    lat: 6.137,
    lng: 1.212,
    kgNum: 850,
  },
  {
    id: 2,
    emoji: "🥬",
    produit: "Laitues fraîches",
    categorie: "legumes",
    quantite: "120 kg",
    prixBrut: 72000,
    prix: "600 FCFA/kg",
    region: "Maritime",
    ville: "Agoè-Nyivé",
    urgence: "critique",
    idealPour: "Restaurants / Hôtels",
    description:
      "Laitues coupées hier soir. Se flétrissent rapidement — vente urgente.",
    vendeur: "Yawa Agbeko",
    telephone: "+228 97 88 99 00",
    contact: "WhatsApp",
    lat: 6.141,
    lng: 1.218,
    kgNum: 120,
  },
  {
    id: 3,
    emoji: "🍅",
    produit: "Tomates cerises",
    categorie: "legumes",
    quantite: "200 kg",
    prixBrut: 140000,
    prix: "700 FCFA/kg",
    region: "Maritime",
    ville: "Lomé",
    urgence: "critique",
    idealPour: "Restaurants / Supermarchés",
    description:
      "Tomates cerises premium. Récoltées hier. Conditionnées en plateaux.",
    vendeur: "Mawuli Dossou",
    telephone: "+228 91 55 66 77",
    contact: "WhatsApp",
    lat: 6.121,
    lng: 1.225,
    kgNum: 200,
  },
  {
    id: 4,
    emoji: "🥒",
    produit: "Concombres frais",
    categorie: "legumes",
    quantite: "3 caisses",
    prixBrut: 18000,
    prix: "6 000 FCFA/caisse",
    region: "Maritime",
    ville: "Tsévié",
    urgence: "urgent",
    idealPour: "Restaurants / Cantines",
    description:
      "Concombres bien fermes, sans pesticides. À consommer sous 48h.",
    vendeur: "Afua Norvor",
    telephone: "+228 92 33 44 55",
    contact: "Appel",
    lat: 6.425,
    lng: 1.213,
    kgNum: 60,
  },
  {
    id: 5,
    emoji: "🥬",
    produit: "Épinards frais",
    categorie: "legumes",
    quantite: "40 kg",
    prixBrut: 32000,
    prix: "800 FCFA/kg",
    region: "Maritime",
    ville: "Agoè-Nyivé",
    urgence: "critique",
    idealPour: "Restaurants / Hôtels",
    description:
      "Épinards cueillis ce matin. Durée de vie max 24h — contact immédiat requis.",
    vendeur: "Kossi Agbelie",
    telephone: "+228 90 99 00 11",
    contact: "WhatsApp",
    lat: 6.155,
    lng: 1.205,
    kgNum: 40,
  },
  {
    id: 6,
    emoji: "🍌",
    produit: "Bananes plantain mûres",
    categorie: "fruits",
    quantite: "15 régimes",
    prixBrut: 37500,
    prix: "2 500 FCFA/régime",
    region: "Maritime",
    ville: "Lomé",
    urgence: "urgent",
    idealPour: "Restaurants / Cantines",
    description: "Plantains à maturité idéale. Délai max 48h.",
    vendeur: "Edzodzi Klutse",
    telephone: "+228 97 22 33 44",
    contact: "WhatsApp",
    lat: 6.118,
    lng: 1.228,
    kgNum: 225,
  },
  {
    id: 7,
    emoji: "🍅",
    produit: "Tomates — grande récolte",
    categorie: "legumes",
    quantite: "1 200 kg",
    prixBrut: 480000,
    prix: "400 FCFA/kg",
    region: "Plateaux",
    ville: "Atakpamé",
    urgence: "critique",
    idealPour: "Transformateurs / Cantines",
    description:
      "Surplus massif après pic de récolte. Risque de perte totale sous 24h.",
    vendeur: "Edem Kpakpo",
    telephone: "+228 93 44 55 66",
    contact: "WhatsApp",
    lat: 7.531,
    lng: 1.124,
    kgNum: 1200,
  },
  {
    id: 8,
    emoji: "🍅",
    produit: "Tomates bio — Agou",
    categorie: "legumes",
    quantite: "320 kg",
    prixBrut: 192000,
    prix: "600 FCFA/kg",
    region: "Plateaux",
    ville: "Agou Nyogbo",
    urgence: "critique",
    idealPour: "Restaurants / Supermarchés",
    description:
      "Tomates cultivées en agriculture naturelle à Agou. Qualité exceptionnelle, récoltées ce matin.",
    vendeur: "Mawuli Kodjovi",
    telephone: "+228 93 00 11 22",
    contact: "WhatsApp",
    lat: 6.9,
    lng: 0.72,
    kgNum: 320,
  },
  {
    id: 9,
    emoji: "🌶️",
    produit: "Piments frais",
    categorie: "condiments",
    quantite: "80 kg",
    prixBrut: 48000,
    prix: "600 FCFA/kg",
    region: "Plateaux",
    ville: "Kpalimé",
    urgence: "urgent",
    idealPour: "Restaurants / Revendeurs",
    description:
      "Piments locaux bien fermes, production sans traitement chimique.",
    vendeur: "Akua Mensah",
    telephone: "+228 93 44 55 88",
    contact: "WhatsApp",
    lat: 6.9,
    lng: 0.63,
    kgNum: 80,
  },
  {
    id: 10,
    emoji: "🥦",
    produit: "Choux frais",
    categorie: "legumes",
    quantite: "150 kg",
    prixBrut: 75000,
    prix: "500 FCFA/kg",
    region: "Plateaux",
    ville: "Atakpamé",
    urgence: "urgent",
    idealPour: "Cantines / Marchés",
    description:
      "Choux récoltés avant-hier. Encore bien croquants. À écouler rapidement.",
    vendeur: "Kofi Mensah",
    telephone: "+228 93 22 11 00",
    contact: "WhatsApp",
    lat: 7.525,
    lng: 1.13,
    kgNum: 150,
  },
  {
    id: 11,
    emoji: "🥭",
    produit: "Mangues mûres",
    categorie: "fruits",
    quantite: "300 kg",
    prixBrut: 60000,
    prix: "200 FCFA/kg",
    region: "Plateaux",
    ville: "Danyi",
    urgence: "critique",
    idealPour: "Marchés / Revendeurs / Jus",
    description:
      "Mangues mûres, sucrées, récoltées ce matin. Risque de pourriture sous 48h.",
    vendeur: "Ablavi Agbeka",
    telephone: "+228 93 77 11 22",
    contact: "Appel",
    lat: 7.2,
    lng: 0.8,
    kgNum: 300,
  },
  {
    id: 12,
    emoji: "🍅",
    produit: "Tomates mûres",
    categorie: "legumes",
    quantite: "500 kg",
    prixBrut: 175000,
    prix: "350 FCFA/kg",
    region: "Centrale",
    ville: "Sokodé",
    urgence: "critique",
    idealPour: "Cantines / Restaurants",
    description:
      "Tomates de saison, très mûres. Producteur cherche acheteur d'urgence.",
    vendeur: "Moussa Boukari",
    telephone: "+228 99 11 22 33",
    contact: "Appel",
    lat: 8.982,
    lng: 1.145,
    kgNum: 500,
  },
  {
    id: 13,
    emoji: "🌿",
    produit: "Gombos frais",
    categorie: "legumes",
    quantite: "60 kg",
    prixBrut: 18000,
    prix: "300 FCFA/kg",
    region: "Centrale",
    ville: "Sokodé",
    urgence: "critique",
    idealPour: "Cantines / Particuliers",
    description:
      "Gombos récoltés hier soir. Très frais, à récupérer rapidement.",
    vendeur: "Rachidatou Sabi",
    telephone: "+228 99 44 55 66",
    contact: "WhatsApp",
    lat: 8.99,
    lng: 1.15,
    kgNum: 60,
  },
  {
    id: 14,
    emoji: "🍆",
    produit: "Aubergines fraîches",
    categorie: "legumes",
    quantite: "90 kg",
    prixBrut: 45000,
    prix: "500 FCFA/kg",
    region: "Centrale",
    ville: "Blitta",
    urgence: "urgent",
    idealPour: "Restaurants / Revendeurs",
    description: "Aubergines locales de saison. Cueillaison ce matin.",
    vendeur: "Latifa Yessoufou",
    telephone: "+228 98 22 33 44",
    contact: "Appel",
    lat: 8.32,
    lng: 0.98,
    kgNum: 90,
  },
  {
    id: 15,
    emoji: "🌶️",
    produit: "Piments rouges",
    categorie: "condiments",
    quantite: "45 kg",
    prixBrut: 31500,
    prix: "700 FCFA/kg",
    region: "Kara",
    ville: "Kara",
    urgence: "urgent",
    idealPour: "Restaurants / Transformateurs",
    description: "Piments rouges très parfumés, variété locale. Récoltés hier.",
    vendeur: "Afi Tchassim",
    telephone: "+228 91 23 45 67",
    contact: "WhatsApp",
    lat: 9.551,
    lng: 1.186,
    kgNum: 45,
  },
  {
    id: 16,
    emoji: "🥕",
    produit: "Carottes fraîches",
    categorie: "legumes",
    quantite: "120 kg",
    prixBrut: 60000,
    prix: "500 FCFA/kg",
    region: "Kara",
    ville: "Pagouda",
    urgence: "urgent",
    idealPour: "Cantines / Marchés",
    description:
      "Carottes bien calibrées, récoltées avant-hier. À transformer rapidement.",
    vendeur: "Sadia Alassani",
    telephone: "+228 92 55 66 77",
    contact: "WhatsApp",
    lat: 9.58,
    lng: 1.175,
    kgNum: 120,
  },
  {
    id: 17,
    emoji: "🥔",
    produit: "Manioc frais",
    categorie: "tubercules",
    quantite: "4 sacs",
    prixBrut: 14000,
    prix: "3 500 FCFA/sac",
    region: "Kara",
    ville: "Kozah",
    urgence: "urgent",
    idealPour: "Transformateurs / Marchés",
    description:
      "Manioc récolté ce matin — se dégrade rapidement. À transformer sous 48h.",
    vendeur: "Boukari Issaka",
    telephone: "+228 91 88 99 00",
    contact: "Appel",
    lat: 9.57,
    lng: 1.2,
    kgNum: 200,
  },
  {
    id: 18,
    emoji: "🍅",
    produit: "Tomates — Savanes",
    categorie: "legumes",
    quantite: "650 kg",
    prixBrut: 260000,
    prix: "400 FCFA/kg",
    region: "Savanes",
    ville: "Dapaong",
    urgence: "critique",
    idealPour: "Cantines / Transformateurs",
    description:
      "Grande récolte dans les Savanes. Tomates très mûres, vente urgente.",
    vendeur: "Hamidou Pali",
    telephone: "+228 90 77 88 99",
    contact: "Appel",
    lat: 10.862,
    lng: 0.206,
    kgNum: 650,
  },
  {
    id: 19,
    emoji: "🍍",
    produit: "Ananas mûrs",
    categorie: "fruits",
    quantite: "180 kg",
    prixBrut: 54000,
    prix: "300 FCFA/kg",
    region: "Savanes",
    ville: "Cinkassé",
    urgence: "urgent",
    idealPour: "Revendeurs / Jus / Marchés",
    description:
      "Ananas à pleine maturité. Se détériorent vite — à écouler sous 48h.",
    vendeur: "Mariama Coulibaly",
    telephone: "+228 90 11 22 33",
    contact: "WhatsApp",
    lat: 11.002,
    lng: 0.003,
    kgNum: 180,
  },
  {
    id: 20,
    emoji: "🧅",
    produit: "Oignons frais",
    categorie: "legumes",
    quantite: "200 kg",
    prixBrut: 80000,
    prix: "400 FCFA/kg",
    region: "Savanes",
    ville: "Dapaong",
    urgence: "normal",
    idealPour: "Marchés / Revendeurs",
    description:
      "Oignons frais de la région de Dapaong. Bonne conservation mais stock important.",
    vendeur: "Aboudou Tchaa",
    telephone: "+228 90 44 55 66",
    contact: "WhatsApp",
    lat: 10.875,
    lng: 0.215,
    kgNum: 200,
  },
];

const demandesData = [
  {
    icon: "🍴",
    acheteur: "Restaurant Le Gourmet",
    produit: "Recherche 500 kg de tomates fraîches",
    region: "Maritime — Lomé",
    telephone: "+228 91 00 22 33",
  },
  {
    icon: "🏫",
    acheteur: "Cantine scolaire Agoè",
    produit: "Recherche laitues + concombres 80 kg",
    region: "Maritime — Lomé",
    telephone: "+228 92 33 44 55",
  },
  {
    icon: "🏭",
    acheteur: "Transformateur SoyaTogo",
    produit: "Recherche 2 tonnes de tomates",
    region: "Plateaux — Atakpamé",
    telephone: "+228 93 55 66 77",
  },
  {
    icon: "🏨",
    acheteur: "Hôtel Sarakawa Lomé",
    produit: "Recherche fruits frais variés chaque semaine",
    region: "Maritime — Lomé",
    telephone: "+228 22 21 00 00",
  },
  {
    icon: "🛒",
    acheteur: "Marché de Kpalimé",
    produit: "Recherche 300 kg de piments frais",
    region: "Plateaux — Kpalimé",
    telephone: "+228 93 77 88 99",
  },
  {
    icon: "🥗",
    acheteur: "Cantine universitaire Lomé",
    produit: "Recherche légumes frais — abonnement",
    region: "Maritime — Lomé",
    telephone: "+228 22 35 00 00",
  },
  {
    icon: "🏥",
    acheteur: "CHU Sylvanus Olympio",
    produit: "Recherche légumes pour patients",
    region: "Maritime — Lomé",
    telephone: "+228 22 21 25 11",
  },
  {
    icon: "🚚",
    acheteur: "Revendeur Dapaong",
    produit: "Recherche tomates et oignons des Savanes",
    region: "Savanes — Dapaong",
    telephone: "+228 90 50 60 70",
  },
];

/* ---- HELPERS ---- */
function getTousSurplus() {
  try {
    const l = JSON.parse(localStorage.getItem("agriflash-surplus") || "[]");
    return [...surplusData, ...l];
  } catch (e) {
    return [...surplusData];
  }
}
function getBadgeLabel(u) {
  if (u === "critique") return "🔴 Critique — &lt; 24h";
  if (u === "urgent") return "🟠 Urgent — &lt; 48h";
  return "🟢 Normal";
}

/* ---- ANALYSE IA ---- */
function analyserRisque(item) {
  if (item.urgence === "critique")
    return {
      risque: "92%",
      niveau: "haut",
      recommandation: `Contacter en priorité les <strong>restaurants et cantines de ${item.ville || item.region}</strong> dans les <strong>12 prochaines heures</strong>. Proposer une réduction de 10–15 % pour écoulement rapide.`,
    };
  if (item.urgence === "urgent")
    return {
      risque: "68%",
      niveau: "moyen",
      recommandation: `Les <strong>revendeurs locaux de ${item.region}</strong> sont recommandés. Délai maximum : <strong>48h</strong>. Contacter aussi les marchés proches.`,
    };
  return {
    risque: "25%",
    niveau: "bas",
    recommandation: `Aucune action immédiate. Vous disposez de <strong>quelques jours</strong>. Utilisez les canaux habituels.`,
  };
}

/* ---- TOP PRODUITS MENACÉS ---- */
function getTopProduitsMenaces(tous) {
  const scores = {};
  tous.forEach((i) => {
    const poids = i.urgence === "critique" ? 3 : i.urgence === "urgent" ? 2 : 1;
    scores[i.produit] = (scores[i.produit] || 0) + poids * (i.kgNum || 0);
  });
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([nom], idx) => ({ rang: idx + 1, nom }));
}

/* ---- INDICE AGRIFLASH ---- */
function calculerIndice(tous) {
  const total = tous.length;
  if (!total) return 0;
  const critiques = tous.filter((i) => i.urgence === "critique").length;
  const urgents = tous.filter((i) => i.urgence === "urgent").length;
  const regions = new Set(tous.map((i) => i.region)).size;
  const couverture = (regions / 5) * 100;
  const reactivite =
    100 - Math.round((critiques / total) * 60 + (urgents / total) * 30);
  return Math.min(99, Math.round(couverture * 0.4 + reactivite * 0.6));
}

/* ---- TEMPS MOYEN SAUVETAGE ---- */
function tempsMoyenSauvetage(tous) {
  const h = tous.map((i) =>
    i.urgence === "critique" ? 18 : i.urgence === "urgent" ? 36 : 72,
  );
  if (!h.length) return 0;
  return Math.round(h.reduce((a, b) => a + b, 0) / h.length);
}

/* ---- DASHBOARD ---- */
function initDashboard() {
  const tous = getTousSurplus();
  animCount("d-surplus", tous.length, "", 900);
  animCount(
    "d-critiques",
    tous.filter((i) => i.urgence === "critique").length,
    "",
    900,
  );
  animCount(
    "d-kg",
    tous.reduce((a, i) => a + (i.kgNum || 0), 0),
    " kg",
    1200,
  );
  animCount(
    "d-fcfa",
    tous.reduce((a, i) => a + (i.prixBrut || 0), 0),
    " FCFA",
    1400,
  );
  animCount(
    "d-repas",
    Math.round(tous.reduce((a, i) => a + (i.kgNum || 0), 0) * 2.5),
    "",
    1300,
  );
  animCount("d-regions", new Set(tous.map((i) => i.region)).size, "", 800);
  initBonusStats(tous);
}

function initBonusStats(tous) {
  const el = document.getElementById("bonus-stats");
  if (!el) return;
  const indice = calculerIndice(tous);
  const tps = tempsMoyenSauvetage(tous);
  const top = getTopProduitsMenaces(tous);
  el.innerHTML = `
    <div class="bonus-grid">
      <div class="bonus-card indice">
        <div class="bonus-icon">🛡️</div>
        <div class="bonus-num">${indice}%</div>
        <div class="bonus-label">Indice AgriFlash de réduction des pertes</div>
      </div>
      <div class="bonus-card temps">
        <div class="bonus-icon">⏱️</div>
        <div class="bonus-num">${tps}h</div>
        <div class="bonus-label">Temps moyen de sauvetage d'un surplus</div>
      </div>
      <div class="bonus-card top">
        <div class="bonus-icon">⚠️</div>
        <div class="bonus-label" style="font-weight:700;margin-bottom:8px">Top produits menacés</div>
        ${top.map((p) => `<div class="top-item"><span class="top-rang">${p.rang}.</span> ${p.nom}</div>`).join("")}
      </div>
    </div>`;
}

function animCount(id, target, suffix, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  let start = 0;
  const step = Math.max(1, Math.ceil(target / (duration / 16)));
  const t = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent =
      (target >= 1000 ? start.toLocaleString("fr-FR") : start) + suffix;
    if (start >= target) clearInterval(t);
  }, 16);
}

/* ---- TICKER DYNAMIQUE ---- */
function genererTickerHTML(tous) {
  const items = [
    ...tous.filter((i) => i.urgence === "critique"),
    ...tous.filter((i) => i.urgence === "urgent"),
  ];
  const vus = new Set();
  const uniques = items.filter((i) => {
    const key = `${i.produit}|${i.region}`;
    if (vus.has(key)) return false;
    vus.add(key);
    return true;
  });
  const spans = uniques
    .map((i) => {
      const dot = i.urgence === "critique" ? "🔴" : "🟠";
      return `<span>${dot} ${i.kgNum} kg de ${i.produit.toLowerCase()} — ${i.ville || i.region} — ${i.urgence === "critique" ? "risque de perte sous 24h" : "à écouler sous 48h"}</span>`;
    })
    .join("");
  return spans + spans; // doublement pour animation infinie
}

function initTicker() {
  const inner = document.getElementById("ticker-inner");
  if (!inner) return;
  inner.innerHTML = genererTickerHTML(getTousSurplus());
}

/* ---- CARTE LEAFLET ---- */
let mapInstance = null;

function initMap() {
  if (!window.L || !document.getElementById("map")) return;
  mapInstance = L.map("map", {
    center: [8.0, 1.2],
    zoom: 8,
    minZoom: 7,
    maxZoom: 12,
    maxBounds: [
      [6.0, -0.5],
      [11.5, 2.0],
    ],
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(mapInstance);

  const tous = getTousSurplus();
  const regionsMap = {};
  tous.forEach((item) => {
    const key = item.region; // toujours région officielle
    if (!regionsMap[key]) {
      const coords =
        getCoordsRegion(key) || (item.lat ? [item.lat, item.lng] : null);
      if (!coords) return;
      regionsMap[key] = {
        lat: coords[0],
        lng: coords[1],
        kg: 0,
        count: 0,
        items: [],
      };
    }
    regionsMap[key].kg += item.kgNum || 0;
    regionsMap[key].count += 1;
    regionsMap[key].items.push(item);
  });

  Object.entries(regionsMap).forEach(([region, data]) => {
    if (!data.lat) return;
    const couleur = data.items.some((i) => i.urgence === "critique")
      ? "#a32d2d"
      : data.items.some((i) => i.urgence === "urgent")
        ? "#ba7517"
        : "#1d9e75";
    const marker = L.circleMarker([data.lat, data.lng], {
      radius: Math.min(8 + data.kg / 80, 32),
      fillColor: couleur,
      color: "#fff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85,
    }).addTo(mapInstance);
    marker.bindPopup(
      `<strong>📍 Région ${region}</strong><br/>📦 ${data.count} surplus actif${data.count > 1 ? "s" : ""}<br/>🌍 ${data.kg.toLocaleString("fr-FR")} kg sauvables<br/>${data.items.map((i) => `• ${i.emoji} ${i.produit} — ${i.ville} (${i.urgence})`).join("<br/>")}`,
    );
  });

  const legend = L.control({ position: "bottomright" });
  legend.onAdd = () => {
    const div = L.DomUtil.create("div");
    div.style.cssText =
      "background:#fff;padding:10px 14px;border-radius:8px;font-size:12px;line-height:1.8;box-shadow:0 2px 8px rgba(0,0,0,0.15)";
    div.innerHTML = `<strong>Niveau d'urgence</strong><br><span style="color:#a32d2d">●</span> Critique (&lt; 24h)<br><span style="color:#ba7517">●</span> Urgent (&lt; 48h)<br><span style="color:#1d9e75">●</span> Normal`;
    return div;
  };
  legend.addTo(mapInstance);
}

function reinitMap() {
  if (mapInstance) {
    try {
      mapInstance.remove();
    } catch (e) {}
    mapInstance = null;
  }
  setTimeout(initMap, 150);
}

/* ---- AFFICHAGE CARTES SURPLUS ---- */
function afficherSurplus(liste) {
  const grid = document.getElementById("grid-surplus");
  if (!grid) return;
  if (!liste.length) {
    grid.innerHTML =
      '<p style="color:#888;text-align:center;padding:2rem;grid-column:1/-1">Aucun surplus trouvé.</p>';
    return;
  }
  const ordre = { critique: 0, urgent: 1, normal: 2 };
  const sorted = [...liste].sort(
    (a, b) => (ordre[a.urgence] || 2) - (ordre[b.urgence] || 2),
  );
  grid.innerHTML = sorted
    .map((item) => {
      const estLocal = !surplusData.find((s) => s.id === item.id);
      return `<div class="card" data-id="${item.id}">
      <span class="card-emoji">${item.emoji}</span>
      <div class="card-header"><span class="card-produit">${item.produit}</span><span class="badge-urgence ${item.urgence}">${getBadgeLabel(item.urgence)}</span></div>
      <p class="card-info">📦 ${item.quantite}</p>
      <p class="card-info">📍 ${item.ville} — <em>Région ${item.region}</em></p>
      <span class="card-ideal">👥 ${item.idealPour}</span>
      <p class="card-prix">${item.prix}</p>
      <div class="card-footer">
        <span class="card-vendeur">👤 ${item.vendeur}</span>
        <div class="card-actions">
          <button class="btn-ia" onclick="ouvrirIA(${item.id})">🤖 IA</button>
          <button class="btn-contact" onclick="ouvrirModal(${item.id})">Contacter</button>
          ${estLocal ? `<button class="btn-supprimer" onclick="supprimerSurplus(${item.id})" title="Supprimer">🗑️</button>` : ""}
        </div>
      </div>
    </div>`;
    })
    .join("");
}

/* ---- SUPPRESSION ---- */
function supprimerSurplus(id) {
  if (!confirm("Supprimer ce surplus ?")) return;
  try {
    const l = JSON.parse(localStorage.getItem("agriflash-surplus") || "[]");
    localStorage.setItem(
      "agriflash-surplus",
      JSON.stringify(l.filter((s) => s.id !== id)),
    );
  } catch (e) {
    console.error(e);
  }
  filtrer();
  initDashboard();
  reinitMap();
  reinitCharts();
  initTicker();
}

/* ---- FILTRES ---- */
function filtrer() {
  const s = (document.getElementById("search")?.value || "").toLowerCase();
  const r = document.getElementById("filtre-region")?.value || "";
  const u = document.getElementById("filtre-urgence")?.value || "";
  const c = document.getElementById("filtre-categorie")?.value || "";
  afficherSurplus(
    getTousSurplus().filter(
      (i) =>
        (i.produit.toLowerCase().includes(s) ||
          (i.ville || "").toLowerCase().includes(s) ||
          i.region.toLowerCase().includes(s)) &&
        (!r || i.region === r) && // filtre sur région officielle
        (!u || i.urgence === u) &&
        (!c || i.categorie === c),
    ),
  );
}
function reinitialiserFiltres() {
  ["search", "filtre-region", "filtre-urgence", "filtre-categorie"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    },
  );
  afficherSurplus(getTousSurplus());
}

/* ---- MODAL CONTACT ---- */
function ouvrirModal(id) {
  const item = getTousSurplus().find((s) => s.id === id);
  if (!item) return;
  const tel = item.telephone.replace(/\s|\+/g, "");
  document.getElementById("modal-title").textContent =
    item.emoji + " " + item.produit;
  document.getElementById("modal-body").innerHTML = `
    <p class="modal-info">📦 <strong>Quantité :</strong> ${item.quantite}</p>
    <p class="modal-info">💰 <strong>Prix :</strong> ${item.prix}</p>
    <p class="modal-info">📍 <strong>Lieu :</strong> ${item.ville} — Région ${item.region}</p>
    <p class="modal-info">👥 <strong>Idéal pour :</strong> ${item.idealPour}</p>
    <p class="modal-info">📝 ${item.description}</p>
    <p class="modal-tel">📞 ${item.telephone}</p>
    <p class="modal-info" style="font-size:.85rem;color:#888">Via : ${item.contact}</p>
    <a class="btn-whatsapp" href="https://wa.me/${tel}" target="_blank" onclick="afficherSucces(${item.id})">💬 Contacter sur WhatsApp</a>`;
  document.getElementById("modal").style.display = "flex";
}
function fermerModal() {
  document.getElementById("modal").style.display = "none";
}

/* ---- MODAL SUCCÈS ---- */
function afficherSucces(id) {
  const item = getTousSurplus().find((s) => s.id === id);
  if (!item) return;
  const repas = Math.round((item.kgNum || 0) * 2.5);
  document.getElementById("success-impact").innerHTML = `
    <div class="success-stat">${item.quantite}</div><div class="success-desc">de ${item.produit.toLowerCase()} potentiellement sauvés du gaspillage</div>
    <div class="success-stat">${repas > 0 ? repas.toLocaleString("fr-FR") + " repas" : "—"}</div><div class="success-desc">préservés pour la communauté togolaise</div>
    <div class="success-stat">${(item.prixBrut || 0).toLocaleString("fr-FR")} FCFA</div><div class="success-desc">de revenus protégés pour l'agriculteur</div>`;
  fermerModal();
  setTimeout(() => {
    document.getElementById("modal-success").style.display = "flex";
  }, 200);
}
function fermerModalSuccess() {
  document.getElementById("modal-success").style.display = "none";
}

/* ---- IA PANEL ---- */
function ouvrirIA(id) {
  const item = getTousSurplus().find((s) => s.id === id);
  if (!item) return;
  const a = analyserRisque(item);
  document.getElementById("ia-content").innerHTML = `
    <p class="ia-produit">Produit analysé : <strong>${item.emoji} ${item.produit}</strong></p>
    <div>Risque de perte estimé</div>
    <div class="ia-risque ${a.niveau}">${a.risque}</div>
    <div class="ia-reco"><strong>Action recommandée :</strong><br>${a.recommandation}</div>`;
  document.getElementById("ia-panel").style.display = "block";
}

/* ---- DEMANDES ---- */
function afficherDemandes() {
  const grid = document.getElementById("demandes-grid");
  if (!grid) return;
  grid.innerHTML = demandesData
    .map(
      (d) => `
    <div class="demande-card">
      <div class="demande-icon">${d.icon}</div>
      <div class="demande-acheteur">${d.acheteur}</div>
      <div class="demande-produit">${d.produit}</div>
      <div class="demande-region">📍 ${d.region}</div>
      <button class="btn-repondre" onclick="window.open('https://wa.me/${d.telephone.replace(/\s|\+/g, "")}','_blank')">Répondre →</button>
    </div>`,
    )
    .join("");
}

/* ---- GRAPHIQUES ---- */
let chartsInstances = {};
function reinitCharts() {
  Object.values(chartsInstances).forEach((c) => {
    try {
      c.destroy();
    } catch (e) {}
  });
  chartsInstances = {};
  setTimeout(initCharts, 150);
}

function initCharts() {
  if (!window.Chart) return;
  const tous = getTousSurplus();

  // Plugin mention données simulées
  const notePlugin = {
    id: "noteSimulee",
    afterDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "10px Segoe UI,sans-serif";
      ctx.fillStyle = "#bbb";
      ctx.textAlign = "right";
      ctx.fillText(
        "⚠ Données simulées à des fins de démonstration.",
        chart.width - 8,
        chart.height - 2,
      );
      ctx.restore();
    },
  };

  const opts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  const ctxP = document.getElementById("chartPertes");
  if (ctxP)
    chartsInstances.pertes = new Chart(ctxP, {
      type: "line",
      plugins: [notePlugin],
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
        datasets: [
          {
            label: "Sans AgriFlash",
            data: [42, 44, 41, 43, 42, 40],
            borderColor: "#a32d2d",
            backgroundColor: "rgba(163,45,45,0.07)",
            tension: 0.4,
            fill: true,
            borderDash: [6, 3],
          },
          {
            label: "Avec AgriFlash",
            data: [42, 36, 30, 24, 20, 18],
            borderColor: "#1d9e75",
            backgroundColor: "rgba(29,158,117,0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        ...opts,
        scales: {
          y: {
            min: 0,
            max: 55,
            ticks: { callback: (v) => v + "%", font: { size: 11 } },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });

  const ctxC = document.getElementById("chartConnexions");
  if (ctxC)
    chartsInstances.connexions = new Chart(ctxC, {
      type: "bar",
      plugins: [notePlugin],
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
        datasets: [
          {
            label: "Connexions/mois",
            data: [12, 28, 45, 67, 89, 120],
            backgroundColor: "#0f6e56",
            borderRadius: 5,
          },
        ],
      },
      options: {
        ...opts,
        scales: {
          y: {
            ticks: { font: { size: 11 } },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });

  // Kg sauvés — calculé depuis données réelles
  const kgTotal = tous.reduce((a, i) => a + (i.kgNum || 0), 0);
  const kgHebdo = [0.06, 0.11, 0.17, 0.25, 0.35, 0.48, 0.65].map((r) =>
    Math.round(kgTotal * r),
  );
  const ctxK = document.getElementById("chartKg");
  if (ctxK)
    chartsInstances.kg = new Chart(ctxK, {
      type: "line",
      plugins: [notePlugin],
      data: {
        labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        datasets: [
          {
            label: "Kg sauvés",
            data: kgHebdo,
            borderColor: "#1d9e75",
            backgroundColor: "rgba(29,158,117,0.12)",
            tension: 0.4,
            fill: true,
            pointRadius: 4,
          },
        ],
      },
      options: {
        ...opts,
        scales: {
          y: {
            ticks: { callback: (v) => v + " kg", font: { size: 10 } },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
          x: { ticks: { font: { size: 10 } }, grid: { display: false } },
        },
      },
    });

  // Catégories — calculé depuis données réelles
  const catLabels = {
    legumes: "Légumes",
    fruits: "Fruits",
    tubercules: "Tubercules",
    condiments: "Condiments",
    cereales: "Céréales",
  };
  const cats = {};
  tous.forEach((i) => {
    cats[i.categorie] = (cats[i.categorie] || 0) + 1;
  });
  const ctxCat = document.getElementById("chartCategories");
  if (ctxCat)
    chartsInstances.categories = new Chart(ctxCat, {
      type: "doughnut",
      plugins: [notePlugin],
      data: {
        labels: Object.keys(cats).map((k) => catLabels[k] || k),
        datasets: [
          {
            data: Object.values(cats),
            backgroundColor: [
              "#1d9e75",
              "#0f6e56",
              "#ba7517",
              "#a32d2d",
              "#9fe1cb",
            ],
            borderWidth: 2,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        ...opts,
        plugins: {
          legend: {
            position: "right",
            labels: { font: { size: 11 }, boxWidth: 12, padding: 10 },
          },
        },
      },
    });
}

/* ---- NOTIFICATIONS ---- */
let notifIndex = 0,
  notifsGenerees = [];
function genererNotifs() {
  const tous = getTousSurplus();
  const notifs = [];
  tous
    .filter((i) => i.urgence === "critique")
    .slice(0, 2)
    .forEach((i) => {
      notifs.push({
        title: "🔴 Surplus critique",
        sub: `${i.kgNum} kg de ${i.produit} — ${i.region}`,
        urgent: true,
      });
    });
  tous
    .filter((i) => i.urgence === "urgent")
    .slice(0, 1)
    .forEach((i) => {
      notifs.push({
        title: "🟠 Surplus urgent",
        sub: `${i.produit} — ${i.quantite} — ${i.region}`,
        urgent: false,
      });
    });
  notifs.push({
    title: "✅ Couverture nationale",
    sub: "5 régions actives sur AgriFlash",
    urgent: false,
  });
  return notifs.slice(0, 4);
}
function showNotif() {
  if (!notifsGenerees.length) return;
  const n = notifsGenerees[notifIndex++ % notifsGenerees.length];
  const el = document.getElementById("notif");
  if (!el) return;
  document.getElementById("notif-title").textContent = n.title;
  document.getElementById("notif-sub").textContent = n.sub;
  el.className = "notif-toast" + (n.urgent ? " urgent" : "");
  void el.offsetWidth;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3500);
}

/* ---- MENU MOBILE ---- */
function initMenuMobile() {
  const hamburger = document.getElementById("hamburger"),
    navLinks = document.getElementById("nav-links");
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener("click", () => {
    const o = navLinks.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", String(o));
  });
}

/* ---- FORMULAIRE ---- */
function initFormulaire() {
  const form = document.getElementById("form-surplus");
  if (!form) return;
  const regionSelect = document.getElementById("region");
  const villeSelect = document.getElementById("ville");

  // Villes dépendantes de la région
  if (regionSelect && villeSelect) {
    regionSelect.addEventListener("change", () => {
      const r = regionSelect.value;
      villeSelect.innerHTML =
        '<option value="">-- Choisir une ville --</option>';
      villeSelect.disabled = !r;
      if (r && VILLES_PAR_REGION[r]) {
        VILLES_PAR_REGION[r].forEach((v) => {
          const opt = document.createElement("option");
          opt.value = v.nom;
          opt.textContent = v.nom;
          villeSelect.appendChild(opt);
        });
      }
    });
  }

  // Validation inline
  function validerChamp(id, msgVide) {
    const el = document.getElementById(id);
    if (!el) return;
    const showErr = (msg) => {
      const parent = el.closest(".form-group");
      if (!parent) return;
      let e = parent.querySelector(".form-error");
      if (!e) {
        e = document.createElement("span");
        e.className = "form-error";
        parent.appendChild(e);
      }
      e.textContent = msg;
      if (msg) el.classList.add("invalid");
      else el.classList.remove("invalid");
    };
    el.addEventListener("blur", () => {
      showErr(!el.value.trim() ? msgVide : "");
    });
    el.addEventListener("input", () => {
      if (el.value.trim()) showErr("");
    });
  }
  validerChamp("nom-produit", "⚠ Nom du produit obligatoire.");
  validerChamp("categorie", "⚠ Veuillez sélectionner une catégorie.");
  validerChamp("quantite", "⚠ Quantité obligatoire.");
  validerChamp("unite", "⚠ Veuillez choisir une unité.");
  validerChamp("prix", "⚠ Prix obligatoire.");
  validerChamp("region", "⚠ Veuillez sélectionner une région.");
  validerChamp("urgence", "⚠ Niveau d'urgence obligatoire.");
  validerChamp("nom-vendeur", "⚠ Votre nom est obligatoire.");
  validerChamp("telephone", "⚠ Numéro de téléphone obligatoire.");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const requis = [
      "nom-produit",
      "categorie",
      "quantite",
      "unite",
      "prix",
      "region",
      "urgence",
      "nom-vendeur",
      "telephone",
    ];
    let valide = true;
    requis.forEach((id) => {
      const el = document.getElementById(id);
      if (!el || !el.value.trim()) {
        valide = false;
        el?.classList.add("invalid");
        const parent = el?.closest(".form-group");
        let err = parent?.querySelector(".form-error");
        if (!err && parent) {
          err = document.createElement("span");
          err.className = "form-error";
          parent.appendChild(err);
        }
        if (err) err.textContent = "⚠ Ce champ est obligatoire.";
      }
    });
    if (!valide) {
      const p = form.querySelector(".invalid");
      if (p) p.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const qte = parseFloat(document.getElementById("quantite").value) || 0;
    const unite = document.getElementById("unite").value;
    const kgNum = qte * (CONVERSION[unite] || 1);
    const regionVal = document.getElementById("region").value; // région officielle
    const villeVal =
      document.getElementById("ville")?.value ||
      document.getElementById("localisation")?.value ||
      regionVal;
    const coords =
      getCoordsVille(villeVal, regionVal) || getCoordsRegion(regionVal);

    const s = {
      id: Date.now(),
      emoji: "📦",
      produit: document.getElementById("nom-produit").value,
      categorie: document.getElementById("categorie").value,
      quantite: qte + " " + unite,
      kgNum,
      prixBrut: parseFloat(document.getElementById("prix").value) || 0,
      prix:
        document.getElementById("prix").value +
        " FCFA/" +
        document.getElementById("prix-unite").value,
      region: regionVal, // région officielle séparée
      ville: villeVal, // ville séparée
      urgence: document.getElementById("urgence").value,
      idealPour: document.getElementById("ideal-pour").value,
      description:
        document.getElementById("description").value || "Aucune description.",
      vendeur: document.getElementById("nom-vendeur").value,
      telephone: document.getElementById("telephone").value,
      contact: document.getElementById("moyen-contact").value,
      lat: coords ? coords[0] : null,
      lng: coords ? coords[1] : null,
    };
    try {
      const ex = JSON.parse(localStorage.getItem("agriflash-surplus") || "[]");
      ex.push(s);
      localStorage.setItem("agriflash-surplus", JSON.stringify(ex));
    } catch (err) {
      console.error(err);
    }
    form.style.display = "none";
    document.getElementById("success-msg").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", function () {
  const pr = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initDashboard();
  initTicker();
  initMap();
  afficherSurplus(getTousSurplus());
  afficherDemandes();
  initMenuMobile();
  setTimeout(initCharts, 300);
  document.getElementById("search")?.addEventListener("input", filtrer);
  document.getElementById("filtre-region")?.addEventListener("change", filtrer);
  document
    .getElementById("filtre-urgence")
    ?.addEventListener("change", filtrer);
  document
    .getElementById("filtre-categorie")
    ?.addEventListener("change", filtrer);
  document
    .getElementById("btn-reinit")
    ?.addEventListener("click", reinitialiserFiltres);
  document
    .getElementById("modal-close")
    ?.addEventListener("click", fermerModal);
  document.getElementById("modal")?.addEventListener("click", function (e) {
    if (e.target === this) fermerModal();
  });
  document
    .getElementById("modal-success")
    ?.addEventListener("click", function (e) {
      if (e.target === this) fermerModalSuccess();
    });
  document.getElementById("ia-close")?.addEventListener("click", () => {
    document.getElementById("ia-panel").style.display = "none";
  });
  initFormulaire();
  if (!pr) {
    notifsGenerees = genererNotifs();
    setTimeout(() => {
      showNotif();
      setInterval(showNotif, 5500);
    }, 2000);
  }
});
