// DONNÉES DE DÉMONSTRATION
const surplusData = [
  {
    id: 1,
    produit: "Tomates fraîches",
    quantite: "80 kg",
    prix: "500 FCFA/kg",
    region: "Lomé",
    localisation: "Marché d'Agoè",
    urgence: "critique",
    description:
      "Tomates bien mûres, récoltées ce matin. À écouler absolument aujourd'hui.",
    vendeur: "Koffi Amégah",
    telephone: "+228 90 00 11 22",
    contact: "WhatsApp",
  },
  {
    id: 2,
    produit: "Ignames",
    quantite: "3 sacs",
    prix: "8 000 FCFA/sac",
    region: "Kara",
    localisation: "Village Pagouda",
    urgence: "urgent",
    description:
      "Ignames de qualité supérieure. Disponibles pour enlèvement dès aujourd'hui.",
    vendeur: "Afi Tchassim",
    telephone: "+228 91 23 45 67",
    contact: "Appel",
  },
  {
    id: 3,
    produit: "Maïs séché",
    quantite: "120 kg",
    prix: "200 FCFA/kg",
    region: "Atakpamé",
    localisation: "Marché central",
    urgence: "normal",
    description: "Maïs bien séché, prêt pour la transformation ou la revente.",
    vendeur: "Edem Kpakpo",
    telephone: "+228 93 44 55 66",
    contact: "WhatsApp",
  },
  {
    id: 4,
    produit: "Bananes plantains",
    quantite: "15 régimes",
    prix: "2 500 FCFA/régime",
    region: "Lomé",
    localisation: "Quartier Bè",
    urgence: "urgent",
    description:
      "Plantains à maturité idéale. Parfaits pour restaurants et cantines.",
    vendeur: "Yawa Agbeko",
    telephone: "+228 97 88 99 00",
    contact: "WhatsApp",
  },
  {
    id: 5,
    produit: "Gombos frais",
    quantite: "30 kg",
    prix: "300 FCFA/kg",
    region: "Sokodé",
    localisation: "Marché de Sokodé",
    urgence: "critique",
    description:
      "Gombos récoltés hier soir. Très frais, à récupérer rapidement.",
    vendeur: "Moussa Boukari",
    telephone: "+228 99 11 22 33",
    contact: "Appel",
  },
  {
    id: 6,
    produit: "Ananas",
    quantite: "50 unités",
    prix: "400 FCFA/unité",
    region: "Kara",
    localisation: "Ferme Kozah",
    urgence: "normal",
    description:
      "Ananas sucrés de la région de Kara. Production locale, sans traitement.",
    vendeur: "Sadia Alassani",
    telephone: "+228 92 55 66 77",
    contact: "WhatsApp",
  },
];

// AFFICHAGE DES CARTES
function getBadgeLabel(urgence) {
  if (urgence === "critique") return "🔴 Critique — < 24h";
  if (urgence === "urgent") return "🟠 Urgent — < 48h";
  return "🟢 Normal";
}

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
      <div class="card-header">
        <span class="card-produit">${item.produit}</span>
        <span class="badge-urgence ${item.urgence}">${getBadgeLabel(item.urgence)}</span>
      </div>
      <p class="card-info">📦 ${item.quantite}</p>
      <p class="card-info">📍 ${item.localisation}, ${item.region}</p>
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

  const tous = JSON.parse(
    localStorage.getItem("agriflash-surplus") || "[]",
  ).concat(surplusData);

  const resultat = tous.filter((item) => {
    const matchSearch =
      item.produit.toLowerCase().includes(search) ||
      item.region.toLowerCase().includes(search);
    const matchRegion = region === "" || item.region === region;
    const matchUrgence = urgence === "" || item.urgence === urgence;
    return matchSearch && matchRegion && matchUrgence;
  });

  afficherSurplus(resultat);
}

// MODAL CONTACT
function ouvrirModal(id) {
  const tous = JSON.parse(
    localStorage.getItem("agriflash-surplus") || "[]",
  ).concat(surplusData);
  const item = tous.find((s) => s.id === id);
  if (!item) return;

  document.getElementById("modal-title").textContent = item.produit;
  document.getElementById("modal-body").innerHTML = `
    <p class="modal-info">📦 <strong>Quantité :</strong> ${item.quantite}</p>
    <p class="modal-info">💰 <strong>Prix :</strong> ${item.prix}</p>
    <p class="modal-info">📍 <strong>Lieu :</strong> ${item.localisation}, ${item.region}</p>
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
      produit: document.getElementById("nom-produit").value,
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
  // Événements filtres
  document.getElementById("search")?.addEventListener("input", filtrer);
  document.getElementById("filtre-region")?.addEventListener("change", filtrer);
  document
    .getElementById("filtre-urgence")
    ?.addEventListener("change", filtrer);

  // Fermer modal
  document
    .getElementById("modal-close")
    ?.addEventListener("click", fermerModal);
  document.getElementById("modal")?.addEventListener("click", function (e) {
    if (e.target === this) fermerModal();
  });

  // Affichage initial
  afficherSurplus(
    JSON.parse(localStorage.getItem("agriflash-surplus") || "[]").concat(
      surplusData,
    ),
  );

  // Formulaire
  initFormulaire();
});
