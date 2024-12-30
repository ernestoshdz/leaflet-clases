import Diccionario from "./diccionario.js";
import Popups from "./popups.js";
import Estilos from "./estilos.js";
import Modal from "./modal.js";

export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();
        this.lyr_filtro_pol = L.layerGroup();

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

        //console.log(data)

        //otra forma de filtrar capa
        let filter_data = [];

        /* if(filtro.edo != ""){
            this.getMunicipiosFiltrados("MX/", "municipios_cul_plagas", ".geojson", filtro, map);
        } */
        
        data.features.map(row => {

            //Municipios solo para 2 casos muy especificos (cuando edo y mun estan llenos y cultivo esta o no vacio )
            if (filtro.edo != "") {

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
                }
            }
        });

        //console.log(filter_data)

        //esta línea limpiar el layergroup antes de llenarlo
        this.lyr_filtro.clearLayers();

        if (filter_data.length == 0) {

            this.modal.crearModal(map,{
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

    //Filtra los municipios alfanúmericamente por estado
    getMunicipiosFiltrados = async (folder, nombre_archivo, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let mun_filtrados = [];

        document.getElementById("misResultados").innerHTML = `
        <tr>Resultados</tr>
        <tr>
            <th>Mapa</th>
            <th>Estado</th>
            <th>Municipio</th>
            <th>Cultivo</th>
        </tr>
        `;

        let filter_data = [];

        data.features.map(row => {

            if(filtro.edo != "" && filtro.cultivo == ""){
                if (row.properties.CVE_ENT == filtro.edo){
                    filter_data.push(row);
                }
            }
            if(filtro.edo != "" && filtro.cultivo != ""){
                if (row.properties.CVE_ENT == filtro.edo && row.properties.cve_cultiv == filtro.cultivo){
                    filter_data.push(row);
                }
            }
        });

        //console.log(filter_data)

        filter_data.map(row => {
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
                    <td><button type="button" id="btn_ver${row.properties.CVEGEO}" value="${row.properties.CVE_MUN}">Ver</button></td>
                    <td>${row.properties.Estado}</td>
                    <td>${row.properties.NOMGEO}</td>
                    <td>${test2}</td>
                </tr>`;

                //Evento onclick para cada boton existente
                document.querySelectorAll('button').forEach(button => {
                    button.onclick = function(){
                        //console.log(button.id)
                        let obj = {
                            edo:row.properties.CVE_ENT,
                            mun:button.value,
                            name: row.properties.NOMGEO
                        }

                        this.filtrarGeomMun("MX/", "municipios_cul_plagas", this.estilos.estilo_mun, this.popups.poligonosCultivosPlagasPop, ".geojson", obj, map)

                    }.bind(this);
                })
        });

    }

    //Filtra la geometria del municipio con base a la selección de los resultados alfanúmericos
    filtrarGeomMun = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        console.log(filtro)

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

        //obtener lat, long cuando la busqueda es por punto
        console.log(geojsonLayer)

        map.fitBounds(geojsonLayer.getBounds());

        this.lyr_filtro.addLayer(geojsonLayer);

        //esta no se necesita por que la búsqueda de edo la agrega primero
        //this.lyr_filtro.addTo(map);
    }

    

}