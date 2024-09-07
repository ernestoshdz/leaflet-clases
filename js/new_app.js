/* Clases modulares modernas, ./new_modulos */

import Capas from "./new_modulos/capas.js";
import Controles from "./new_modulos/controles.js";
import Sidebar from "./new_modulos/sidebar.js"; 

export default class App {
    constructor() {
        this.capas = new Capas();
        this.controles = new Controles();
        this.sidebar = new Sidebar();
    }

    load() {
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map',{
            zoomControl: false,
            attributionControl: false
        }).setView([22.548165, -106.833008], 5);

        this.capas.load_capas(map);
        this.controles.loadControles(map)
        this.capas.crearControl(map);

        this.sidebar.crearSideBar(map);

        //this.controles.crearModal(map);

    }
}