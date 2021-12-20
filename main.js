const API_KEY =
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR";

require([
    'esri/config',
    'esri/Map',
    'esri/views/MapView',
    'esri/widgets/BasemapToggle'
], function (esriConfig, Map, MapView, BasemapToggle) {
    esriConfig.apikey = API_KEY;

    const map = new Map({
        basemap: 'arcgis-light-gray'
    });

    const view = new MapView({
      map: map,
      center: [36.81667, -1.28333],
        container: "Map",
      zoom: 10
    });

    const baseMapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-streets-night"
    });

    view.ui.add(baseMapToggle, "bottom-right");
})