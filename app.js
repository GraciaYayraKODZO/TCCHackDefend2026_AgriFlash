/* =============================================
   AgriFlash — app.js
   Plateforme AgriTech — Togo
   Stack : HTML/CSS/JS vanilla + Leaflet.js
   ============================================= */

'use strict';

// ═══════════════════════════════════════════════
// 1. DONNÉES DE DÉMONSTRATION — 22 produits
//    Mapping strict 1:1 avec les images assets/surplus/
// ═══════════════════════════════════════════════
const DEMO_SURPLUS = [
  // ── NIVEAU 1 : CRITIQUE (Ultra-périssables) ──
  {
    id: 1001,
    product:     'Tomates fraîches',
    category:    'légumes',
    quantity:    300,
    unit:        'kg',
    price:       250,
    urgency:     'critique',
    region:      'Plateaux',
    city:        'Kpalimé',
    seller:      'Kossi Agbéko',
    phone:       '+228 90 11 22 33',
    description: 'Tomates mûres, récoltées hier. Calibre moyen, idéales pour le marché ou la sauce.',
    photo:       'assets/surplus/tomato.jpg',
    timestamp:   new Date(Date.now() - 1 * 3600000).toISOString(),
  },
  {
    id: 1002,
    product:     'Piments rouges',
    category:    'légumes',
    quantity:    80,
    unit:        'kg',
    price:       420,
    urgency:     'critique',
    region:      'Kara',
    city:        'Kara',
    seller:      'Yawa Kpenu',
    phone:       '+228 92 77 88 99',
    description: 'Piments très frais, récoltés ce matin. A vendre impérativement aujourd\'hui.',
    photo:       'assets/surplus/piment_rouge.jpg',
    timestamp:   new Date(Date.now() - 0.5 * 3600000).toISOString(),
  },
  {
    id: 1003,
    product:     'Piments verts',
    category:    'légumes',
    quantity:    55,
    unit:        'kg',
    price:       380,
    urgency:     'critique',
    region:      'Maritime',
    city:        'Lomé',
    seller:      'Kafui Dossevi',
    phone:       '+228 93 44 55 61',
    description: 'Piments verts frais, récoltés tôt ce matin. Calibre export, à écouler sous 24h.',
    photo:       'assets/surplus/piment_vert.jpg',
    timestamp:   new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: 1004,
    product:     'Adémè',
    category:    'légumes',
    quantity:    40,
    unit:        'kg',
    price:       300,
    urgency:     'critique',
    region:      'Savanes',
    city:        'Dapaong',
    seller:      'Abiba Sawadogo',
    phone:       '+228 99 21 43 65',
    description: 'Feuilles de baobab fraîches, récoltées ce matin. Très périssables, à consommer ou transformer rapidement.',
    photo:       'assets/surplus/ademe.jpg',
    timestamp:   new Date(Date.now() - 1.5 * 3600000).toISOString(),
  },
  {
    id: 1005,
    product:     'Gboma',
    category:    'légumes',
    quantity:    35,
    unit:        'kg',
    price:       280,
    urgency:     'critique',
    region:      'Maritime',
    city:        'Agoè-Nyivé',
    seller:      'Akosua Mensah',
    phone:       '+228 90 55 44 33',
    description: 'Gboma frais récolté ce jour. Idéal pour la sauce gboma. A vendre avant 18h.',
    photo:       'assets/surplus/Gboma.jpg',
    timestamp:   new Date(Date.now() - 0.8 * 3600000).toISOString(),
  },
  {
    id: 1006,
    product:     'Oignons frais',
    category:    'légumes',
    quantity:    200,
    unit:        'kg',
    price:       350,
    urgency:     'critique',
    region:      'Savanes',
    city:        'Cinkassé',
    seller:      'Adama Sawadogo',
    phone:       '+228 99 23 45 67',
    description: 'Oignons frais de la récolte du jour. Calibre moyen à gros, très juteux.',
    photo:       'assets/surplus/oignons.jpg',
    timestamp:   new Date(Date.now() - 3 * 3600000).toISOString(),
  },
  {
    id: 1007,
    product:     'Gombo frais',
    category:    'légumes',
    quantity:    70,
    unit:        'kg',
    price:       320,
    urgency:     'critique',
    region:      'Centrale',
    city:        'Sokodé',
    seller:      'Kofi Atchou',
    phone:       '+228 93 12 34 56',
    description: 'Gombo tendre, récolté hier matin. Parfait pour sauces locales, à consommer sous 24h.',
    photo:       'assets/surplus/gombo.jpg',
    timestamp:   new Date(Date.now() - 4 * 3600000).toISOString(),
  },
  {
    id: 1008,
    product:     'Aubergine',
    category:    'légumes',
    quantity:    60,
    unit:        'kg',
    price:       280,
    urgency:     'urgent',
    region:      'Plateaux',
    city:        'Atakpamé',
    seller:      'Sena Dossou',
    phone:       '+228 97 34 56 78',
    description: 'Aubergines fraîches, récoltées avant-hier. Encore fermes, à écouler rapidement.',
    photo:       'assets/surplus/eggplant.jpg',
    timestamp:   new Date(Date.now() - 1.5 * 3600000).toISOString(),
  },
  // ── NIVEAU 2 : URGENT (Fruits de saison & aviculture) ──
  {
    id: 1009,
    product:     'Mangue',
    category:    'fruits',
    quantity:    150,
    unit:        'unité',
    price:       300,
    urgency:     'urgent',
    region:      'Maritime',
    city:        'Lomé',
    seller:      'Efua Dzidzo',
    phone:       '+228 94 56 78 90',
    description: 'Mangues mûres, sucrées, calibre export. Idéales pour jus ou consommation directe.',
    photo:       'assets/surplus/mangue.jpg',
    timestamp:   new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: 1010,
    product:     'Ananas pain de sucre',
    category:    'fruits',
    quantity:    200,
    unit:        'kg',
    price:       220,
    urgency:     'urgent',
    region:      'Maritime',
    city:        'Aneho',
    seller:      'Grace Tossou',
    phone:       '+228 90 98 76 54',
    description: 'Ananas mûrs, très sucrés. Variété locale pain de sucre, parfaite pour la transformation.',
    photo:       'assets/surplus/ananas.jpg',
    timestamp:   new Date(Date.now() - 8 * 3600000).toISOString(),
  },
  {
    id: 1011,
    product:     'Oeufs de poule',
    category:    'aviculture',
    quantity:    500,
    unit:        'unité',
    price:       150,
    urgency:     'urgent',
    region:      'Plateaux',
    city:        'Kpalimé',
    seller:      'Bernard Koffi',
    phone:       '+228 91 78 34 12',
    description: 'Oeufs frais de poules élevées en liberté. Collecte du matin, calibre moyen.',
    photo:       'assets/surplus/egg.jpg',
    timestamp:   new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    id: 1012,
    product:     'Oeufs de caille',
    category:    'aviculture',
    quantity:    200,
    unit:        'unité',
    price:       500,
    urgency:     'urgent',
    region:      'Maritime',
    city:        'Lomé',
    seller:      'Henriette Adom',
    phone:       '+228 90 65 43 21',
    description: 'Oeufs de caille frais, production artisanale de Lomé. Idéaux pour restauration.',
    photo:       'assets/surplus/caille_egg.jpg',
    timestamp:   new Date(Date.now() - 6 * 3600000).toISOString(),
  },
  // ── NIVEAU 3 : NORMAL (Cultures vivrières) ──
  {
    id: 1013,
    product:     'Mais frais',
    category:    'céréales',
    quantity:    500,
    unit:        'kg',
    price:       180,
    urgency:     'normal',
    region:      'Maritime',
    city:        'Tsévié',
    seller:      'Ama Mensah',
    phone:       '+228 91 44 55 66',
    description: 'Mais frais de saison, bien égréné. Idéal pour akpan, bouillie ou consommation directe.',
    photo:       'assets/surplus/mais_frais.jpg',
    timestamp:   new Date(Date.now() - 10 * 3600000).toISOString(),
  },
  {
    id: 1014,
    product:     'Niébé / Haricot',
    category:    'légumineuses',
    quantity:    120,
    unit:        'kg',
    price:       550,
    urgency:     'normal',
    region:      'Savanes',
    city:        'Dapaong',
    seller:      'Adama Sawadogo',
    phone:       '+228 99 23 45 67',
    description: 'Niébé blanc sec, bien trié, propre. Producteur local, sans pesticides.',
    photo:       'assets/surplus/haricot.jpg',
    timestamp:   new Date(Date.now() - 12 * 3600000).toISOString(),
  },
  {
    id: 1015,
    product:     'Igname blanche',
    category:    'tubercules',
    quantity:    200,
    unit:        'kg',
    price:       350,
    urgency:     'normal',
    region:      'Centrale',
    city:        'Sokodé',
    seller:      'Kofi Atchou',
    phone:       '+228 93 12 34 56',
    description: 'Igname de qualité, calibre gros. Bonne conservation, disponible pour livraison.',
    photo:       'assets/surplus/igname.jpg',
    timestamp:   new Date(Date.now() - 6 * 3600000).toISOString(),
  },
  {
    id: 1016,
    product:     'Manioc frais',
    category:    'tubercules',
    quantity:    400,
    unit:        'kg',
    price:       120,
    urgency:     'urgent',
    region:      'Plateaux',
    city:        'Notsé',
    seller:      'Akpéné Teta',
    phone:       '+228 91 11 22 33',
    description: 'Manioc fraîchement récolté, à transformer impérativement sous 48h.',
    photo:       'assets/surplus/manioc.jpg',
    timestamp:   new Date(Date.now() - 4 * 3600000).toISOString(),
  },
  {
    id: 1017,
    product:     'Banane plantain',
    category:    'fruits',
    quantity:    180,
    unit:        'kg',
    price:       260,
    urgency:     'normal',
    region:      'Plateaux',
    city:        'Agou Nyogbo',
    seller:      'Mawuli Amewu',
    phone:       '+228 97 66 55 44',
    description: 'Plantains mûres à point, idéales pour alloco, chips ou consommation directe.',
    photo:       'assets/surplus/plantains.jpg',
    timestamp:   new Date(Date.now() - 9 * 3600000).toISOString(),
  },
  // ── NIVEAU 4 : NORMAL (Produits transformés) ──
  {
    id: 1018,
    product:     'Purée de tomate locale',
    category:    'transformés',
    quantity:    90,
    unit:        'kg',
    price:       800,
    urgency:     'normal',
    region:      'Maritime',
    city:        'Lomé',
    seller:      'Afi Kpodo',
    phone:       '+228 90 12 34 56',
    description: 'Purée de tomate artisanale, conditionnée en sachets. Production locale certifiée.',
    photo:       'assets/surplus/puree.jpg',
    timestamp:   new Date(Date.now() - 14 * 3600000).toISOString(),
  },
  {
    id: 1019,
    product:     'Piment en poudre',
    category:    'transformés',
    quantity:    50,
    unit:        'kg',
    price:       1200,
    urgency:     'normal',
    region:      'Kara',
    city:        'Pagouda',
    seller:      'Séraphin Lare',
    phone:       '+228 92 33 44 55',
    description: 'Poudre de piment rouge séchée et moulue, production artisanale de la région Kara.',
    photo:       'assets/surplus/poudre.jpg',
    timestamp:   new Date(Date.now() - 20 * 3600000).toISOString(),
  },
  {
    id: 1020,
    product:     'Jus de fruits locaux',
    category:    'transformés',
    quantity:    150,
    unit:        'kg',
    price:       600,
    urgency:     'urgent',
    region:      'Plateaux',
    city:        'Kpalimé',
    seller:      'Yéwa Agbessi',
    phone:       '+228 91 22 33 44',
    description: 'Jus naturels de mangue et ananas, sans conservateurs. Produits en petite série.',
    photo:       'assets/surplus/juice.jpg',
    timestamp:   new Date(Date.now() - 7 * 3600000).toISOString(),
  },
  {
    id: 1021,
    product:     'Miel conditionné',
    category:    'transformés',
    quantity:    30,
    unit:        'kg',
    price:       2500,
    urgency:     'normal',
    region:      'Centrale',
    city:        'Blitta',
    seller:      'Gnon Kpemflo',
    phone:       '+228 93 55 66 77',
    description: 'Miel pur de brousse, récolté et conditionné artisanalement. Non chauffé, toutes fleurs.',
    photo:       'assets/surplus/miel.jpg',
    timestamp:   new Date(Date.now() - 18 * 3600000).toISOString(),
  },
  // Bonus : produit Maritime additionnel
  {
    id: 1022,
    product:     'Piments rouges',
    category:    'légumes',
    quantity:    65,
    unit:        'kg',
    price:       400,
    urgency:     'critique',
    region:      'Maritime',
    city:        'Tsévié',
    seller:      'Dodzi Abalo',
    phone:       '+228 90 77 88 99',
    description: 'Piments frais récoltés ce matin dans les jardins maraîchers de Tsévié.',
    photo:       'assets/surplus/piment_rouge.jpg',
    timestamp:   new Date(Date.now() - 1 * 3600000).toISOString(),
  },
];

// Coordonnées GPS des villes togolaises
const CITY_COORDS = {
  'Lomé':       [6.1375, 1.2123],
  'Kpalimé':    [6.9003, 0.6307],
  'Atakpamé':   [7.5309, 1.1270],
  'Sokodé':     [8.9861, 1.1444],
  'Kara':       [9.5519, 1.1864],
  'Dapaong':    [10.8631, 0.2081],
  'Tsévié':     [6.4209, 1.2152],
  'Aneho':      [6.2334, 1.5956],
  'Notsé':      [6.9587, 1.1744],
  'Agoè-Nyivé': [6.2158, 1.1971],
  'Cinkassé':   [10.9916, 0.2303],
  'Agou Nyogbo':[6.8833, 0.7500],
  'Pagouda':    [9.7558, 1.3628],
  'Blitta':     [8.3167, 1.0667],
};

// Villes rattachées à chaque région (cohérence Région → Ville)
const CITY_BY_REGION = {
  'Maritime':  ['Lomé', 'Tsévié', 'Aneho', 'Agoè-Nyivé'],
  'Plateaux':  ['Kpalimé', 'Atakpamé', 'Notsé', 'Agou Nyogbo'],
  'Centrale':  ['Sokodé', 'Blitta'],
  'Kara':      ['Kara', 'Pagouda'],
  'Savanes':   ['Dapaong', 'Cinkassé'],
};

// ═══════════════════════════════════════════════
// 2. STATE
// ═══════════════════════════════════════════════
let state = {
  surplusList:    [],
  filtered:       [],
  searchQuery:    '',
  activeCategory: 'tous',
  activeRegion:   'toutes',
};

// ═══════════════════════════════════════════════
// 3. DOM READY
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  loadData();
  updateDashboardStats();
  renderSurplusGrid();
  initSearch();
  initMap();
  animateCounters();
  initCarousel();
  initTicker();
  initCharts();
});

// ═══════════════════════════════════════════════
// 3B. DASHBOARD DYNAMIQUE — calculé depuis state.surplusList
// ═══════════════════════════════════════════════
function updateDashboardStats() {
  const list = state.surplusList;

  const elActifs    = document.getElementById('stat-actifs');
  const elCritiques = document.getElementById('stat-critiques');
  const elPrix      = document.getElementById('stat-prix-moyen');
  const elKg        = document.getElementById('stat-kg');
  const elRegions   = document.getElementById('stat-regions');

  const actifs    = list.length;
  const critiques = list.filter((i) => i.urgency === 'critique').length;

  // Prix moyen (moyenne simple) calculé sur les produits vendus au kg,
  // l'unité la plus représentée du catalogue — affiché en FCFA/kg.
  const kgItems   = list.filter((i) => i.unit === 'kg');
  const prixMoyen = kgItems.length
    ? Math.round(kgItems.reduce((sum, i) => sum + i.price, 0) / kgItems.length)
    : 0;

  // Kg sauvés = somme des quantités des produits vendus au kg uniquement
  const kgSaved = list.reduce((sum, i) => sum + (i.unit === 'kg' ? i.quantity : 0), 0);

  // Régions distinctes couvertes, plafonné à 5 (nombre total de régions du Togo)
  const regionsCount = Math.min(new Set(list.map((i) => i.region)).size, 5);

  if (elActifs)    { elActifs.dataset.target = actifs;    elActifs.textContent = '0'; }
  if (elCritiques) { elCritiques.dataset.target = critiques; elCritiques.textContent = '0'; }
  if (elPrix)       { elPrix.dataset.target = prixMoyen;   elPrix.dataset.suffix = ' FCFA/kg'; elPrix.textContent = '0 FCFA/kg'; }
  if (elKg)         { elKg.dataset.target = kgSaved;       elKg.dataset.suffix = ' kg';         elKg.textContent = '0 kg'; }
  if (elRegions)    { elRegions.dataset.target = regionsCount; elRegions.dataset.suffix = '/5';  elRegions.textContent = '0/5'; }
}

// ═══════════════════════════════════════════════
// 4. NAVBAR — hamburger
// ═══════════════════════════════════════════════
function initNavbar() {
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('nav-links');
  const navActions = document.getElementById('nav-actions');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    navLinks.classList.toggle('open', open);
    navActions.classList.toggle('open', open);
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      navLinks.classList.remove('open');
      navActions.classList.remove('open');
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => {
          l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => observer.observe(s));
}

// ═══════════════════════════════════════════════
// 5. DATA — merge demo + localStorage
// ═══════════════════════════════════════════════
function loadData() {
  const local = JSON.parse(localStorage.getItem('agriflash_surplus') || '[]');
  const localWithCat = local.map((item) => ({
    ...item,
    // Conserve la catégorie choisie dans le formulaire ; ne devine que si absente
    category: item.category || guessCategory(item.product),
  }));
  state.surplusList = [...localWithCat, ...DEMO_SURPLUS];
  state.filtered    = [...state.surplusList];
}

function guessCategory(name = '') {
  const n = name.toLowerCase();
  if (/tomate|piment|aubergine|oignon|gombo|chou|haricot vert|carotte|concombre|ademe|gboma|épinard/i.test(n)) return 'légumes';
  if (/mangue|papaye|ananas|banane|plantain|orange|cajou/i.test(n)) return 'fruits';
  if (/mais|sorgho|mil|riz/i.test(n)) return 'céréales';
  if (/manioc|igname|patate|taro/i.test(n)) return 'tubercules';
  if (/niébé|haricot|arachide|soja/i.test(n)) return 'légumineuses';
  if (/oeuf|caille|poulet|volaille/i.test(n)) return 'aviculture';
  if (/purée|poudre|jus|miel|transformé/i.test(n)) return 'transformés';
  return 'autres';
}

// ═══════════════════════════════════════════════
// 6. SEARCH & FILTER
// ═══════════════════════════════════════════════
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const chips       = document.querySelectorAll('.filter-chip');
  const regionSel   = document.getElementById('region-filter');

  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    }, 250));
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      state.activeCategory = chip.dataset.filter;
      applyFilters();
    });
  });

  if (regionSel) {
    regionSel.addEventListener('change', () => {
      state.activeRegion = regionSel.value;
      applyFilters();
    });
  }
}

function applyFilters() {
  let list = [...state.surplusList];

  if (state.activeCategory !== 'tous') {
    list = list.filter((item) => item.category === state.activeCategory);
  }

  if (state.activeRegion && state.activeRegion !== 'toutes') {
    list = list.filter((item) => item.region === state.activeRegion);
  }

  if (state.searchQuery) {
    list = list.filter((item) =>
      item.product.toLowerCase().includes(state.searchQuery) ||
      item.region.toLowerCase().includes(state.searchQuery)  ||
      (item.city || '').toLowerCase().includes(state.searchQuery)
    );
  }

  state.filtered = list;
  renderSurplusGrid();
}

// ═══════════════════════════════════════════════
// 7. SURPLUS GRID RENDERER
// ═══════════════════════════════════════════════
function renderSurplusGrid() {
  const grid      = document.getElementById('surplus-grid');
  const noResults = document.getElementById('no-results');
  if (!grid) return;

  grid.innerHTML = '';

  if (state.filtered.length === 0) {
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';

  state.filtered.forEach((item) => {
    const card = createSurplusCard(item);
    grid.appendChild(card);
  });
}

function createSurplusCard(item) {
  const card = document.createElement('article');
  card.className = 'surplus-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Surplus : ${item.product} — ${item.region}`);

  const urgencyLabel = { urgent: 'Urgent', critique: 'Critique', normal: 'Disponible' };
  const urgencyClass = { urgent: 'badge-urgent', critique: 'badge-critique', normal: 'badge-normal' };
  const timeAgo      = getTimeAgo(item.timestamp);

  const categoryIcons = {
    légumes:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="1.5"><path d="M2 22c1.25-1.25 2.5-2.5 3.5-4 1-1.5 1.5-3 1.5-5a7 7 0 1 1 14 0c0 2-0.5 3.5-1.5 5S17.25 20.75 16 22"/><path d="M12 22V12"/><path d="m9 9 3 3 3-3"/></svg>`,
    fruits:       `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--orange-600)" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3c0 0 2 4 2 9s-2 9-2 9"/><path d="M3.6 9h16.8M3.6 15h16.8"/></svg>`,
    céréales:     `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--orange-700)" stroke-width="1.5"><path d="M12 22V10M12 10c0 0-4-4-4-7a4 4 0 0 1 8 0c0 3-4 7-4 7z"/></svg>`,
    tubercules:   `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="1.5"><ellipse cx="12" cy="14" rx="6" ry="5"/><path d="M12 9V4M9 6l3-3 3 3"/></svg>`,
    légumineuses: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="1.5"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    aviculture:   `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--orange-600)" stroke-width="1.5"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg>`,
    transformés:  `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    default:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>`,
  };
  const icon = categoryIcons[item.category] || categoryIcons.default;
  const ai = analyzeRisk(item);

  card.innerHTML = `
    <div class="surplus-card-img">
      ${item.photo
        ? `<img src="${item.photo}" alt="Photo de ${escapeHtml(item.product)}" loading="lazy" />`
        : `<div class="surplus-card-img-placeholder" aria-hidden="true">${icon}</div>`
      }
      <span class="surplus-card-badge">
        <span class="badge ${urgencyClass[item.urgency] || 'badge-normal'}">${urgencyLabel[item.urgency] || 'Disponible'}</span>
      </span>
    </div>
    <div class="surplus-card-body">
      <h3 class="surplus-card-title">${escapeHtml(item.product)}</h3>
      <div class="surplus-card-meta">
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${escapeHtml(item.city ? `${item.city}, ` : '')}${escapeHtml(item.region)}
        </span>
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          ${item.quantity} ${item.unit}
        </span>
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${timeAgo}
        </span>
      </div>
      <div class="card-ai-mini">
        <span class="card-ai-mini-label">Analyse AgriFlash</span>
        <div class="card-ai-mini-bar-wrap">
          <div class="card-ai-mini-bar" style="width:${ai.risk}%;background:${ai.riskColor}"></div>
        </div>
        <span class="card-ai-mini-pct" style="color:${ai.riskColor}">${ai.risk}% risque</span>
      </div>
      <div class="surplus-card-price">
        ${item.price.toLocaleString('fr-TG')} FCFA
        <small>/ ${item.unit}</small>
      </div>
    </div>
    <div class="surplus-card-footer">
      <span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        ${escapeHtml(item.seller)}
      </span>
      <button class="btn btn-primary btn-sm" onclick="openContactModal(${item.id})" aria-label="Contacter ${escapeHtml(item.seller)}">
        Contacter
      </button>
    </div>
  `;

  return card;
}

// ═══════════════════════════════════════════════
// 8A. ANALYSE IA AGRIFLASH — Logique métier
//     Conforme au README : risque par urgence
//     92 % critique / 68 % urgent / 25 % normal
// ═══════════════════════════════════════════════
function analyzeRisk(item) {
  // Risque de perte selon niveau d'urgence (README)
  const riskMap = { critique: 92, urgent: 68, normal: 25 };
  const risk    = riskMap[item.urgency] || 25;

  // Recommandation d'action ciblée selon région et urgence
  const regionRecos = {
    Maritime:  { critique: 'Contactez immédiatement les restaurateurs et marchés de Lomé.',
                 urgent:   'Proposez à des cantines ou grossistes de la région Maritime.',
                 normal:   'Diffusez l\'annonce aux coopératives et transformateurs locaux.' },
    Plateaux:  { critique: 'Alertez les acheteurs à Kpalimé et Atakpamé sans délai.',
                 urgent:   'Rapprochez-vous des exportateurs ou transformateurs des Plateaux.',
                 normal:   'Envisagez une livraison groupée vers Lomé ou Atakpamé.' },
    Centrale:  { critique: 'Contactez les commerçants de Sokodé en priorité absolue.',
                 urgent:   'Proposez à des grossistes de la région Centrale ou du Nord.',
                 normal:   'Organisez une vente directe au marché hebdomadaire de Sokodé.' },
    Kara:      { critique: 'Mobilisez les acheteurs locaux de Kara ou Pagouda immédiatement.',
                 urgent:   'Contactez les coopératives agricoles de la région Kara.',
                 normal:   'Envisagez un transport vers Sokodé ou Lomé pour élargir l\'accès.' },
    Savanes:   { critique: 'Alertez les acheteurs de Dapaong et Cinkassé sans attendre.',
                 urgent:   'Proposez à des transformateurs ou exportateurs de la zone Savanes.',
                 normal:   'Rapprochez-vous des marchés frontaliers du Burkina Faso.' },
  };

  const reco = (regionRecos[item.region] || {
    critique: 'Publiez l\'annonce sur tous vos réseaux et contactez des acheteurs locaux.',
    urgent:   'Cherchez des acheteurs dans un rayon de 50 km de votre exploitation.',
    normal:   'Planifiez la vente lors du prochain marché hebdomadaire.',
  })[item.urgency] || 'Diffusez rapidement via WhatsApp à vos contacts acheteurs.';

  // Indicateur de couleur
  const riskColor = risk >= 80 ? '#dc2626' : risk >= 60 ? '#e47302' : '#0c7e59';
  const urgLabel  = { critique: 'CRITIQUE', urgent: 'URGENT', normal: 'NORMAL' };

  return { risk, reco, riskColor, urgLabel: urgLabel[item.urgency] || 'NORMAL' };
}


function openContactModal(id) {
  const item = state.surplusList.find((s) => s.id === id);
  if (!item) return;

  const modal      = document.getElementById('surplus-modal');
  const modalBody  = document.getElementById('modal-body');
  const modalTitle = document.getElementById('modal-title');

  const ai = analyzeRisk(item);

  modalTitle.textContent = `Contacter — ${item.product}`;
  modalBody.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div style="background:var(--green-50);border-radius:var(--radius);padding:1rem">
        <div style="font-weight:700;color:var(--green-900);margin-bottom:.25rem">${escapeHtml(item.product)}</div>
        <div style="font-size:.875rem;color:var(--neutral-500)">${item.quantity} ${item.unit} — ${item.price.toLocaleString('fr-TG')} FCFA/${item.unit}</div>
        <div style="font-size:.875rem;color:var(--neutral-500)">${escapeHtml(item.city ? `${item.city}, ` : '')}${escapeHtml(item.region)}</div>
      </div>

      <!-- Analyse IA AgriFlash -->
      <div style="background:#fff8f0;border:1px solid #fddcb5;border-radius:var(--radius);padding:1rem">
        <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e47302" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <span style="font-size:.75rem;font-weight:700;color:#e47302;text-transform:uppercase;letter-spacing:.05em">Analyse IA AgriFlash</span>
        </div>
        <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem">
          <div style="flex-shrink:0">
            <div style="font-size:1.75rem;font-weight:800;color:${ai.riskColor};line-height:1">${ai.risk} %</div>
            <div style="font-size:.65rem;color:var(--neutral-500);margin-top:.15rem">Risque de perte</div>
          </div>
          <div style="flex:1;background:var(--neutral-100);border-radius:50px;height:8px;overflow:hidden">
            <div style="width:${ai.risk}%;height:100%;background:${ai.riskColor};border-radius:50px;transition:width .6s ease"></div>
          </div>
          <span style="font-size:.7rem;font-weight:700;color:${ai.riskColor};white-space:nowrap">${ai.urgLabel}</span>
        </div>
        <div style="font-size:.8rem;color:var(--neutral-700);line-height:1.55;border-top:1px solid #fddcb5;padding-top:.6rem">
          <strong style="color:#042f21">Recommandation :</strong> ${escapeHtml(ai.reco)}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:.6rem">
        <div style="font-size:.875rem;font-weight:600;color:var(--neutral-700)">Vendeur : ${escapeHtml(item.seller)}</div>
        <a href="tel:${escapeHtml(item.phone)}"
          class="btn btn-primary"
          style="justify-content:center"
          aria-label="Appeler ${escapeHtml(item.seller)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15 2 2 0 0 1 22 16.92z"/></svg>
          Appeler : ${escapeHtml(item.phone)}
        </a>
        <button type="button"
          class="btn btn-outline"
          style="justify-content:center;width:100%"
          onclick="confirmAndOpenWhatsApp('https://wa.me/${item.phone.replace(/\D/g,'')}?text=${encodeURIComponent('Bonjour, je suis intéressé(e) par votre ' + item.product + ' publié sur AgriFlash.')}')"
          aria-label="WhatsApp ${escapeHtml(item.seller)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15 2 2 0 0 1 22 16.92z"/></svg>
          Contacter via WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.getElementById('modal-close');
  closeBtn.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const modal    = document.getElementById('surplus-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});

function closeModal() {
  const modal = document.getElementById('surplus-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════
// 9. LEAFLET MAP
// ═══════════════════════════════════════════════

// Nombre max de surplus de démonstration affichés sur la carte, PAR RÉGION.
// N'affecte que la carte Leaflet — la grille "Surplus disponibles" reste complète.
const MAP_MAX_DEMO_PER_REGION = 2;

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  const map = L.map('map', {
    center: [8.6195, 0.8248],
    zoom:   7,
    scrollWheelZoom: false,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  const iconGreen = L.divIcon({
    className: '',
    html: `<div style="background:#0c7e59;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>`,
    iconSize:   [28, 28],
    iconAnchor: [14, 28],
    popupAnchor:[0, -30],
  });
  const iconOrange = L.divIcon({
    className: '',
    html: `<div style="background:#e47302;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>`,
    iconSize:   [28, 28],
    iconAnchor: [14, 28],
    popupAnchor:[0, -30],
  });

  // ── Sélection des surplus affichés SUR LA CARTE UNIQUEMENT ──
  // Les surplus publiés par l'utilisateur (localStorage) sont TOUJOURS affichés, sans limite.
  // Les surplus de démonstration sont plafonnés à MAP_MAX_DEMO_PER_REGION par région,
  // en priorisant les niveaux "critique" puis "urgent" pour garder une variété visuelle.
  const demoIds = new Set(DEMO_SURPLUS.map((d) => d.id));
  const localItems = state.surplusList.filter((item) => !demoIds.has(item.id));
  const demoItems  = state.surplusList.filter((item) => demoIds.has(item.id));

  const urgencyRank = { critique: 0, urgent: 1, normal: 2 };
  const demoByRegion = {};
  demoItems
    .slice()
    .sort((a, b) => (urgencyRank[a.urgency] ?? 3) - (urgencyRank[b.urgency] ?? 3))
    .forEach((item) => {
      const key = item.region || '—';
      if (!demoByRegion[key]) demoByRegion[key] = [];
      if (demoByRegion[key].length < MAP_MAX_DEMO_PER_REGION) {
        demoByRegion[key].push(item);
      }
    });
  const demoItemsCapped = Object.values(demoByRegion).flat();

  const mapItems = [...localItems, ...demoItemsCapped];

  // Marqueurs indexés par id pour pouvoir cibler celui qu'on vient de publier
  const markersById = {};

  mapItems.forEach((item) => {
    const coords = CITY_COORDS[item.city] || CITY_COORDS[item.region];
    if (!coords) return;

    const jittered = [
      coords[0] + (Math.random() - 0.5) * 0.08,
      coords[1] + (Math.random() - 0.5) * 0.08,
    ];

    const icon = (item.urgency === 'urgent' || item.urgency === 'critique') ? iconOrange : iconGreen;
    const urgencyText = { urgent: 'Urgent', critique: 'Critique', normal: 'Disponible' };

    const marker = L.marker(jittered, { icon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family:'Inter',sans-serif;min-width:180px">
        <div style="font-weight:700;font-size:.95rem;color:#042f21;margin-bottom:.3rem">${escapeHtml(item.product)}</div>
        <div style="font-size:.8rem;color:#374151;margin-bottom:.15rem">
          <strong>${item.quantity} ${item.unit}</strong> — ${item.price.toLocaleString('fr-TG')} FCFA/${item.unit}
        </div>
        <div style="font-size:.75rem;color:#6b7280;margin-bottom:.4rem">
          ${escapeHtml(item.city ? `${item.city}, ` : '')}${escapeHtml(item.region)}
        </div>
        <div style="font-size:.75rem;font-weight:600;color:${item.urgency === 'critique' ? '#dc2626' : item.urgency === 'urgent' ? '#e47302' : '#0c7e59'}">${urgencyText[item.urgency] || 'Disponible'}</div>
        <button onclick="openContactModal(${item.id})"
          style="margin-top:.6rem;background:#e47302;color:#fff;border:none;border-radius:20px;padding:.35rem .85rem;font-size:.75rem;font-weight:600;cursor:pointer;width:100%">
          Contacter le vendeur
        </button>
      </div>
    `, { maxWidth: 220 });

    markersById[item.id] = { marker, latlng: jittered };
  });

  // ── Auto-focus sur le surplus qu'on vient de publier (mis par add-product.html) ──
  focusJustPublishedMarker(map, markersById);
}

function focusJustPublishedMarker(map, markersById) {
  const justPublishedId = sessionStorage.getItem('agriflash_just_published');
  if (!justPublishedId) return;

  // Toujours consommer le flag pour ne pas re-zoomer aux prochaines visites
  sessionStorage.removeItem('agriflash_just_published');

  const entry = markersById[justPublishedId] || markersById[Number(justPublishedId)];
  if (!entry) return; // marqueur hors champ (ville non répertoriée) : on ne fait rien

  map.once('moveend', () => {
    entry.marker.openPopup();
    // Petit effet de mise en évidence pour repérer le pin fraîchement publié
    // (le style transform:rotate(-45deg) est sur le div interne du divIcon, pas le wrapper)
    const wrapper = entry.marker.getElement();
    const pinEl = wrapper ? wrapper.firstElementChild : null;
    if (pinEl) {
      pinEl.style.animation = 'agriflash-pin-pulse 1s ease-in-out 2';
    }
  });

  map.flyTo(entry.latlng, 13, { duration: 1.1 });
}

// ═══════════════════════════════════════════════
// 10. CAROUSEL — "Qui peut acheter ?"
// ═══════════════════════════════════════════════
function initCarousel() {
  const outer   = document.getElementById('carousel-outer');
  const track   = document.getElementById('carousel-track');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');
  if (!track || !outer) return;

  // ── Réglages : rythme lent et reposé ──────────────────────────
  const PAUSE_AFTER_MOVE = 2600;   // pause après chaque déplacement (2-3s)
  const RESUME_AFTER_IDLE = 4000;  // reprise après une période d'inactivité (3-5s)

  let offset = 0;          // décalage courant en px (valeur positive = vers la gauche)
  let halfWidth = 0;       // largeur de la moitié de piste (les 12 cartes originales)
  let autoTimer = null;    // setTimeout en cours pour l'autodéfilement
  let resumeTimer = null;  // setTimeout en cours pour la reprise après inactivité
  let isInteracting = false;

  function getCardStep() {
    const card = track.querySelector('.buyer-card');
    if (!card) return 300;
    const gap = parseInt(getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }

  function measure() {
    halfWidth = track.scrollWidth / 2;
  }

  function applyOffset(jump = false) {
    if (jump) track.classList.add('jumping');
    track.style.transform = `translateX(${-offset}px)`;
    if (jump) {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        track.classList.remove('jumping');
      }));
    }
  }

  // ── Déplacement d'une carte (ou plusieurs) ────────────────────
  function step(dir) {
    measure();
    offset += dir * getCardStep();

    // Boucle infinie : repositionnement instantané (invisible) une fois la moitié dépassée
    if (offset >= halfWidth) {
      applyOffset();
      // après la transition visible, on saute discrètement au début de la boucle
      setTimeout(() => {
        offset -= halfWidth;
        applyOffset(true);
      }, 1450);
      return;
    }
    if (offset < 0) {
      offset += halfWidth;
      applyOffset(true);
      return;
    }
    applyOffset();
  }

  // ── Boucle d'autodéfilement : avance, pause, avance… ──────────
  function scheduleNextAuto() {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => {
      if (!isInteracting) step(1);
      scheduleNextAuto();
    }, PAUSE_AFTER_MOVE + 1400); // durée du glissement (≈1.4s, cf. transition CSS) + pause de lecture
  }

  function stopAuto() {
    clearTimeout(autoTimer);
  }

  function pauseAndScheduleResume() {
    isInteracting = true;
    stopAuto();
    clearTimeout(resumeTimer);
  }

  function scheduleResume(delay = RESUME_AFTER_IDLE) {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isInteracting = false;
      scheduleNextAuto();
    }, delay);
  }

  // ── Survol : pause immédiate, reprise après le départ de la souris ─
  outer.addEventListener('mouseenter', pauseAndScheduleResume);
  outer.addEventListener('mouseleave', () => scheduleResume(RESUME_AFTER_IDLE));

  // ── Flèches : déplacement manuel + pause/reprise différée ─────
  if (btnNext) btnNext.addEventListener('click', () => {
    pauseAndScheduleResume();
    step(1);
    scheduleResume(RESUME_AFTER_IDLE);
  });
  if (btnPrev) btnPrev.addEventListener('click', () => {
    pauseAndScheduleResume();
    step(-1);
    scheduleResume(RESUME_AFTER_IDLE);
  });

  // ── Swipe tactile ──────────────────────────────────────────────
  let touchStartX = 0;
  outer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    pauseAndScheduleResume();
  }, { passive: true });

  outer.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) step(diff > 0 ? 1 : -1);
    scheduleResume(RESUME_AFTER_IDLE);
  }, { passive: true });

  // ── Glisser-déposer (souris) ───────────────────────────────────
  let isDragging = false;
  let dragStartX = 0;

  outer.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    pauseAndScheduleResume();
    outer.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    outer.style.cursor = '';
    const diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 40) step(diff > 0 ? 1 : -1);
    scheduleResume(RESUME_AFTER_IDLE);
  });

  // ── Accessibilité : réduire les animations ────────────────────
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // pas d'autodéfilement, les flèches/swipe restent disponibles
  }

  // ── Démarrage ──────────────────────────────────────────────────
  measure();
  window.addEventListener('resize', measure);
  scheduleNextAuto();
}

// ═══════════════════════════════════════════════
// 11. ANIMATED COUNTERS
// ═══════════════════════════════════════════════
function animateCounters() {
  const targets = document.querySelectorAll('[id^="stat-"]');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      // Cible dynamique (dashboard) si disponible, sinon on lit la valeur écrite en dur
      const end = el.dataset.target !== undefined
        ? parseInt(el.dataset.target, 10)
        : parseInt(el.textContent.replace(/\D/g, ''), 10);
      if (isNaN(end)) return;
      animateNumber(el, 0, end, 1200, el.dataset.suffix || '');
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  targets.forEach((t) => observer.observe(t));
}

function animateNumber(el, start, end, duration, suffix = '') {
  const startTime = performance.now();
  function update(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = Math.round(start + (end - start) * ease);
    el.textContent = value.toLocaleString('fr-TG') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ═══════════════════════════════════════════════
// 13. TICKER DYNAMIQUE — bandeau d'information
// ═══════════════════════════════════════════════
function initTicker() {
  const track = document.getElementById('ticker-track');
  const bar   = document.getElementById('ticker-bar');
  if (!track || !bar) return;

  // Construire les items uniques Produit + Région (pas de doublons)
  const seen  = new Set();
  const items = [];
  state.surplusList.forEach((item) => {
    const key = `${item.product}__${item.region}`;
    if (seen.has(key)) return;
    seen.add(key);
    items.push(item);
  });

  // Trier par urgence pour donner la priorité aux infos critiques
  const order = { critique: 0, urgent: 1, normal: 2 };
  items.sort((a, b) => (order[a.urgency] ?? 3) - (order[b.urgency] ?? 3));

  // Le bandeau reste en Deep Forest Green ; l'orange ne sert que de pastille
  // d'accent sur les entrées critiques/urgentes (cf. CSS .ticker-item--*).
  const buildEntry = (item) => {
    return `<span class="ticker-item ticker-item--${item.urgency}">
      <span class="ticker-dot" aria-hidden="true">●</span>
      ${escapeHtml(item.product)} — ${item.quantity} ${item.unit} disponibles à ${escapeHtml(item.city ? item.city + ', ' : '')}${escapeHtml(item.region)} — ${item.price.toLocaleString('fr-TG')} FCFA/${item.unit}
    </span>`;
  };

  const html = items.map(buildEntry).join('');
  // Dupliquer pour un défilement infini fluide
  track.innerHTML = html + html;

  // ── Vitesse constante et lente, quel que soit le nombre d'annonces ──
  // On calcule la durée à partir de la largeur réelle du contenu plutôt que
  // de fixer une durée unique (qui ferait défiler trop vite les longues listes).
  const PIXELS_PER_SECOND = 14; // vitesse plus lente et fluide, façon bandeau d'actualités
  const MIN_DURATION = 45;      // secondes
  const MAX_DURATION = 130;     // secondes

  function applyTickerSpeed() {
    const halfWidth = track.scrollWidth / 2;
    let duration = halfWidth / PIXELS_PER_SECOND;
    duration = Math.max(MIN_DURATION, Math.min(MAX_DURATION, duration));
    track.style.animation = `ticker-scroll ${duration}s linear infinite`;
  }

  // Attendre que les polices/images soient en place pour une mesure fiable
  requestAnimationFrame(() => requestAnimationFrame(applyTickerSpeed));
  window.addEventListener('resize', applyTickerSpeed);

  // Pause au survol, reprise après quelques secondes
  let resumeTimer = null;
  bar.addEventListener('mouseenter', () => {
    track.classList.add('paused');
    if (resumeTimer) clearTimeout(resumeTimer);
  });
  bar.addEventListener('mouseleave', () => {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => track.classList.remove('paused'), 1200);
  });
}

// ═══════════════════════════════════════════════
// 15. CONFIRMATION DE MISE EN RELATION + WHATSAPP
// ═══════════════════════════════════════════════
function confirmAndOpenWhatsApp(waUrl) {
  const modal = document.getElementById('success-modal');
  if (!modal) { window.open(waUrl, '_blank', 'noopener'); return; }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.open(waUrl, '_blank', 'noopener');
  }, 1600);
}

// ═══════════════════════════════════════════════
// 16. GRAPHIQUES D'IMPACT — Chart.js
// ═══════════════════════════════════════════════
function initCharts() {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = '#6b7280';

  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'];

  // ── 1. Pertes évitées vs pertes habituelles (6 mois) ──
  const elPertes = document.getElementById('chart-pertes');
  if (elPertes) {
    new Chart(elPertes, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          { label: 'Pertes habituelles (sans AgriFlash)', data: [62, 58, 65, 60, 57, 63], backgroundColor: '#fddcb5' },
          { label: 'Pertes avec AgriFlash',                data: [40, 33, 30, 25, 20, 16], backgroundColor: '#0c7e59' },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
        scales: { y: { beginAtZero: true, ticks: { callback: (v) => v + '%' } } },
      },
    });
  }

  // ── 2. Connexions producteur–acheteur par mois ──
  const elConn = document.getElementById('chart-connections');
  if (elConn) {
    new Chart(elConn, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Connexions réalisées',
          data: [120, 180, 240, 310, 410, 520],
          borderColor: '#e47302',
          backgroundColor: 'rgba(228,115,2,.15)',
          fill: true,
          tension: .35,
          pointBackgroundColor: '#e47302',
        }],
      },
      options: { responsive: true, plugins: { legend: { display: false } } },
    });
  }

  // ── 3. Kilogrammes sauvés sur 7 jours (calculé depuis les données réelles) ──
  const elKg = document.getElementById('chart-kgsaved');
  if (elKg) {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    // Répartit le volume réel total du catalogue sur 7 jours de façon pseudo-réaliste
    const totalKg = state.surplusList.reduce((sum, i) => sum + (i.unit === 'kg' ? i.quantity : 0), 0);
    const weights = [0.11, 0.13, 0.12, 0.15, 0.18, 0.17, 0.14];
    const kgPerDay = weights.map((w) => Math.round(totalKg * w / 10));
    new Chart(elKg, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{ label: 'Kg sauvés', data: kgPerDay, backgroundColor: '#10a877', borderRadius: 6 }],
      },
      options: { responsive: true, plugins: { legend: { display: false } } },
    });
  }

  // ── 4. Répartition des surplus par catégorie (camembert) ──
  const elCat = document.getElementById('chart-categories');
  if (elCat) {
    const counts = {};
    state.surplusList.forEach((i) => { counts[i.category] = (counts[i.category] || 0) + 1; });
    const labels = Object.keys(counts);
    const data   = Object.values(counts);
    const palette = ['#0c7e59', '#e47302', '#10a877', '#b85d00', '#84dfc6', '#fde8c4', '#042f21'];
    new Chart(elCat, {
      type: 'pie',
      data: { labels, datasets: [{ data, backgroundColor: palette }] },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } },
    });
  }
}

// ═══════════════════════════════════════════════
// 12. UTILITY
// ═══════════════════════════════════════════════
function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function getTimeAgo(isoStr) {
  const diff = Date.now() - new Date(isoStr).getTime();
  const min  = Math.floor(diff / 60000);
  if (min < 1)   return "A l'instant";
  if (min < 60)  return `Il y a ${min} min`;
  const hr = Math.floor(min / 60);
  if (hr  < 24)  return `Il y a ${hr} h`;
  const d  = Math.floor(hr  / 24);
  return `Il y a ${d} j`;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = {
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.setAttribute('role', 'alert');
  t.innerHTML = `${icons[type] || icons.success}<span class="toast-msg">${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 4500);
}
