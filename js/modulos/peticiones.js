import {
    estilo_eua,
    estiloLocalidades
} from './estilos.js';

import {
    popup,
    euaPopup,
    agsPopup
} from './popup.js'

const getCapaEUA = async (layer, req, res) => {
    const response = await fetch('geojson/us-states_es6.geojson');
    const data = await response.json();
    
    //console.log(data);
    let geojsonLayer = L.geoJson(data, {
        style: estilo_eua,
        onEachFeature: euaPopup
    });

    layer.addLayer(geojsonLayer);
}

const getAgsPts = async (layer, req, res) => {
    const response = await fetch('geojson/ags_puntos_es6.geojson');
    const data = await response.json();

    let geojsonLayer = L.geoJson(data, {
        onEachFeature: agsPopup,
        pointToLayer: estiloLocalidades,
    });

    layer.addLayer(geojsonLayer);

}

export {
    getCapaEUA,
    getAgsPts
}