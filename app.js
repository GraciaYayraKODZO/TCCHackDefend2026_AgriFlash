// DONNÉES DE DÉMONSTRATION — produits togolais réalistes
const surplusData = [
  {
    id: 1,
    emoji: "🍅",
    produit: "Tomates mûres",
    categorie: "legumes",
    quantite: "80 kg",
    prix: "450 FCFA/kg",
    region: "Lomé",
    localisation: "Marché d'Agoè",
    urgence: "critique",
    idealPour: "Restaurants / Cantines",
    description:
      "Tomates bien mûres, récoltées ce matin. Idéales pour restaurants — prix négociable pour grosse quantité.",
    vendeur: "Koffi Amégah",
    telephone: "+228 90 00 11 22",
    contact: "WhatsApp",
  },
  {
    id: 2,
    emoji: "🌿",
    produit: "Gombos frais",
    categorie: "legumes",
    quantite: "30 kg",
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
  },
  {
    id: 3,
    emoji: "🌶️",
    produit: "Piments frais",
    categorie: "condiments",
    quantite: "15 kg",
    prix: "600 FCFA/kg",
    region: "Atakpamé",
    localisation: "Marché central",
    urgence: "urgent",
    idealPour: "Restaurants / Revendeurs",
    description:
      "Piments locaux bien fermes. Variété forte, production sans traitement chimique.",
    vendeur: "Akua Mensah",
    telephone: "+228 93 44 55 66",
    contact: "WhatsApp",
  },
  {
    id: 4,
    emoji: "🌿",
    produit: "Manioc frais",
    categorie: "tubercules",
    quantite: "5 sacs (50 kg)",
    prix: "3 500 FCFA/sac",
    region: "Kara",
    localisation: "Village Pagouda",
    urgence: "urgent",
    idealPour: "Transformateurs / Marchés",
    description:
      "Manioc récolté ce matin — se dégrade rapidement. À transformer ou écouler dans 48h.",
    vendeur: "Afi Tchassim",
    telephone: "+228 91 23 45 67",
    contact: "Appel",
  },
  {
    id: 5,
    emoji: "🍌",
    produit: "Bananes plantains",
    categorie: "fruits",
    quantite: "15 régimes",
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
  },
  {
    id: 6,
    emoji: "🥔",
    produit: "Ignames",
    categorie: "tubercules",
    quantite: "3 sacs",
    prix: "8 000 FCFA/sac",
    region: "Kara",
    localisation: "Ferme Kozah",
    urgence: "normal",
    idealPour: "Marchés / Particuliers",
    description: "Ignames de qualité supérieure. Disponibles pour enlèvement.",
    vendeur: "Sadia Alassani",
    telephone: "+228 92 55 66 77",
    contact: "WhatsApp",
  },
  {
    id: 7,
    emoji: "🥭",
    produit: "Mangues",
    categorie: "fruits",
    quantite: "120 unités",
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
  },
  {
    id: 8,
    emoji: "🌽",
    produit: "Maïs séché",
    categorie: "cereales",
    quantite: "120 kg",
    prix: "200 FCFA/kg",
    region: "Atakpamé",
    localisation: "Marché central",
    urgence: "normal",
    idealPour: "Transformateurs / Marchés",
    description: "Maïs bien séché, prêt pour la transformation ou la revente.",
    vendeur: "Kofi Mensah",
    telephone: "+228 93 22 11 00",
    contact: "WhatsApp",
  },
];

// BADGE URGENCE
function getBadgeLabel(urgence) {
  if (urgence === "critique") return "🔴 Critique — < 24h";
  if (urgence === "urgent") return "🟠 Urgent — < 48h";
  return "🟢 Normal";
}

// AFFICHAGE DES CARTES
function afficherSurplus(liste) {
  const grid = document.getElementById("grid-surplus");
  if (!grid) return;

  if (liste.length === 0) {
    grid.innerHTML =
      '<p style="color:#888; text-align:center; padding:2rem; grid-column:1/-1;">Aucun surplus trouvé.</p>';
    return;
  }

  grid.innerHTML = liste
    .map(
      (item) => `
    <div class="card">
      <div class="card-emoji">${item.emoji}</div>
      <div class="card-header">
        <span class="card-produit">${item.produit}</span>
        <span class="badge-urgence ${item.urgence}">${getBadgeLabel(item.urgence)}</span>
      </div>
      <p class="card-info">📦 ${item.quantite}</p>
      <p class="card-info">📍 ${item.localisation}, ${item.region}</p>
      <p class="card-ideal">👥 ${item.idealPour}</p>
      <p class="card-prix">${item.prix}</p>
      <div class="card-footer">
        <span class="card-vendeur">👤 ${item.vendeur}</span>
        <button class="btn-contact" onclick="ouvrirModal(${item.id})">Contacter</button>
      </div>
    </div>
  `,
    )
    .join("");
}

// FILTRES
function filtrer() {
  const search = document.getElementById("search")?.value.toLowerCase() || "";
  const region = document.getElementById("filtre-region")?.value || "";
  const urgence = document.getElementById("filtre-urgence")?.value || "";
  const categorie = document.getElementById("filtre-categorie")?.value || "";

  const tous = JSON.parse(
    localStorage.getItem("agriflash-surplus") || "[]",
  ).concat(surplusData);

  const resultat = tous.filter((item) => {
    const matchSearch =
      item.produit.toLowerCase().includes(search) ||
      item.region.toLowerCase().includes(search);
    const matchRegion = region === "" || item.region === region;
    const matchUrgence = urgence === "" || item.urgence === urgence;
    const matchCategorie = categorie === "" || item.categorie === categorie;
    return matchSearch && matchRegion && matchUrgence && matchCategorie;
  });

  afficherSurplus(resultat);
}

function reinitialiserFiltres() {
  document.getElementById("search").value = "";
  document.getElementById("filtre-region").value = "";
  document.getElementById("filtre-urgence").value = "";
  document.getElementById("filtre-categorie").value = "";
  filtrer();
}

// MODAL CONTACT
function ouvrirModal(id) {
  const tous = JSON.parse(
    localStorage.getItem("agriflash-surplus") || "[]",
  ).concat(surplusData);
  const item = tous.find((s) => s.id === id);
  if (!item) return;

  document.getElementById("modal-title").textContent =
    item.emoji + " " + item.produit;
  document.getElementById("modal-body").innerHTML = `
    <p class="modal-info">📦 <strong>Quantité :</strong> ${item.quantite}</p>
    <p class="modal-info">💰 <strong>Prix :</strong> ${item.prix}</p>
    <p class="modal-info">📍 <strong>Lieu :</strong> ${item.localisation}, ${item.region}</p>
    <p class="modal-info">👥 <strong>Idéal pour :</strong> ${item.idealPour}</p>
    <p class="modal-info">📝 ${item.description}</p>
    <p class="modal-tel">📞 ${item.telephone}</p>
    <p class="modal-info" style="font-size:0.85rem; color:#888;">Contacter via : ${item.contact}</p>
    <a class="btn-whatsapp" href="https://wa.me/${item.telephone.replace(/\s|\+/g, "")}" target="_blank">
      💬 Contacter sur WhatsApp
    </a>
  `;

  document.getElementById("modal").style.display = "flex";
}

function fermerModal() {
  document.getElementById("modal").style.display = "none";
}

// FORMULAIRE PUBLICATION
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
    };

    const existants = JSON.parse(
      localStorage.getItem("agriflash-surplus") || "[]",
    );
    existants.push(nouveauSurplus);
    localStorage.setItem("agriflash-surplus", JSON.stringify(existants));

    form.style.display = "none";
    document.getElementById("success-msg").style.display = "block";
  });
}

// INITIALISATION
document.addEventListener("DOMContentLoaded", function () {
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

  afficherSurplus(
    JSON.parse(localStorage.getItem("agriflash-surplus") || "[]").concat(
      surplusData,
    ),
  );

  initFormulaire();
});
