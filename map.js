// ANALYSE CARTOGRAPHIQUE

const departements = {
    "01": "Ain",
    "02": "Aisne",
    "03": "Allier",
    "04": "Alpes-de-Haute-Provence",
    "05": "Hautes-Alpes",
    "06": "Alpes-Maritimes",
    "07": "Ardèche",
    "08": "Ardennes",
    "09": "Ariège",
    "10": "Aube",
    "11": "Aude",
    "12": "Aveyron",
    "13": "Bouches-du-Rhône",
    "14": "Calvados",
    "15": "Cantal",
    "16": "Charente",
    "17": "Charente-Maritime",
    "18": "Cher",
    "19": "Corrèze",
    "21": "Côte-d'Or",
    "22": "Côtes-d'Armor",
    "23": "Creuse",
    "24": "Dordogne",
    "25": "Doubs",
    "26": "Drôme",
    "27": "Eure",
    "28": "Eure-et-Loir",
    "29": "Finistère",
    "30": "Gard",
    "31": "Haute-Garonne",
    "32": "Gers",
    "33": "Gironde",
    "34": "Hérault",
    "35": "Ille-et-Vilaine",
    "36": "Indre",
    "37": "Indre-et-Loire",
    "38": "Isère",
    "39": "Jura",
    "40": "Landes",
    "41": "Loir-et-Cher",
    "42": "Loire",
    "43": "Haute-Loire",
    "44": "Loire-Atlantique",
    "45": "Loiret",
    "46": "Lot",
    "47": "Lot-et-Garonne",
    "48": "Lozère",
    "49": "Maine-et-Loire",
    "50": "Manche",
    "51": "Marne",
    "52": "Haute-Marne",
    "53": "Mayenne",
    "54": "Meurthe-et-Moselle",
    "55": "Meuse",
    "56": "Morbihan",
    "57": "Moselle",
    "58": "Nièvre",
    "59": "Nord",
    "60": "Oise",
    "61": "Orne",
    "62": "Pas-de-Calais",
    "63": "Puy-de-Dôme",
    "64": "Pyrénées-Atlantiques",
    "65": "Hautes-Pyrénées",
    "66": "Pyrénées-Orientales",
    "67": "Bas-Rhin",
    "68": "Haut-Rhin",
    "69": "Rhône",
    "70": "Haute-Saône",
    "71": "Saône-et-Loire",
    "72": "Sarthe",
    "73": "Savoie",
    "74": "Haute-Savoie",
    "75": "Paris",
    "76": "Seine-Maritime",
    "77": "Seine-et-Marne",
    "78": "Yvelines",
    "79": "Deux-Sèvres",
    "80": "Somme",
    "81": "Tarn",
    "82": "Tarn-et-Garonne",
    "83": "Var",
    "84": "Vaucluse",
    "85": "Vendée",
    "86": "Vienne",
    "87": "Haute-Vienne",
    "88": "Vosges",
    "89": "Yonne",
    "90": "Territoire de Belfort",
    "91": "Essonne",
    "92": "Hauts-de-Seine",
    "93": "Seine-Saint-Denis",
    "94": "Val-de-Marne",
    "95": "Val-d'Oise",
};

const departementsRegions = {
    "01": "Auvergne-Rhône-Alpes",
    "02": "Hauts-de-France",
    "03": "Auvergne-Rhône-Alpes",
    "04": "Provence-Alpes-Côte d'Azur",
    "05": "Provence-Alpes-Côte d'Azur",
    "06": "Provence-Alpes-Côte d'Azur",
    "07": "Auvergne-Rhône-Alpes",
    "08": "Grand Est",
    "09": "Occitanie",
    "10": "Grand Est",
    "11": "Occitanie",
    "12": "Occitanie",
    "13": "Provence-Alpes-Côte d'Azur",
    "14": "Normandie",
    "15": "Auvergne-Rhône-Alpes",
    "16": "Nouvelle-Aquitaine",
    "17": "Nouvelle-Aquitaine",
    "18": "Centre-Val de Loire",
    "19": "Nouvelle-Aquitaine",
    "21": "Bourgogne-Franche-Comté",
    "22": "Bretagne",
    "23": "Nouvelle-Aquitaine",
    "24": "Nouvelle-Aquitaine",
    "25": "Bourgogne-Franche-Comté",
    "26": "Auvergne-Rhône-Alpes",
    "27": "Normandie",
    "28": "Centre-Val de Loire",
    "29": "Bretagne",
    "30": "Occitanie",
    "31": "Occitanie",
    "32": "Occitanie",
    "33": "Nouvelle-Aquitaine",
    "34": "Occitanie",
    "35": "Bretagne",
    "36": "Centre-Val de Loire",
    "37": "Centre-Val de Loire",
    "38": "Auvergne-Rhône-Alpes",
    "39": "Bourgogne-Franche-Comté",
    "40": "Nouvelle-Aquitaine",
    "41": "Centre-Val de Loire",
    "42": "Auvergne-Rhône-Alpes",
    "43": "Auvergne-Rhône-Alpes",
    "44": "Pays de la Loire",
    "45": "Centre-Val de Loire",
    "46": "Occitanie",
    "47": "Nouvelle-Aquitaine",
    "48": "Occitanie",
    "49": "Pays de la Loire",
    "50": "Normandie",
    "51": "Grand Est",
    "52": "Grand Est",
    "53": "Pays de la Loire",
    "54": "Grand Est",
    "55": "Grand Est",
    "56": "Bretagne",
    "57": "Grand Est",
    "58": "Bourgogne-Franche-Comté",
    "59": "Hauts-de-France",
    "60": "Hauts-de-France",
    "61": "Normandie",
    "62": "Hauts-de-France",
    "63": "Auvergne-Rhône-Alpes",
    "64": "Nouvelle-Aquitaine",
    "65": "Occitanie",
    "66": "Occitanie",
    "67": "Grand Est",
    "68": "Grand Est",
    "69": "Auvergne-Rhône-Alpes",
    "70": "Bourgogne-Franche-Comté",
    "71": "Bourgogne-Franche-Comté",
    "72": "Pays de la Loire",
    "73": "Auvergne-Rhône-Alpes",
    "74": "Auvergne-Rhône-Alpes",
    "75": "Île-de-France",
    "76": "Normandie",
    "77": "Île-de-France",
    "78": "Île-de-France",
    "79": "Nouvelle-Aquitaine",
    "80": "Hauts-de-France",
    "81": "Occitanie",
    "82": "Occitanie",
    "83": "Provence-Alpes-Côte d'Azur",
    "84": "Provence-Alpes-Côte d'Azur",
    "85": "Pays de la Loire",
    "86": "Nouvelle-Aquitaine",
    "87": "Nouvelle-Aquitaine",
    "88": "Grand Est",
    "89": "Bourgogne-Franche-Comté",
    "90": "Bourgogne-Franche-Comté",
    "91": "Île-de-France",
    "92": "Île-de-France",
    "93": "Île-de-France",
    "94": "Île-de-France",
    "95": "Île-de-France",
};


// initialisation de la carte
const map = L.map("map", {
    center: [46.9, 2],
    zoom: 6,
    minZoom: 6,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

let currentMode = "regions";
let currentyear = "2022";

document.getElementById("currentyear").textContent = currentyear;

async function chargerDonnees() {
    const response = await fetch("data-map.json");
    return response.json();
}


// extraire les années
async function annees() {
    const donnees = await chargerDonnees();

    // filtrer celles entre 1958 et 2022
    const anneesDisponibles = [...new Set(donnees.map(d => d.source.match(/\d+/)[0]))]
        .filter(annee => annee >= 1958 && annee <= 2022)
        .sort();
    const selectyear = document.getElementById("selectyear");

    anneesDisponibles.forEach(annee => {
        const option = document.createElement("option");
        option.value = annee;
        option.textContent = annee;
        selectyear.appendChild(option);
    });

    selectyear.addEventListener("change", (event) => {
        currentyear = event.target.value;
        document.getElementById("currentyear").textContent = currentyear;
        afficherCarte(currentyear, currentMode);
    });

    currentyear = anneesDisponibles[anneesDisponibles.length - 1];
    document.getElementById("currentyear").textContent = currentyear;
    selectyear.value = currentyear;
}


// calcul du taux d"abstention par département / région
function calculerAbstention(donnees, annee, mode) {
    const data = {};
    donnees.filter(d => d.source.includes(annee)).forEach(({ dep, inscrits, votants }) => {
        const key = mode === "regions" ? departementsRegions[dep] : dep;
        if (!data[key]) data[key] = { inscrits: 0, votants: 0 };
        data[key].inscrits += inscrits;
        data[key].votants += votants;
    });

    return Object.entries(data).reduce((acc, [key, { inscrits, votants }]) => {
        acc[key] = ((inscrits - votants) / inscrits) * 100;
        return acc;
    }, {});
}


// déterminer la couleur en fonction du taux d"abstention
function colorAbstention(taux) {
    if (taux < 20) return "#297cf8";
    if (taux < 30) return "#47bd47";
    if (taux < 40) return "#fadf72";
    if (taux < 50) return "#ee9235";
    return "#e23333";
}


// affiche la carte avec les données filtrées par année et mode (régions ou départements)
async function afficherCarte(annee, mode) {
    const donnees = await chargerDonnees();
    const tauxAbstention = calculerAbstention(donnees, annee, mode);
    
    // données géographiques de GRÉGOIRE DAVID sur GitHub
    const geojsonUrl = mode === "regions" ?
        "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson" :
        "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson";

    const response = await fetch(geojsonUrl);
    const geojsonData = await response.json();

    map.eachLayer(layer => {
        if (layer.options && !layer._url) map.removeLayer(layer);
    });

    L.geoJson(geojsonData, {
        style: feature => {
            const key = mode === "regions" ? feature.properties.nom : feature.properties.code;
            const taux = tauxAbstention[key] || 0;
            return {
                fillColor: colorAbstention(taux),
                fillOpacity: 0.7,
                weight: 1,
                color: "#000000"
            };
        },
        onEachFeature: (feature, layer) => {
            const key = mode === "regions" ? feature.properties.nom : feature.properties.code;
            const taux = tauxAbstention[key]?.toFixed(2) || "";
            const name = mode === "regions" ? feature.properties.nom : departements[key];
            layer.bindPopup(`<strong>${name}</strong><br>Le taux d"abstention en ${annee} était de ${taux}%`);
        }
    }).addTo(map);
}


// boutons pour choisir le mode
document.getElementById("btn-regions").addEventListener("click", () => {
    currentMode = "regions";
    afficherCarte(currentyear, currentMode);
});

document.getElementById("btn-departements").addEventListener("click", () => {
    currentMode = "departements";
    afficherCarte(currentyear, currentMode);
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".controls button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});



annees();
afficherCarte(currentyear, currentMode);


























