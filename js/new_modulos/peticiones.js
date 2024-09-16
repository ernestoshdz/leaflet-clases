export default class Peticiones {

    constructor() {

    }

    getCapas = async (lyr, folder, nombre_archivo, estilo, pop, ext, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let geojsonLayer = L.geoJson(data, {
            style: estilo,
            onEachFeature: pop,
        });

        lyr.addLayer(geojsonLayer);
    }

    getCapaFiltrada = async (lyr, folder, nombre_archivo, estilo, pop, ext, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //limpiar antes de filtrar

        let geojsonLayer = L.geoJson(data, {
            style: estilo,
            onEachFeature: pop,
            filter: function (feature) {

                if (feature.properties.ESTADO === filtro) {
                    return true
                }
            }
        });

        lyr.addLayer(geojsonLayer);

        //geojsonLayer.clearLayers()

    }

}