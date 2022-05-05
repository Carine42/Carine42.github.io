
      const apiKey = "AAPKa4e26061a8f04c00b03199c8100e29edGlbeG_yCQEf1dZpgEjp7mxK7ZieO94YMerHbV-5NA3gPUY0iex4v-5B6cgkPp3a5";


      const map = L.map("map", {
        zoomSnap : 0.25,
        minZoom: 3
      }).setView([46.9, 1.9], 6.25);


      const basemapLayers = {
  
        "ArcGIS:Navigation": L.esri.Vector.vectorBasemapLayer("ArcGIS:Navigation", { apiKey: apiKey }).addTo(map),
        "ArcGIS:Terrain:Base":  L.esri.Vector.vectorBasemapLayer("ArcGIS:Terrain:Base", { apiKey: apiKey }).addTo(map),
        "ArcGIS:Community":  L.esri.Vector.vectorBasemapLayer("ArcGIS:Community", { apiKey: apiKey }).addTo(map),
        "ArcGIS:Topographic": L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: apiKey }).addTo(map),
        "ArcGIS:LightGray": L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray", { apiKey: apiKey }).addTo(map),  
        "ArcGIS:StreetsRelief": L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsRelief", { apiKey: apiKey }).addTo(map),  
        "ArcGIS:ChartedTerritory": L.esri.Vector.vectorBasemapLayer("ArcGIS:ChartedTerritory", { apiKey: apiKey }).addTo(map),
        "ArcGIS:ColoredPencil": L.esri.Vector.vectorBasemapLayer("ArcGIS:ColoredPencil", { apiKey: apiKey }).addTo(map),
        "ArcGIS:Nova": L.esri.Vector.vectorBasemapLayer("ArcGIS:Nova", { apiKey: apiKey }).addTo(map),
        "ArcGIS:Midcentury": L.esri.Vector.vectorBasemapLayer("ArcGIS:Midcentury", { apiKey: apiKey }).addTo(map),
        "OSM:Standard": L.esri.Vector.vectorBasemapLayer("OSM:Standard", { apiKey: apiKey }).addTo(map),
        "OSM:Streets": L.esri.Vector.vectorBasemapLayer("OSM:Streets", { apiKey: apiKey }).addTo(map),
        "OSM": L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),
         Satellite: L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: apiKey }).addTo(map),
        "ArcGIS:LightGray:Base":  L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray:Base", { apiKey: apiKey }).addTo(map)
      };
      
      L.control.layers(basemapLayers, null, { collapsed: false }).addTo(map); 
