import Diccionario from "./diccionario.js";
import Popups from "./popups.js";
import Estilos from "./estilos.js";
import Modal from "./modal.js";

export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();

        //Diccionario de datos para Estados Cultivos, plagas, etc
        this.diccionario = new Diccionario();
        this.popups = new Popups();
        this.estilos = new Estilos();
        this.modal = new Modal();

        this.filtrarGeomMun = this.filtrarGeomMun.bind(this);
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

    //Filtro por estado (geometrico)
    getCapaFiltrada = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //otra forma de filtrar capa
        let filter_data = [];

        data.features.map(row => {
            this.filtrado(filtro,row,filter_data);
        });

        //console.log(filter_data)

        //esta línea limpiar el layergroup antes de llenarlo
        this.lyr_filtro.clearLayers();

        if (filter_data.length == 0) {

            this.modal.crearModal(map, {
                titulo: "Advertencia",
                icon: "fa fa-exclamation-triangle",
                width: 400,
                height: 80,
                modal: true,
                contenido: "La búsqueda no generó resultados",
                position: "top",
                closeButton: true
            });

            //solo funciona una vez
            /* this.modal_window.prompt({
                callback:function(){},
                buttonOK: "Aceptar",
            }).show(); */
        } else {

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

    //Función general que filtra la información y devuelve un array de objetos (filter_data)
    filtrado(filtro,row,filter_data){
        let names = row.properties.cve_cultiv.split(",");
        let names_plaga = row.properties.cve_plaga.split(",");

        let edo_test = (filtro.edo != "" && filtro.edo != undefined) ? row.properties.CVE_ENT == filtro.edo : 1==1;
        let cultivo_test = (filtro.cultivo != "" && filtro.cultivo != undefined) ? names.includes(filtro.cultivo) : 1==1;
        let plaga_test = (filtro.plaga != "" && filtro.plaga != undefined) ? names_plaga.includes(filtro.plaga) : 1==1;
        let gid_test = (filtro.gid != "" && filtro.gid != undefined) ? row.properties.GID == filtro.gid : 1==1;
        
        if(edo_test && cultivo_test && plaga_test && gid_test){
            filter_data.push(row);
        }

        return filter_data;
    }

    //Filtra los municipios alfanúmericamente por estado
    getMunicipiosFiltrados = async (folder, nombre_archivo, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let mun_filtrados = [];
        let filter_data = [];

        data.features.map(row => {
            this.filtrado(filtro,row,filter_data);
        });

        //limpia misResultados antes de llenar
        document.getElementById("misResultados").innerHTML = "";

        if (filter_data.length > 0) {
            document.getElementById("misResultados").innerHTML = `
            <div id="miConteo"></div>
            <tr>
                <th>Mapa</th>
                <th>ID</th>
                <th>Estado</th>
                <th>Municipio</th>
                <th>Cultivo</th>
                <th>Plaga</th>
            </tr>
            `;

            //console.log(filter_data);

            document.getElementById("miConteo").innerHTML = `Se encontró ${filter_data.length} resultado(s)`;

            filter_data.map(row => {
                let array_cultivos = row.properties.cve_cultiv.split(",");
                let array_plagas = row.properties.cve_plaga.split(",");

                let names_cultivos = [];
                let names_plagas = [];

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

                array_plagas.forEach((i) => {
                    this.diccionario.misValoresPlagas.forEach((j) => {

                        if (i == j.cve_plaga) {

                            let obj = {
                                cve_plaga: j.cve_plaga,
                                name: j.name,
                                autor: j.autor
                            }

                            names_plagas.push(obj);
                        }
                    });
                });

                //quitar nombres test
                let test = '';
                let test2 = '';

                names_cultivos.forEach((i) => {
                    test += `<li><i>${i.name}</i> ${i.cientifico}</li>`;
                });

                names_plagas.forEach((i) => {
                    test2 += `<li><i>${i.name}</i> ${i.autor}</li>`;
                });

                mun_filtrados.push(row.properties.NOMGEO);

                document.getElementById("misResultados").innerHTML += `
                <tr>
                    <td><button type="button" id="btn_ver${row.properties.CVEGEO}" value="${row.properties.GID}">Ver</button></td>
                    <td>${row.properties.GID}</td>
                    <td>${row.properties.Estado}</td>
                    <td>${row.properties.NOMGEO}</td>
                    <td>${test}</td>
                    <td>${test2}</td>
                </tr>`;

                //Evento onclick para cada boton existente
                document.querySelectorAll('button').forEach(button => {
                    button.onclick = function () {

                        let obj = {
                            gid: button.value
                        }

                        let geom_value = document.getElementById("geom").value;

                        //filtrarGeomMun depende de la capa (punto o polígono)
                        if (geom_value == 1) {
                            this.filtrarGeomMun("MX/", "cc2", null, this.popups.cultivosPop, ".geojson", obj, map);
                        } else {
                            this.filtrarGeomMun("MX/", "municipios_cul_plagas", this.estilos.estilo_mun, this.popups.poligonosCultivosPlagasPop, ".geojson", obj, map);
                        }

                    }.bind(this);
                })
            });
        }

    }

    //Filtra la geometria del municipio con base a la selección de los resultados alfanúmericos
    filtrarGeomMun = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let filter_data = [];

        data.features.map(row => {
            this.filtrado(filtro,row,filter_data);
        });

        //console.log(filter_data)

        this.lyr_filtro.clearLayers();

        let geojsonLayer = L.geoJson(filter_data, {
            style: estilo,
            onEachFeature: pop
        });

        map.fitBounds(geojsonLayer.getBounds());

        this.lyr_filtro.addLayer(geojsonLayer);

        //esta no se necesita por que la búsqueda de edo la agrega primero
        //this.lyr_filtro.addTo(map);
    }

}