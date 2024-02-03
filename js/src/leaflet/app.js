import Basemaps from "./modules/basemaps.js";
import Peticiones from "./modules/peticiones.js";
import Layers from "./modules/layers.js";

export default class App{
    
    //Método que se ejecuta primero
    constructor(){
        //Crear los objetos
        this.basemaps = new Basemaps();
        this.peticiones = new Peticiones();
        this.layers = new Layers();
    }

    load(){
        console.log("La aplicación ha sido inicializada");

        //variable mapa
        const map = L.map('map').setView([38.548165, -98.833008], 4);

        //Array de objetos
        let capas = [
            {
                layer: this.layers.eua,
                folder: 'USA',
                nombre_archivo: 'us-states_es6',
                //estilo: st_eua_rango,
                //pop: euaPopup
            },
            {
                layer: this.layers.mx_edos,
                folder: 'MX',
                nombre_archivo: 'México_Estados',
                //estilo: st_mx_edo,
                //pop: popup
            }
        ];

        capas.forEach(capa => {
            this.peticiones.getCapas(capa.layer,capa.folder,capa.nombre_archivo);
        });

        this.basemaps.osm.addTo(map);
        this.layers.eua.addTo(map);
        this.layers.mx_edos.addTo(map);

    }
}