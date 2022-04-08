


//-------->  import de la carte OSM
var carte1 = L.map('macarte1').setView([46.9, 1.9], 6);

var tuiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(carte1);

// Un marqueur
var marker = L.marker([46.6835956, -0.4137665]).addTo(carte1);
// Un cercle d'infuence
var influence = L.circle([46.6835956, -0.4137665], 210000).addTo(carte1);
// Des lignes
var eskimon = L.polyline([
  [47.077766, 1],
  [47.077766, -0.643656],
  [46.912911, -0.643656],
  [46.912911, -0.219043],
  [46.912911, -0.643656],
  [46.778871, -0.643656],
  [46.778871, 1]
], {color: 'red'}).addTo(carte1)



//-------->  import d'une carte ArcGis
var carte2 = L.map('macarte2').setView([46.9, 1.9], 6);

const apiKey = "AAPKa4e26061a8f04c00b03199c8100e29edGlbeG_yCQEf1dZpgEjp7mxK7ZieO94YMerHbV-5NA3gPUY0iex4v-5B6cgkPp3a5";
const basemapEnum = "ArcGIS:Streets";
L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
      }).addTo(carte2);
	
//ajout du marker      
var marker = L.marker([46.6835956, -0.4137665]);
marker.addTo(carte2);



//-------->  import d'une carte vide
var carte3 = L.map("macarte3", {
  minZoom: 5
}).setView([46.9, 1.9], 6);
	
var marker = L.marker([46.6835956, -0.4137665]).addTo(carte3);
marker.bindPopup('Texte de la popup'); 
var mapopup = marker.getPopup();

var marker = L.marker([47.6835956, 1]).addTo(carte3).bindPopup('Une autre info bulle');




//-------->  import des régions
async function addGeoJson() {
  const response = await fetch("regions.json");
  const data = await response.json();
  L.geoJson(data, {
    style :{
      weight: 2,
      opacity: 1,
      fillColor: '#ffe595',
      color: 'white',
      fillOpacity: 1
    }
  }).addTo(carte2);

  L.geoJson(data, {
    style :{
      weight: 2,
      opacity: 1,
      fillColor: '#ffe595',
      color: 'white',
      fillOpacity: 1
    }
  }).addTo(carte3);
}

addGeoJson();

//-------->  Carte par defaut Leaflet : dans HTML

// coordonnées GPS de la souris


//-------->  Carte Arcgistet avec tous les fonds de carte

// const map = L.map("macarte5", {
//   minZoom: 2
// }).setView([46.9, 1.9], 6);

// const basemapLayers = {
  
//   Navigation: L.esri.Vector.vectorBasemapLayer("ArcGIS:Navigation", { apiKey: apiKey }).addTo(map),
//   Topographic: L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: apiKey }).addTo(map),
//   "Gris clair": L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray", { apiKey: apiKey }).addTo(map),  
//   "Relief": L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsRelief", { apiKey: apiKey }).addTo(map),  
//   Territoire: L.esri.Vector.vectorBasemapLayer("ArcGIS:ChartedTerritory", { apiKey: apiKey }).addTo(map),
//   Pinceau: L.esri.Vector.vectorBasemapLayer("ArcGIS:ColoredPencil", { apiKey: apiKey }).addTo(map),
//   Nuit: L.esri.Vector.vectorBasemapLayer("ArcGIS:Nova", { apiKey: apiKey }).addTo(map),
//   Siècle: L.esri.Vector.vectorBasemapLayer("ArcGIS:Midcentury", { apiKey: apiKey }).addTo(map),
//   OSM: L.esri.Vector.vectorBasemapLayer("OSM:Standard", { apiKey: apiKey }).addTo(map),
//   "OSM : Rues": L.esri.Vector.vectorBasemapLayer("OSM:Streets", { apiKey: apiKey }).addTo(map),
//   "OSM": L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),
//   Satellite: L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: apiKey }).addTo(map)
// };

// L.control.layers(basemapLayers, null, { collapsed: false }).addTo(map); 


  