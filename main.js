const API_KEY =
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR";
  
const div = document.getElementById("Map")

require([
    'esri/config',
    'esri/Map',
    'esri/views/MapView'
], function (esriConfig, Map, MapView) {
    esriConfig.apikey = API_KEY;

    const map = new Map({
        basemap: "dark-gray-vector"
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027],
      zoom: 10,
      container: div,
    });
})