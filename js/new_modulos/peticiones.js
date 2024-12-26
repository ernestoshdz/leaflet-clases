import Diccionario from "./diccionario.js";

export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();
        this.lyr_filtro_pol = L.layerGroup();

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

        //Diccionario de datos para Estados Cultivos, plagas, etc
        this.diccionario = new Diccionario();

        this.test = this.test.bind(this);
    }

    getCapas = async (lyr, folder, nombre_archivo, estilo, pop, ext, estilo_pts, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let geojsonLayer = L.geoJson(data, {
            style: estilo,
            onEachFeature: pop,
            pointToLayer: estilo_pts    //Estilo para puntos
        });

        lyr.addLayer(geojsonLayer);
    }

    getMunicipiosFiltrados = async (folder, nombre_archivo, ext, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let mun_filtrados = [];

        document.getElementById("misResultados").innerHTML = `
        <tr>
            <th>Estado</th>
            <th>Municipio</th>
            <th>Clave Cultivo</th>
            <th>Cultivo</th>
            <th>Mapa</th>
        </tr>
        `;

        data.features.map(row => {
            if (row.properties.CVE_ENT == filtro.edo) {

                let array_cultivos = row.properties.cve_cultiv.split(",");
                let names_cultivos = [];

                array_cultivos.forEach((i) => {

                    this.diccionario.misValoresCultivos.forEach((j) => {

                        if (i == j.cve_cultiv) {

                            let obj = {
                                cve_cultivo: j.cve_cultiv,
                                name: j.name,
                                cientifico: j.cientifico
                            }

                            names_cultivos.push(obj);
                        }
                    });
                });

                let test2 = '';

                names_cultivos.forEach((i) => {
                    test2 += `<li><i>${i.name}</i> ${i.cientifico}</li>`;
                });

                mun_filtrados.push(row.properties.NOMGEO);

                document.getElementById("misResultados").innerHTML += `
                <tr>
                    <td>${row.properties.Estado}</td>
                    <td>${row.properties.NOMGEO}</td>
                    <td>${row.properties.cve_cultiv}</td>
                    <td>${test2}</td>
                    <td><button type="button" id="btn_ver${row.properties.CVEGEO}">Ver</button></td>
                </tr>`;

                //Evento onclick para cada boton existente
                document.querySelectorAll('button').forEach(button => {
                    button.onclick = function(){
                        //console.log(button.id)

                        //corregir valores hardcodeados
                        let obj = {
                            edo:'01',
                            mun:'007'
                        }

                        this.test("MX/", "municipios_cul_plagas", null, null, ".geojson", obj, map)

                    }.bind(this);
                })
            }
        });

    }

    test = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //console.log(filtro)

        let filter_data = [];

        data.features.map(row => {
            if (row.properties.CVE_ENT == filtro.edo && row.properties.CVE_MUN == filtro.mun) {
                filter_data.push(row);
            }
        });

        this.lyr_filtro.clearLayers();

        let geojsonLayer = L.geoJson(filter_data, {
            style: estilo,
            onEachFeature: pop
        });

        //checar por que no funciona
        //map.fitBounds(geojsonLayer.getBounds());

        this.lyr_filtro.addLayer(geojsonLayer);

        //this.lyr_filtro.addTo(map);
    }

    getCapaFiltrada = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //console.log(data)

        //otra forma de filtrar capa
        let filter_data = [];

        this.getMunicipiosFiltrados("MX/", "municipios_cul_plagas", ".geojson", filtro);

        data.features.map(row => {

            //Municipios solo para 2 casos muy especificos (cuando edo y mun estan llenos y cultivo esta o no vacio )
            if (filtro.edo != "") {

                if (filtro.mun != "") {
                    if (filtro.cultivo != "") {
                        if (row.properties.CVE_ENT == filtro.edo && row.properties.CVEGEO == filtro.mun && row.properties.cve_cultiv == filtro.cultivo) {
                            filter_data.push(row);
                        }
                    } else {

                        if (row.properties.CVE_ENT == filtro.edo && row.properties.CVEGEO == filtro.mun) {
                            filter_data.push(row);
                        }
                    }
                } else {

                    if (filtro.cultivo == "") {
                        if (row.properties.CVE_ENT == filtro.edo) {
                            filter_data.push(row);
                        }
                    } else {
                        let names = row.properties.cve_cultiv.split(",");

                        if (row.properties.CVE_ENT == filtro.edo && (names.includes(filtro.cultivo))) {
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
                        if (row.properties.CVEGEO == filtro.mun) {
                            filter_data.push(row);
                        }
                    } else {
                        if(row.properties.CVEGEO == filtro.mun && row.properties.cve_cultiv == filtro.cultivo){
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

        //zoom a los limites (bounds) del geojsonLayer
        map.fitBounds(geojsonLayer.getBounds());

        this.lyr_filtro.addLayer(geojsonLayer);

        this.lyr_filtro.addTo(map);
    }

}