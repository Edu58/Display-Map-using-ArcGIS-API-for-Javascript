const API_KEY = "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR";

require([
    'esri/config',
    'esri/Map',
    'esri/views/MapView'
],

    function (esriConfig, Map, MapView) {
        esriConfig.apikey = API_KEY;

        const map = new Map({
          basemap: "osm-standard-relief", //change this into the type of basemap you want
        });

        const view = new MapView({
          container: "MAP-AREA", //div id where map is loaded
          map: map,
          center: [-118.805, 34.027], //longitude and latitude
          zoom: 13, //zoom level
        });
    }
)
