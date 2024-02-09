import Basemaps from "./new_modulos/basemaps.js";

export default class App{
    constructor(){
        //Inicializar propiedades
        this.basemaps = new Basemaps();
    }

    load(){
        console.log('La aplicación ha sido inicializada')

        const map = L.map('map').setView([38.548165, -98.833008], 4);

        this.basemaps.osm.addTo(map);
    }
}