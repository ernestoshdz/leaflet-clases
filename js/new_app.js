import Controles from "./new_modulos/controles.js";

export default class App{
    constructor(){
        //Inicializar propiedades
        this.controles = new Controles();
    }

    load(){
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map').setView([38.548165, -98.833008], 4);

        this.controles.crearBotonCapas(map);

        this.controles.cargarArbol(map);

        this.controles.cargarCoordenadas(map);

        this.controles.cargarMiniMapa(map);
        
        //this.controles.getLayer("Estados Unidos").layer.addTo(map);

    }
}