const lngAndonno = 7.429859619979775;
const latAndonno = 44.29575799300668;

let currentLang = 'it'; // Lingua iniziale

// Testi interfaccia tradotti
const translations = {
  it: {
    headerTitle: "Presepe Vivente & Antichi Mestieri",
    headerEdition: "N Edizione",
    filterAll: "Tutte",
    filterInfo: "Punti informativi",
    filterCrafts: "Mestieri",
    filterFood: "Ristoro",
    filterParking: "Parcheggi",
    btnCenter: "Centra mappa",
    badgeEco: "Zero Carta Zero Emissioni 🍃",
    btnLang: "🇬🇧 ENG",
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
    btnLang: "🇮🇹 ITA",
    copyright: "© 2026 Andonno Living Nativity. All rights reserved."
  }
};

// Parcheggio, Info Point e 10 Scene di Antichi Mestieri
const tappe = [
  {
    id: -1, numero: "P1", categoria: "Parcheggi",
    it: { categoriaLabel: "Parcheggio", titolo: "Parcheggio Gratuito", desc: "Area di sosta consigliata per i visitatori all'ingresso del paese." },
    en: { categoriaLabel: "Parking Area", titolo: "Parking Area", desc: "Recommended parking area for visitors at the entrance of the village." },
    lng: 7.431875, lat: 44.294028
  },
  {
    id: 0, numero: "I1", categoria: "informazioni",
    it: { categoriaLabel: "Punto Informativo", titolo: "Info Point & Accoglienza", desc: "Punto informativo generale, mappe del percorso ed eventuale assistenza per i visitatori." },
    en: { categoriaLabel: "Information Point", titolo: "Info Point ", desc: "General information desk, trail maps, and visitor assistance." },
    lng: 7.429182593901264, lat: 44.29315120787086
  },
  {
    id: 1, numero: "1", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Panettiere", desc: "Cottura del pane nero nel forno a legna tradizionale." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Panettiere", desc: "Baking traditional black bread in the wood-fired oven." },
    lng: 7.427788, lat: 44.294058
  },
  {
    id: 2, numero: "2", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Mugnaio", desc: "Dimostrazione della macinazione dei cereali." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Mugnaio", desc: "Demonstration of grain milling." },
    lng: 7.428756056546553, lat: 44.29437575839554
  },
  {
    id: 3, numero: "3", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Le Lavandaie", desc: "Lavaggio tradizionale dei panni nei lavatoi in pietra." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Le Lavandaie", desc: "Traditional laundry washing at the stone fountains." },
    lng:  7.429027181206812, lat: 44.29465885779777
  },
  {
    id: 4, numero: "4", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Fabbro Ferraio", desc: "Lavorazione del ferro battuto sull'incudine." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Fabbro Ferraio", desc: "Wrought iron working on the anvil." },
    lng: 7.428504095736673, lat: 44.295078131477894
  },
  {
    id: 5, numero: "5", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Falegname", desc: "Intaglio del legno e costruzione di attrezzi agricoli." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Falegname", desc: "Wood carving and construction of farming tools." },
    lng: 7.427069113888029, lat: 44.29481703831684
  },
  {
    id: 6, numero: "6", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Calzolaio", desc: "Riparazione e cucitura artigianale di scarpe in cuoio." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Calzolaio", desc: "Handmade repair and stitching of leather shoes." },
    lng: 7.42926525668118, lat: 44.29524176881453
  },
  {
    id: 7, numero: "7", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Tessitore", desc: "Filatura della lana e tessitura al telaio a mano." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Tessitore", desc: "Wool spinning and weaving on a hand loom." },
    lng: 7.429548366847031, lat: 44.295488246104114
  }, 
  {
    id: 8, numero: "8", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Cestaio", desc: "Intreccio di vimini per la creazione di cesti tradizionali." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Cestaio", desc: "Wicker weaving to create traditional baskets." },
    lng: 7.429956605083799, lat: 44.29585308588595
  },
  {
    id: 9, numero: "9", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Lo Scultore di Pietra", desc: "Lavorazione e scalpellatura della pietra locale." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Lo Scultore di Pietra", desc: "Working and chiseling local stone." },
    lng: 7.430381289625876, lat: 44.29616736321863
  }, 
  {
    id: 10, numero: "10", categoria: "mestieri",
    it: { categoriaLabel: "Antichi Mestieri", titolo: "Il Casaro", desc: "Produzione tradizionale dei formaggi tipici di montagna." },
    en: { categoriaLabel: "Traditional Crafts", titolo: "Il Casaro", desc: "Traditional production of local mountain cheeses." },
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
  const data = tappa[currentLang];
  document.getElementById('sheetCategory').innerText = data.categoriaLabel;
  document.getElementById('sheetTitle').innerText = `${tappa.numero}. ${tappa.en.titolo}`;
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
  map.flyTo({ center: [lngAndonno, latAndonno], zoom: 17.5, speed: 1 });
  closeSheet();
}

// Funzione per cambiare lingua in tempo reale
function toggleLanguage() {
  currentLang = currentLang === 'it' ? 'en' : 'it';

  // Traduce i testi dell'header
  document.querySelector('[data-i18n="headerTitle"]').innerText = translations[currentLang].headerTitle;
  document.querySelector('[data-i18n="headerEdition"]').innerText = translations[currentLang].headerEdition;
  document.querySelector('[data-i18n="badgeEco"]').innerText = translations[currentLang].badgeEco;

  // Traduce i vari pulsanti e filtri
  document.getElementById('langBtn').innerText = translations[currentLang].btnLang;
  document.getElementById('btnCenterText').innerText = translations[currentLang].btnCenter;

  document.querySelector('[data-i18n="filterAll"]').innerText = translations[currentLang].filterAll;
  document.querySelector('[data-i18n="filterInfo"]').innerText = translations[currentLang].filterInfo;
  document.querySelector('[data-i18n="filterCrafts"]').innerText = translations[currentLang].filterCrafts;
  document.querySelector('[data-i18n="filterFood"]').innerText = translations[currentLang].filterFood;
  document.querySelector('[data-i18n="filterParking"]').innerText = translations[currentLang].filterParking;
  document.querySelector('[data-i18n="copyright"]').innerText = translations[currentLang].copyright;

  // Se c'è una scheda aperta, la aggiorna subito
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