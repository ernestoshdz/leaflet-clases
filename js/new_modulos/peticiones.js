export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();
        //this.lyr_filtro = L.layerGroup();
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

    getCapaFiltrada = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //otra forma de filtrar capa
        /* let arry = [];

        data.features.map(row => {

            if (row.properties.ESTADO == filtro) {
                arry.push(row);
            }
        }); */

        //esta línea limpiar el layergroup antes de llenarlo
        this.lyr_filtro.clearLayers()

        let geojsonLayer = L.geoJson(data, {
            style: estilo,
            onEachFeature: pop,
            filter: function (feature) {

                // Estado con valor y cultivo vacio
                if ((feature.properties.c_edo == filtro.edo) && (filtro.cultivo == "" && filtro.edo != "")) {
                    return true;
                }

                //Estado sin valor y cultivo con valor
                if ((feature.properties.c_cultivo == filtro.cultivo) && (filtro.edo == "" && filtro.cultivo != "")) {
                    return true;
                }

                //Estado y cultivo con valor
                if (((feature.properties.c_edo == filtro.edo) && (feature.properties.c_cultivo == filtro.cultivo))) {
                    return true;
                }

                //Estado y cultivo vacios
                if (((filtro.edo === "") && (filtro.cultivo === ""))) {
                    return false;//Return true si necesitas todos los valores por default
                }
            }
        });

        this.lyr_filtro.addLayer(geojsonLayer);

        this.lyr_filtro.addTo(map);
    }

}