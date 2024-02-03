export default class Peticiones{
    constructor(){

    }

    getCapas = async(layer, folder, nombre_archivo, estilo, pop, req, res) => {
        const response = await fetch('geojson/'+ folder +'/'+ nombre_archivo + '.geojson');
        const data = await response.json();

        let geojsonLayer = L.geoJson(data,{
            style: estilo
        });

        layer.addLayer(geojsonLayer);
    }
}