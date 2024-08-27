import Basemaps from "./basemaps.js";
import Peticiones from "./peticiones.js";
import Estilos from "./estilos.js";
import Capas from "./capas.js";

export default class Controles {
    constructor() {
        this.basemaps = new Basemaps();
        this.peticiones = new Peticiones();
        this.estilos = new Estilos();
        this.capas = new Capas();

        this.sidebar = L.control.sidebar('sidebar', {
            position: 'left',
            closeButton: false

        });
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

    crearMostrarCapas(map) {
        L.easyButton({
            position: 'topright',
            states: [{
                stateName: 'add-markers',
                icon: '<img src="img/folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Mostrar Capas',
                onClick: function (control) {
                    /* muestra arbol de capas */
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'block';
                    control.state('remove-markers');
                }
            }, {
                stateName: 'remove-markers',
                icon: '<img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Salir',
                onClick: function (control) {
                    /* esconde arbol */
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';
                    control.state('add-markers');
                }
            }]
        }).addTo(map);

        
    }

    /* crearModal(map){
        let win =  L.control.window(map,{
            title:'Hello world!',
            maxWidth:400,
            maxheight: 100,
            modal: true,
            content: contenido,
            position: "top",
            //visible: false
        });

        win.show();
    } */

    crearAcercaDe(map) {
        L.easyButton({
            position: 'bottomright',
            states: [{
                stateName: 'add-markers',
                icon: '<img src="img/red_marker.svg" width="16" height="16">',
                title: 'Mostrar Capas',
                onClick: function(){
                    let contenido = `<img src="img/red_marker.svg" width="16" height="16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sollicitudin eros, ut imperdiet felis. 
                    Pellentesque pretium mi ante, et faucibus ipsum rutrum sed. Proin accumsan luctus consectetur. In sit amet purus id dui scelerisque ultricies non porta dui. Cras sit amet arcu non est efficitur molestie.
                    <br>
                    <img src="img/Ciudades/Mexicali.jpg" width="200" height="150">`;

                    let win =  L.control.window(map,{
                        title:'Hello world!',
                        maxWidth:400,
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

        this.peticiones.getCapas(lyr_mini, "USA/", "us-states_es6", this.estilos.st_pol, null, ".geojson")

        /* para capas adicionales */
        //this.peticiones.getCapas(lyr_mini, "MX/", "México_Estados", this.estilos.estilo_mx, null, ".geojson")

        this.basemaps.osm.addTo(lyr_mini);

        new L.Control.MiniMap(lyr_mini, {
            autoToggleDisplay: false,
            position: 'bottomright',
            zoomLevelFixed: 2,
            minimized: false,
        }).addTo(map);

    }

    /* crearSideBar(map){
        map.addControl(this.sidebar);
    } */

    mostrarSidebar(){
        return this.sidebar;
    }

    loadControles(map){
        this.crearCoordenadaas(map);
        this.crearMostrarCapas(map);
        this.crearMinimap(map);
        this.crearAcercaDe(map);
        //this.crearSideBar(map);
    }
}