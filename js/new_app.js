import Lista from "./new_modulos/lista.js";
import Controles from "./new_modulos/controles.js";

export default class App{
    constructor(){
        //Inicializar propiedades
        this.lista = new Lista();
        this.controles = new Controles();
    }

    load(){
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map').setView([38.548165, -98.833008], 4);

        this.controles.crearBotonCapas(map);

        this.controles.cargarArbol(map);

        document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';

        //hide control layers tree
      
        
    }
}