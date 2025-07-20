import Basemaps from "./basemaps.js";
import Peticiones from "./peticiones.js";
import Estilos from "./estilos.js";
import Capas from "./capas.js";
import Popups from "./popups.js";
import Modal from "./modal.js";
import miGaleria from "./miGaleria.js";

export default class Controles {
    constructor() {
        this.basemaps = new Basemaps();
        this.peticiones = new Peticiones();
        this.estilos = new Estilos();
        this.capas = new Capas();
        this.popups = new Popups();
        this.modal = new Modal();
        this.miGaleria = new miGaleria();
    }

    crearCoordenadaas(map) {
        L.control.mouseCoordinate({
            gps: true,
            gpsLong: false,
            utm: true,
            utmref: false,
            position: 'bottomright'
        }).addTo(map);
    }

    /* crearMostrarCapas(map) {
        L.easyButton({
            position: 'topright',
            states: [{
                stateName: 'add-markers',
                icon: '<img src="img/folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Mostrar Capas',
                onClick: function (control) {
                    //muestra arbol de capas
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'block';
                    control.state('remove-markers');
                }
            }, {
                stateName: 'remove-markers',
                icon: '<img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Salir',
                onClick: function (control) {
                    //esconde arbol
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';
                    control.state('add-markers');
                }
            }]
        }).addTo(map);

    } */

    crearAcercaDe(map) {
        L.easyButton({
            position: 'bottomright',
            states: [{
                stateName: 'add-markers',
                icon: '<img src="img/red_marker.svg" width="16" height="16">',
                title: 'Mostrar Capas',
                onClick: function () {
                    let contenido = `<img src="img/red_marker.svg" width="16" height="16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sollicitudin eros, ut imperdiet felis. 
                    Pellentesque pretium mi ante, et faucibus ipsum rutrum sed. Proin accumsan luctus consectetur. In sit amet purus id dui scelerisque ultricies non porta dui. Cras sit amet arcu non est efficitur molestie.
                    <br>
                    <img src="img/Ciudades/Mexicali.jpg" width="200" height="150">`;

                    this.crearModal(map, contenido)
                }.bind(this)
            }]
        }).addTo(map);
    }

    crearMinimap(map) {

        let lyr_mini = L.layerGroup();

        //this.peticiones.getCapas(lyr_mini, "USA/", "us-states_es6", this.estilos.st_pol, null, ".geojson")

        /* para capas adicionales */
        this.peticiones.getCapas(lyr_mini, "MX/", "México_Estados", this.estilos.st_pol, null, ".geojson")

        this.basemaps.osm.addTo(lyr_mini);

        new L.Control.MiniMap(lyr_mini, {
            autoToggleDisplay: false,
            position: 'bottomright',
            zoomLevelFixed: 2,
            minimized: true,//false
        }).addTo(map);

    }

    myFunction(context, mode){
        return function() {
            context._printMode(mode);

            let selectText = document.getElementById("mx_edos");
            let index = parseInt(selectText.value) + 1;
            let edo_selected = selectText.options[index].text;
            document.getElementById("titulo_impresion").innerHTML = `Plagas Presentes en el Estado de ${edo_selected}`
        }
    }

    loadControles(map) {
        this.crearCoordenadaas(map);
        this.crearMinimap(map);
        this.crearAcercaDe(map);
        this.cargarFiltro(map);
        this.getSelectInputs("mx_edos", 'sin_geometria/', "edos_mx", ".geojson", "NOMGEO", "CVE_ENT", null);
        //this.getSelectInputs("mx_mun", 'sin_geometria/', "mun_mx", ".geojson", "NOMGEO", "CVEGEO", null);
        this.getSelectInputs("select_cultivos", 'sin_geometria/', "cultivos", ".geojson", "Cultivo", "cve_cultiv", null);
        this.getSelectInputs("select_plagas", 'sin_geometria/', "plagas", ".geojson", "Plaga", "cve_plaga", null);
        this.getSelectInputs("selectGallery", 'sin_geometria/', "plagas", ".geojson", "Plaga", "cve_plaga", null);
        
        L.control.browserPrint({
            position: 'topright',
            title: 'Imprimir ...',
            documentTitle: 'Mi Mapa',
            printModes: [
                /* L.BrowserPrint.Mode.Landscape("Tabloid", { title: "Tabloid VIEW" }),
                L.BrowserPrint.Mode.Landscape("A6", { title: "Landscape" }),
                L.BrowserPrint.Mode.Auto("A6", { title: "Auto" }),
                L.BrowserPrint.Mode.Auto("Letter", { title: "Carta" }),
                L.BrowserPrint.Mode.Custom("A6", { title: "Select area" }),
                L.BrowserPrint.Mode.Landscape("Tabloid",{title: "Tabloid VIEW",action: this.myFunction}), */
                L.BrowserPrint.Mode.Auto('A6', {
                    margin: { left: 5, top: 5, bottom:5, right:5 },
                    title: 'Header / Footer', header: {
                        enabled: true,
                        text: `
                        <div class="header">
                            <div class="logo"></div>
                            <div id="titulo_impresion" class="texto"></div>
                            <div class="logo_senasica"></div>
                        </div>
                        `,
                        size: "15mm",
                        overTheMap: false,
                    },
                    footer: {
                        enabled: true,
                        text: "<span>Created by Leaflet-Browser-Plugin</span>",
                        size: "10mm",
                        overTheMap: true,
                    },
                    action: this.myFunction
                })

            ]
        }).addTo(map);

        //this.crearMostrarCapas(map);

        //modal para el inicio de la aplicación
        /* this.modal.crearModal(map,{
            titulo: "Titulo",
            contenido: 'Este es el contenido <a target="_blank" href="https://www.w3schools.com">Visit W3Schools</a>',
            width: 600,
            height:600,
            position: "top",
            modal: true,
        }); */
    }

    getFiltros(map) {

        let obj = {
            geom: document.getElementById("geom").value,
            edo: document.getElementById("mx_edos").value,
            mun: "",
            cultivo: document.getElementById("select_cultivos").value,
            plaga: document.getElementById("select_plagas").value
        };

        //hacer esto mas limpio

        if (obj.geom == "1") {
            //Filtrado de Geometría
            this.peticiones.getCapaFiltrada("MX/", "cc2", null, this.popups.cultivosPop, ".geojson", obj, map);

            if (obj.edo != "") {
                this.peticiones.getMunicipiosFiltrados("MX/", "cc2", ".geojson", obj, map);
            }
        } else {

            if (obj.edo != "") {
                this.peticiones.getMunicipiosFiltrados("MX/", "municipios_cul_plagas", ".geojson", obj, map);
            }

            if (obj.edo != "" && obj.cultivo != "") {
                //capa de municipios
                this.peticiones.getCapaFiltrada("MX/", "municipios_cul_plagas", this.estilos.estilo_mun, this.popups.poligonosCultivosPlagasPop, ".geojson", obj, map);
            } else {
                //capa estados
                this.peticiones.getCapaFiltrada("MX/", "estados_cul_plagas", null, this.popups.poligonosCultivosPlagasPop, ".geojson", obj, map);
            }
        }
    }

    cargarFiltro(map) {

        let button_buscar = document.getElementById('btn_buscar');
        let btnGallery = document.getElementById('btnGallery');

        button_buscar.onclick = function () { this.getFiltros(map) }.bind(this);
        btnGallery.onclick = function () { this.getFiltroGallery() }.bind(this);
    }

    getFiltroGallery() {
        let cve_plaga = document.getElementById("selectGallery").value;

        this.miGaleria.crearGaleria(cve_plaga, false);
    }

    getSelectInputs = async (id, folder, nombre_archivo, ext, name, value, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        data.features.forEach((i) => {
            //llenar selects (archivo sin geometría)
            /* i.properties[value] + " " +  */ //obtener el valor del edo
            document.getElementById(id).add(new Option(i.properties[name], i.properties[value]))
        });

    }

}