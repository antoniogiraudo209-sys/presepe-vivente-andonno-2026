const lngAndonno = 7.429859619979775;
const latAndonno = 44.29575799300668;

let currentLang = 'it'; // Lingua iniziale

// Testi interfaccia tradotti per le 3 lingue (ITA, ENG, ADN)
const translations = {
  it: {
    headerTitle: "Presepe Vivente e Antichi Mestieri",
    headerEdition: "N Edizione",
    filterAll: "Tutte",
    filterInfo: "Punti informativi",
    filterCrafts: "Mestieri",
    filterFood: "Ristoro",
    filterParking: "Parcheggi",
    btnCenter: "Centra mappa",
    badgeEco: "Zero Carta Zero Emissioni 🍃",
    copyright: "© 2026 Presepe Vivente di Andonno. Tutti i diritti riservati."
  },
  en: {
    headerTitle: "Living Nativity & Ancient Crafts",
    headerEdition: "Nth Edition",
    filterAll: "All",
    filterInfo: "Info Points",
    filterCrafts: "Crafts",
    filterFood: "Refreshments",
    filterParking: "Parking",
    badgeEco: "Zero Paper Zero Emissions 🍃",
    btnCenter: "Center map",
    copyright: "© 2026 Andonno Living Nativity. All rights reserved."
  },
  adn: {
    headerTitle: "Presepe Vivent & Antics Mestiers",
    headerEdition: "Edisiun N",
    filterAll: "Tuti",
    filterInfo: "Punti Info",
    filterCrafts: "Mestiers",
    filterFood: "Ristoru",
    filterParking: "Parchegi",
    btnCenter: "Centr map",
    badgeEco: "Zero Carta Zero Emisiun 🍃",
    copyright: "© 2026 Presepe Vivente di Andonno. Tutti i diritti riservati."
  }
};

// Tappe complete con supporto per Italiano (it), Inglese (en) e Andonnese (adn)
const tappe = [
  {
    id: -1, numero: "P1", categoria: "Parcheggi",
    it: { categoriaLabel: "Parcheggio", titolo: "Parcheggio Gratuito", desc: "Area di sosta consigliata per i visitatori all'ingresso del paese." },
    en: { categoriaLabel: "Parking Area", titolo: "Parking Area", desc: "Recommended parking area for visitors at the entrance of the village." },
    adn: { categoriaLabel: "Parchegi", titolo: "Parchegi Gratuit", desc: "Posta per le machine all'intrada del paese." },
    lng: 7.431875, lat: 44.294028
  },
  {
    id: 0, numero: "I1", categoria: "informazioni",
    it: { categoriaLabel: "Punto Informativo", titolo: "Info Point & Accoglienza", desc: "Punto informativo generale, mappe del percorso ed eventuale assistenza per i visitatori." },
    en: { categoriaLabel: "Information Point", titolo: "Info Point", desc: "General information desk, trail maps, and visitor assistance." },
    adn: { categoriaLabel: "Puntu Info", titolo: "Info Point & Accoglienza", desc: "Posta d'infurmasiun per i visitatur." },
    lng: 7.429182593901264, lat: 44.29315120787086
  },
  {
    id: 1, numero: "1", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Panettiere", desc: "Cottura del pane nero nel forno a legna tradizionale." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Baker", desc: "Baking traditional black bread in the wood-fired oven." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Panater", desc: "Cultura del pan nel furn a legna." },
    lng: 7.427788, lat: 44.294058
  },
  {
    id: 2, numero: "2", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Mugnaio", desc: "Dimostrazione della macinazione dei cereali." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Miller", desc: "Demonstration of grain milling." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Mugar", desc: "Dimustrasiun da la masinadura di cereaj." },
    lng: 7.428756056546553, lat: 44.29437575839554
  },
  {
    id: 3, numero: "3", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Le Lavandaie", desc: "Lavaggio tradizionale dei panni nei lavatoi in pietra." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Washerwomen", desc: "Traditional laundry washing at the stone fountains." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "Le Lavandere", desc: "Lavasu tradizional di pann nei lavatoj in pera." },
    lng: 7.429027181206812, lat: 44.29465885779777
  },
  {
    id: 4, numero: "4", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Fabbro Ferraio", desc: "Lavorazione del ferro battuto sull'incudine." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Blacksmith", desc: "Wrought iron working on the anvil." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Fabr", desc: "Lavorasiun dal fer batù ans l'anvil." },
    lng: 7.428504095736673, lat: 44.295078131477894
  },
  {
    id: 5, numero: "5", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Falegname", desc: "Intaglio del legno e costruzione di attrezzi agricoli." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Carpenter", desc: "Wood carving and construction of farming tools." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Marangon", desc: "Intaj dal legn e custruziun d'atress." },
    lng: 7.427069113888029, lat: 44.29481703831684
  },
  {
    id: 6, numero: "6", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Calzolaio", desc: "Riparazione e cucitura artigianale di scarpe in cuoio." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Cobbler", desc: "Handmade repair and stitching of leather shoes." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Causeler", desc: "Riparasiun e cusidüra artigianala di scarpe." },
    lng: 7.42926525668118, lat: 44.29524176881453
  },
  {
    id: 7, numero: "7", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Tessitore", desc: "Filatura della lana e tessitura al telaio a mano." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Weaver", desc: "Wool spinning and weaving on a hand loom." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Tessidor", desc: "Filadura da la lana al telé a man." },
    lng: 7.429548366847031, lat: 44.295488246104114
  }, 
  {
    id: 8, numero: "8", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Cestaio", desc: "Intreccio di vimini per la creazione di cesti tradizionali." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Basket Maker", desc: "Wicker weaving to create traditional baskets." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Cester", desc: "Intres di vimin per fa i cesty." },
    lng: 7.429956605083799, lat: 44.29585308588595
  },
  {
    id: 9, numero: "9", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Lo Scultore di Pietra", desc: "Lavorazione e scalpellatura della pietra locale." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Stone Sculptor", desc: "Working and chiseling local stone." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Scultor da Pera", desc: "Lavorasiun e scalpelladüra da la pera local." },
    lng: 7.430381289625876, lat: 44.29616736321863
  }, 
  {
    id: 10, numero: "10", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Casaro", desc: "Produzione tradizionale dei formaggi tipici di montagna." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "The Cheesemaker", desc: "Traditional production of local mountain cheeses." },
    adn: { categoriaLabel: "Antics Mestiers", titolo: "El Casar", desc: "Produziun tradizunala di furmagg da muntagna." },
    lng: 7.431192285982328, lat: 44.29685680573532
  }
];

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  center: [lngAndonno, latAndonno],
  zoom: 18,
  pitch: 0,
  attributionControl: false
});

let activeMarkers = [];
let selectedTappaId = null;

function renderMarkers(filter = 'all') {
  activeMarkers.forEach(m => m.remove());
  activeMarkers = [];

  tappe.forEach(tappa => {
    if (filter !== 'all' && tappa.categoria !== filter) return;

    const el = document.createElement('div');
    el.className = 'map-pin';
    el.innerText = tappa.numero;

    el.addEventListener('click', () => {
      selectedTappaId = tappa.id;
      openSheet(tappa);
      map.flyTo({ center: [tappa.lng, tappa.lat], zoom: 18.5, speed: 0.8 });
    });

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([tappa.lng, tappa.lat])
      .addTo(map);

    activeMarkers.push(marker);
  });
}

function openSheet(tappa) {
  const data = tappa[currentLang] || tappa.it;
  document.getElementById('sheetCategory').innerText = data.categoriaLabel;
  document.getElementById('sheetTitle').innerText = `${tappa.numero}. ${data.titolo}`;
  document.getElementById('sheetDesc').innerText = data.desc;
  document.getElementById('infoSheet').classList.add('open');
}

function closeSheet() {
  selectedTappaId = null;
  document.getElementById('infoSheet').classList.remove('open');
}

function filterMap(cat, btn) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderMarkers(cat);
  closeSheet();
}

function centerOnAndonno() {
  map.flyTo({ center: [lngAndonno, latAndonno], zoom: 16.0, speed: 1 });
  closeSheet();
}

// Funzione per impostare direttamente la lingua scelta con i 3 pulsanti
function setLanguage(lang, btn) {
  currentLang = lang;

  // Aggiorna lo stile attivo dei 3 pulsanti
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Traduce i testi dell'header
  document.querySelector('[data-i18n="headerTitle"]').innerText = translations[currentLang].headerTitle;
  document.querySelector('[data-i18n="headerEdition"]').innerText = translations[currentLang].headerEdition;
  document.querySelector('[data-i18n="badgeEco"]').innerText = translations[currentLang].badgeEco;

  // Traduce il pulsante centra mappa
  document.getElementById('btnCenterText').innerText = translations[currentLang].btnCenter;

  // Traduce i vari filtri in modo sicuro
  const fAll = document.querySelector('[data-i18n="filterAll"]');
  if (fAll) fAll.innerText = translations[currentLang].filterAll;

  const fInfo = document.querySelector('[data-i18n="filterInfo"]');
  if (fInfo) fInfo.innerText = translations[currentLang].filterInfo;

  const fCrafts = document.querySelector('[data-i18n="filterCrafts"]');
  if (fCrafts) fCrafts.innerText = translations[currentLang].filterCrafts;

  const fFood = document.querySelector('[data-i18n="filterFood"]');
  if (fFood) fFood.innerText = translations[currentLang].filterFood;

  const fParking = document.querySelector('[data-i18n="filterParking"]');
  if (fParking) fParking.innerText = translations[currentLang].filterParking;

  const copy = document.querySelector('[data-i18n="copyright"]');
  if (copy) copy.innerText = translations[currentLang].copyright;

  // Se c'è una scheda aperta, la aggiorna subito nella nuova lingua
  if (selectedTappaId !== null) {
    const tappaCorrente = tappe.find(t => t.id === selectedTappaId);
    if (tappaCorrente) openSheet(tappaCorrente);
  }
}

map.on('load', () => {
  // Nasconde tutte le etichette di testo dei luoghi (compresa la scritta "Andonno")
  const layers = map.getStyle().layers;
  layers.forEach(layer => {
    if (layer.type === 'symbol' && (layer.id.includes('place') || layer.id.includes('label'))) {
      map.setLayoutProperty(layer.id, 'visibility', 'none');
    }
  });

  renderMarkers();
});