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
            this.filtrado(filtro, row, filter_data);
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
    filtrado(filtro, row, filter_data) {
        let names = row.properties.cve_cultiv.split(",");
        let names_plaga = row.properties.cve_plaga.split(",");

        let edo_test = (filtro.edo != "" && filtro.edo != undefined) ? row.properties.CVE_ENT == filtro.edo : 1 == 1;
        let cultivo_test = (filtro.cultivo != "" && filtro.cultivo != undefined) ? names.includes(filtro.cultivo) : 1 == 1;
        let plaga_test = (filtro.plaga != "" && filtro.plaga != undefined) ? names_plaga.includes(filtro.plaga) : 1 == 1;
        let cvegeo_test = (filtro.cvegeo != "" && filtro.cvegeo != undefined) ? row.properties.CVEGEO == filtro.cvegeo : 1 == 1;

        if (edo_test && cultivo_test && plaga_test && cvegeo_test) {
            filter_data.push(row);
        }

        return filter_data;
    }

    //Filtra los municipios alfanúmericamente por estado
    getMunicipiosFiltrados = async (folder, nombre_archivo, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let filter_data = [];

        data.features.map(row => {
            this.filtrado(filtro, row, filter_data);
        });

        //console.log(filtro)

        this.crearTablaContenido("misResultados", filter_data, map, true);
        //this.crearTablaContenido("misResultadosPrint", filter_data, map, false);
    }

    //Filtra la geometria del municipio con base a la selección de los resultados alfanúmericos
    filtrarGeomMun = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let filter_data = [];

        data.features.map(row => {
            this.filtrado(filtro, row, filter_data);
        });

        console.log(filtro)

        //console.log(filter_data);

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

    crearGaleria(cve_plaga) {

        let filtro_array_img = this.imagenes.array_img.filter((i) => i.cve == cve_plaga);

        let galeria = `<div id="galeria" class="container-fluid">
        
            <div class="jumbotron">
                <h3>${filtro_array_img[0].plaga}</h3>
            </div>`;

        filtro_array_img.forEach((i) => {

            galeria += `<div class="row gallery">`

            i.images.forEach((i) => {

                galeria += `
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <a href="img/Plagas/${i.folder}/${i.name_img}.${i.ext}" target="_blank">
                                <img class="img-fluid" src="img/Plagas/${i.folder}/${i.name_img}.${i.ext}" alt="${i.name_img}">
                            </a>
                        </div>`;
            });

            galeria += `</div><p>${filtro_array_img[0].descripcion}</p></div>`;

        });

        document.getElementById("miGaleria").innerHTML = galeria;

        this.modal.crearModal(map, {
            titulo: "",
            contenido: galeria,
            width: 600,
            height: 600,
            position: "top",
            modal: true,
        });

        baguetteBox.run(".gallery", {
            animation: "slideIn",
            //noScrollbars:true,
            //fullScreen: true,
            buttons: true,
            captions: function (element) {
                return element.getElementsByTagName('img')[0].alt;
            }
        });

        return galeria;

    }

    crearTablaContenido(ElementID, filter_data, map, mostrarBtn) {
        //limpia misResultados antes de llenar
        document.getElementById(ElementID).innerHTML = "";

        //console.log('test')

        let mun_filtrados = [];

        if (filter_data.length > 0) {
            document.getElementById(ElementID).innerHTML = `
            <div id="miConteo"></div>
            <tr>
                ${mostrarBtn == true ? "<th>Mapa</th>" : ""}
                <th>ID</th>
                <th>Estado</th>
                <th>Municipio</th>
                <th>Cultivo</th>
                <th>Plaga</th>
            </tr>`;

            //console.log(filter_data);

            document.getElementById("miConteo").innerHTML = `Se encontró ${filter_data.length} resultado(s)`;

            let cultivos_totales = [];

            // corregir names_cultivos y usar cultivos_totales
            filter_data.map(row => {
                let array_cultivos = row.properties.cve_cultiv.split(",");
                let array_plagas = row.properties.cve_plaga.split(",");

                let names_cultivos = [];
                let names_plagas = [];

                array_cultivos.forEach((i) => {
                    //console.log('cultivos')
                    this.diccionario.misValoresCultivos.forEach((j) => {

                        if (i == j.cve_cultiv) {

                            let obj = {
                                cve_cultivo: j.cve_cultiv,
                                name: j.name,
                                cientifico: j.cientifico
                            }

                            names_cultivos.push(obj);
                            cultivos_totales.push(obj);
                        }
                    });
                });

                //console.log(array_cultivos)

                array_plagas.forEach((i) => {
                    //console.log('plagas')
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

                let obj = {
                    cultivos: '',
                    plagas: ''
                };

                //console.log(names_cultivos)

                //Cada for each (cultivos y plagas) son separados por que cada uno puede tener diferente cantidad de elementos
                names_cultivos.forEach((i) => {
                    obj.cultivos += `<li><i>${i.name}</i> ${i.cientifico}</li>`;
                });

                names_plagas.forEach((i) => {
                    obj.plagas += `<li><i>${i.name}</i> ${i.autor}</li>`;
                });

                //console.log(obj.cultivos)

                mun_filtrados.push(row.properties.NOMGEO);

                document.getElementById(ElementID).innerHTML += `
                <tr>
                    ${mostrarBtn == true ? `<td><button type="button" id="btn_ver${row.properties.CVEGEO}" value="${row.properties.CVEGEO}">Ver</button></td>` : ""}
                    <td>${row.properties.CVEGEO}</td>
                    <td>${row.properties.Estado}</td>
                    <td>${row.properties.NOMGEO}</td>
                    <td>${obj.cultivos}</td>
                    <td>${obj.plagas}</td>
                </tr>`;

                //Evento onclick para cada boton existente
                document.querySelectorAll('button').forEach(button => {
                    button.onclick = function () {

                        let obj = {
                            cvegeo: button.value
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

            let miArrayCultivos = [];
            let arrayCultivosValores = [];
            let contadorCultivos = [];

            //console.log(cultivos_totales)

            let array = []
            cultivos_totales.forEach((i) => {
                array.push(i.cve_cultivo)
            })

            //console.log(array)

            cultivos_totales.forEach((i) => {
                //console.log(i)
                array.forEach((j) => {

                    //console.log(i.cve_cultivo)
                    //console.log(j)

                    if (i.cve_cultivo == j) {

                        let obj = {
                            cve_cultivo: i.cve_cultivo.length
                        }

                        //console.log(obj)

                        contadorCultivos.push(obj);
                    }
                });

            });

            console.log(contadorCultivos)

            this.modal.crearModal(map, {
                titulo: "Gráfico",
                icon: "fa fa-exclamation-triangle",
                width: 400,
                height: 80,
                modal: false,
                contenido: `<canvas id="GraficosModal"></canvas>`,
                position: "top",
                closeButton: true
            });

            // remover esta lógica después
            let chartData = {
                type: 'doughnut',
                data: {
                    labels: miArrayCultivos,
                    datasets: [
                        {
                            backgroundColor: ['red'],
                            label: 'Acquisitions by year',
                            data: [1,2],
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Positivos'
                    }
                }
            }
    
            //sirve para actualizar el gráfico y evitar sobreponer gráficos
            if (typeof graph === "undefined") {
                window.graph = new Chart(document.getElementById('GraficosModal'), chartData);
            } else {
                window.graph.config = chartData;
                window.graph.update();
            }
        }
    }
}