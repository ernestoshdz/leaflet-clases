/* Clases modulares modernas */

import Capas from "./new_modulos/capas.js";
import Controles from "./new_modulos/controles.js";

export default class App {
    constructor() {
        this.capas = new Capas();
        this.controles = new Controles();
    }

    load() {
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map',{
            zoomControl: false
        }).setView([22.548165, -100.833008], 5);

        /* Control Sidebar */

        var sidebar = L.control.sidebar('sidebar', {
            position: 'left'
        });
        
        map.addControl(sidebar);
        
        sidebar.show();

        this.capas.load_capas(map);
        this.controles.loadControles(map,sidebar)
        this.capas.crearControl(map);

        

    }
}