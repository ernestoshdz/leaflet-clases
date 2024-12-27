import Basemaps from "./basemaps.js";
import Peticiones from "./peticiones.js";
import Estilos from "./estilos.js";
import Capas from "./capas.js";
import Popups from "./popups.js";

export default class Controles {
    constructor() {
        this.basemaps = new Basemaps();
        this.peticiones = new Peticiones();
        this.estilos = new Estilos();
        this.capas = new Capas();
        this.popups = new Popups();
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

    //usar la clase modal.js
    crearModal(map, contenido) {
        let win = L.control.window(map, {
            title: 'Hello world!',
            maxWidth: 400,
            maxheight: 100,
            modal: true,
            content: contenido,
            position: "top",
            //visible: false
        });

        win.show();
    }

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

    mostrarSidebar() {
        return this.sidebar;
    }

    loadControles(map) {
        this.crearCoordenadaas(map);
        this.crearMinimap(map);
        this.crearAcercaDe(map);
        this.cargarFiltro(map);
        this.getSelectInputs("mx_edos", 'sin_geometria/', "edos_mx", ".geojson", "NOMGEO", "CVE_ENT", null);
        //this.getSelectInputs("mx_mun", 'sin_geometria/', "mun_mx", ".geojson", "NOMGEO", "CVEGEO", null);
        this.getSelectInputs("select_cultivos", 'sin_geometria/', "cultivos", ".geojson", "Cultivo", "cve_cultiv", null);

        //this.crearMostrarCapas(map);
        //this.crearSideBar(map);
    }

    getFiltros(map) {
        let v_geom = document.getElementById("geom").value;
        let v_edo = document.getElementById("mx_edos").value;
        let v_cultivo = document.getElementById("select_cultivos").value;

        let obj = {
            geom: v_geom,
            edo: v_edo,
            mun: "",
            cultivo: v_cultivo
        };

        //hacer esto mas limpio

        if (obj.geom == "1") {
            //Filtrado de Geometría
            this.peticiones.getCapaFiltrada("MX/", "cc2", null, this.popups.cultivosPop, ".geojson", obj, map);
        } else {

            this.peticiones.getCapaFiltrada("MX/", "estados_cul_plagas", null, this.popups.poligonosCultivosPlagasPop, ".geojson", obj, map);

        }
    }

    cargarFiltro(map) {

        let button_buscar = document.getElementById('btn_buscar');

        button_buscar.onclick = function () { this.getFiltros(map) }.bind(this);
    }

    getSelectInputs = async (id, folder, nombre_archivo, ext, name, value, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        data.features.forEach((i) => {
            //llenar selects de estados (archivo sin geometría)
            document.getElementById(id).add(new Option(i.properties[value]+" "+i.properties[name], i.properties[value]))
        });

    }

}