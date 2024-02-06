import Basemaps from "./modulos/basemaps.js";
import Layers from "./modulos/layers.js";
import Peticiones from "./modulos/peticiones.js";

export default class App{
    constructor(){

        //Inicializar propiedades
        this.basemaps = new Basemaps();
        this.layers = new Layers();
        this.peticiones = new Peticiones();
    }

    load(){
        console.log('La aplicación ha sido inicilizada');

        //Variable mapa
        const map = L.map('map').setView([38.548165, -98.833008], 4);

        this.layers.setLayers();

        this.layers.getLayers().forEach(item => {
            this.peticiones.getCapas(item.layer,item.folder,item.nombre_archivo,item.estilo,item.pop);
        });

        this.basemaps.osm.addTo(map);
        this.layers.eua.addTo(map);
        this.layers.mx_edos.addTo(map);
    }
}