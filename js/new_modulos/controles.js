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

    crearModal(map) {
        let win = L.control.window(map, {
            title: 'Hello world!',
            maxWidth: 400,
            maxheight: 100,
            modal: true,
            content: 'contenido',
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
            minimized: false,
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
        this.getSelectInputs("mx_mun", 'sin_geometria/', "mun_mx", ".geojson", "NOMGEO", "CVEGEO", null);

        //this.crearMostrarCapas(map);
        //this.crearSideBar(map);
    }

    test(map) {
        let v_edo = document.getElementById("mx_edos").value;
        let v_mun = document.getElementById("mx_mun").value;
        let v_cultivo = document.getElementById("layers").value;

        let obj = {
            edo: v_edo,
            mun: v_mun,
            cultivo: v_cultivo
        };

        //Filtrado de Geometría
        this.peticiones.getCapaFiltrada("MX/", "cc2", null, this.popups.popGenerico, ".geojson", obj, map);
    }

    cargarFiltro(map) {

        let test = document.querySelectorAll('#mx_edos');

        test.forEach((i) => {
            document.getElementById(i.id).onchange = (e) => {

                let v_edo = document.getElementById("mx_edos").value;
                let v_mun = document.getElementById("mx_mun").value;
                let v_cultivo = document.getElementById("layers").value;

                let obj = {
                    edo: v_edo,
                    mun: v_mun,
                    cultivo: v_cultivo
                };

                //Antes de hacer esto empezar a filtrar correctamente la geometría con edo, mun y cultivo
                this.getSelectInputs("mx_mun", 'sin_geometria/', "mun_mx", ".geojson", "NOMGEO", "CVEGEO", obj);
            };
        });

        let button_buscar = document.getElementById('btn_buscar');

        button_buscar.onclick = function () { this.test(map) }.bind(this);
    }

    getSelectInputs = async (id, folder, nombre_archivo, ext, name, value, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        if (filtro != null) {

            document.getElementById("mx_mun").innerHTML = null;
            
            //agregar opcion de todos por default
            document.getElementById(id).add(new Option("Todo", ""))
            
            data.features.forEach((i) => {
                //llenar select de municipios en función del estado seleccionado
                if (i.properties.CVE_ENT == filtro.edo) {
                    document.getElementById(id).add(new Option(i.properties[name], i.properties[value]))
                } else {
                    //llena los municipios cuando no hay estado seleccionado
                    if(filtro.edo == ""){
                        document.getElementById(id).add(new Option(i.properties[name], i.properties[value]))
                    }
                }

            });


        } else {

            data.features.forEach((i) => {
                //llenar selects de estados (archivo sin geometría)
                document.getElementById(id).add(new Option(i.properties[name], i.properties[value]))
            });
        }


    }

}