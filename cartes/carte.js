
      const apiKey = "AAPKa4e26061a8f04c00b03199c8100e29edGlbeG_yCQEf1dZpgEjp7mxK7ZieO94YMerHbV-5NA3gPUY0iex4v-5B6cgkPp3a5";


      const map = L.map("map", {
        zoomSnap : 0.25,
        minZoom: 4
      }).setView([46.9, 1.9], 6.25);


      const basemapLayers = {
  
        Navigation: L.esri.Vector.vectorBasemapLayer("ArcGIS:Navigation", { apiKey: apiKey }).addTo(map),
        Topographic: L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: apiKey }).addTo(map),
        "Gris clair": L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray", { apiKey: apiKey }).addTo(map),  
        "Relief": L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsRelief", { apiKey: apiKey }).addTo(map),  
        Territoire: L.esri.Vector.vectorBasemapLayer("ArcGIS:ChartedTerritory", { apiKey: apiKey }).addTo(map),
        Pinceau: L.esri.Vector.vectorBasemapLayer("ArcGIS:ColoredPencil", { apiKey: apiKey }).addTo(map),
        Nuit: L.esri.Vector.vectorBasemapLayer("ArcGIS:Nova", { apiKey: apiKey }).addTo(map),
        Siècle: L.esri.Vector.vectorBasemapLayer("ArcGIS:Midcentury", { apiKey: apiKey }).addTo(map),
        OSM: L.esri.Vector.vectorBasemapLayer("OSM:Standard", { apiKey: apiKey }).addTo(map),
        "OSM : Rues": L.esri.Vector.vectorBasemapLayer("OSM:Streets", { apiKey: apiKey }).addTo(map),
        "OSM": L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),
        Satellite: L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: apiKey }).addTo(map)
      };
      
      L.control.layers(basemapLayers, null, { collapsed: false }).addTo(map); 
