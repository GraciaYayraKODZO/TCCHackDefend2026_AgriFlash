/* =========================================
   AgriFlash — app.js
   TCC Hack & Defend 2026
   ========================================= */

/* ---- DONNÉES SURPLUS ---- */
const surplusData = [
  {
    id: 1,
    emoji: "🍅",
    produit: "Tomates mûres",
    categorie: "legumes",
    quantite: "80 kg",
    prixBrut: 36000,
    prix: "450 FCFA/kg",
    region: "Lomé",
    localisation: "Marché d'Agoè",
    urgence: "critique",
    idealPour: "Restaurants / Cantines",
    description:
      "Tomates bien mûres, récoltées ce matin. Prix négociable pour grosse quantité.",
    vendeur: "Koffi Amégah",
    telephone: "+228 90 00 11 22",
    contact: "WhatsApp",
    lat: 6.137,
    lng: 1.212,
    kgNum: 80,
  },
  {
    id: 2,
    emoji: "🌿",
    produit: "Gombos frais",
    categorie: "legumes",
    quantite: "30 kg",
    prixBrut: 9000,
    prix: "300 FCFA/kg",
    region: "Sokodé",
    localisation: "Marché de Sokodé",
    urgence: "critique",
    idealPour: "Cantines / Particuliers",
    description:
      "Gombos récoltés hier soir. Très frais, à récupérer rapidement.",
    vendeur: "Moussa Boukari",
    telephone: "+228 99 11 22 33",
    contact: "Appel",
    lat: 8.982,
    lng: 1.145,
    kgNum: 30,
  },
  {
    id: 3,
    emoji: "🌶️",
    produit: "Piments frais",
    categorie: "condiments",
    quantite: "15 kg",
    prixBrut: 9000,
    prix: "600 FCFA/kg",
    region: "Atakpamé",
    localisation: "Marché central",
    urgence: "urgent",
    idealPour: "Restaurants / Revendeurs",
    description:
      "Piments locaux bien fermes. Production sans traitement chimique.",
    vendeur: "Akua Mensah",
    telephone: "+228 93 44 55 66",
    contact: "WhatsApp",
    lat: 7.531,
    lng: 1.124,
    kgNum: 15,
  },
  {
    id: 4,
    emoji: "🌿",
    produit: "Manioc frais",
    categorie: "tubercules",
    quantite: "5 sacs (50 kg)",
    prixBrut: 17500,
    prix: "3 500 FCFA/sac",
    region: "Kara",
    localisation: "Village Pagouda",
    urgence: "urgent",
    idealPour: "Transformateurs / Marchés",
    description:
      "Manioc récolté ce matin — se dégrade rapidement. À transformer sous 48h.",
    vendeur: "Afi Tchassim",
    telephone: "+228 91 23 45 67",
    contact: "Appel",
    lat: 9.551,
    lng: 1.186,
    kgNum: 50,
  },
  {
    id: 5,
    emoji: "🍌",
    produit: "Bananes plantains",
    categorie: "fruits",
    quantite: "15 régimes",
    prixBrut: 37500,
    prix: "2 500 FCFA/régime",
    region: "Lomé",
    localisation: "Quartier Bè",
    urgence: "urgent",
    idealPour: "Restaurants / Cantines",
    description:
      "Plantains à maturité idéale. Parfaits pour restaurants et cantines scolaires.",
    vendeur: "Yawa Agbeko",
    telephone: "+228 97 88 99 00",
    contact: "WhatsApp",
    lat: 6.121,
    lng: 1.225,
    kgNum: 60,
  },
  {
    id: 6,
    emoji: "🥔",
    produit: "Ignames",
    categorie: "tubercules",
    quantite: "3 sacs",
    prixBrut: 24000,
    prix: "8 000 FCFA/sac",
    region: "Kara",
    localisation: "Ferme Kozah",
    urgence: "normal",
    idealPour: "Marchés / Particuliers",
    description: "Ignames de qualité supérieure. Disponibles pour enlèvement.",
    vendeur: "Sadia Alassani",
    telephone: "+228 92 55 66 77",
    contact: "WhatsApp",
    lat: 9.57,
    lng: 1.2,
    kgNum: 75,
  },
  {
    id: 7,
    emoji: "🥭",
    produit: "Mangues",
    categorie: "fruits",
    quantite: "120 unités",
    prixBrut: 24000,
    prix: "200 FCFA/unité",
    region: "Atakpamé",
    localisation: "Plantation Danyi",
    urgence: "urgent",
    idealPour: "Marchés / Revendeurs",
    description:
      "Mangues mûres, sucrées. Risque de pourriture si non écoulées sous 48h.",
    vendeur: "Edem Kpakpo",
    telephone: "+228 93 44 55 66",
    contact: "WhatsApp",
    lat: 7.51,
    lng: 1.14,
    kgNum: 30,
  },
  {
    id: 8,
    emoji: "🌽",
    produit: "Maïs séché",
    categorie: "cereales",
    quantite: "120 kg",
    prixBrut: 24000,
    prix: "200 FCFA/kg",
    region: "Atakpamé",
    localisation: "Marché central",
    urgence: "normal",
    idealPour: "Transformateurs / Marchés",
    description: "Maïs bien séché, prêt pour la transformation ou la revente.",
    vendeur: "Kofi Mensah",
    telephone: "+228 93 22 11 00",
    contact: "WhatsApp",
    lat: 7.525,
    lng: 1.13,
    kgNum: 120,
  },
];

/* ---- DONNÉES DEMANDES ---- */
const demandesData = [
  {
    icon: "🍴",
    acheteur: "Restaurant Le Gourmet",
    produit: "Recherche 50 kg de tomates",
    region: "Lomé",
    telephone: "+228 91 00 22 33",
  },
  {
    icon: "🏫",
    acheteur: "Cantine scolaire Agoè",
    produit: "Recherche 30 kg de gombos",
    region: "Lomé",
    telephone: "+228 92 33 44 55",
  },
  {
    icon: "🏭",
    acheteur: "Transformateur de manioc",
    produit: "Recherche 5 sacs de manioc",
    region: "Kara",
    telephone: "+228 90 55 66 77",
  },
  {
    icon: "🛒",
    acheteur: "Marché de Kpalimé",
    produit: "Recherche 200 kg de maïs",
    region: "Kpalimé",
    telephone: "+228 93 77 88 99",
  },
  {
    icon: "🍽️",
    acheteur: "Hôtel Sarakawa",
    produit: "Recherche fruits frais variés",
    region: "Lomé",
    telephone: "+228 22 21 00 00",
  },
];

/* ---- HELPERS ---- */
function getTousSurplus() {
  const locaux = JSON.parse(localStorage.getItem("agriflash-surplus") || "[]");
  return [...surplusData, ...locaux];
}

function getBadgeLabel(urgence) {
  if (urgence === "critique") return "🔴 Critique — &lt; 24h";
  if (urgence === "urgent") return "🟠 Urgent — &lt; 48h";
  return "🟢 Normal";
}

/* ---- ANALYSE IA ---- */
function analyserRisque(item) {
  if (item.urgence === "critique")
    return {
      risque: "92%",
      niveau: "haut",
      recommandation: `Contacter en priorité les <strong>restaurants et cantines de ${item.region}</strong> dans les <strong>12 prochaines heures</strong>. Proposer une réduction de 10–15 % pour écoulement rapide.`,
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

/* ---- DASHBOARD ---- */
function initDashboard() {
  const tous = getTousSurplus();
  const critiques = tous.filter((i) => i.urgence === "critique").length;
  const totalKg = tous.reduce((a, i) => a + (i.kgNum || 0), 0);
  const totalFcfa = tous.reduce((a, i) => a + (i.prixBrut || 0), 0);
  const repas = totalKg * 2;
  const regions = new Set(tous.map((i) => i.region)).size;

  animCount("d-surplus", tous.length, "", 900);
  animCount("d-critiques", critiques, "", 900);
  animCount("d-kg", totalKg, " kg", 1200);
  animCount("d-fcfa", totalFcfa, " FCFA", 1400);
  animCount("d-repas", repas, "", 1300);
  animCount("d-regions", regions, "", 800);
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

/* ---- CARTE LEAFLET ---- */
function initMap() {
  if (!window.L || !document.getElementById("map")) return;

  const map = L.map("map").setView([8.2, 1.0], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  const tous = getTousSurplus();
  const regionsMap = {};
  tous.forEach((item) => {
    if (!regionsMap[item.region]) {
      regionsMap[item.region] = {
        lat: item.lat,
        lng: item.lng,
        kg: 0,
        count: 0,
        items: [],
      };
    }
    regionsMap[item.region].kg += item.kgNum || 0;
    regionsMap[item.region].count += 1;
    regionsMap[item.region].items.push(item);
  });

  Object.entries(regionsMap).forEach(([region, data]) => {
    if (!data.lat) return;
    const couleur = data.items.some((i) => i.urgence === "critique")
      ? "#a32d2d"
      : data.items.some((i) => i.urgence === "urgent")
        ? "#ba7517"
        : "#1d9e75";

    const marker = L.circleMarker([data.lat, data.lng], {
      radius: Math.min(8 + data.kg / 20, 30),
      fillColor: couleur,
      color: "#fff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85,
    }).addTo(map);

    marker.bindPopup(`
      <strong>📍 ${region}</strong><br/>
      📦 ${data.count} surplus actif${data.count > 1 ? "s" : ""}<br/>
      🌍 ${data.kg} kg sauvables<br/>
      ${data.items.map((i) => `• ${i.emoji} ${i.produit} (${i.urgence})`).join("<br/>")}
    `);
  });

  // Légende
  const legend = L.control({ position: "bottomright" });
  legend.onAdd = () => {
    const div = L.DomUtil.create("div");
    div.style.cssText =
      "background:#fff;padding:10px 14px;border-radius:8px;font-size:12px;line-height:1.8;box-shadow:0 2px 8px rgba(0,0,0,0.15)";
    div.innerHTML = `
      <strong>Niveau d'urgence</strong><br>
      <span style="color:#a32d2d">●</span> Critique (&lt; 24h)<br>
      <span style="color:#ba7517">●</span> Urgent (&lt; 48h)<br>
      <span style="color:#1d9e75">●</span> Normal
    `;
    return div;
  };
  legend.addTo(map);
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
  grid.innerHTML = liste
    .map(
      (item) => `
    <div class="card">
      <span class="card-emoji">${item.emoji}</span>
      <div class="card-header">
        <span class="card-produit">${item.produit}</span>
        <span class="badge-urgence ${item.urgence}">${getBadgeLabel(item.urgence)}</span>
      </div>
      <p class="card-info">📦 ${item.quantite}</p>
      <p class="card-info">📍 ${item.localisation}, ${item.region}</p>
      <span class="card-ideal">👥 ${item.idealPour}</span>
      <p class="card-prix">${item.prix}</p>
      <div class="card-footer">
        <span class="card-vendeur">👤 ${item.vendeur}</span>
        <div class="card-actions">
          <button class="btn-ia"  onclick="ouvrirIA(${item.id})">🤖 IA</button>
          <button class="btn-contact" onclick="ouvrirModal(${item.id})">Contacter</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ---- FILTRES ---- */
function filtrer() {
  const s = (document.getElementById("search")?.value || "").toLowerCase();
  const r = document.getElementById("filtre-region")?.value || "";
  const u = document.getElementById("filtre-urgence")?.value || "";
  const c = document.getElementById("filtre-categorie")?.value || "";
  const tous = getTousSurplus();
  afficherSurplus(
    tous.filter(
      (i) =>
        (i.produit.toLowerCase().includes(s) ||
          i.region.toLowerCase().includes(s)) &&
        (!r || i.region === r) &&
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
    <p class="modal-info">📍 <strong>Lieu :</strong> ${item.localisation}, ${item.region}</p>
    <p class="modal-info">👥 <strong>Idéal pour :</strong> ${item.idealPour}</p>
    <p class="modal-info">📝 ${item.description}</p>
    <p class="modal-tel">📞 ${item.telephone}</p>
    <p class="modal-info" style="font-size:.85rem;color:#888">Via : ${item.contact}</p>
    <a class="btn-whatsapp" href="https://wa.me/${tel}" target="_blank"
       onclick="afficherSucces(${item.id})">
      💬 Contacter sur WhatsApp
    </a>
  `;
  document.getElementById("modal").style.display = "flex";
}

function fermerModal() {
  document.getElementById("modal").style.display = "none";
}

/* ---- MODAL SUCCÈS ---- */
function afficherSucces(id) {
  const item = getTousSurplus().find((s) => s.id === id);
  if (!item) return;
  const repas = (item.kgNum || 0) * 2;
  document.getElementById("success-impact").innerHTML = `
    <div class="success-stat">${item.quantite}</div>
    <div class="success-desc">de ${item.produit.toLowerCase()} potentiellement sauvés du gaspillage</div>
    <div class="success-stat">${repas > 0 ? repas + " repas" : "—"}</div>
    <div class="success-desc">préservés pour la communauté togolaise</div>
    <div class="success-stat">${(item.prixBrut || 0).toLocaleString("fr-FR")} FCFA</div>
    <div class="success-desc">de revenus protégés pour l'agriculteur</div>
  `;
  fermerModal();
  setTimeout(() => {
    document.getElementById("modal-success").style.display = "flex";
  }, 200);
}

function fermerModalSuccess() {
  document.getElementById("modal-success").style.display = "none";
}

/* ---- ANALYSE IA ---- */
function ouvrirIA(id) {
  const item = getTousSurplus().find((s) => s.id === id);
  if (!item) return;
  const analyse = analyserRisque(item);
  document.getElementById("ia-content").innerHTML = `
    <p class="ia-produit">Produit analysé : <strong>${item.emoji} ${item.produit}</strong></p>
    <div>Risque de perte estimé</div>
    <div class="ia-risque ${analyse.niveau}">${analyse.risque}</div>
    <div class="ia-reco">
      <strong>Action recommandée :</strong><br>${analyse.recommandation}
    </div>
  `;
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
      <button class="btn-repondre"
        onclick="window.open('https://wa.me/${d.telephone.replace(/\s|\+/g, "")}','_blank')">
        Répondre →
      </button>
    </div>
  `,
    )
    .join("");
}

/* ---- GRAPHIQUES CHART.JS ---- */
function initCharts() {
  if (!window.Chart) return;

  // Pertes
  new Chart(document.getElementById("chartPertes"), {
    type: "line",
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
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
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

  // Connexions
  new Chart(document.getElementById("chartConnexions"), {
    type: "bar",
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
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          ticks: { font: { size: 11 } },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
        x: { ticks: { font: { size: 11 } }, grid: { display: false } },
      },
    },
  });

  // Kg sauvés
  new Chart(document.getElementById("chartKg"), {
    type: "line",
    data: {
      labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
      datasets: [
        {
          label: "Kg sauvés",
          data: [40, 60, 95, 120, 155, 188, 210],
          borderColor: "#1d9e75",
          backgroundColor: "rgba(29,158,117,0.12)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          ticks: { callback: (v) => v + " kg", font: { size: 10 } },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
        x: { ticks: { font: { size: 10 } }, grid: { display: false } },
      },
    },
  });

  // Catégories (donut)
  const tous = getTousSurplus();
  const cats = {};
  tous.forEach((i) => {
    cats[i.categorie] = (cats[i.categorie] || 0) + 1;
  });
  const catLabels = {
    legumes: "Légumes",
    fruits: "Fruits",
    tubercules: "Tubercules",
    condiments: "Condiments",
    cereales: "Céréales",
  };
  new Chart(document.getElementById("chartCategories"), {
    type: "doughnut",
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
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: { font: { size: 11 }, boxWidth: 12, padding: 10 },
        },
      },
    },
  });
}

/* ---- NOTIFICATIONS SIMULÉES ---- */
const notifs = [
  {
    title: "🔴 Nouveau surplus critique",
    sub: "Tomates — 80 kg — Lomé",
    urgent: true,
  },
  { title: "🟠 Surplus publié", sub: "Gombos — 30 kg — Sokodé", urgent: false },
  {
    title: "✅ Connexion réussie",
    sub: "Acheteur contacté à Kara",
    urgent: false,
  },
  {
    title: "🔴 Urgence alimentaire",
    sub: "Manioc — 50 kg — Pagouda",
    urgent: true,
  },
  { title: "🟠 Mise en relation", sub: "Mangues — Atakpamé", urgent: false },
  { title: "✅ Surplus écoulé", sub: "120 kg de maïs vendus", urgent: false },
  {
    title: "📍 Nouvelle région",
    sub: "Kpalimé rejoint la plateforme",
    urgent: false,
  },
];
let notifIndex = 0;

function showNotif() {
  const n = notifs[notifIndex % notifs.length];
  notifIndex++;
  const el = document.getElementById("notif");
  const tt = document.getElementById("notif-title");
  const ts = document.getElementById("notif-sub");
  if (!el || !tt || !ts) return;
  tt.textContent = n.title;
  ts.textContent = n.sub;
  el.className = "notif-toast" + (n.urgent ? " urgent" : "");
  void el.offsetWidth;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3500);
}

/* ---- FORMULAIRE (add-product.html) ---- */
function initFormulaire() {
  const form = document.getElementById("form-surplus");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nouveauSurplus = {
      id: Date.now(),
      emoji: "📦",
      produit: document.getElementById("nom-produit").value,
      categorie: document.getElementById("categorie").value,
      quantite:
        document.getElementById("quantite").value +
        " " +
        document.getElementById("unite").value,
      kgNum: parseFloat(document.getElementById("quantite").value) || 0,
      prixBrut: parseFloat(document.getElementById("prix").value) || 0,
      prix:
        document.getElementById("prix").value +
        " FCFA/" +
        document.getElementById("prix-unite").value,
      region: document.getElementById("region").value,
      localisation:
        document.getElementById("localisation").value ||
        document.getElementById("region").value,
      urgence: document.getElementById("urgence").value,
      idealPour: document.getElementById("ideal-pour").value,
      description:
        document.getElementById("description").value || "Aucune description.",
      vendeur: document.getElementById("nom-vendeur").value,
      telephone: document.getElementById("telephone").value,
      contact: document.getElementById("moyen-contact").value,
      lat: null,
      lng: null,
    };

    const existants = JSON.parse(
      localStorage.getItem("agriflash-surplus") || "[]",
    );
    existants.push(nouveauSurplus);
    localStorage.setItem("agriflash-surplus", JSON.stringify(existants));

    form.style.display = "none";
    document.getElementById("success-msg").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---- INITIALISATION ---- */
document.addEventListener("DOMContentLoaded", function () {
  // Dashboard
  initDashboard();

  // Carte
  initMap();

  // Surplus
  afficherSurplus(getTousSurplus());

  // Demandes
  afficherDemandes();

  // Graphiques
  setTimeout(initCharts, 300);

  // Filtres
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

  // Modals
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

  // IA panel
  document.getElementById("ia-close")?.addEventListener("click", () => {
    document.getElementById("ia-panel").style.display = "none";
  });

  // Formulaire
  initFormulaire();

  // Notifications
  setTimeout(() => {
    showNotif();
    setInterval(showNotif, 5000);
  }, 2000);
});
