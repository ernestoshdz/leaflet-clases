import * as layers from './layers.js';

const getCapas = async (layer, folder, nombre_archivo, estilo, pop, req, res) => {
    const response = await fetch('geojson/'+ folder +'/'+ nombre_archivo + '.geojson');
    const data = await response.json();
    
    //console.log(data);
    let geojsonLayer = L.geoJson(data, {
        style: estilo,
        onEachFeature: pop
    });

    layers[layer].addLayer(geojsonLayer);
}

/* const getAgsPts = async (layer, req, res) => {
    const response = await fetch('geojson/ags_puntos_es6.geojson');
    const data = await response.json();

    let geojsonLayer = L.geoJson(data, {
        onEachFeature: agsPopup,
        pointToLayer: estiloLocalidades,
    });

    layer.addLayer(geojsonLayer);
} */

const getCapaPts = async (layer, folder, nombre_archivo, estilo, pop, req, res) => {
    const response = await fetch('geojson/'+nombre_archivo+'.geojson');
    const data = await response.json();

    let geojsonLayer = L.geoJson(data, {
        onEachFeature: pop,
        pointToLayer: estilo,
    });

    layers[layer].addLayer(geojsonLayer);
}

export {
    getCapas,
    getCapaPts
}