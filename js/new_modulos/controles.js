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
    }

    crearCoordenadaas(map) {
        L.control.mouseCoordinate({
            gps: false,
            gpsLong: false,
            utm: true,
            utmref: false,
            position: 'bottomleft'
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
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'block';
                    control.state('remove-markers');
                }
            }, {
                stateName: 'remove-markers',
                icon: '<img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Salir',
                onClick: function (control) {
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';
                    control.state('add-markers');
                }
            }]
        }).addTo(map);

        
    }

    crearMinimap(map) {

        let lyr_mini = L.layerGroup();

        this.peticiones.getCapas(lyr_mini, "", "USA/us-states_es6", this.estilos.st_pol, null, ".geojson")

        this.basemaps.osm.addTo(lyr_mini);

        new L.Control.MiniMap(lyr_mini, {
            autoToggleDisplay: false,
            position: 'bottomleft',
            zoomLevelFixed: 2,
        }).addTo(map);

    }

    loadControles(map){
        this.crearCoordenadaas(map);
        this.crearMostrarCapas(map);
        this.crearMinimap(map);
    }


}