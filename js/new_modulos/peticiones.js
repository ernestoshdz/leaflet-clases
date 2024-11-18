export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();
        //this.lyr_filtro = L.layerGroup();

        this.modal_window = L.control.window(map, {
            title: 'Advertencia <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
            maxWidth: 400,
            maxheight: 80,
            modal: true,
            content: 'La búsqueda no generó resultados',
            position: "top",
            closeButton: true,
            //visible: false
        });
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

        //console.log(data)

        //otra forma de filtrar capa
        let filter_data = [];

        data.features.map(row => {

            if (filtro.edo != "") {

                if (filtro.mun != "") {
                    if (filtro.cultivo != "") {
                        if (row.properties.cve_edo == filtro.edo && row.properties.cve_mpio == filtro.mun && row.properties.cve_cultiv == filtro.cultivo) {
                            filter_data.push(row);
                        }
                    } else {

                        if (row.properties.cve_edo == filtro.edo && row.properties.cve_mpio == filtro.mun) {
                            filter_data.push(row);
                        }
                    }
                } else {
                    if (filtro.cultivo == "") {
                        if (row.properties.cve_edo == filtro.edo) {
                            filter_data.push(row);
                        }
                    } else {
                        if (row.properties.cve_edo == filtro.edo && (row.properties.cve_cultiv.includes(filtro.cultivo))) {
                            filter_data.push(row);
                        }
                    }
                }

            } else {
                if (filtro.mun == "") {
                    if (filtro.cultivo == "") {
                        filter_data.push(row);
                    } else {
                        if (filtro.geom == "1") {
                            if (row.properties.cve_cultiv == filtro.cultivo) {
                                filter_data.push(row);
                            }
                        } else {
 
                            let names = row.properties.cve_cultiv.split(",")

                            if (names.includes(filtro.cultivo)) {
                                filter_data.push(row);
                            }
                        }
                    }
                } else {
                    if (filtro.cultivo == "") {
                        if (row.properties.cve_mpio == filtro.mun) {
                            filter_data.push(row);
                        }
                    } else {
                        if(row.properties.cve_mpio == filtro.mun && row.properties.cve_cultiv == filtro.cultivo){
                            filter_data.push(row);
                        }
                    }
                }
            }
        });

        //console.log(filter_data)

        if (filter_data.length == 0) {

            this.modal_window.show();

            //solo funciona una vez
            /* this.modal_window.prompt({
                callback:function(){},
                buttonOK: "Aceptar",
            }).show(); */
        }

        //esta línea limpiar el layergroup antes de llenarlo
        this.lyr_filtro.clearLayers();

        let geojsonLayer = L.geoJson(filter_data, {
            style: estilo,
            onEachFeature: pop
        });

        this.lyr_filtro.addLayer(geojsonLayer);

        this.lyr_filtro.addTo(map);
    }

}