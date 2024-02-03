import Basemaps from "./modulos/basemaps.js";
import Layers from "./modulos/layers.js";
import Peticiones from "./modulos/peticiones.js";
import Estilos from "./modulos/estilos.js";
//import Capas from "./modulos/capas.js";

export default class App{
    constructor(){
        this.basemaps = new Basemaps();
        this.layers = new Layers();
        this.peticiones = new Peticiones();
        this.estilos = new Estilos();
        //this.capas = new Capas();
    }

    load(){
        console.log('La aplicación ha sido inicilizada');

        //Variable mapa
        const map = L.map('map').setView([38.548165, -98.833008], 4);

        let capas = [
            {
                layer: this.layers.eua,
                folder: 'USA',
                nombre_archivo: 'us-states_es6'
                //estilo: this.estilos.estilo_eua(),
                //pop: euaPopup
            },
            {
                layer: this.layers.mx_edos,
                folder: 'MX',
                nombre_archivo: 'México_Estados'
                //estilo: this.estilos.estilo_mx(),
                //pop: popup
            }
        ];

        /* this.capas.capas.forEach(item => {
            console.log(typeof item.layer)
            this.peticiones.getCapas(item.layer,item.folder,item.nombre_archivo,"","");
        }); */

        capas.forEach(item => {
            this.peticiones.getCapas(item.layer,item.folder,item.nombre_archivo,"","");
        });

        this.basemaps.osm.addTo(map);
        this.layers.eua.addTo(map);
        this.layers.mx_edos.addTo(map);
    }
}