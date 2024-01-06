import {
    estilo_eua
} from './estilos.js';

const getCapaEUA = async (layer, req, res) => {
    const response = await fetch('geojson/us-states_es6.geojson');
    const data = await response.json();
    
    //console.log(data);
    let geojsonLayer = L.geoJson(data, {
        style: estilo_eua
    });

    layer.addLayer(geojsonLayer);
}

const getAgsPts = async (layer, req, res) => {
    const response = await fetch('geojson/ags_puntos_es6.geojson');
    const data = await response.json();

    let geojsonLayer = L.geoJson(data, {

    });

    layer.addLayer(geojsonLayer);

}

export {
    getCapaEUA,
    getAgsPts
}